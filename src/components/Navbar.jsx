import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg justify-content-center">
      <NavLink
        exact
        className="navbar-link"
        activeStyle={{  fontWeight: "bold"  }}
        to="/"
      >
        <i className="bi bi-house-door"></i>
        <span className="nav-text">Home</span>
      </NavLink>
      <NavLink
        className="navbar-link"
        activeStyle={{ fontWeight: "bold"  }}
        to="/profile"
      >
        <i className="bi bi-person"></i>
        <span className="nav-text">Profile</span>
      </NavLink>
      <NavLink
        className="navbar-link"
        activeStyle={{ fontWeight: "bold" }}
        to="/my-pets"
      >
          <i className="bi bi-heart"></i>
        <span className="nav-text">My Pets</span>
      </NavLink>
      <NavLink
        className="navbar-link"
        activeStyle={{ fontWeight: "bold" }}
        to="/search"
      >
        <i className="bi bi-search"></i>
        <span className="nav-text">Search</span>
      </NavLink>
    </nav>
  );
};
export default Navbar;
