import { CiFilter } from "react-icons/ci";

export default function GradesControls() {
  return (
    <div className="row mb-3">
      <div className="col">
        <div className="me-1 float-start">
          <button id="wd-import-btn" className="btn btn-lg btn-light me-1"
            type="button">
            <CiFilter className="position-relative me-2" style={{
              bottom: "1px", fontSize: '25px'
            }} />
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  )
}

