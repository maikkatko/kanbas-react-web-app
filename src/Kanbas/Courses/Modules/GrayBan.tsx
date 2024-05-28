import { FaBan } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
export default function GrayBan() {
  return (
    <span className="me-1 position-relative">
      <FaBan style={{ top: "2px" }}
        className="text-muted me-1 position-absolute fs-5" />
      <FaCircle className="text-white me-1 fs-6" />
    </span>
  );
}
