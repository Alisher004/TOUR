import React from "react";
import { countriesSorted } from "../data/countries";

function flagUrl(code) {
  return `https://flagcdn.com/w40/${code.toLowerCase()}.png`;
}

export default function CountryGrid() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12 }}>
      {countriesSorted.map((c) => (
        <div key={c.code} style={{ border: "1px solid #eee", borderRadius: 10, padding: 10, display: "flex", alignItems: "center", gap: 8 }}>
          <img src={flagUrl(c.code)} alt={c.name} style={{ width: 24, height: 16, objectFit: "cover", borderRadius: 2 }} />
          <span>{c.name}</span>
        </div>
      ))}
    </div>
  );
} 