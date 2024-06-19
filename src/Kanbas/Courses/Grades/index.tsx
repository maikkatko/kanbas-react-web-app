import { IoSearchOutline } from "react-icons/io5";
import GradesControls from "./GradesControls";
import { CiFilter, CiSearch } from "react-icons/ci";
import "./index.css";
import GradesSearch from "./GradesSearch";
import GradesFilter from "./GradesFilter";
import GradesTable from "./GradesTable";

export default function Grades() {
  return (
    <div id="wd-grades-screen">
      <GradesControls />
      <GradesSearch />
      <GradesFilter />
      <GradesTable />
    </div >
  )
}