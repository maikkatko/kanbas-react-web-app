export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <div className="row">
        <div className="col-sm-12 mb-3">
          <label htmlFor="wd-name" className="form-label">
            Assignment Name
          </label>
          <input id="wd-name" className="form-control" defaultValue="A1" />
        </div>
        <div className="col-sm-12 mb-3">
          <div id="wd-description" className="form-control" contentEditable><br />
            The assignment is <span className="text-danger">available online</span><br /><br />
            Submit a link to the landing page of your Web application running on Netlify.<br /><br />

            The landing page should include the following:<br /><br />

            <ul>
              <li>Your full name and section</li>
              <li>Links to each of the lab assignments</li>
              <li>Link to the Kanbas application</li>
              <li>Links to all relevant source code repositories</li>
            </ul>

            The Kanbas application should include a link to navigate back to the landing page.
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div style={{ flex: '1', textAlign: 'right' }}>
          <label htmlFor="wd-points" className="col-sm-2 col-form-label">
            Points
          </label>
        </div>
        <div className="col-10" style={{ flex: '2' }}>
          <input type="text" className="form-control" id="wd-points" defaultValue={100} />
        </div>
      </div>
      <div className="row mb-3">
        <div style={{ flex: '1', textAlign: 'right' }}>
          <label htmlFor="wd-group" className="col-sm-10 col-form-label">
            Assignment Group
          </label>
        </div>
        <div className="col-sm-10" style={{ flex: '2' }}>
          <select id="wd-group" className="form-select">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="PROJECTS">PROJECTS</option>
            <option value="PROJECTS">QUIZZES</option>
            <option value="PROJECTS">EXAMS</option>
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <div style={{ flex: '1', textAlign: 'right' }}>
          <label htmlFor="wd-display-grade-as" className="col-sm-10 col-form-label">
            Display Grade as
          </label>
        </div>
        <div className="col-sm-10" style={{ flex: '2' }}>
          <select id="wd-display-grade-as" className="form-select">
            <option value="PERCENTAGE">Percentage</option>
            <option value="POINTS">Points</option>
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <div style={{ flex: '1', textAlign: 'right' }}>
          <label htmlFor="wd-submission-form" className="col-sm-10 col-form-label">
            Submission Type
          </label>
        </div>
        <div className="col-sm-10" style={{ flex: '2' }}>
          <div id="wd-submission-form">
            <div className="form-control">
              <select id="wd-submission-type" className="form-select">
                <option value="ONLINE">Online</option>
                <option value="GITHUB">GitHub</option>
              </select>
              <label htmlFor="wd-submission-check-list" className="fw-bold"><br />
                Online Entry Options
              </label>
              <div id="wd-submission-check-list" className="mb-3"><br />
                <fieldset>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox"
                      id="wd-text-entry-check" />
                    <label className="form-check-label" htmlFor="wd-text-entry-check">
                      Text Entry </label>
                  </div><br />
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox"
                      id="wd-website-url-check" />
                    <label className="form-check-label" htmlFor="wd-website-url-check">
                      Example checkbox </label>
                  </div><br />
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox"
                      id="wd-media-recordings-check" />
                    <label className="form-check-label" htmlFor="wd-media-recordings-check">
                      Media Recordings </label>
                  </div><br />
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox"
                      id="wd-student-annotation-check" />
                    <label className="form-check-label" htmlFor="wd-student-annotation-check">
                      Student Annotation </label>
                  </div><br />
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox"
                      id="wd-file-uploads-check" />
                    <label className="form-check-label" htmlFor="wd-file-uploads-check">
                      File Uploads</label>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
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
              <input type="date" className="form-control" defaultValue={"2024-05-13"} id="wd-due-date" />
              <br />
              <div className="row mb-4">
                <div className="col-4">
                  <label htmlFor="wd-available-from" className="fw-bold">
                    Available from
                  </label>
                  <input type="date" className="form-control"
                    defaultValue={"2024-05-06"} id="wd-available-from" />
                </div>
                <div className="col-4">
                  <label htmlFor="wd-available-until" className="fw-bold">
                    Until
                  </label>
                  <input type="date" className="form-control"
                    defaultValue={"2024-05-06"} id="wd-available-until" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div id="wd-assignments-controls">
        <button id="wd-save-button" className="btn btn-lg btn-danger me-1 float-end">
          Save
        </button>
        <button id="wd-cancel-button" className="btn btn-lg btn-secondary me-1 float-end"
          type="button">
          Cancel
        </button>
      </div>
    </div >
  );
}

export { }