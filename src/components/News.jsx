import React from "react";

const NEWS = [
  { id: 1, title: "Жайкы сезон үчүн жаңы багыттар кошулду", date: "2025-06-01", excerpt: "Иссык-Көлдө жаңы пляждар жана маршруттар ачылды." },
  { id: 2, title: "Эрте брондоо боюнча арзандатуулар", date: "2025-05-20", excerpt: "Эми июль-август айларына чейин 15% арзандатуу!" },
  { id: 3, title: "Гиддер үчүн окутуу программасы", date: "2025-05-05", excerpt: "Кызмат көрсөтүүнүн сапатын жогорулатуу үчүн жаңы тренингдер өтүлдү." },
];

function formatDate(d) {
  try {
    const dt = new Date(d);
    return dt.toLocaleDateString("ru-RU", { year: "numeric", month: "long", day: "numeric" });
  } catch {
    return d;
  }
}

export default function News() {
  return (
    <div className="container" style={{ paddingTop: 24, paddingBottom: 24 }}>
      <h2 style={{ fontWeight: 700, fontSize: 24, marginBottom: 12 }}>Новости</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 12 }}>
        {NEWS.map((n) => (
          <article key={n.id} style={{ border: "1px solid #eee", borderRadius: 10, padding: 16, background: "#fff" }}>
            <time dateTime={n.date} style={{ fontSize: 12, color: "#6b7280" }}>{formatDate(n.date)}</time>
            <h3 style={{ margin: "6px 0 4px", fontSize: 18 }}>{n.title}</h3>
            <p style={{ margin: 0, color: "#374151" }}>{n.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
} 