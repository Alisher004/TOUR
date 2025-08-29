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
          &larr; Назад
        </button>
        <h2>Тур ненайден</h2>
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
<div
  className="container"
  style={{
    margin: "50px auto",
    padding: "24px 12px",
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6,
    color: "#333",
  }}
>
<div
  style={{
    maxWidth: 1200,
    padding: "24px 12px",
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6,
    color: "#333",
  }}
>
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      gap: 24,
      background: "#fff",
      borderRadius: 12,
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      padding: 20,
    }}
  >
    {/* Сүрөт */}
    <div style={{ width: 650, height: 600, borderRadius: 12, overflow: "hidden" }}>
      <img
        src={tour.image}
        alt={tour.title}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>

    {/* Маалыматтар */}
    <div
      style={{
        width: 450,
        height: 600,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 12,
      }}
    >
      {/* Сүрөттөмө */}
      <section
        style={{
          border: "1px solid #eee",
          borderRadius: 10,
          padding: 12,
          background: "#fafafa",
          flex: 1,
          overflow: "auto",
        }}
      >
        <h2>{tour.title}</h2>
        <p style={{ margin: 0, fontSize: 14 }}>{tour.description}</p>
      </section>

      {/* Детали */}
      <section
        style={{
          border: "1px solid #eee",
          borderRadius: 10,
          padding: 12,
          background: "#fafafa",
          flex: 1,
          overflow: "auto",
        }}
      >
        <h3 style={{ marginBottom: 6 }}>Детали</h3>
        <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14 }}>
          <li>⏱ Время: {tour.duration}</li>
          <li>💰 Стоимость: {tour.price.toLocaleString()} {tour.currency}</li>
          <li>🎯 Трудность: {tour.difficulty}</li>
          <li>👥 Общий размер: {tour.groupSize}</li>
          <li>🍂 Сезон: {tour.season}</li>
        </ul>
      </section>

      {/* Форма */}
      <section
        style={{
          border: "1px solid #eee",
          borderRadius: 10,
          padding: 12,
          background: "#fafafa",
          flex: 1,
        }}
      >
        <form
          onSubmit={submit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            height: "100%",
            justifyContent: "center",
          }}
        >
          <input
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="Ваше имя *"
            required
            style={{
              padding: 8,
              borderRadius: 6,
              border: "1px solid #ccc",
              fontSize: 14,
            }}
          />
          <input
            value={clientPhone}
            onChange={(e) => setClientPhone(e.target.value)}
            placeholder="Телефон *"
            required
            style={{
              padding: 8,
              borderRadius: 6,
              border: "1px solid #ccc",
              fontSize: 14,
            }}
          />
          <input
            value={clientAddress}
            onChange={(e) => setClientAddress(e.target.value)}
            placeholder="Ваш адрес"
            required
            style={{
              padding: 8,
              borderRadius: 6,
              border: "1px solid #ccc",
              fontSize: 14,
            }}
          />
          <button
            type="submit"
            disabled={submitting}
            style={{
              padding: 10,
              borderRadius: 6,
              backgroundColor: submitting ? "#a5b4fc" : "#4f46e5",
              color: "#fff",
              border: "none",
              cursor: submitting ? "not-allowed" : "pointer",
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            {submitting ? "Жөнөтүлүүдө..." : "Купить"}
          </button>
        </form>
      </section>
    </div>
  </div>
</div>

</div>


  );
}