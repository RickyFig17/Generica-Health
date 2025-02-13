import React, { useState } from "react";
import TextContent from "./Text.json";

function Ifp() {
  return (
    <>
      <h1>{TextContent.TextContent.Ifp.ifpTitle}</h1>
      <SearchForIfpPlans />
      <SearchBar />
      <IfpParagraph />
    </>
  );
}

function SearchForIfpPlans() {
  return <h3>{TextContent.TextContent.Ifp.findPlans}</h3>;
}

function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter ZIP Code"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>{query}</p>
    </div>
  );
}

function IfpParagraph() {
  return (
    <>
      <h3>{TextContent.TextContent.Ifp.whatIsIfp}</h3>
      <p>
        {TextContent.TextContent.Ifp.ifpDefinition}
        <ul>
          <li>{TextContent.TextContent.Ifp.healthInsMarketplace}</li>
          <li>{TextContent.TextContent.Ifp.DirFromPriInsProv}</li>
        </ul>
        <p>{TextContent.TextContent.Ifp.plansDesigned}</p>
      </p>
      <h3>{TextContent.TextContent.Ifp.whosEligible}</h3>
      <p>{TextContent.TextContent.Ifp.ifpWithoutEmployer}</p>
      <h3>{TextContent.TextContent.Ifp.whatDoesItCover}</h3>
      <p>
        {TextContent.TextContent.Ifp.ifpEssentialHealth}
        <ul>
          <li>{TextContent.TextContent.Ifp.doctorVisits}</li>
          <li>{TextContent.TextContent.Ifp.HosAndEmerCare}</li>
          <li>{TextContent.TextContent.Ifp.prescriptionDrugs}</li>
          <li>{TextContent.TextContent.Ifp.preventiveCare}</li>
          <li>{TextContent.TextContent.Ifp.MatAndNewBornCare}</li>
          <li>{TextContent.TextContent.Ifp.MentalHealthServices}</li>
          <li>{TextContent.TextContent.Ifp.pediatricServices}</li>
        </ul>
      </p>
      <h3>{TextContent.TextContent.Ifp.ifpPlanOptions}</h3>
      <p>
        {TextContent.TextContent.Ifp.planCategories}
        <ul>
          <li>{TextContent.TextContent.Ifp.bronze}</li>
          <li>{TextContent.TextContent.Ifp.silver}</li>
          <li>{TextContent.TextContent.Ifp.gold}</li>
          <li>{TextContent.TextContent.Ifp.platinum}</li>
        </ul>
      </p>
      <h3>{TextContent.TextContent.Ifp.personalCost}</h3>
      <p>
        {TextContent.TextContent.Ifp.costsVary}
        <ul>
          <li>{TextContent.TextContent.Ifp.age}</li>
          <li>{TextContent.TextContent.Ifp.location}</li>
          <li>{TextContent.TextContent.Ifp.tobaccoUse}</li>
          <li>{TextContent.TextContent.Ifp.planCategory}</li>
          <li>{TextContent.TextContent.Ifp.peopleCovered}</li>
        </ul>
      </p>
      <h3>{TextContent.TextContent.Ifp.whenCanIEnroll}</h3>
      <p>
        {TextContent.TextContent.Ifp.twoTypesEnrollment}
        <ul>
          <li>{TextContent.TextContent.Ifp.openEnrollment}</li>
          <li>{TextContent.TextContent.Ifp.specialEnrollment}</li>
        </ul>
      </p>
      <p>
        <h3>{TextContent.TextContent.Ifp.benefitsOfIfp}</h3>
        <ul>
          <li>{TextContent.TextContent.Ifp.customizablePlans}</li>
          <li>{TextContent.TextContent.Ifp.networkOptions}</li>
          <li>{TextContent.TextContent.Ifp.comprehensiveCoverage}</li>
        </ul>
      </p>
      <p>
        <h3>{TextContent.TextContent.Ifp.howCanIqualify}</h3>
        <ul>
          <li>{TextContent.TextContent.Ifp.financialAssistance}</li>
        </ul>
      </p>
    </>
  );
}

export default Ifp;
