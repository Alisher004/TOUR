import React from "react";
import { useNavigate } from "react-router-dom";
import { tours } from "../data/tours";
import TourCard from "../components/TourCard";

export default function Tours() {
  const navigate = useNavigate();
  return (
    <div className="container" style={{ paddingTop: 90, paddingBottom: 24 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>Турлар</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(1, minmax(0, 1fr))", gap: 16 }}>
        {tours.map((t) => (
          <TourCard key={t.id} tour={t} onBook={(id) => navigate(`/booking/${id}?type=tour`)} />
        ))}
      </div>
    </div>
  );
} 