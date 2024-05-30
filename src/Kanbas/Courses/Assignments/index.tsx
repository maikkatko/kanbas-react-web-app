import { BsGripVertical, BsPlusLg } from "react-icons/bs";
import AssignmentControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { MdOutlineAssignment } from "react-icons/md";
import SectionControlButtons from "./SectionControlButtons";
import "./styles.css";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentControls /><br /><br /><br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle"
              type="button" data-bs-toggle="collapse" data-bs-target="#wd-assignment-list">
              <b>ASSIGNMENTS</b>
            </button>
            <SectionControlButtons />
          </div>
          <div id="wd-assignment-list">
            <ul className="wd-assignment list-group rounded-0">
              <li className="wd-assignment list-group-item p-3 ps-1">
                <div className="row">
                  <div className="col"><br />
                    <BsGripVertical className="me-2 fs-3" />
                    <MdOutlineAssignment className="me-2 fs-4" />
                  </div>
                  <div className="col-9">
                    <span>
                      <b>A1</b>
                    </span>
                    <div>
                      <span id="wd-red-text">Multiple Modules</span> | <b>Not Available Until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100pts
                    </div>
                  </div>
                  <div className="col"><br />
                    <AssignmentControlButtons />
                  </div>
                </div>
              </li>
              <li className="wd-assignment list-group-item p-3 ps-1">
                <div className="row">
                  <div className="col"><br />
                    <BsGripVertical className="me-2 fs-3" />
                    <MdOutlineAssignment className="me-2 fs-4" />
                  </div>
                  <div className="col-9">
                    <span>
                      <b>A1</b>
                    </span>
                    <div>
                      <span id="wd-red-text">Multiple Modules</span> | <b>Not Available Until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100pts
                    </div>
                  </div>
                  <div className="col"><br />
                    <AssignmentControlButtons />
                  </div>
                </div>
              </li>
              <li className="wd-assignment list-group-item p-3 ps-1">
                <div className="row">
                  <div className="col"><br />
                    <BsGripVertical className="me-2 fs-3" />
                    <MdOutlineAssignment className="me-2 fs-4" />
                  </div>
                  <div className="col-9">
                    <span>
                      <b>A1</b>
                    </span>
                    <div>
                      <span id="wd-red-text">Multiple Modules</span> | <b>Not Available Until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100pts
                    </div>
                  </div>
                  <div className="col"><br />
                    <AssignmentControlButtons />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}