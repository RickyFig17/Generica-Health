import React from "react";
import "./Employers.scss";

function Employers() {
  return (
    <>
      <h1>Employers</h1>
      <EmployersHeader />
    </>
  );
}

function EmployersHeader() {
  return (
    <div className="employersHeaderContainer">
      <h3>The Right Plan for Employers</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.And more things too.
      </p>
    </div>
  );
}

export default Employers;
