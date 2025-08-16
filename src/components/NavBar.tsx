import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/">Dashboard</Link>
        <Link to="/Uploads">Uploads</Link>
        <Link to="/Socials">Socials</Link>
        <Link to="/Livestreams">Livestreams</Link>
        <Link to="/Music">Music</Link>
        <Link to="/Contact">Contact Me</Link>
      </div>
    </nav>
  );
}

export default NavBar;
