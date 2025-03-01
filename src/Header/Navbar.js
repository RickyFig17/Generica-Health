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
        <li style={{ position: "relative" }}>
          <button onClick={toggleDropDown}>Other Products</button>
          {isDropDownOpen && (
            <div
              style={{
                position: "absolute",
                top: "100%", // Places the dropdown below the button
                left: 0,
                backgroundColor: "white",
                border: "1px solid #ccc",
                padding: "5px",
                boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
              }}
            >
              <ul>
                <li>
                  <Link to="/employers"> Employers</Link>
                </li>
                <li>
                  <Link to="/providers">Providers</Link>
                </li>
                <li>
                  <Link to="/brokers">Brokers</Link>
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
