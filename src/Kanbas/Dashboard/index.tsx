export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="images/reactjs.jpg" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS1234 React JS
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="images/postgresql.jpg" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/3675/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS3675 MongoDB
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Database Management
                </p>
                <a href="#/Kanbas/Courses/3675/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="images/algorithms.jpg" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/4574/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS4574 Algorithms
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Algorithms
                </p>
                <a href="#/Kanbas/Courses/4574/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="images/app.jpg" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/3545/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS3545 Android
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Mobile App Development
                </p>
                <a href="#/Kanbas/Courses/3545/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="images/network.jpg" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5485/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS5485 Networks
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Intro to Networks
                </p>
                <a href="#/Kanbas/Courses/5485/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="images/cloud.jpg" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/6435/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS6435 Cloud
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Intro to Cloud Computing
                </p>
                <a href="#/Kanbas/Courses/6435/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="images/oop.jpg" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/3745/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS3745 OOP
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Object Oriented Programming
                </p>
                <a href="#/Kanbas/Courses/3745/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <img src="images/function.jpg" />
              <div className="card-body">
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/3245/Home"
                  style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                  CS3245 Functions
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Functional Programming
                </p>
                <a href="#/Kanbas/Courses/3245/Home" className="btn btn-primary"> Go </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}