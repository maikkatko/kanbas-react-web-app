export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="images/reactjs.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="images/mongodb.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/3675/Home">
              CS3675 MongoDB
            </a>
            <p className="wd-dashboard-course-title">
              Database Management
            </p>
            <a href="#/Kanbas/Courses/3675/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="images/algorithms.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/4574/Home">
              CS4574 Algorithms
            </a>
            <p className="wd-dashboard-course-title">
              Algorithms
            </p>
            <a href="#/Kanbas/Courses/4574/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="images/app.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/3545/Home">
              CS3545 Android
            </a>
            <p className="wd-dashboard-course-title">
              Mobile App Development
            </p>
            <a href="#/Kanbas/Courses/3545/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="images/network.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5485/Home">
              CS5485 Networks
            </a>
            <p className="wd-dashboard-course-title">
              Intro to Networks
            </p>
            <a href="#/Kanbas/Courses/5485/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="images/cloud.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/6435/Home">
              CS6435 Cloud
            </a>
            <p className="wd-dashboard-course-title">
              Intro to Cloud Computing
            </p>
            <a href="#/Kanbas/Courses/6435/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="images/oop.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/3745/Home">
              CS3745 OOP
            </a>
            <p className="wd-dashboard-course-title">
              Object Oriented Programming
            </p>
            <a href="#/Kanbas/Courses/3745/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="images/function.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/3245/Home">
              CS3245 Functions
            </a>
            <p className="wd-dashboard-course-title">
              Functional Programming
            </p>
            <a href="#/Kanbas/Courses/3245/Home"> Go </a>
          </div>
        </div>
      </div>
    </div>
  );
}