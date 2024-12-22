import { NavLink } from "react-router-dom";
import "./index.css";

function Navbar() {
  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link"
      >
        Movies/Series News
      </NavLink>
      <NavLink
        to="/movies"
        className="nav-link"
      >
        Movies
      </NavLink>
      <NavLink
        to="/latest movies"
        className="nav-link"
      >
        Latest Movies
      </NavLink>
      <NavLink
        to="/top movies"
        className="nav-link"
      >
        Top Movies
      </NavLink>
      <NavLink
        to="/series"
        className="nav-link"
      >
        Latest Series
      </NavLink>
      <NavLink
        to="/Top Series"
        className="nav-link"
      >
        Top Series
      </NavLink>
      <NavLink
        to="/Animations"
        className="nav-link"
      >
        Animations
      </NavLink>
      <NavLink
        to="/others"
        className="nav-link"
      >
        others
      </NavLink>
    </nav>
  );
};

export default Navbar;