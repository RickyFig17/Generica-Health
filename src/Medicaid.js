import React, { useState } from "react";
import TextContent from "./Text.json";
import "./Medicaid.scss";

function Medicaid() {
  return (
    <>
      <h1>{TextContent.TextContent.Medicaid.medicaid}</h1>
      <SearchForMedicaidPlans />
      <SearchBar />
      <MedicaidParagraph />
    </>
  );
}

function SearchForMedicaidPlans() {
  return <h3>{TextContent.TextContent.Medicaid.findPlans}</h3>;
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

function MedicaidParagraph() {
  return (
    <>
      <h3>{TextContent.TextContent.Medicaid.whatisMedicaid}</h3>
      <p>{TextContent.TextContent.Medicaid.medicaidDescription}</p>
      <h3>{TextContent.TextContent.Medicaid.medicaidFeatures}</h3>
      <ul>
        <h5>{TextContent.TextContent.Medicaid.eligibility}</h5>
        <li>{TextContent.TextContent.Medicaid.incomeHouseBased}</li>
        <li>{TextContent.TextContent.Medicaid.lowIncomeAdults}</li>
        <li>{TextContent.TextContent.Medicaid.medicaidExpansion}</li>
      </ul>
      <ul>
        <h5>{TextContent.TextContent.Medicaid.coverage}</h5>
        {TextContent.TextContent.Medicaid.compHealthBenefits}
        <li>{TextContent.TextContent.Medicaid.doctorVisits}</li>
        <li>{TextContent.TextContent.Medicaid.prescriptionDrugs}</li>
        <li>{TextContent.TextContent.Medicaid.preventiveServices}</li>
        <li>{TextContent.TextContent.Medicaid.MatAndNewBornCare}</li>
        <li>{TextContent.TextContent.Medicaid.menHSubsAbuse}</li>
        <li>{TextContent.TextContent.Medicaid.longTermCare}</li>
      </ul>
      <ul>
        <h5>{TextContent.TextContent.Medicaid.cost}</h5>
        <li>{TextContent.TextContent.Medicaid.noCostEnrollees}</li>
        <li>{TextContent.TextContent.Medicaid.federalAndStateFunded}</li>
      </ul>
      <ul>
        <h5>{TextContent.TextContent.Medicaid.stateSpecificPrograms}</h5>
        <li>{TextContent.TextContent.Medicaid.medicaidBenefits}</li>
        <li>{TextContent.TextContent.Medicaid.additionalBenefits}</li>
      </ul>
      <ul>
        <h5>{TextContent.TextContent.Medicaid.enrollment}</h5>
        <li>{TextContent.TextContent.Medicaid.yearRoundAvailability}</li>
        <li>{TextContent.TextContent.Medicaid.statesMedicaidApplication}</li>
      </ul>
      <h3>{TextContent.TextContent.Medicaid.medicaidVsMedicare}</h3>
      <table className="medicaid-table">
        <tr>
          <th>{TextContent.TextContent.Medicaid.feature}</th>
          <th>{TextContent.TextContent.Medicaid.medicaid}</th>
          <th>{TextContent.TextContent.Medicaid.medicare}</th>
        </tr>
        <tr>
          <td>{TextContent.TextContent.Medicaid.whoQualifies}</td>
          <td>{TextContent.TextContent.Medicaid.lowIncomeIndFam}</td>
          <td>{TextContent.TextContent.Medicaid.seniorsAndYoungDis}</td>
        </tr>
        <tr>
          <td>{TextContent.TextContent.Medicaid.howItsFunded}</td>
          <td>{TextContent.TextContent.Medicaid.fedAndStateGov}</td>
          <td>{TextContent.TextContent.Medicaid.federalGovernment}</td>
        </tr>
        <tr>
          <td>{TextContent.TextContent.Medicaid.costsQ}</td>
          <td>{TextContent.TextContent.Medicaid.freeOrLowCost}</td>
          <td>{TextContent.TextContent.Medicaid.somePremiums}</td>
        </tr>
        <tr>
          <td>{TextContent.TextContent.Medicaid.coverageQ}</td>
          <td>{TextContent.TextContent.Medicaid.longTermIncluded}</td>
          <td>{TextContent.TextContent.Medicaid.standardized}</td>
        </tr>
      </table>
    </>
  );
}

export default Medicaid;
