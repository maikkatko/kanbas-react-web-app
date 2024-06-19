import { BsGripVertical, BsPlusLg } from "react-icons/bs";
import AssignmentControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { MdOutlineAssignment } from "react-icons/md";
import SectionControlButtons from "./SectionControlButtons";

import { useParams } from "react-router";
import * as db from "../../Database";
import "./index.css";
import { Link } from "react-router-dom";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  return (
    <div id="wd-assignments">
      <AssignmentControls /><br /><br />
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
                      <Link
                        to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                        className="wd-assignment-link link-dark fw-bold text-decoration-none"
                      >
                        {assignment.title}
                      </Link>
                      <div>
                        <span className="text-danger">Multiple Modules</span> | <b>Not Available Until</b> {assignment.avail_from_date} at 12:00am | <b>Due</b> {assignment.due_date} at 11:59pm | {assignment.points} pts
                      </div>
                    </div>
                    <div className="col"><br />
                      <AssignmentControlButtons />
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