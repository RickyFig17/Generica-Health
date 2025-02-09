import React, { useState } from "react";

function Ifp() {
  return (
    <>
      <h1>Individual And Family Plan</h1>
      <SearchForIfpPlans />
      <SearchBar />
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
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>{query}</p>
    </div>
  );
}

export default Ifp;
