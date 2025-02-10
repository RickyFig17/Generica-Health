import React, { useState } from "react";

function Medicaid() {
  return (
    <>
      <h1>Medicaid</h1>
      <SearchForMedicaidPlans />
      <SearchBar />
    </>
  );
}

function SearchForMedicaidPlans() {
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

export default Medicaid;
