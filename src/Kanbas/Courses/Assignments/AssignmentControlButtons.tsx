import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { BsPlus } from "react-icons/bs";
export default function AssignmentControlButtons(
  { assignmentId, deleteAssignment }: {
    assignmentId: string; deleteAssignment: (assignmentId: string) => void;
  }
) {

  const handleDelete = () => {
    const isConfirmed = window.confirm("Are you sure you want to remove this assignment?");
    if (isConfirmed) {
      deleteAssignment(assignmentId);
    }
  };

  return (
    <div className="float-end">
      <div className="float-end">
        <FaTrash className="text-danger me-3 mb-1" onClick={handleDelete} />
        <GreenCheckmark />
      </div>
    </div>
  )
}
