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
      <p>
        Medicaid is a joint federal and state health insurance program designed
        to provide free or low-cost healthcare to low-income individuals and
        families. Unlike Medicare, which is mainly for seniors, Medicaid covers
        a broader range of people, including children, pregnant women, elderly
        individuals, and people with disabilities.
      </p>
      <h3>Key Features of Medicaid:</h3>
      <ul>
        <h5>Eligibility:</h5>
        <li>
          Based on income and household size, typically determined by the
          Federal Poverty Level (FPL).
        </li>
        <li>
          Includes low-income adults, children (CHIP), pregnant women, elderly
          individuals, and people with disabilities.
        </li>
        <li>
          Some states have expanded Medicaid under the Affordable Care Act (ACA)
          to cover more low-income adults.
        </li>
      </ul>
      <ul>
        <h5>Coverage:</h5>
        Medicaid provides comprehensive health benefits, including:
        <li>Doctor visits and hospital care</li>
        <li>Prescription drugs</li>
        <li>Preventive services (vaccines, screenings)</li>
        <li>Maternity and newborn care</li>
        <li>Mental health and substance abuse treatment</li>
        <li>Long-term care (including nursing home services)</li>
      </ul>
      <ul>
        <h5>Cost:</h5>
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
