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
        Protect your business and your team with comprehensive health insurance
        designed for employers. Our flexible plans offer quality coverage,
        competitive rates, and essential benefits to keep your employees healthy
        and productive. Invest in their well-being while enhancing job
        satisfaction and retention. Get a quote today and build a stronger
        workplace with the right coverage!
      </p>
    </div>
  );
}

export default Employers;
