import React from "react";
import "./Home.css";
import Baner from "../components/Baner";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Baner />
      <div className="container">
        <section className="hero">
          <div className="hero-content">
            <h1>Добро пожаловать в мир путешествий</h1>
            <p>Откройте для себя удивительные места по всему миру</p>
            <Link className="cta-button" to="/tours">Начать путешествие</Link>
          </div>
        </section>

        <section className="features">
          <h2>Почему выбирают нас</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✈️</div>
              <h3>Лучшие цены</h3>
              <p>Гарантируем самые выгодные предложения на рынке</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏨</div>
              <h3>Качественные отели</h3>
              <p>Тщательно отобранные отели для вашего комфорта</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Индивидуальный подход</h3>
              <p>Персональное планирование каждого путешествия</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Безопасность</h3>
              <p>Полная защита и поддержка во время поездки</p>
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="destinations">
          <h2>Популярные направления</h2>
          <div className="destinations-grid">
            <div className="destination-card">
              <div className="destination-image">
                <div className="image-placeholder">🏖️</div>
              </div>
              <div className="destination-content">
                <h3>Турция</h3>
                <p>От 45,000 ₽</p>
                <Link to="/tours">Подробнее</Link>
              </div>
            </div>
            <div className="destination-card">
              <div className="destination-image">
                <div className="image-placeholder">🏛️</div>
              </div>
              <div className="destination-content">
                <h3>Греция</h3>
                <p>От 55,000 ₽</p>
                <Link to="/countries">Подробнее</Link>
              </div>
            </div>
            <div className="destination-card">
              <div className="destination-image">
                <div className="image-placeholder">🌴</div>
              </div>
              <div className="destination-content">
                <h3>Тайланд</h3>
                <p>От 65,000 ₽</p>
                <Link to="/hotels">Подробнее</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact">
          <div className="contact-content">
            <h2>Готовы к путешествию?</h2>
            <p>Оставьте заявку и мы подберем идеальный тур для вас</p>
            <div className="contact-form">
              <input type="text" placeholder="Ваше имя" />
              <input type="tel" placeholder="Телефон" />
              <button>Отправить заявку</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;