import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import phone from "../../assets/phone.svg";
import location from "../../assets/location.svg";
import strelka from "../../assets/strelka.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
    setIsSuccessModalOpen(true);
    setTimeout(() => {
      setIsSuccessModalOpen(false);
    }, 3000);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="info-header">
          <a href="/" onClick={closeMenu}>
            <img src={logo} alt="" className="hlogo" />
          </a>
          <ul className={`navigation ${isMenuOpen ? "active" : ""}`}>
            <li>
              <a href="" onClick={closeMenu}>
                Подбор тура
              </a>
            </li>
            <li>
              <a href="" onClick={closeMenu}>
                Горящие туры
              </a>
            </li>
            <li>
              <a href="" onClick={closeMenu}>
                Страны
              </a>
            </li>
            <li>
              <a href="" onClick={closeMenu}>
                Отели
              </a>
            </li>
            <li>
              <a href="" onClick={closeMenu}>
                О нас
              </a>
            </li>
          </ul>
          <div className="icons">
            <button onClick={openModal}>оставить заявку</button>
            <a href="/contacts">
            <img src={phone} alt="" />
            </a>
            <img src={location} alt="" />
            <div className="mobile-menu-toggle" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              X
            </button><br />
            <h1>Перезвонить  вам?</h1>
            <p>Оставьте свой номер 
            и наш специалист свяжется с вами</p>
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
              <button type="submit" className="submit">Отправить
                <img src={strelka} alt="" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="modal success-modal">
          <div className="modal-content">
            <p>Заявка отправлена!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
