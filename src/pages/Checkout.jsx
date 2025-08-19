import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const id = searchParams.get("id");
  const title = searchParams.get("title");
  const price = Number(searchParams.get("price") || 0);
  const fullName = searchParams.get("fullName");
  const phone = searchParams.get("phone");
  const email = searchParams.get("email");
  const startDate = searchParams.get("startDate");
  const nights = Number(searchParams.get("nights") || 1);
  const persons = Number(searchParams.get("persons") || 1);

  const total = type === "hotel" ? price * nights : price * persons;
  const [loading, setLoading] = useState(false);

  const handleMockPay = () => {
    setLoading(true);
    setTimeout(() => {
      navigate(`/success?type=${type}&id=${id}`);
    }, 1200);
  };

  return (
    <div className="container" style={{ paddingTop: 90, paddingBottom: 24, maxWidth: 800 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>Төлөм</h1>
      <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}>
        <div style={{ fontWeight: 600 }}>{title}</div>
        <div style={{ color: "#6b7280", fontSize: 14 }}>Түрү: {type}</div>
        <div style={{ fontSize: 14 }}>Аты-жөнү: {fullName}</div>
        <div style={{ fontSize: 14 }}>Телефон: {phone}</div>
        <div style={{ fontSize: 14 }}>Email: {email}</div>
        <div style={{ fontSize: 14 }}>Башталышы: {startDate}</div>
        {type === "hotel" ? (
          <div style={{ fontSize: 14 }}>Түн саны: {nights}</div>
        ) : (
          <div style={{ fontSize: 14 }}>Кишилер саны: {persons}</div>
        )}
        <div style={{ paddingTop: 8, fontSize: 18, fontWeight: 700 }}>Баасы: ${total}</div>
        <div style={{ paddingTop: 8 }}>
          <button onClick={handleMockPay} disabled={loading} style={{ padding: "10px 16px", borderRadius: 10, background: "#0d6efd", color: "white", border: "none", opacity: loading ? 0.7 : 1 }}>
            {loading ? "Төлөнүүдө..." : "Төлөм кылуу"}
          </button>
        </div>
      </div>
    </div>
  );
} 