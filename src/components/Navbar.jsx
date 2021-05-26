import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getUser } from "../api/api";
import { useState } from "react";

const Navbar = () => {
  const auth = useAuth();
  const [userId, setUserId] = useState()
  getUser(auth.token).then((data) => {
    const userId = data.user.id;
    setUserId(userId)
  });
  return (
    <nav className="navbar navbar-expand-lg justify-content-center">
      <span className="navbar-brand mb-0 h1">My Best Friend</span>
      <NavLink
        exact
        className="navbar-link"
        activeStyle={{ fontWeight: "bold" }}
        to="/"
      >
        <i className="bi bi-house-door"></i>
        <span className="nav-text">Home</span>
      </NavLink>
      {auth.token && (
        <NavLink
          className="navbar-link"
          activeStyle={{ fontWeight: "bold" }}
          to={`/profile/${userId}`}
        >
          <i className="bi bi-person"></i>
          <span className="nav-text">Profile</span>
        </NavLink>
      )}
      {auth.token && (
        <NavLink
          className="navbar-link"
          activeStyle={{ fontWeight: "bold" }}
          to="/my-pets"
        >
          <i className="bi bi-heart"></i>
          <span className="nav-text">My Pets</span>
        </NavLink>
      )}
      <NavLink
        className="navbar-link"
        activeStyle={{ fontWeight: "bold" }}
        to="/search"
      >
        <i className="bi bi-search"></i>
        <span className="nav-text">Search</span>
      </NavLink>
      {auth.token && auth.admin && (
        <NavLink
          className="navbar-link"
          activeStyle={{ fontWeight: "bold" }}
          to="/admin"
        >
          <i className="bi bi-lightning"></i>
          <span className="nav-text">Admin</span>
        </NavLink>
      )}
    </nav>
  );
};
export default Navbar;
