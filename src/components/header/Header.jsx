import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import phone from "../../assets/phone.svg";
import location from "../../assets/location.svg";
import strelka from "../../assets/strelka.svg";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const NAV_ITEMS = [
    { href: "/", label: "Главная" },
    { href: "/tours", label: "Туры" },
    { href: "/hotels", label: "Отели" },
    { href: "/countries", label: "Страны" },
    { href: "/about", label: "О нас" },
    { href: "/contacts", label: "Контакты" },
  ];
  const visible = NAV_ITEMS.slice(0, 4);
  const overflow = NAV_ITEMS.slice(4);

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
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="" className="hlogo" />
          </Link>
          <ul className={`navigation ${isMenuOpen ? "active" : ""}`}>
            {visible.map((i) => (
              <li key={i.href}>
                <Link to={i.href} onClick={closeMenu}>
                  {i.label}
                </Link>
              </li>
            ))}
            {overflow.length > 0 && (
              isMenuOpen ? (
                overflow.map((i) => (
                  <li key={i.href}>
                    <Link to={i.href} onClick={closeMenu}>
                      {i.label}
                    </Link>
                  </li>
                ))
              ) : (
                <li style={{ position: "relative" }}>
                  <span className="more-trigger">Еще</span>
                  <div className="more-menu">
                    {overflow.map((i) => (
                      <Link key={i.href} to={i.href} onClick={closeMenu} className="more-item">
                        {i.label}
                      </Link>
                    ))}
                  </div>
                </li>
              )
            )}
          </ul>
          <div className="icons">
            <button onClick={openModal}>оставить заявку</button>
            <img src={phone} alt="" />
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
