import React from "react";

export default function HotelCard({ hotel, onBook }) {
  return (
    <div className="card" style={{ border: "1px solid #eee", borderRadius: 12, overflow: "hidden" }}>
      <img src={hotel.thumbnail} alt={hotel.name} style={{ width: "100%", height: 180, objectFit: "cover" }} />
      <div style={{ padding: 12 }}>
        <div style={{ fontWeight: 600 }}>{hotel.name}</div>
        <div style={{ color: "#6b7280", fontSize: 14 }}>{hotel.city} • {hotel.stars}⭐</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
          <span style={{ fontWeight: 700 }}>${hotel.pricePerNight}/түн</span>
          <button onClick={() => onBook(hotel.id)} style={{ padding: "6px 12px", borderRadius: 8, background: "#0d6efd", color: "white", border: "none" }}>Бронь</button>
        </div>
      </div>
    </div>
  );
} 