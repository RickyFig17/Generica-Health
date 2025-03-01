import React from "react";
import TextContent from "../Text.json";

function Privacy() {
  return (
    <>
      <h3>{TextContent.TextContent.Privacy.privacyPolicy}</h3>
      <h5>
        {TextContent.TextContent.Privacy.effectiveDate}
        {TextContent.TextContent.Privacy.januaryFirst}
      </h5>
      <p>
        <h5>{TextContent.TextContent.Privacy.welcome}</h5>
        <ul>
          <li>{TextContent.TextContent.Privacy.collectingInfo}</li>
          <li>{TextContent.TextContent.Privacy.noInfoCollection}</li>
          <li>{TextContent.TextContent.Privacy.usingInfo}</li>
          <li>{TextContent.TextContent.Privacy.noInfoUsage}</li>
          <li>{TextContent.TextContent.Privacy.sharingInfo}</li>
          <li>{TextContent.TextContent.Privacy.noInfoSharing}</li>
          <li>{TextContent.TextContent.Privacy.dataSecurity}</li>
          <li>{TextContent.TextContent.Privacy.dataSecurityImplementation}</li>
          <li>{TextContent.TextContent.Privacy.yourRights}</li>
          <li>{TextContent.TextContent.Privacy.noDataCollection}</li>
          <li>{TextContent.TextContent.Privacy.thirdPartyLinks}</li>
          <li>{TextContent.TextContent.Privacy.thirdPartyWebsites}</li>
          <li>{TextContent.TextContent.Privacy.changesToPrivacyPolicy}</li>
          <li>{TextContent.TextContent.Privacy.privacyPolicyUpdates}</li>
          <li>{TextContent.TextContent.Privacy.genericaHealth}</li>
          <li>{TextContent.TextContent.Privacy.thankYou}</li>
        </ul>
      </p>
    </>
  );
}

export default Privacy;
