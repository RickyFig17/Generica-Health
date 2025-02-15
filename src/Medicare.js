import React, { useState } from "react";
import TextContent from "./Text.json";

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
      <h3>{TextContent.TextContent.Medicare.whatIsMedicare}</h3>
      <p>{TextContent.TextContent.Medicare.medicareDescription}</p>
      <p>
        <h5>{TextContent.TextContent.Medicare.medicarePartA}</h5>
        <ul>
          <li>{TextContent.TextContent.Medicare.coversInpatient}</li>
          <li>{TextContent.TextContent.Medicare.mostDontPay}</li>
        </ul>
      </p>
      <p>
        <h5>{TextContent.TextContent.Medicare.medicarePartB}</h5>
        <ul>
          <li>{TextContent.TextContent.Medicare.coversOutpatient}</li>
          <li>{TextContent.TextContent.Medicare.partBRequirements}</li>
        </ul>
      </p>
      <p>
        <h5>{TextContent.TextContent.Medicare.medicarePartC}</h5>
        <ul>
          <li>{TextContent.TextContent.Medicare.offeredPrivateIns}</li>
          <li>{TextContent.TextContent.Medicare.combinesPartAandB}</li>
          <li>{TextContent.TextContent.Medicare.plansVary}</li>
        </ul>
      </p>
      <p>
        <h5>{TextContent.TextContent.Medicare.medicarePartD}</h5>
        <ul>
          <li>{TextContent.TextContent.Medicare.helpsCoverCost}</li>
          <li>{TextContent.TextContent.Medicare.privateInsAvailability}</li>
        </ul>
      </p>
      <h3>{TextContent.TextContent.Medicare.medicarePrivateDifference}</h3>
      <p>
        {TextContent.TextContent.Medicare.twoDifferences}
        <ul>
          <h5>{TextContent.TextContent.Medicare.eligibility}</h5>
          <li>{TextContent.TextContent.Medicare.medicareAvailability}</li>
          <h5>{TextContent.TextContent.Medicare.coverage}</h5>
          <li>{TextContent.TextContent.Medicare.standardizedMedicare}</li>
        </ul>
      </p>
      <p>
        <h3>{TextContent.TextContent.Medicare.additionalInformation}</h3>
        <h5>{TextContent.TextContent.Medicare.medigap}</h5>
        <li>{TextContent.TextContent.Medicare.fillingGaps}
          </li>
        <h5>{TextContent.TextContent.Medicare.costs}</h5>
        <li>
         {TextContent.TextContent.Medicare.medicareManyServices}
        </li>
      </p>
    </>
  );
}

export default Medicare;
