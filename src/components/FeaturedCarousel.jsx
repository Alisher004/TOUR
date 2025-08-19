import React, { useMemo, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tours from "../data/tours";

function computeCircularDistance(a, b, length) {
  const diff = Math.abs(a - b);
  return Math.min(diff, length - diff);
}

export default function FeaturedCarousel() {
  const [current, setCurrent] = useState(0);
  const items = useMemo(() => {
    const list = [...tours, ...tours];
    return list.slice(0, Math.max(10, list.length));
  }, []);

  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 5,
    speed: 400,
    arrows: true,
    dots: false,
    focusOnSelect: true,
    beforeChange: (_old, next) => setCurrent(next),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 900, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container" style={{ paddingTop: 24, paddingBottom: 24 }}>
      <h2 style={{ textAlign: "center", marginBottom: 12 }}>Популярные Отели</h2>
      <p>уют и роскошь в лучших отелях мира</p>
      <Slider {...settings}>
        {items.map((tour, idx) => {
          const d = computeCircularDistance(idx, current, items.length);
          const scale = d === 0 ? 1 : d === 1 ? 0.85 : d === 2 ? 0.7 : 0.6;
          const zIndex = d === 0 ? 30 : d === 1 ? 20 : 10;
          return (
            <div key={`${tour.id}-${idx}`}>
              <div
                style={{
                  height: 260,
                  margin: "16px 8px",
                  transform: `scale(${scale})`,
                  transformOrigin: "center center",
                  transition: "transform 300ms ease",
                  position: "relative",
                  borderRadius: 12,
                  overflow: "hidden",
                  background: "linear-gradient(135deg,#667eea,#764ba2)",
                  color: "#fff",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                  zIndex,
                  cursor: "pointer",
                }}
                onClick={() => window.location.assign(`/tours/${tour.id}`)}
              >
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 96, opacity: 0.25 }}>
                  {tour.image}
                </div>
                <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 12, opacity: 0.95 }}>
                    <span style={{ background: "rgba(0,0,0,0.35)", padding: "4px 8px", borderRadius: 999 }}>{tour.location}</span>
                    <span>{tour.duration}</span>
                  </div>
                  <h3 style={{ margin: 0, fontSize: 16 }}>{tour.title}</h3>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 13 }}>
                    <span>
                      {tour.price.toLocaleString()} {tour.currency}
                    </span>
                    <span style={{ color: "#fbbf24" }}>
                      {"★".repeat(Math.floor(tour.rating)) + "☆".repeat(5 - Math.floor(tour.rating))}
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