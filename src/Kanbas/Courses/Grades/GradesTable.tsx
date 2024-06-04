export default function GradesTable() {
  return (
    <div className="row">
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <tbody>
            <tr id="wd-grades-table-headers">
              <th className="align-middle">
                Student Names
              </th>
              <td className="text-center align-middle">
                A1 SETUP<br />Out of 100
              </td>
              <td className="text-center align-middle">
                A2 HTML<br />Out of 100
              </td>
              <td className="text-center align-middle">
                A3 CSS<br />Out of 100
              </td>
              <td className="text-center align-middle">
                A4 Bootstrap<br />Out of 100
              </td>
            </tr>
            <tr>
              <td className="align-middle text-danger">
                Jane Adams
              </td>
              <td className="text-center align-middle">
                100%
              </td>
              <td className="text-center align-middle">
                96.67%
              </td>
              <td className="text-center align-middle">
                92.18%
              </td>
              <td className="text-center align-middle">
                66.22%
              </td>
            </tr>
            <tr>
              <td className="align-middle text-danger">
                Christine Allen
              </td>
              <td className="text-center align-middle">
                100%
              </td>
              <td className="text-center align-middle">
                100%
              </td>
              <td className="text-center align-middle">
                100%
              </td>
              <td className="text-center align-middle">
                100%
              </td>
            </tr>
            <tr>
              <td className="align-middle text-danger">
                Samreen Ansasri
              </td>
              <td className="text-center align-middle">
                100%
              </td>
              <td className="text-center align-middle">
                100%
              </td>
              <td className="text-center align-middle">
                100%
              </td>
              <td className="text-center align-middle">
                100%
              </td>
            </tr>
            <tr>
              <td className="align-middle text-danger">
                Han Bao
              </td>
              <td className="text-center align-middle">
                100%
              </td>
              <td className="text-center align-middle">
                100%
              </td>
              <td className="text-center align-middle">
                <div className="d-flex justify-content-center">
                  <input id="wd-grades-table-input" className="form-control p-0 m-0" defaultValue="88.03%" style={{ width: '80px', textAlign: 'center' }} />
                </div>
              </td>
              <td className="text-center align-middle">
                98.99%
              </td>
            </tr>
            <tr>
              <td className="align-middle text-danger">
                Mahi Say Srinivas Bobbili
              </td>
              <td className="text-center align-middle">
                100%
              </td>
              <td className="text-center align-middle">
                96.67%
              </td>
              <td className="text-center align-middle">
                98.37%
              </td>
              <td className="text-center align-middle">
                100%
              </td>
            </tr>
            <tr>
              <td className="align-middle text-danger">
                Siran Cao
              </td>
              <td className="text-center align-middle">
                100%
              </td>
              <td className="text-center align-middle">
                100%
              </td>
              <td className="text-center align-middle">
                100%
              </td>
              <td className="text-center align-middle">
                100%

              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}