import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTourById } from "../data/tours";

function Payment() {
  const { tourId } = useParams();
  const tour = useMemo(() => getTourById(tourId), [tourId]);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [people, setPeople] = useState(1);

  if (!tour) {
    return (
      <div className="container" style={{ paddingTop: 100 }}>
        Тур не найден
      </div>
    );
  }

  const total = tour.price * people;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Оплата прошла: ${tour.title}, сумма ${total.toLocaleString()} ${tour.currency}`);
    navigate("/");
  };

  return (
    <div className="container" style={{ paddingTop: 100, paddingBottom: 40 }}>
      <h2 style={{ marginBottom: 20 }}>Оплата тура: {tour.title}</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 520 }}>
        <div style={{ display: "grid", gap: 12 }}>
          <div style={{ color: "#666" }}>
            {tour.country} • {tour.days} дней • {tour.fromCity} → {tour.toCity}
          </div>
          <label>
            Имя
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ width: "100%", padding: 10, border: "1px solid #ddd", borderRadius: 8 }}
            />
          </label>
          <label>
            Кол-во человек
            <input
              type="number"
              min={1}
              value={people}
              onChange={(e) => setPeople(Number(e.target.value))}
              style={{ width: "100%", padding: 10, border: "1px solid #ddd", borderRadius: 8 }}
            />
          </label>
          <label>
            Номер карты
            <input
              type="text"
              inputMode="numeric"
              placeholder="0000 0000 0000 0000"
              value={card}
              onChange={(e) => setCard(e.target.value)}
              required
              style={{ width: "100%", padding: 10, border: "1px solid #ddd", borderRadius: 8 }}
            />
          </label>
          <div style={{ fontWeight: 700 }}>Итого к оплате: {total.toLocaleString()} {tour.currency}</div>
          <button type="submit" style={{ padding: "10px 14px", borderRadius: 8, background: "#ec1c24", color: "#fff", border: "none", cursor: "pointer" }}>
            Оплатить
          </button>
        </div>
      </form>
    </div>
  );
}

export default Payment; 