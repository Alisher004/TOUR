export const countries = [
  { code: "AE", name: "БАЭ" },
  { code: "TR", name: "Түркия" },
  { code: "EG", name: "Египет" },
  { code: "GR", name: "Греция" },
  { code: "TH", name: "Тайланд" },
  { code: "UZ", name: "Өзбекстан" },
  { code: "KZ", name: "Казакстан" },
  { code: "KG", name: "Кыргызстан" }
];

export const countriesSorted = [...countries].sort((a, b) =>
  new Intl.Collator("ru", { sensitivity: "base" }).compare(a.name, b.name)
); 