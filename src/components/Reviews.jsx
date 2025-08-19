import React, { useMemo } from "react";

const REVIEWS = [
  { id: 1, name: "Айжан Т.", text: "Өтө мыкты уюштурулган тур! Бардыгы график боюнча болуп, абдан ыраазы болдук.", rating: 5 },
  { id: 2, name: "Бектур А.", text: "Гиддер сыпайы, маршрут кызыктуу. Баасына жараша жакшы сапат.", rating: 4 },
  { id: 3, name: "Нуриза Ж.", text: "Үй-бүлө менен эс алып келдик. Балдарга да жагымдуу программалар болду.", rating: 5 },
  { id: 4, name: "Данияр К.", text: "Тез байланыш жана түшүндүрүү. Учуу-жайгашуу баары жакшы уюштурулган.", rating: 5 },
  { id: 5, name: "Асема М.", text: "Баасы-сымааты эң ылайыктуу. Кийинки эс алууну да ушул компания аркылуу алам.", rating: 4 },
  { id: 6, name: "Рустам У.", text: "Экскурсиялар абдан кызыктуу өттү, гиддер билимдүү жана маданияттуу.", rating: 5 },
  { id: 7, name: "Жазгүл С.", text: "Балдар менен саякатка ыңгайлуу шарттар түзүлгөнүн жактырдым.", rating: 5 },
  { id: 8, name: "Мирлан Э.", text: "Маршруттар коопсуз, автобус таза жана ыңгайлуу болду.", rating: 4 },
  { id: 9, name: "Алина Ч.", text: "Кызмат көрсөтүү жогорку деңгээлде, кайра келем деп турам.", rating: 5 },
  { id: 10, name: "Элдар Т.", text: "Кызматкерлердин мамилеси жагымдуу, сунуштайм!", rating: 5 },
];

function Stars({ value }) {
  return (
    <span style={{ color: "#fbbf24" }}>{"★".repeat(value) + "☆".repeat(5 - value)}</span>
  );
}

export default function Reviews() {
  const items = useMemo(() => REVIEWS, []);
  const durationSec = Math.max(20, items.length * 6);

  return (
    <div className="container" style={{ paddingTop: 24, paddingBottom: 24 }}>
      <h2 style={{ fontWeight: 700, fontSize: 24, marginBottom: 12 }}>Отзывы</h2>

      <div className="reviews-marquee">
        <div
          className="marquee-track"
          style={{ animationDuration: `${durationSec}s` }}
        >
          {[...items, ...items].map((r, idx) => (
            <div className="review-card" key={`${r.id}-${idx}`}>
              <div className="review-top">
                <strong>{r.name}</strong>
                <Stars value={r.rating} />
              </div>
              <p className="review-text">{r.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .reviews-marquee {
          overflow: hidden;
          position: relative;
        }
        .marquee-track {
          display: flex;
          align-items: stretch;
          gap: 12px;
          width: max-content;
          animation-name: reviews-scroll-left;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        @keyframes reviews-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .review-card {
          min-width: 280px;
          max-width: 320px;
          border: 1px solid #eee;
          border-radius: 10px;
          padding: 16px;
          background: #fff;
          box-shadow: 0 3px 10px rgba(0,0,0,0.04);
        }
        .review-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        .review-text {
          margin: 0;
          color: #374151;
          line-height: 1.5;
        }
        @media (max-width: 768px) {
          .review-card { min-width: 240px; }
        }
      `}</style>
    </div>
  );
} 