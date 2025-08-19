import React, { useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import tours from "../data/tours";
import { sendPurchaseToTelegram } from "../services/telegram";

export default function TourDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const tour = useMemo(() => tours.find((t) => String(t.id) === String(id)), [id]);

  const search = new URLSearchParams(location.search);
  const chatIdFromUrl = search.get("chatId") || undefined;

  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (!tour) {
    return (
      <div className="container" style={{ paddingTop: 90, paddingBottom: 24 }}>
        <button onClick={() => navigate(-1)} style={{ marginBottom: 12 }}>&larr; Артка</button>
        <h2>Тур табылган жок</h2>
      </div>
    );
  }

  const stars = "★".repeat(Math.floor(tour.rating)) + "☆".repeat(5 - Math.floor(tour.rating));

  async function submit(e) {
    e.preventDefault();
    try {
      setSubmitting(true);
      await sendPurchaseToTelegram({
        tourTitle: tour.title,
        clientName,
        clientPhone,
        clientAddress,
        chatIdOverride: chatIdFromUrl,
      });
      alert("✅ Заказ Telegram’га жөнөтүлдү!");
      setClientName("");
      setClientPhone("");
      setClientAddress("");
    } catch (err) {
      alert("Telegram'га жөнөтүүдө ката кетти: " + err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="container" style={{ paddingTop: 90, paddingBottom: 24 }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: 12 }}>&larr; Артка</button>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
        <div style={{
          border: "1px solid #eee", borderRadius: 10, padding: 16,
          position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#667eea,#764ba2)", color: "#fff"
        }}>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 120, opacity: 0.2 }}>
            {tour.image}
          </div>
          <div style={{ position: "relative" }}>
            <h1 style={{ margin: 0 }}>{tour.title}</h1>
            <div style={{ marginTop: 6, display: "flex", gap: 12, alignItems: "center" }}>
              <span>{tour.location}</span>
              <span>{tour.duration}</span>
              <span>{tour.price.toLocaleString()} {tour.currency}</span>
              <span style={{ color: "#fbbf24" }}>{stars}</span>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gap: 12 }}>
          <section style={{ border: "1px solid #eee", borderRadius: 10, padding: 16 }}>
            <h3 style={{ marginTop: 0 }}>Сүрөттөмө</h3>
            <p style={{ margin: 0 }}>{tour.description}</p>
          </section>

          <section style={{ border: "1px solid #eee", borderRadius: 10, padding: 16 }}>
            <h3 style={{ marginTop: 0 }}>Деталдар</h3>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              <li>Убактысы: {tour.duration}</li>
              <li>Баасы: {tour.price.toLocaleString()} {tour.currency}</li>
              <li>Кыйынчылык: {tour.difficulty}</li>
              <li>Топ өлчөмү: {tour.groupSize}</li>
              <li>Сезон: {tour.season}</li>
            </ul>
          </section>

          {tour.includes?.length ? (
            <section style={{ border: "1px solid #eee", borderRadius: 10, padding: 16 }}>
              <h3 style={{ marginTop: 0 }}>Кирет</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {tour.includes.map((inc) => (
                  <span key={inc} style={{ background: "#f3f4f6", padding: "6px 10px", borderRadius: 999 }}>{inc}</span>
                ))}
              </div>
            </section>
          ) : null}

          <section style={{ border: "1px solid #eee", borderRadius: 10, padding: 16 }}>
            <h3 style={{ marginTop: 0 }}>Сатып алуу</h3>
            <form onSubmit={submit} style={{ display: "grid", gap: 8 }}>
              <input value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="Атыңыз *" required />
              <input value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} placeholder="Телефон *" required />
              <input value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} placeholder="Жашаган жери *" required />
              <button type="submit" disabled={submitting}>{submitting ? "Жөнөтүлүүдө..." : "Купить"}</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
} 