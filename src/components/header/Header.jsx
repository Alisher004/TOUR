import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import phone from "../../assets/phone.svg";
import location from "../../assets/location.svg";
import strelka from "../../assets/strelka.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsSuccess(false);
  };
  const closeModal = () => setIsModalOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", phone: "" });
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setIsModalOpen(false);
    }, 3000);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <header className="header">
      <div className="container">
        <div className="info-header">
          <a href="/" onClick={closeMenu}>
            <img src={logo} alt="" className="hlogo" />
          </a>

          {/* Навигация */}
          <ul className={`navigation ${isMenuOpen ? "active" : ""}`}>
            <li><a href="/tour-selection" onClick={closeMenu}>Подбор тура</a></li>
            <li><a href="/tours" onClick={closeMenu}>Горящие туры</a></li>
            <li className="hide-on-medium"><a href="/countries" onClick={closeMenu}>Страны</a></li>
            <li className="hide-on-medium"><a href="/hotels" onClick={closeMenu}>Отели</a></li>
            <li><a href="/about" onClick={closeMenu}>О нас</a></li>
          </ul>

          <div className="icons">
            <button onClick={openModal}>оставить заявку</button>

            {/* Phone Icon */}
            <div style={{ position: "relative" }}>
              <img
                src={phone}
                alt=""
                onClick={() => {
                  setShowPhonePopup(!showPhonePopup);
                  setShowLocationPopup(false);
                }}
              />
              {showPhonePopup && (
                <div className="popup">
                  <p onClick={() => handleCopy("+996 555 123 456")}>📞 +996 555 123 456</p>
                  {copied && <small style={{ color: "green" }}>Скопировано!</small>}
                </div>
              )}
            </div>

            {/* Location Icon */}
            <div style={{ position: "relative" }}>
              <img
                src={location}
                alt=""
                onClick={() => {
                  setShowLocationPopup(!showLocationPopup);
                  setShowPhonePopup(false);
                }}
              />
              {showLocationPopup && (
                <div className="popup">
                  <p>📍 Бишкек, Турусбекова 109/1</p>
                </div>
              )}
            </div>

            <div className="mobile-menu-toggle" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>X</button>
            <h1>Перезвонить вам?</h1>
            <p>Оставьте свой номер и наш специалист свяжется с вами</p>

            {!isSuccess ? (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Ваш телефон"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                <button type="submit" className="submit">
                  Отправить <img src={strelka} alt="" />
                </button>
              </form>
            ) : (
              <h1 className="success-text">✅ Заявка отправлена!</h1>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
