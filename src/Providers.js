import React from "react";
import TextContent from "./Text.json";

function Providers() {
  return (
    <>
      <h1>{TextContent.TextContent.Providers.providers}</h1>
      <ProvidersHeader />
    </>
  );
}

function ProvidersHeader() {
  return (
    <div>
      <h3>{TextContent.TextContent.Providers.healthcareProviders}</h3>
      <p>{TextContent.TextContent.Providers.empowerHealthSolutions}</p>
    </div>
  );
}

export default Providers;
