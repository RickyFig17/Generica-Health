import React from "react";
import "./Header.scss";
import Navbar from "./Navbar";
import "./Navbar.scss";

function Header() {
  return (
    <div className="header-wrapper">
      <h1 className="header">Generica Health</h1>
      <div className="nav-wrapper">
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
