import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

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
        <button onClick={toggleDropDown}>Other Products</button>
        {isDropDownOpen && (
          <ul>
            <li>
              <Link to="/employers"> Employers</Link>
            </li>
            <li>
              <Link to="/providers">Providers</Link>
            </li>
            <li>
              <Link to="/producers">Producers</Link>
            </li>
          </ul>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
