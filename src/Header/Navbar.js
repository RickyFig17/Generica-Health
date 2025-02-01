import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <ul className="ul-wrapper">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ifp">Individual And Family Plan</Link>
        </li>
        <li>
          <Link to="/medicare">Medicare</Link>
        </li>
        <li>
          <Link to="/medicaid">Medicaid</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
