import React, { useMemo, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { hotels } from "../../data/hotels";
import "./style.css";

export default function HotelsCom() {
  const [current, setCurrent] = useState(0);

  const items = useMemo(() => {
    const list = [...hotels, ...hotels];
    return list.slice(0, Math.max(10, list.length));
  }, []);

  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 5, // Default чоң экрандар үчүн
    speed: 400,
    arrows: true,
    dots: false,
    focusOnSelect: true,
    beforeChange: (_old, next) => setCurrent(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, arrows: true } // планшет
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, arrows: false } // мобилде стрелка жок
      },
    ],
  };

  return (
    <div className="container" style={{ margin: "100px auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: 12 }}>Популярные Отели</h2>
      <p style={{ textAlign: "center", marginBottom: 24 }}>уют и роскошь в лучших отелях мира</p>
      <Slider {...settings}>
        {items.map((hotel, idx) => {
          const isLargeScreen = window.innerWidth > 768;
          const d = isLargeScreen ? Math.min(Math.abs(idx - current), items.length - Math.abs(idx - current)) : 0;
          const scale = isLargeScreen ? (d === 0 ? 1 : d === 1 ? 0.85 : d === 2 ? 0.7 : 0.6) : 1;
          const zIndex = isLargeScreen ? (d === 0 ? 30 : d === 1 ? 20 : 10) : 1;

          return (
            <div key={`${hotel.id}-${idx}`}>
              <div
                style={{
                  height: 280,
                  margin: "16px 8px",
                  transform: `scale(${scale})`,
                  transition: "transform 0.3s ease",
                  position: "relative",
                  borderRadius: 12,
                  overflow: "hidden",
                  background: "linear-gradient(135deg,#667eea,#764ba2)",
                  color: "#fff",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                  zIndex,
                  cursor: "pointer",
                }}
                onClick={() => window.location.assign(`/hotels/${hotel.id}`)}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={hotel.thumbnail}
                    alt={hotel.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                <div
                  style={{
                    position: "relative",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: 12,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 6,
                      fontSize: 12,
                      opacity: 0.95,
                    }}
                  >
                    <span
                      style={{
                        background: "rgba(0,0,0,0.35)",
                        padding: "4px 8px",
                        borderRadius: 999,
                      }}
                    >
                      {hotel.location}
                    </span>
                    <span>{hotel.duration}</span>
                  </div>
                  <h3 style={{ margin: 0, fontSize: 24, textAlign: "left" }}>{hotel.name}</h3>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 6,
                      fontSize: 13,
                    }}
                  >
                    <span>узнать подробнее</span>
                    <span style={{ color: "#fbbf24" }}>
                      {"★".repeat(Math.floor(hotel.stars)) +
                        "☆".repeat(5 - Math.floor(hotel.stars))}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
