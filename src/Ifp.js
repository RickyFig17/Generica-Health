import React, { useState } from "react";

function Ifp() {
  return (
    <>
      <h1>Individual And Family Plan</h1>
      <SearchForIfpPlans />
      <SearchBar/>
    </>
  );
}

function SearchForIfpPlans() {
  return <h3>Individual and family health insurance plans</h3>;
}

function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>Find plans near me: {query}</p>
    </div>
  );
}

export default Ifp;
