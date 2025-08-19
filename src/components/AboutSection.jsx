import React from "react";

export default function AboutSection() {
  return (
    <div className="container" style={{ paddingTop: 24, paddingBottom: 24 }}>
      <h2 style={{ fontWeight: 700, fontSize: 24, marginBottom: 12 }}>О нас</h2>
      <p style={{ margin: 0, color: "#374151", lineHeight: 1.6 }}>
        Биз — сапаттуу эс алуу жана коопсуз саякат уюштурган туроператор. Жергиликтүү
        гиддер, текшерилген маршруттар жана кардарларды колдоо — биздин артыкчылыгыбыз.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 12, marginTop: 12 }}>
        <div style={{ border: "1px solid #eee", borderRadius: 10, padding: 16 }}>
          <strong>Ишеним</strong>
          <p style={{ margin: "6px 0 0", color: "#4b5563" }}>1000+ ыраазы кардарлар.</p>
        </div>
        <div style={{ border: "1px solid #eee", borderRadius: 10, padding: 16 }}>
          <strong>Сапат</strong>
          <p style={{ margin: "6px 0 0", color: "#4b5563" }}>Тандалган маршруттар жана өнөктөштөр.</p>
        </div>
        <div style={{ border: "1px solid #eee", borderRadius: 10, padding: 16 }}>
          <strong>Колдоо</strong>
          <p style={{ margin: "6px 0 0", color: "#4b5563" }}>24/7 байланыш жана жардам.</p>
        </div>
      </div>
    </div>
  );
} 