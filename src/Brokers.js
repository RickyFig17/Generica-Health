import React from "react";
import "./Brokers.scss";
import TextContent from "./Text.json";

function Brokers() {
  return (
    <>
      <h1>{TextContent.TextContent.Brokers.brokers}</h1>
      <BrokersHeader />
    </>
  );
}

function BrokersHeader() {
  return (
    <div>
      <h3>{TextContent.TextContent.Brokers.healthcareBrokers}</h3>
      <p>
        {TextContent.TextContent.Brokers.partnerWithClients}
      </p>
    </div>
  );
}

export default Brokers;
