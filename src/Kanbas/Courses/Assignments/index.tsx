import { setAssignments, deleteAssignment }
  from "./reducer";

import { BsGripVertical, BsPlusLg } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { MdOutlineAssignment } from "react-icons/md";
import SectionControlButtons from "./SectionControlButtons";

import { useParams } from "react-router";
import "./index.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import * as client from "./client";

export default function Assignments() {
  const paramcid = useParams();
  const cid = paramcid.cid;
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    console.log(assignments)
    dispatch(setAssignments(assignments));
  };

  const removeAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div id="wd-assignments">
      <div id="wd-assignments-controls" className="text-nowrap">
        <Link key={`${cid}/New`} to={`${cid}/New`} id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end" >
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </Link>
        <div className="me-1 float-end">
          <button id="wd-view-progress-btn" className="btn btn-lg btn-light"
            type="button">
            <BsPlusLg className="position-relative me-2" style={{ bottom: "1px" }} />
            Group
          </button>
        </div>
        <div id="wd-assignment-search-bar">
          <div className="wd-pos-relative">
            <div className="wd-pos-absolute-10-10">
              <CiSearch size={30} />
            </div>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search...">
            </input>
          </div>
        </div>
      </div><br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <div className="wd-title p-3 ps-2 bg-light">
          <BsGripVertical className="me-2 fs-3" />
          <button id="wd-publish-all-btn" className="btn btn-lg btn-light dropdown-toggle"
            type="button" data-bs-toggle="collapse" data-bs-target="#wd-assignment-list">
            <b>ASSIGNMENTS</b>
          </button>
          <SectionControlButtons />
          <span className="me-2 rounded-pill wd-border-solid float-end">
            &nbsp; 40% of Total &nbsp;
          </span>
        </div>
        <div id="wd-assignment-list">
          <ul className="wd-assignment list-group rounded-0 rounded-0 border-5 border-start border-success">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li className="wd-assignment list-group-item p-3 ps-1">
                  <div className="row">
                    <div className="col"><br />
                      <BsGripVertical className="me-2 fs-3" />
                      <MdOutlineAssignment className="me-2 fs-4" />
                    </div>
                    <div className="col-9">
                      <Link key={`${assignment.course}/${assignment._id}`} to={`${assignment.course}/${assignment._id}`} className="wd-assignment-link ms-5"
                        style={{ color: "black", textDecoration: "none" }}>
                        <br />
                        <b>{assignment.title}</b>
                      </Link><br />
                      <div>
                        <span className="text-danger">Multiple Modules</span> | <b>Not Available Until</b> {assignment.avail_from_date} at 12:00am | <b>Due</b> {assignment.due_date} at 11:59pm | {assignment.points} pts
                      </div>
                    </div>
                    <div className="col"><br />
                      <AssignmentControlButtons
                        assignmentId={assignment._id}
                        deleteAssignment={(assignmentId) => {
                          removeAssignment(assignmentId);
                        }}
                      />
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </ul>
    </div>
  );
}