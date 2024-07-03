import { useParams } from "react-router";

import * as db from "../../Database";
import { Link } from "react-router-dom";
import { Console } from "console";
import { useEffect, useState } from "react";
import { addAssignment, updateAssignment } from "./reducer";
import { useDispatch, useSelector } from "react-redux";

export default function AssignmentsEditor() {
  const params = useParams();
  const cid = params.cid;
  const aid = params.id;
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const assignmentDefaults = useSelector((state: any) => state.assignmentsReducer.assignmentDefaults);
  const dispatch = useDispatch();

  const initialAssignment = aid === 'New' ? { ...assignmentDefaults } : assignments.find((a: any) => a._id === aid);

  const [assignment, setAssignment] = useState(initialAssignment);

  const handleSave = () => {
    if (aid === "New") {
      // Call the create assignment function
      dispatch(addAssignment(assignment));
    } else {
      // Call the update assignment function
      dispatch(updateAssignment(assignment));
    }
  };

  return (
    <div id="wd-assignments-editor">
      <div className="row">
        <div className="col-sm-12 mb-3">
          <label htmlFor="wd-name" className="form-label">
            Assignment Name
          </label>
          <input id="wd-name" className="form-control" defaultValue={assignment.title} onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
        </div>
        <div className="col-sm-12 mb-3">
          <span id="wd-description" className="form-control">
            {assignment.description}
          </span>
        </div>
      </div>
      <div className="row mb-3">
        <div style={{ flex: '1', textAlign: 'right' }}>
          <label htmlFor="wd-points" className="col-sm-2 col-form-label">
            Points
          </label>
        </div>
        <div className="col-10" style={{ flex: '2' }}>
          <input type="text" className="form-control" id="wd-points" defaultValue={assignment.points} onChange={(e) => setAssignment({ ...assignment, points: e.target.value })} />
        </div>
      </div>
      <div className="row mb-3">
        <div style={{ flex: '1', textAlign: 'right' }}>
          <label htmlFor="wd-assign-to-form" className="col-10 col-form-label">
            Assign
          </label>
        </div>
        <div className="col-sm-10 mb-3" style={{ flex: '2' }}>
          <div id="wd-assign-to-form">
            <div className="form-control col-sm-10">
              <label htmlFor="wd-assign-to" className="fw-bold">Assign to</label>
              <input type="text" className="form-control" placeholder="Everyone" id="wd-assign-to" />
              <br />
              <label htmlFor="wd-due-date" className="fw-bold">Due</label>
              <input type="date" className="form-control" defaultValue={assignment.due_date_for_editor} id="wd-due-date" onChange={(e) => setAssignment({ ...assignment, due_date_for_editor: e.target.value })} />
              <br />
              <div className="row mb-4">
                <div className="col-4">
                  <label htmlFor="wd-available-from" className="fw-bold">
                    Available from
                  </label>
                  <input type="date" className="form-control"
                    defaultValue={assignment.avail_from_date_for_editor} id="wd-available-from" onChange={(e) => setAssignment({ ...assignment, avail_from_date_for_editor: e.target.value })} />
                </div>
                <div className="col-4">
                  <label htmlFor="wd-available-until" className="fw-bold">
                    Until
                  </label>
                  <input type="date" className="form-control"
                    defaultValue={assignment.avail_until_date_for_editor} id="wd-available-until" onChange={(e) => setAssignment({ ...assignment, avail_until_date_for_editor: e.target.value })} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row mb-4">
        <div id="wd-assignments-controls">
          <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
            <button id="wd-save-button" className="btn btn-lg btn-danger me-1 float-end" onClick={handleSave}>
              Save
            </button>
            <button id="wd-cancel-button" className="btn btn-lg btn-secondary me-1 float-end"
              type="button">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div >
  );
}