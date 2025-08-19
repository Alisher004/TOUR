import React from "react";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="container" style={{ paddingTop: 120, paddingBottom: 24, textAlign: "center" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Төлөм ийгиликтүү болду!</h1>
      <p style={{ color: "#6b7280", marginBottom: 16 }}>Биз жакында сиз менен байланышка чыгабыз.</p>
      <Link to="/" style={{ color: "#0d6efd", textDecoration: "underline" }}>Башкы бетке кайтуу</Link>
    </div>
  );
} 