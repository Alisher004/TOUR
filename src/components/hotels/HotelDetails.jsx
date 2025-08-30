import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./style.css";

export default function HotelDetails({ hotel, onClose }) {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!hotel) return null;

  const handleSend = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_kw1x51u", // emailjs service id
        "template_xha6zk3", // emailjs template id
        {
          user_name: formData.name,
          user_phone: formData.phone,
          hotel_name: hotel.name,
        },
        "91cD_bksO_s8eQL9l" // emailjs public key
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setFormData({ name: "", phone: "" });
        },
        () => {
          setLoading(false);
          alert("Жиберүүдө ката чыкты!");
        }
      );
  };

  return (
    <div className="modal-overlay-hotel" onClick={onClose}>
      <div className="modal-hotel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <img src={hotel.thumbnail} alt={hotel.name} className="hotel-img" />
        <h2>{hotel.name}</h2>
        <p>
          {hotel.city} {hotel.location}
        </p>
        <p>⭐ {hotel.stars}</p>
        <p>Стоимость: {hotel.pricePerNight}$</p>

        <form onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Ваше имя"
            value={formData.name}
            required
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Телефон номер"
            value={formData.phone}
            required
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <button type="submit" disabled={loading}>
            {loading ? "Жиберүүдө..." : "Забронировать"}
          </button>
        </form>

        {success && <p className="success">✅ Ваш запрос отправлен!</p>}
      </div>
    </div>
  );
}