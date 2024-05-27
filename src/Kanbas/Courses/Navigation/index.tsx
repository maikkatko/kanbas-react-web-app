import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegCircleUser, FaJxl, FaPercent } from "react-icons/fa6";
export default function CoursesNavigation() {
  return (
    <div id="wd-kanbas-navigation" className="list-group rounded-0">
      <a id="wd-course-home-link"
        href="#/Kanbas/Courses/1234/Home"
        className="list-group-item bg-black border-0">
        <img src="/images/NEU.png" width="75px" /> </a>
      <a id="wd-account-link" href="#/Kanbas/Account"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <FaRegCircleUser className="fs-1 text text-white" /><br />
        Account </a>
      <a id="wd-dashboard-link" href="#/Kanbas/Dashboard"
        className="list-group-item text-center border-0
                   bg-white text-danger">
        <AiOutlineDashboard className="fs-1 text-danger" /><br />
        Dashboard </a>
      <a id="wd-course-link" href="#/Kanbas/Courses"
        className="list-group-item text-white
                   bg-black text-center border-0">
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Courses </a>
      <a id="wd-course-quizzes-link" href="#/Kanbas/Courses/1234/Assignments"
        className="list-group-item text-white
                  bg-black text-center border-0">
        <IoCalendarOutline className="fs-1 text-danger" /><br />
        Assignments</a>
      <a id="wd-course-assignments-link" href="#/Kanbas/Courses/1234/Quizzes"
        className="list-group-item text-white
                  bg-black text-center border-0">
        <FaJxl className="fs-1 text-danger" /><br />
        Quizzes</a>
      <a id="wd-course-grades-link" href="#/Kanbas/Courses/1234/Grades"
        className="list-group-item text-white
                  bg-black text-center border-0">
        <FaPercent className="fs-1 text-danger" /><br />
        Grades</a>
    </div>
  );
}
