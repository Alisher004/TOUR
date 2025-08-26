import React from "react";
import { useParams } from "react-router-dom"; // URL параметрлерин алуу үчүн
import hotels from "../data/hotels"; // Мейманканалардын датасы
import "./HotelDetails.css"; // Стили өзүнчө файлга чыгарылды

const HotelDetails = () => {
  const { id } = useParams(); // URL'ден мейманкананын ID'син алуу
  const hotel = hotels.find((hotel) => hotel.id === parseInt(id)); // ID боюнча мейманкананы табуу

  if (!hotel) {
    return <h2>Мейманкана табылган жок</h2>; // Эгер ID туура келбесе
  }

  return (
    <div className="hotel-details">
      <div className="hotel-header">
        <h1>{hotel.title}</h1>
        <p className="hotel-rating">⭐ {hotel.rating} рейтинг</p>
      </div>
      <div className="hotel-content">
        <div className="hotel-image">
          <img src={hotel.image} alt={hotel.title} />
        </div>
        <div className="hotel-info">
          <p className="hotel-description">{hotel.description}</p>
          <p className="hotel-location">Жайгашкан жери: {hotel.location}</p>
          <p className="hotel-price">Баасы: ${hotel.price} / түн</p>
          <button className="book-now">Брондоо</button>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;