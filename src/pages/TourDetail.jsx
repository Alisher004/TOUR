import React, { useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import tours from "../data/tours";
import emailjs from "@emailjs/browser";

export default function TourDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const tour = useMemo(
    () => tours.find((t) => String(t.id) === String(id)),
    [id]
  );

  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (!tour) {
    return (
      <div className="container" style={{ paddingTop: 90, paddingBottom: 24 }}>
        <button onClick={() => navigate(-1)} style={{ marginBottom: 12 }}>
          &larr; Артка
        </button>
        <h2>Тур табылган жок</h2>
      </div>
    );
  }

  const stars =
    "★".repeat(Math.floor(tour.rating)) +
    "☆".repeat(5 - Math.floor(tour.rating));

  async function submit(e) {
    e.preventDefault();
    try {
      setSubmitting(true);

      const templateParams = {
        tourTitle: tour.title,
        clientName,
        clientPhone,
        clientAddress,
      };
      

      await emailjs.send(
        "service_e54yugw",   // EmailJS Service ID
        "template_eelbrsr",  // EmailJS Template ID
        templateParams,
        "91cD_bksO_s8eQL9l"    // EmailJS Public Key / User ID
      );

      alert("✅ Заказ email аркылуу жөнөтүлдү!");
      setClientName("");
      setClientPhone("");
      setClientAddress("");
    } catch (err) {
      console.error(err);
      alert("Email жөнөтүүдө ката кетти: " + err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 12px" }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: 16 }}>
        &larr; Артка
      </button>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
        {/* Тур сүрөтү */}
        <div style={{ flex: "1 1 300px", overflow: "hidden", borderRadius: 12 }}>
          <img
            src={tour.image}
            alt={tour.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }}
          />
        </div>

        {/* Деталдар жана форма */}
        <div style={{ flex: "2 1 400px", display: "flex", flexDirection: "column", gap: 16 }}>
          <section style={{ border: "1px solid #eee", borderRadius: 10, padding: 16 }}>
            <h3>Сүрөттөмө</h3>
            <p>{tour.description}</p>
          </section>

          <section style={{ border: "1px solid #eee", borderRadius: 10, padding: 16 }}>
            <h3>Деталдар</h3>
            <ul>
              <li>Убактысы: {tour.duration}</li>
              <li>Баасы: {tour.price.toLocaleString()} {tour.currency}</li>
              <li>Кыйынчылык: {tour.difficulty}</li>
              <li>Топ өлчөмү: {tour.groupSize}</li>
              <li>Сезон: {tour.season}</li>
            </ul>
          </section>

          {tour.includes?.length > 0 && (
            <section style={{ border: "1px solid #eee", borderRadius: 10, padding: 16 }}>
              <h3>Кирет</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {tour.includes.map((inc) => (
                  <span key={inc} style={{ background: "#f3f4f6", padding: "6px 12px", borderRadius: 999 }}>
                    {inc}
                  </span>
                ))}
              </div>
            </section>
          )}

          <section style={{ border: "1px solid #eee", borderRadius: 10, padding: 16 }}>
            <h3>Сатып алуу</h3>
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <input
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Атыңыз *"
                required
                style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
              />
              <input
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                placeholder="Телефон *"
                required
                style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
              />
              <input
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
                placeholder="Жашаган жери *"
                required
                style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
              />
              <button
                type="submit"
                disabled={submitting}
                style={{
                  padding: 12,
                  borderRadius: 6,
                  backgroundColor: "#4f46e5",
                  color: "#fff",
                  border: "none",
                  cursor: submitting ? "not-allowed" : "pointer",
                }}
              >
                {submitting ? "Жөнөтүлүүдө..." : "Купить"}
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}