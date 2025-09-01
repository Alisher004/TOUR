import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import tours from "../data/tours";
import emailjs from "@emailjs/browser";
import "./TourDetail.css"; // 👈 css коштук

export default function TourDetail() {
  const { id } = useParams();
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
      <div className="tour-container">
        <button onClick={() => navigate(-1)} className="back-btn">
          &larr; Назад
        </button>
        <h2>Тур ненайден</h2>
      </div>
    );
  }

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
        "service_e54yugw",
        "template_eelbrsr",
        templateParams,
        "91cD_bksO_s8eQL9l"
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
    <div className="tour-container">
      <div className="tour-wrapper">
        <div className="tour-content">
          <div className="tour-image">
            <img src={tour.image} alt={tour.title} />
          </div>

          <div className="tour-info">
            <section className="tour-section">
              <h2>{tour.title}</h2>
              <p>{tour.description}</p>
            </section>

            <section className="tour-section">
              <h3>Детали</h3>
              <ul>
                <li>⏱ Время: {tour.duration}</li>
                <li>
                  💰 Стоимость: {tour.price.toLocaleString()} {tour.currency}
                </li>
                <li>🎯 Трудность: {tour.difficulty}</li>
                <li>👥 Общий размер: {tour.groupSize}</li>
                <li>🍂 Сезон: {tour.season}</li>
              </ul>
            </section>

            <section className="tour-section">
              <form onSubmit={submit} className="tour-form">
                <input
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Ваше имя *"
                  required
                />
                <input
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="Телефон *"
                  required
                />
                <input
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                  placeholder="Ваш адрес"
                  required
                />
                <button type="submit" disabled={submitting}>
                  {submitting ? "Жөнөтүлүүдө..." : "Забронировать"}
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
