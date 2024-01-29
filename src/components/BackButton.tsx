import "../styles/backbutton.css";
import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <Link to="/">
      <button className="back-button">↩ Episodes</button>
    </Link>
  );
}
