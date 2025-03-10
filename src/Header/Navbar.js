import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import TextContent from "../Text.json";

const Navbar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  return (
    <div className="navbar-wrapper">
      <ul className="ul-wrapper">
        <li>
          <Link to="/">{TextContent.TextContent.Navbar.home}</Link>
        </li>
        <li>
          <Link to="/ifp">{TextContent.TextContent.Navbar.ifp}</Link>
        </li>
        <li>
          <Link to="/medicare">{TextContent.TextContent.Navbar.medicare}</Link>
        </li>
        <li>
          <Link to="/medicaid">{TextContent.TextContent.Navbar.medicaid}</Link>
        </li>
        <li style={{ position: "relative" }}>
          <button onClick={toggleDropDown}>
            {TextContent.TextContent.Navbar.otherProducts}
          </button>
          {isDropDownOpen && (
            <div className="dropDownButton">
              <ul>
                <li>
                  <Link to="/employers">
                    {TextContent.TextContent.Navbar.employers}
                  </Link>
                </li>
                <li>
                  <Link to="/providers">
                    {TextContent.TextContent.Navbar.providers}
                  </Link>
                </li>
                <li>
                  <Link to="/brokers">
                    {TextContent.TextContent.Navbar.brokers}
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
