export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
      </textarea>
      <br />
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="PROJECTS">PROJECTS</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="PERCENTAGE">Percentage</option>
              <option value="POINTS">Points</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="ONLINE">Online</option>
              <option value="GITHUB">GitHub</option>
            </select>
            <br />
            <br />
            <label>Online Entry Options</label>
            <br />
            <input type="checkbox"
              name="check-options" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label><br />
            <input type="checkbox"
              name="check-options" id="wd-website-url	" />
            <label htmlFor="wd-website-url">Website URL</label><br />
            <input type="checkbox"
              name="check-options" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label><br />
            <input type="checkbox"
              name="check-options" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label><br />
            <input type="checkbox"
              name="check-options" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Upload</label>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            <label>Assign To</label><br />
            <input id="wd-assign-to" defaultValue={"Everyone"} />
            <br /><br />
            <label htmlFor="wd-due-date">Due Date</label><br />
            <input type="date" id="wd-due-date" defaultValue={"2024-05-13"} />
            <br /><br />
            <td>
              <label htmlFor="wd-available-from">Available from</label><br />
              <input type="date" id="wd-available-from" defaultValue={"2024-05-06"} />
            </td>
            <td>
              <label htmlFor="wd-available-until">Until</label><br />
              <input type="date" id="wd-available-until" defaultValue={"2024-05-20"} /></td>
          </td>
        </tr>
      </table>
      <hr />
      <table>
        <tr>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td>
            <button id="wd-cancel" type="button">Cancel Everything</button>
          </td>
          <td>
            <button id="wd-save" type="button">Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export { }