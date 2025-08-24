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

      <section></section>

    </div>
  );
}

export default Contact;
