import { BsPlusLg } from "react-icons/bs";
import { FaPlus } from "react-icons/fa"
import { IoSearchOutline } from "react-icons/io5";
import 'font-awesome/css/font-awesome.min.css';
import { CiSearch } from "react-icons/ci";

export default function AssignmentControls() {
  return (
    <div id="wd-assignments-controls" className="text-nowrap">
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
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
    </div>
  );
}