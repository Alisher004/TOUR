import React from "react";
import { useNavigate } from "react-router-dom";
import { hotels } from "../data/hotels";
import HotelCard from "../components/HotelCard";

export default function Hotels() {
  const navigate = useNavigate();
  return (
    <div className="container" style={{ paddingTop: 90, paddingBottom: 24 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>Отелдер</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(1, minmax(0, 1fr))", gap: 16 }}>
        {hotels.map((h) => (
          <HotelCard key={h.id} hotel={h} onBook={(id) => navigate(`/booking/${id}?type=hotel`)} />
        ))}
      </div>
    </div>
  );
} 