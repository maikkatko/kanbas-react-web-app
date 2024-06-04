import { CiSearch } from "react-icons/ci";

export default function GradesSearch() {
  return (
    <div className="row mb-3">
      <div className="col mt-2">
        <label htmlFor="wd-grades-student-search-bar" className="form-label">
          <b>Student Names</b></label>
        <div id="wd-grades-student-search-bar" className="wd-pos-relative">
          <div className="wd-pos-absolute-10-10">
            <CiSearch size={20} />
          </div>
          <input
            type="text"
            className="form-control mt-1"
            list="studentnameOptions"
            id="wd-grades-student-search-bar"
            placeholder="Search Students" />
          <datalist id="studentnameOptions">
            <option value="Jane Adams" />
            <option value="Christine Allen" />
            <option value="Samreen Ansasri" />
            <option value="Han Bao" />
            <option value="Mahi Say Srinivas Bobbili" />
            <option value="Siran Cao" />
          </datalist>
        </div>
      </div>
      <div className="col mt-2">
        <label htmlFor="wd-grades-assignment-search-bar" className="form-label">
          <b>Assignment Names</b></label>
        <div id="wd-grades-assignment-search-bar" className="wd-pos-relative">
          <div className="wd-pos-absolute-10-10">
            <CiSearch size={20} />
          </div>
          <input
            type="text"
            className="form-control mt-1"
            list="assignmentnameOptions"
            id="wd-grades-assignment-search-bar"
            placeholder="Search Assignments" />
          <datalist id="assignmentnameOptions">
            <option value="A1" />
            <option value="A2" />
            <option value="A3" />
            <option value="A4" />
          </datalist>
        </div>
      </div>
    </div>
  )
}
