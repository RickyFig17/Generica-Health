import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return( 
    <>
    <ul>
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
    </>
  );
};

export default Navbar;
