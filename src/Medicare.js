import React, { useState } from "react";

function Medicare() {
  return (
    <>
      <h1>Medicare</h1>
      <SearchForMedicarePlans />
      <SearchBar />
    </>
  );
}

function SearchForMedicarePlans() {
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

export default Medicare;
