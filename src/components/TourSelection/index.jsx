import React, { useState } from "react";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";
import p7 from "../../assets/p7.png";
import hotel4 from "../../assets/hotel4.png";
import done from "../../assets/done.png";
import baner2 from "../../assets/baner2.png";
import "./style.css";
import Baner from "../Baner";

const HotelListings = () => {
  const [sortBy, setSortBy] = useState("recommendations");
  const [filters, setFilters] = useState({
    season: "all",
    features: [],
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false); // модал үчүн

  const hotels = [
    {
      id: 1,
      country: "Греция",
      location: "остров Родос",
      name: "Casa Cook",
      rating: 5,
      score: 8.5,
      reviews: 250,
      dateFrom: "3.05.2024",
      dateTo: "8.05.2024",
      days: 6,
      mealPlan: "All inclusive ultra",
      season: "summer",
      features: [
        "близко к центру",
        "3 бассейна при отеле",
        "рекомендуем для пар",
        "частный пляж",
      ],
      price: 80000,
      currency: "₽",
      period: "за 1",
      image: p1,
    },
    {
      id: 2,
      country: "Испания",
      location: "остров Тенерифе",
      name: "RedLevel at Gran Meliá Palacio de Isora",
      rating: 4,
      score: 8.2,
      reviews: 522,
      dateFrom: "28.12.2023",
      dateTo: "04.01.2024",
      days: 8,
      mealPlan: "All inclusive",
      season: "winter",
      features: [
        "семейный отдых",
        "элегантные номера",
        "частный, песчано-галечный пляж"
      ],
      price: 100000,
      currency: "₽",
      period: "за 1",
      image: p2,
    },
    {
      id: 3,
      country: "Франция",
      location: "Лазурный берег",
      name: "Tiara Yaktsa",
      rating: 5,
      score: 9.5,
      reviews: 602,
      dateFrom: "29.03.2024",
      dateTo: "07.04.2024",
      days: 9,
      mealPlan: "All inclusive ultra",
      season: "spring",
      features: [
        "18 лет и старше",
        "люксовые номера",
        "частный пляж"
      ],
      price: 350000,
      currency: "₽",
      period: "за 2",
      image: p3,
    },
    {
      id: 4,
      country: "Испания",
      location: "Майорка",
      name: "Hotel Las Arenas",
      rating: 4,
      score: 8.3,
      reviews: 250,
      dateFrom: "07.04.2024",
      dateTo: "14.04.2024",
      days: 8,
      mealPlan: "2-х разовое питание",
      season: "summer",
      features: [
        "красивый песчаный пляж рядом с отелем",
        "очень хорошая и разнообразная кухня",
      ],
      price: 68000,
      currency: "₽",
      period: "за 1",
      image: p4,
    },
    {
      id: 5,
      country: "Греция",
      location: "остров Родос",
      name: "Casa Cook",
      rating: 5,
      score: 8.5,
      reviews: 250,
      dateFrom: "3.05.2024",
      dateTo: "8.05.2024",
      days: 6,
      mealPlan: "All inclusive ultra",
      season: "summer",
      features: [
        "близко к центру",
        "3 бассейна при отеле",
        "рекомендуем для пар",
        "частный пляж",
      ],
      price: 80000,
      currency: "₽",
      period: "за 1",
      image: p5,
    },
    {
      id: 6,
      country: "Испания",
      location: "остров Тенерифе",
      name: "RedLevel at Gran Meliá Palacio de Isora",
      rating: 4,
      score: 8.2,
      reviews: 522,
      dateFrom: "28.12.2023",
      dateTo: "04.01.2024",
      days: 8,
      mealPlan: "All inclusive",
      season: "winter",
      features: [
        "семейный отдых",
        "элегантные номера",
        "частный, песчано-галечный пляж",
      ],
      price: 100000,
      currency: "₽",
      period: "за 1",
      image: hotel4,
    },
    {
      id: 7,
      country: "Франция",
      location: "Лазурный берег",
      name: "Tiara Yaktsa",
      rating: 5,
      score: 9.5,
      reviews: 602,
      dateFrom: "29.03.2024",
      dateTo: "07.04.2024",
      days: 9,
      mealPlan: "All inclusive ultra",
      season: "spring",
      features: [
        "18 лет и старше",
        "люксовые номера",
        "частный пляж",
      ],
      price: 350000,
      currency: "₽",
      period: "за 2",
      image: p6,
    },
    {
      id: 8,
      country: "Испания",
      location: "Майорка",
      name: "Hotel Las Arenas",
      rating: 4,
      score: 8.3,
      reviews: 250,
      dateFrom: "07.04.2024",
      dateTo: "14.04.2024",
      days: 8,
      mealPlan: "2-х разовое питание",
      season: "summer",
      features: [
        "красивый песчаный пляж рядом с отелем",
        "очень хорошая и разнообразная кухня",
      ],
      price: 68000,
      currency: "₽",
      period: "за 1",
      image: p7,
    }  ];

  const handleFilterChange = (filterType, value) => {
    if (filterType === "season") {
      setFilters((prev) => ({ ...prev, season: value }));
    } else if (filterType === "features") {
      setFilters((prev) => {
        if (prev.features.includes(value)) {
          return {
            ...prev,
            features: prev.features.filter((f) => f !== value),
          };
        } else {
          return { ...prev, features: [...prev.features, value] };
        }
      });
    }
  };

  const filteredHotels = hotels.filter((hotel) => {
    if (filters.season !== "all" && hotel.season !== filters.season)
      return false;

    if (filters.features.length > 0) {
      return filters.features.every((feature) =>
        hotel.features.includes(feature)
      );
    }

    return true;
  });

  return (
    <div>
        <Baner
        image={baner2}
        title="Подбор тура"
        subtitle="Идеальное путешествие начинается здесь"
      />
    <div className="hotel-listings">
      <header className="listings-header">
        <h1>
          НАЙДЕННЫЕ ВАРИАНТЫ{" "}
          <span className="offer-count">({filteredHotels.length})</span>
        </h1>

        <div className="sort-filter-container">
          <div className="sorting">
            <span>Сортировать: </span>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="recommendations">рекомендации для вас</option>
              <option value="price-asc">цена (по возрастанию)</option>
              <option value="price-desc">цена (по убыванию)</option>
              <option value="rating">рейтинг</option>
            </select>
          </div>

          {/* кнопка для фильтра */}
          <button 
            className="filter-btn" 
            onClick={() => setIsFilterOpen(true)}
          >
            Фильтр
          </button>
        </div>
      </header>

      {/* МОДАЛ ФИЛЬТРА */}
      {isFilterOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Фильтры</h2>
              <button onClick={() => setIsFilterOpen(false)}>✕</button>
            </div>

            <div className="modal-content">
              <div className="filter-group">
                <h4>Сезон</h4>
                <label>
                  <input
                    type="radio"
                    name="season"
                    value="all"
                    checked={filters.season === "all"}
                    onChange={() => handleFilterChange("season", "all")}
                  />
                  Все сезоны
                </label>
                <label>
                  <input
                    type="radio"
                    name="season"
                    value="summer"
                    checked={filters.season === "summer"}
                    onChange={() => handleFilterChange("season", "summer")}
                  />
                  Лето 2024
                </label>
                <label>
                  <input
                    type="radio"
                    name="season"
                    value="winter"
                    checked={filters.season === "winter"}
                    onChange={() => handleFilterChange("season", "winter")}
                  />
                  Зима 2023/2024
                </label>
              </div>

              <div className="filter-group">
                <h4>Особенности</h4>
                <label>
                  <input
                    type="checkbox"
                    value="близко к центру"
                    checked={filters.features.includes("близко к центру")}
                    onChange={() =>
                      handleFilterChange("features", "близко к центру")
                    }
                  />
                  близко к центру
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="3 бассейна при отеле"
                    checked={filters.features.includes("3 бассейна при отеле")}
                    onChange={() =>
                      handleFilterChange("features", "3 бассейна при отеле")
                    }
                  />
                  3 бассейна при отеле
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="рекомендуем для пар"
                    checked={filters.features.includes("рекомендуем для пар")}
                    onChange={() =>
                      handleFilterChange("features", "рекомендуем для пар")
                    }
                  />
                  рекомендуем для пар
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="частный пляж"
                    checked={filters.features.includes("частный пляж")}
                    onChange={() =>
                      handleFilterChange("features", "частный пляж")
                    }
                  />
                  частный пляж
                </label>
              </div>
            </div>

            <div className="modal-footer">
              <button onClick={() => setIsFilterOpen(false)}>Применить</button>
            </div>
          </div>
        </div>
      )}

      <div className="hotels-container">
        {filteredHotels.map((hotel) => (
          <div key={hotel.id} className="hotel-card">
            <div className="hotel-image">
              <img src={hotel.image} alt={hotel.name} />
            </div>

            <div className="hotel-info">
              <div className="location">
                {hotel.country}, {hotel.location}
              </div>
              <h2 className="hotel-name">{hotel.name}</h2>

              <div className="rating-container">
                <div className="stars">
                  {"★".repeat(hotel.rating)}
                  {"☆".repeat(5 - hotel.rating)}
                </div>
                <div className="score-reviews">
                  <span className="score">{hotel.score}</span>
                  <span className="reviews">{hotel.reviews} отзывов</span>
                </div>
              </div>

              <div className="dates">
                {hotel.dateFrom} - {hotel.dateTo} ({hotel.days} дней)
              </div>

              <div className="meal-plan">{hotel.mealPlan}</div>

              {hotel.features.length > 0 && (
                <div className="features">
                  <ul className="ul">
                    {hotel.features.map((feature, index) => (
                      <li key={index}>
                        <img src={done} alt="" className="done" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="price-container">
              <div className="season-tag">
                {hotel.season === "summer" ? "Лето 2024" : "Зима 2023/2024"}
              </div>
              <div>
                <div className="price">
                  {hotel.price.toLocaleString("ru-RU")} {hotel.currency}/
                  <div className="period">{hotel.period}</div>
                </div>
                <button className="details-btn">подробнее</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default HotelListings;
