import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toursData from "../../data/tours";
import "./Tours.css";

export default function Tours() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const countryFilter = searchParams.get("country");

  const filteredTours = useMemo(() => {
    if (!countryFilter) return toursData;
    return toursData.filter((t) => t.countryCode === countryFilter);
  }, [countryFilter]);

  const clearFilter = () => {
    searchParams.delete("country");
    navigate({ pathname: location.pathname, search: searchParams.toString() });
  };

  return (
    <div className="tours-container container">
      <h1>ГОРЯЩИЕ ТУРЫ</h1>
      <h4>Поймайте момент</h4>
      {countryFilter && (
        <div className="filter-bar">
          <span>Фильтр: {countryFilter}</span>
          <button onClick={clearFilter}>Тазалоо</button>
        </div>
      )}
      <div className="tours-scroll">
        {filteredTours.length === 0 ? (
          <div style={{ padding: 12, color: "#6b7280" }}>
            Турлар табылган жок
          </div>
        ) : (
          filteredTours.map((tour) => {
            const stars =
              "★".repeat(Math.floor(tour.rating)) +
              "☆".repeat(5 - Math.floor(tour.rating));
            return (
              <div
                key={tour.id}
                className="tour-card image-card"
                onClick={() => navigate(`/tours/${tour.id}`)}
              >
                <div className="emoji-bg" aria-hidden>
                  {tour.image.startsWith("http") ? (
                    <img src={tour.image} alt={tour.title} className="cartimage"/>
                  ) : (
                    <span style={{ fontSize: "2rem" }}>{tour.image}</span>
                  )}
                </div>

                <div className="image-overlay">
                  <div className="overlay-top">
                    <span className="badge">{tour.location}</span>
                  </div>
                  <div className="overlay-bottom">
                    <h3>{tour.title}</h3>
                    <div className="meta">
                      <span>{tour.duration}</span>
                      <span>
                        {tour.price.toLocaleString()} {tour.currency}
                      </span>
                    </div>
                    <div className="tour-bottom">
                      <span className="stars">{stars}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/tours/${tour.id}`);
                        }}
                      >
                        Тандоо
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
