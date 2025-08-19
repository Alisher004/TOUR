import React from "react";
import CountryGrid from "../components/CountryGrid";

export default function Countries() {
  return (
    <div className="container" style={{ paddingTop: 90, paddingBottom: 24 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>Страналар (алфавит боюнча)</h1>
      <CountryGrid />
    </div>
  );
} 