import React from "react";
import TextContent from "../Text.json";

function Terms() {
  return (
    <>
      <h3>{TextContent.TextContent.Terms.termsOfService}</h3>
      <h5>
        {TextContent.TextContent.Terms.effectiveDate}
        {TextContent.TextContent.Terms.januaryFirst}
      </h5>
      <p>
        <h5>{TextContent.TextContent.Terms.welcome}</h5>
        <ul>
          <li>{TextContent.TextContent.Terms.websiteUsage}</li>
          <li>{TextContent.TextContent.Terms.onlyInfoContent}</li>
          <li>{TextContent.TextContent.Terms.accuracyNotGuaranteed}</li>
          <li>{TextContent.TextContent.Terms.noUlawfulThings}</li>
          <li>{TextContent.TextContent.Terms.noMedAdvice}</li>
          <li>{TextContent.TextContent.Terms.generalInfoOnly}</li>
          <li>{TextContent.TextContent.Terms.healthProviderAdvice}</li>
          <li>{TextContent.TextContent.Terms.intellectualProperty}</li>
          <li>{TextContent.TextContent.Terms.publicStockImages}</li>
          <li>{TextContent.TextContent.Terms.propertyRightInfringement}</li>
          <li>{TextContent.TextContent.Terms.limitiationOfLiability}</li>
          <li>{TextContent.TextContent.Terms.notRespForUseOfWebsite}</li>
          <li>{TextContent.TextContent.Terms.noInterruptionsGuaranteed}</li>
          <li>{TextContent.TextContent.Terms.thirdPartyLinks}</li>
          <li>{TextContent.TextContent.Terms.mayContain3rdParty}</li>
          <li>{TextContent.TextContent.Terms.noRespEndorsement}</li>
          <li>{TextContent.TextContent.Terms.changeOfTerms}</li>
          <li>{TextContent.TextContent.Terms.mayUpdateTerms}</li>
          <li>{TextContent.TextContent.Terms.updateTermAcc}</li>
          <li>{TextContent.TextContent.Terms.governingLaw}</li>
          <li>{TextContent.TextContent.Terms.interpretedTerms}</li>
        </ul>
      </p>
    </>
  );
}

export default Terms;
