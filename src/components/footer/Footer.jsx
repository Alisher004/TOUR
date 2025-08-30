import React from "react";
import footerimg from "../../assets/footer.png";
import strelka from "../../assets/strelka.svg";
import logo2 from "../../assets/logo2.svg";
import email from "../../assets/email.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/insta.svg";
import telegram from "../../assets/telegram.svg";
import whatsapp from "../../assets/whatsapp.svg";
import ok from "../../assets/ok.svg";
import wk from "../../assets/wk.svg";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="ftop">
        <img src={footerimg} alt="" className="footerimg" />
        <form action="">
          <div className="box">
            <h3>МЫ ПОМОЖЕМ СОЗДАТЬ ВАШЕ ПУТЕШЕСТВИЕ</h3>
            <p>Оставьте заявку на подбор идеального путешествия</p>
            <div className="noname">
              <input type="text" placeholder="Имя" required /> <hr />
              <input type="text" placeholder="Телефон" required /> <hr />
            </div>
            <button>
              отправить
              <img src={strelka} alt="" />
            </button>
          </div>
        </form>
      </div>
      
      <div className="fbottom">
        <div className="container">
          <div className="footer-top">
            <img src={logo2} alt="" className="hlogo" />
            <div className="item">
              <span>Узнавайте о горящих турах первыми</span>
              <div className="email2">
                <img src={email} alt="" />
                <div>
                <input type="email" placeholder="email" required />
                </div>
              </div>
            </div>
          </div>
          <hr className="hr" />

          <ul>
            <li>
              <a href="">Подбор тура</a>
            </li>
            <li>
              <a href="">Горящие туры</a>
            </li>
            <li>
              <a href="">Страны и отели</a>
            </li>
            <li>
              <a href="">Priority</a>
            </li>
            <li>
              <a href="">оплата</a>
            </li>
            <li>
              <a href="">отзывы</a>
            </li>
            <li>
              <a href="">О нас</a>
            </li>
            <li>
              <a href="/contacts">контакты</a>
            </li>
          </ul>
          <hr className="hr" />

          <div className="soc">
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

          <center className="center">
            2023 © Anex Tour - Туристическая компания
          </center>
        </div>
      </div>
    </div>
  );
}

export default Footer;
