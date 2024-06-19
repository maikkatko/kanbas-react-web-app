import React from "react";
import { User, Grade, Assignment } from "./types";

import { users, enrollments, grades, assignments } from "../../Database";
import { useParams } from "react-router-dom";

type ProcessedGrade = {
  studentName: string;
  grades: { [assignment: string]: string };
};

const processGrades = (
  users: User[],
  grades: Grade[],
  assignments: Assignment[],
  cid: string | undefined
): { processedGrades: ProcessedGrade[], assignmentTitles: { [id: string]: string } } => {
  const courseEnrollments = enrollments.filter(enrollment => enrollment.course === cid);
  const enrolledStudents = users.filter(user =>
    user.role === 'STUDENT' && courseEnrollments.some(enrollment => enrollment.user === user._id)
  );
  const students = users.filter(user => user.role === "STUDENT");
  const studentGrades: Record<string, Record<string, string>> = {};
  const courseAssignments = assignments.filter(assignment => assignment.course === cid);

  grades.forEach(grade => {
    const assignment = courseAssignments.find(assignment => assignment._id === grade.assignment);
    if (assignment) {
      if (!studentGrades[grade.student]) {
        studentGrades[grade.student] = {};
      }
      studentGrades[grade.student][grade.assignment] = grade.grade;
    }
  });

  const assignmentTitles = courseAssignments.reduce((acc, assignment) => {
    acc[assignment._id] = assignment.title;
    return acc;
  }, {} as Record<string, string>);

  const processedGrades = enrolledStudents.map(student => ({
    studentName: `${student.firstName} ${student.lastName}`,
    grades: studentGrades[student._id] || {}
  }));

  return { processedGrades, assignmentTitles };
};

const GradesTable: React.FC = () => {
  const { cid } = useParams();
  const { processedGrades, assignmentTitles } = processGrades(users, grades, assignments, cid);

  const assignmentIds = Object.keys(assignmentTitles);

  return (
    <div className="row">
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <tbody>
            <tr id="wd-grades-table-headers">
              <th className="align-middle">Student Names</th>
              {assignmentIds.map(assignmentId => (
                <td key={assignmentId} className="text-center align-middle">
                  {assignmentTitles[assignmentId]}<br />Out of 100
                </td>
              ))}
            </tr>
            {processedGrades.map((studentGrade, index) => (
              <tr key={index}>
                <td className="align-middle text-danger">{studentGrade.studentName}</td>
                {assignmentIds.map(assignmentId => (
                  <td key={assignmentId} className="text-center align-middle">
                    {studentGrade.grades[assignmentId] ? `${studentGrade.grades[assignmentId]}%` : "N/A"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GradesTable;