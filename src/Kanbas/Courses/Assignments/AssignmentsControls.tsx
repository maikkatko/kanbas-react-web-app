import { BsPlusLg } from "react-icons/bs";
import { FaPlus } from "react-icons/fa"
export default function AssignmentControls() {
  return (
    <div id="wd-assignments-controls" className="text-nowrap">
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
      <div className="me-1 float-end">
        <button id="wd-view-progress-btn" className="btn btn-lg btn-secondary"
          type="button">
          <BsPlusLg className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </button>
      </div>
      <div className="me-2 fs-4 float-start">
        <span>
          <i className="bi bi-search"></i>
        </span>
        <input type="text"
          name="assignment-search"
          className="form-control"
          placeholder="Search...">
        </input>
      </div>
    </div>
  );
}