import React from "react";
import { countriesSorted } from "../data/countries";
import { useNavigate } from "react-router-dom";
import Baner from "./Baner";
import baner4 from "../assets/baner4.png";

function flagUrl(code) {
  return `https://flagcdn.com/w40/${code.toLowerCase()}.png`;
}

export default function CountryGrid() {
  const navigate = useNavigate();
  return (
    <div>
      <Baner
        image={baner4}
        title="страны"
        subtitle="Исследуйте мир: Наши лучшие направления и страны для путешествий"
      />
      <div
      className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 12,
          marginTop: "100px"
        }}
      >
        {countriesSorted.map((c) => (
          <div
            key={c.code}
            onClick={() => navigate(`/tours?country=${c.code}`)}
            style={{
              border: "1px solid #eee",
              borderRadius: 10,
              padding: 10,
              display: "flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
            }}
          >
            <img
              src={flagUrl(c.code)}
              alt={c.name}
              style={{
                width: 24,
                height: 16,
                objectFit: "cover",
                borderRadius: 2,
              }}
              loading="lazy"
            />
            <span>{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
