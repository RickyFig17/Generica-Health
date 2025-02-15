import React, { useState } from "react";
import TextContent from "./Text.json";

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
        <li>
          Minimal or no costs for enrollees (some may have small copays,
          depending on the state).
        </li>
        <li>
          Funded by both federal and state governments, with each state managing
          its own program within federal guidelines.
        </li>
      </ul>
      <ul>
        <h5>State-Specific Programs:</h5>
        <li>Medicaid benefits and eligibility rules vary by state.</li>
        <li>
          Some states have additional benefits, such as dental and vision
          coverage.
        </li>
      </ul>
      <ul>
        <h5>Enrollment:</h5>
        <li>
          Available year-round (unlike Medicare or private insurance, which have
          specific enrollment periods).
        </li>
        <li>
          People can apply through their state’s Medicaid office or the Health
          Insurance Marketplace.
        </li>
      </ul>
      <h3>Medicaid vs. Medicare: What's the Difference?</h3>
      <table>
        <tr>
          <th>Feature</th>
          <th>Medicaid</th>
          <th>Medicare</th>
        </tr>
        <tr>
          <td>Who Qualifies?</td>
          <td>Low-income individuals & families</td>
          <td>Seniors (65+), some younger people with disabilities</td>
        </tr>
        <tr>
          <td>How It's Funded?</td>
          <td>Federal & state governments</td>
          <td>Federal government</td>
        </tr>
        <tr>
          <td>Costs?</td>
          <td>Free or low-cost</td>
          <td>Some premiums, deductibles, and copays</td>
        </tr>
        <tr>
          <td>Coverage?</td>
          <td>Varies by state, includes long-term care</td>
          <td>
            Standardized, but gaps may require additional plans (Medigap, Part
            D)
          </td>
        </tr>
      </table>
    </>
  );
}

export default Medicaid;
