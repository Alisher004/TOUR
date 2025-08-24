// AboutUs.jsx
import React from "react";
import "./style.css";
import girlImage from "../../assets/about1.png"; 
import poolImage from "../../assets/about2.png"; 
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/insta.svg";
import telegram from "../../assets/telegram.svg";
import whatsapp from "../../assets/whatsapp.svg";
import ok from "../../assets/ok.svg";
import wk from "../../assets/wk.svg";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-header">
        <p className="subtitle">We</p>
        <h2>О НАС</h2>
        <p className="tagline">ВДОХНОВЛЯЕМ МИР НА ПУТЕШЕСТВИЯ</p>
      </div>

      <div className="about-main">
        <div className="about-text">
          <p className="large-letter">
            МЫ{" "}
            <span>
              команда профессионалов, влюбленных в искусство путешествий. Наша
              история началась с мечты о том, чтобы сделать каждое путешествие
              незабываемым, каждое приключение уникальным.
            </span>
          </p>
          <p>
            Наша миссия — сделать путешествия доступными и незабываемыми. Мы
            предлагаем вам не просто туры, а волшебные истории, которые будут
            жить в вашем сердце навсегда...
          </p>
        </div>
        <div className="about-image">
          <img src={girlImage} alt="Girl working on laptop" />
        </div>
      </div>

      <div className="about-extra">
        <div className="extra-image">
          <img src={poolImage} alt="Person at pool" />
        </div>
        <div className="extra-text">
          <p>
            Мы гордимся нашей командой опытных специалистов, каждый из которых
            разделяет страсть к туризму...
          </p>
          <p>
            Присоединяйтесь к нам в этом захватывающем путешествии! Мы готовы
            подарить вам моменты радости...
          </p>
        </div>
      </div>

      <footer className="about-footer">
        <div className="contact-socials">
          <h2>СВЯЗАТЬСЯ С НАМИ</h2>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="" />
            </a>
            <a
              href="https://web.telegram.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={telegram} alt="" />
            </a>
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp} alt="" />
            </a>
            <a href="https://ok.ru" target="_blank" rel="noopener noreferrer">
              <img src={ok} alt="" />
            </a>
            <a
              href="https://m.vk.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={wk} alt="" />
            </a>
          </div>
        </div>
        <div className="contact-info">
          <h2>КОНТАКТЫ</h2>
          <p>+8 (495) 626-26-96</p>
          <p>+8 (925) 826-26-96</p>
          <p>ANEXTOURCHERTANOVO@GMAIL.COM</p>
        </div>
        <div className="contact-address">
          <h2>АДРЕС</h2>
          <p>БИШКЕК, ТУРУСБЕКОВА 109/1, (4-Й ЭТАЖ)</p>
        </div>
      </footer>
      <hr />
    </section>
  );
};

export default AboutUs;
