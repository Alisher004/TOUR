import React, { useMemo, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { tours } from "../data/tours";
import { hotels } from "../data/hotels";

export default function Booking() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const item = useMemo(() => {
    if (!id || !type) return null;
    return type === "tour" ? tours.find((t) => t.id === id) : hotels.find((h) => h.id === id);
  }, [id, type]);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState("");
  const [nights, setNights] = useState(1);
  const [persons, setPersons] = useState(2);

  if (!id || !type) return null;

  const title = item ? ("title" in item ? item.title : item.name) : "";
  const price = item ? ("price" in item ? item.price : item.pricePerNight) : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = new URLSearchParams({
      type,
      id,
      title,
      price: String(price),
      fullName,
      phone,
      email,
      startDate,
      nights: String(nights),
      persons: String(persons),
    });
    navigate(`/checkout?${query.toString()}`);
  };

  return (
    <div className="container" style={{ paddingTop: 90, paddingBottom: 24, maxWidth: 800 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>Бронь</h1>
      {!item ? (
        <div style={{ color: "#6b7280" }}>Элемент табылган жок.</div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
          <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}>
            <div style={{ fontWeight: 600, marginBottom: 6 }}>{title}</div>
            <div style={{ color: "#6b7280", textTransform: "capitalize", fontSize: 14 }}>{type}</div>
            <div style={{ marginTop: 8, fontWeight: 700 }}>
              {type === "tour" ? `$${price} (тур)` : `$${price} / түн (отель)`}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <label style={{ display: "block", fontSize: 14, marginBottom: 6 }}>Атыңыз</label>
              <input required value={fullName} onChange={(e) => setFullName(e.target.value)} style={{ width: "100%", border: "1px solid #ddd", borderRadius: 8, padding: "10px 12px" }} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 14, marginBottom: 6 }}>Телефон</label>
              <input required value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: "100%", border: "1px solid #ddd", borderRadius: 8, padding: "10px 12px" }} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 14, marginBottom: 6 }}>Email</label>
              <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", border: "1px solid #ddd", borderRadius: 8, padding: "10px 12px" }} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 14, marginBottom: 6 }}>Бошонуу күнү</label>
              <input required type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} style={{ width: "100%", border: "1px solid #ddd", borderRadius: 8, padding: "10px 12px" }} />
            </div>

            {type === "hotel" && (
              <div>
                <label style={{ display: "block", fontSize: 14, marginBottom: 6 }}>Түн саны</label>
                <input type="number" min={1} value={nights} onChange={(e) => setNights(Number(e.target.value))} style={{ width: "100%", border: "1px solid #ddd", borderRadius: 8, padding: "10px 12px" }} />
              </div>
            )}

            {type === "tour" && (
              <div>
                <label style={{ display: "block", fontSize: 14, marginBottom: 6 }}>Кишилер саны</label>
                <input type="number" min={1} value={persons} onChange={(e) => setPersons(Number(e.target.value))} style={{ width: "100%", border: "1px solid #ddd", borderRadius: 8, padding: "10px 12px" }} />
              </div>
            )}
          </div>

          <div>
            <button type="submit" style={{ padding: "10px 16px", borderRadius: 10, background: "#198754", color: "white", border: "none" }}>Төлөмгө өтүү</button>
          </div>
        </form>
      )}
    </div>
  );
} 