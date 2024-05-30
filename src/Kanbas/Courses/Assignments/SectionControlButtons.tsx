import { BsPlusLg } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";

export default function SectionControlButtons() {
  return (
    <div className="float-end">
      <BsPlusLg className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  )
}