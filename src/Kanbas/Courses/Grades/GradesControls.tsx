
import 'font-awesome/css/font-awesome.min.css';
import { CiExport, CiImport, CiSettings } from "react-icons/ci";

export default function GradesControls() {
  return (
    <div className="row">
      <div className="col">
        <div id="wd-grades-controls" className="text-nowrap">
          <button id="wd-settings-btn" className="btn btn-lg btn-light float-end">
            <CiSettings className="position-relative" style={{ bottom: "1px", fontSize: '25px' }} /></button>
          <div className="dropdown d-inline me-1 float-end">
            <button id="wd-export-btn" className="btn btn-lg btn-light me-1 dropdown-toggle" data-bs-toggle="dropdown">
              <CiExport className="position-relative me-2" style={{ bottom: "1px", fontSize: '25px' }} />
              Export
            </button>
            <ul className="dropdown-menu">
              <li>
                <a id="wd-export-grades-as-pdf-btn" className="dropdown-item">
                  Export as PDF
                </a>
                <a id="wd-export-grades-as-csv-btn" className="dropdown-item">
                  Export as CSV
                </a>
              </li>
            </ul>
          </div>
          <div className="me-1 float-end">
            <button id="wd-import-btn" className="btn btn-lg btn-light me-1"
              type="button">
              <CiImport className="position-relative me-2" style={{
                bottom: "1px", fontSize: '25px'
              }} />
              Import
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}