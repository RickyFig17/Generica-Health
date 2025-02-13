import React, { useState } from "react";

function Ifp() {
  return (
    <>
      <h1>Individual And Family Plan</h1>
      <SearchForIfpPlans />
      <SearchBar />
      <IfpParagraph />
    </>
  );
}

function SearchForIfpPlans() {
  return <h3>Find plans near me:</h3>;
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
      <h3>What is IFP?</h3>
      <p>
        IFP stands for Individual and Family Plan, and it is a health insurance
        plan purchased by individuals or families, typically through:
        <ul>
          <li>
            The health insurance marketplace (established by the Affordable Care
            Act)
          </li>
          <li>Directly from private insurance providers</li>
        </ul>
      </p>
      <p>
        These plans are designed for people who don't have access to
        employer-sponsored health coverage and provide essential health benefits
        like doctor visits, hospitalization, prescription drugs, and preventive
        care.
      </p>
      <h3>Who's eligible?</h3>
      <p>
        Individuals and families without employer sponsored health insurance.
        Accessible to self-employed individuals, part-time workers, or early
        retirees.
      </p>
      <h3>What does it cover?</h3>
      <p>
        IFPs cover essential health benefits, including:
        <ul>
          <li>Doctor visits (primary care and specialists)</li>
          <li>Hospitalization and emergency care</li>
          <li>Prescription drugs</li>
          <li>Preventive care (e.g., vaccinations, screenings)</li>
          <li>Maternity and newborn care</li>
          <li>Mental health services</li>
          <li>Pediatric services (including vision and dental for children)</li>
        </ul>
      </p>
      <h3>What are some plans that IFP offers?</h3>
      <p>
        Plans are categorized based on cost-sharing:
        <ul>
          <li>Bronze: Lower monthly premiums, higher out-of-pocket costs</li>
          <li>Silver: Moderate premiums and out-of-pocket costs</li>
          <li>Gold: Higher premiums, lower out-of-pocket expenses</li>
          <li>Platinum: Highest premiums, lowest out-of-pocket expenses</li>
        </ul>
      </p>
      <h3>How much will it cost me?</h3>
      <p>
        Costs vary depending on:
        <ul>
          <li>Age</li>
          <li>Location</li>
          <li>Tobacco use</li>
          <li>Plan category</li>
          <li>Number of people covered</li>
        </ul>
      </p>
      <h3>When can I enroll?</h3>
      <p>
        There's two types of enrollment:
        <ul>
          <li>Open Enrollment: Occurs annually, typically in the fall</li>
          <li>
            Special Enrollment: Available after qualifying life events (e.g.,
            marriage, birth, job loss)
          </li>
        </ul>
      </p>
      <p>
        <h3> What are some benifits of IFPs?</h3>
        <ul>
          <li>Customizable plans tailored to your healthcare needs</li>
          <li>Nationwide or regional provider network options</li>
          <li>Peace of mind with comprehensive coverage</li>
        </ul>
      </p>
      <p>
        <h3>How can I qualify for it?</h3>
        <ul>
          <li>
            Many people qualify for financial assistance through tax credits or
            cost-sharing reductions if they purchase through the Marketplace.
          </li>
        </ul>
      </p>
    </>
  );
}

export default Ifp;
