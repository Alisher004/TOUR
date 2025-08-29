import React from "react";
import reviewsvg from "../../assets/review.png"

const REVIEWS = [
  { id: 1, name: "Мария С. из Москвы", text: "Невероятное путешествие! Спасибо за организацию моей поездки в Париж. Все было просто идеально - от отелей до экскурсий. Не могу дождаться следующего приключения с вашей турфирмой", rating: 5 },
  { id: 2, name: "Александр Г. из Санкт-Петербурга", text: "Путешествие в Таиланд оказалось невероятным благодаря вашим услугам. Профессиональное планирование, отличные рекомендации по местам для посещения и великолепный выбор отелей. Обязательно вернусь к вам снова.", rating: 4 },
  { id: 3, name: "Екатерина Л. из Екатеринбурга", text: "Спасибо за незабываемый отдых на Бали! Все было под контролем, начиная с бронирования и заканчивая возвращением домой. Отличная коммуникация и внимание к деталям создали идеальное путешествие.", rating: 5 },
  { id: 4, name: "Ольга И. из Новосибирска", text: "Ваша турфирма стала моим надежным проводником в мир :) После поездки в Японию я почувствовала себя настоящим путешественником. Отличная организация, забота о клиентах и интересные маршруты делают вас лучшими! Большое спасибо!", rating: 5 },
  { id: 5, name: "Асема М.", text: "Баасы-сымааты эң ылайыктуу. Кийинки эс алууну да ушул компания аркылуу алам.", rating: 4 },
  { id: 6, name: "Рустам У.", text: "Экскурсиялар абдан кызыктуу өттү, гиддер билимдүү жана маданияттуу.", rating: 5 },
  { id: 7, name: "Жазгүл С.", text: "Балдар менен саякатка ыңгайлуу шарттар түзүлгөнүн жактырдым.", rating: 5 },
  { id: 8, name: "Мирлан Э.", text: "Маршруттар коопсуз, автобус таза жана ыңгайлуу болду.", rating: 4 },
  { id: 9, name: "Алина Ч.", text: "Кызмат көрсөтүү жогорку деңгээлде, кайра келем деп турам.", rating: 5 },
  { id: 10, name: "Элдар Т.", text: "Кызматкерлердин мамилеси жагымдуу, сунуштайм!", rating: 5 },
];

function Stars({ value }) {
  return <span style={{ color: "#EC1C24" }}>{"★".repeat(value) + "☆".repeat(5 - value)}</span>;
}

export default function Reviews() {
  const items = REVIEWS;
  const durationSec = Math.max(20, items.length * 6);

  return (
    <div className="container reviews-section">
      <img src={reviewsvg} alt="" className="hsvg"/>
      <h2>Отзывы</h2>
      <p>Впечатления наших путешественников</p>

      <div className="reviews-marquee">
        <div
          className="marquee-track"
          style={{ animationDuration: `${durationSec}s` }}
        >
          {[...items, ...items].map((r, idx) => (
            <div className="review-card" key={`${r.id}-${idx}`}>
              <div className="review-top" style={{display: "flex", flexDirection: "column"}}>
                <img width={50} src="https://cdn-icons-png.flaticon.com/512/10100/10100101.png" alt="" />
                <Stars value={r.rating} />
                <strong>{r.name}</strong>
              </div>
              <p className="review-text">{r.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .reviews-section { margin: 100px auto; }
        .reviews-section h2 { font-weight: 700; font-size: 24px; margin-bottom: 12px; }
        .reviews-marquee { overflow: hidden; position: relative; margin: 40px auto;}
        .marquee-track { display: flex; gap: 12px; width: max-content; animation-name: reviews-scroll-left; animation-timing-function: linear; animation-iteration-count: infinite; will-change: transform; }
        @keyframes reviews-scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .review-card { min-width: 280px; max-width: 320px; border: 1px solid #eee; border-radius: 10px; padding: 16px; background: #F8F8F8; box-shadow: 0 3px 10px rgba(0,0,0,0.04); display: flex; flex-direction: column; }
        .review-top { display: flex; justify-content: space-between; margin-bottom: 8px; align-items: center; }
        .review-text { margin: 0; color: #374151; line-height: 1.5; text-align: left; }
        @media (min-width: 769px) and (max-width: 1024px) { .review-card { min-width: 240px; } .reviews-marquee { padding: 0 10px; } }
        @media (min-width: 480px) and (max-width: 768px) { .review-card { min-width: 200px; } .review-text { font-size: 14px; } }
        @media (max-width: 479px) { .review-card { min-width: 180px; } .review-text { font-size: 12px; } }
      `}</style>
    </div>
  );
}
