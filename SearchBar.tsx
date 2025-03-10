"use client";  // Make this a Client Component

import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Search Query:", query);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%", maxWidth: "300px", margin: "auto" }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
