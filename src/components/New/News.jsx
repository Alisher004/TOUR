import React from "react";
import new1 from "../../assets/new1.png";
import new2 from "../../assets/new2.png";
import new3 from "../../assets/new3.png";
import new4 from "../../assets/new4.png";
import new5 from "../../assets/new5.png";
import new6 from "../../assets/new6.png";
import "./style.css";

const newsData = [
  {
    title: "ОТДЫХ С ДЕТЬМИ: О ЧЕМ НУЖНО ПОМНИТЬ В ПУТЕШЕСТВИИ",
    image: new1,
    size: "large",
  },
  {
    title: "ТОП-10 УНИКАЛЬНЫХ И ЗАВОРАЖИВАЮЩИХ МЕСТ В ОАЭ",
    image: new2,
  },
  {
    title: "ОТДЫХ, БЛИЗКИЙ К ПРИРОДЕ И ЭКОЛОГИИ",
    image: new3,
  },
  {
    title: "БОГАТСТВО КУЛЬТУРНЫХ И ИСТОРИЧЕСКИХ СОКРОВИЩ РАЗНЫХ СТРАН",
    image: new4,
  },
  {
    title: "КАК СДЕЛАТЬ ПУТЕШЕСТВИЕ НЕЗАБЫВАЕМЫМ ДЛЯ ВСЕХ",
    image: new5,
  },
  {
    title: "ПУТЕШЕСТВИЯ, КОТОРЫЕ ПРИВЕДУТ ВАС В МИР ВЫСОТ, ГЛУБИН И СКОРОСТИ",
    image: new6,
    size: "large",

  },
];

export default function NewsSection() {
  return (
    <section className="news-section container">
      <h2 className="title">НОВОСТИ</h2>
      <p className="subtitle">СОБЫТИЯ В МИРЕ ТУРИЗМА</p>

      <div className="news-grid">
        {newsData.map((item) => (
          <div
            key={item.title}
            className={`news-card ${item.size === "large" ? "large" : ""}`}
          >
            <img src={item.image} alt={`Новость: ${item.title}`} />
            <div className="overlay">
              <h3>{item.title}</h3>
              <button>читать ➝</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}