import hotel1 from "../assets/hotel1.png";
import hotel2 from "../assets/hotel2.png";
import hotel3 from "../assets/hotel3.png";
import hotel4 from "../assets/hotel4.png";

export const hotels = [
  {
    id: 1,
    name: "Royal Resort",
    countryCode: "TR",
    city: "Анталия",
    stars: 5,
    amenities: ["Pool", "WiFi", "Spa"],
    pricePerNight: 120,
    thumbnail: hotel1,
    description: "Деңиз жээгинде 5⭐ отель."
  },
  {
    id: 2,
    name: "Marina View",
    countryCode: "AE",
    city: "Дубай",
    stars: 4,
    amenities: ["WiFi", "Gym"],
    pricePerNight: 95,
    thumbnail: hotel2,
    description: "Марина районуна жакын жайгашкан."
  },
  {
    id: 3,
    name: "Sunrise Beach",
    countryCode: "EG",
    city: "Шарм-эш-Шейх",
    stars: 4,
    amenities: ["Pool", "Beach", "Restaurant"],
    pricePerNight: 80,
    thumbnail: hotel3,
    description: "Көлөкө бактары жана жеке пляж."
  },
  {
    id: 4,
    name: "Sunrise Beach",
    countryCode: "EG",
    city: "Шарм-эш-Шейх",
    stars: 4,
    amenities: ["Pool", "Beach", "Restaurant"],
    pricePerNight: 80,
    thumbnail: hotel4,
    description: "Көлөкө бактары жана жеке пляж."
  }
]; 