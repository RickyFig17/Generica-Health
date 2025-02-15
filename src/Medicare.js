import React, { useState } from "react";
import TextContent from "./Text.json"

function Medicare() {
  return (
    <>
      <h1>{TextContent.TextContent.Medicare.medicare}</h1>
      <SearchForMedicarePlans />
      <SearchBar />
      <MedicareParagraph />
    </>
  );
}

function SearchForMedicarePlans() {
  return <h3>{TextContent.TextContent.Medicare.findPlans}</h3>;
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

function MedicareParagraph() {
  return (
    <>
      <h3>What is Medicare?</h3>
      <p>
        Medicare is a federal health insurance program primarily designed for
        people aged 65 and older. It also covers certain younger individuals
        with disabilities or specific health conditions like End-Stage Renal
        Disease. Medicare provides essential health coverage and is made up of
        different parts to help cover various aspects of healtchare. These are:{" "}
      </p>
      <p>
        <h5>Medicare Part A (Hospital Insurance)</h5>
        <ul>
          <li>
            Covers inpatient hospital care, skilled nursing facility care,
            hospice, and some home health services.
          </li>
          <li>
            Most people don't pay a premium for Part A if they or their spouse
            paid Medicare taxes while working.
          </li>
        </ul>
      </p>
      <p>
        <h5>Medicare Part B (Medical Insurance)</h5>
        <ul>
          <li>
            Covers outpatient care, doctor visits, preventive services (like
            screenings and vaccinations), and certain home health services.
          </li>
          <li>Part B requires a monthly premium.</li>
        </ul>
      </p>
      <p>
        <h5>Medicare Part C (Medicare Advantage)</h5>
        <ul>
          <li>
            Offered through private insurance companies approved by Medicare.
          </li>
          <li>
            Combines coverage from Part A and Part B, and often includes
            additional benefits like prescription drugs, vision, and dental
            care.
          </li>
          <li>
            Plans can vary, but many offer lower out-of-pocket costs and more
            coverage options.
          </li>
        </ul>
      </p>
      <p>
        <h5>Medicare Part D</h5>
        <ul>
          <li>Helps cover the cost of prescription medications.</li>
          <li>
            Available through private insurers and can be added to Original
            Medicare (Parts A and B) or included in a Medicare Advantage plan
            (Part C).
          </li>
        </ul>
      </p>
      <h3>
        What's the difference between Medicare and a private health insurance?
      </h3>
      <p>
        There's two main differences:
        <ul>
          <h5>Eligibility</h5>
          <li>
            Unlike private health insurance, Medicare is available regardless of
            income but is typically for seniors (65+) or those with certain
            disabilities.
          </li>
          <h5>Coverage</h5>
          <li>
            Medicare is standardized by the federal government, whereas private
            insurance plans can offer a wider range of options and may require
            additional premiums, copayments, and deductibles.
          </li>
        </ul>
      </p>
      <p>
        <h3>Some additional information</h3>
        <h5>Medigap</h5>
        <li>
          Private insurance that helps fill the gaps in Medicare coverage (e.g.,
          out-of-pocket costs like copayments, coinsurance, and deductibles).
        </li>
        <h5>Costs</h5>
        <li>
          While Medicare covers many services, it doesn't pay for everything.
          Beneficiaries may still have out-of-pocket expenses, including
          premiums, deductibles, and copayments, depending on the plan.
        </li>
      </p>
    </>
  );
}

export default Medicare;
