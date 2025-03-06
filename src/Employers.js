import React from "react";
import "./Employers.scss";
import TextContent from "./Text.json";

function Employers() {
  return (
    <>
      <h1>{TextContent.TextContent.Employers.employers}</h1>
      <EmployersHeader />
    </>
  );
}

function EmployersHeader() {
  return (
    <div className="employersHeaderContainer">
      <h3>{TextContent.TextContent.Employers.rightPlan}</h3>
      <p>{TextContent.TextContent.Employers.protectBusiness}</p>
    </div>
  );
}

export default Employers;
