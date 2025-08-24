import React from "react";
import "./style.css";

export default function Countries() {
  const countries = [
    {
      id: 1,
      name: "Турция",
      image: "🇹🇷",
      description: "Солнечные пляжи и древние памятники",
      tours: 45,
      price: "от 80,000 сом"
    },
    {
      id: 2,
      name: "Египет",
      image: "🇪🇬",
      description: "Пирамиды и Красное море",
      tours: 32,
      price: "от 65,000 сом"
    },
    {
      id: 3,
      name: "ОАЭ",
      image: "🇦🇪",
      description: "Роскошь и современность",
      tours: 28,
      price: "от 120,000 сом"
    },
    {
      id: 4,
      name: "Таиланд",
      image: "🇹🇭",
      description: "Тропические острова и буддийские храмы",
      tours: 38,
      price: "от 90,000 сом"
    },
    {
      id: 5,
      name: "Мальдивы",
      image: "🇲🇻",
      description: "Райские острова и кристально чистое море",
      tours: 15,
      price: "от 200,000 сом"
    },
    {
      id: 6,
      name: "Греция",
      image: "🇬🇷",
      description: "Античная история и острова Эгейского моря",
      tours: 42,
      price: "от 110,000 сом"
    },
    {
      id: 7,
      name: "Испания",
      image: "🇪🇸",
      description: "Фламенко, коррида и средиземноморское побережье",
      tours: 35,
      price: "от 130,000 сом"
    },
    {
      id: 8,
      name: "Италия",
      image: "🇮🇹",
      description: "Искусство, кухня и романтические города",
      tours: 48,
      price: "от 140,000 сом"
    },
    {
      id: 9,
      name: "Франция",
      image: "🇫🇷",
      description: "Париж, вино и французская кухня",
      tours: 40,
      price: "от 150,000 сом"
    },
    {
      id: 10,
      name: "Чехия",
      image: "🇨🇿",
      description: "Прага, замки и чешское пиво",
      tours: 25,
      price: "от 95,000 сом"
    }
  ];

  return (
    <div className="countries">
      <div className="container">
        <div className="countries-header">
          <h1>Страны</h1>
          <p>Откройте для себя удивительные направления по всему миру</p>
        </div>
        
        <div className="countries-grid">
          {countries.map(country => (
            <div key={country.id} className="country-card">
              <div className="country-flag">
                <span className="flag-emoji">{country.image}</span>
              </div>
              <div className="country-info">
                <h3>{country.name}</h3>
                <p>{country.description}</p>
                <div className="country-meta">
                  <span className="tours-count">{country.tours} туров</span>
                  <span className="price">{country.price}</span>
                </div>
                <button className="explore-btn">
                  Исследовать
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 