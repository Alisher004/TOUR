import React from "react";
import "./style.css";
import contact from "../../assets/contact.png";

function Contact() {
  return (
    <div className="Contact">
      <div className="info-contact">
        <img src={contact} alt="" />
        <div className="fon"></div>
        <div className="contact-box">
          <h1>контакты</h1>
          <span>Свяжитесь с нами и создайте свое незабываемое путешествие</span>
        </div>
      </div>

      <section class="contact-section">
        <h2>СВЯЖИТЕСЬ С НАМИ</h2>
        <div class="contact-box">
          <div class="contact-item">
            <h3>МЫ В СОЦ СЕТЯХ</h3>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-telegram"></i>
              </a>
              <a href="#">
                <i class="fab fa-whatsapp"></i>
              </a>
              <a href="#">
                <i class="fab fa-odnoklassniki"></i>
              </a>
              <a href="#">
                <i class="fab fa-vk"></i>
              </a>
            </div>
          </div>

          <div class="contact-item">
            <h3>КОНТАКТЫ</h3>
            <p>+8 (495) 626-26-96</p>
            <p>+8 (925) 826-26-96</p>
            <p>
              <a href="mailto:anextourchertanovo@gmail.com">
                anextourchertanovo@gmail.com
              </a>
            </p>
          </div>

          <div class="contact-item">
            <h3>АДРЕС</h3>
            <p>Москва, Россошанский проезд, Дом 3, (1-й этаж)</p>
          </div>
        </div>

        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.365565208597!2d37.60148341593053!3d55.60331961069464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab4b8c3e836d9%3A0x97e29546d04a3f84!2z0KLQtdC80YHQutCw0Y8g0L3QsNCx0LXRgNC90L7QtSDQv9GA0L7QstC-0LTQtdC70LXQutGB0Yw!5e0!3m2!1sru!2sru!4v1692957347721!5m2!1sru!2sru"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contact;
