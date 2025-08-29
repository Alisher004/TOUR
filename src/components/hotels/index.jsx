import React, { useState } from "react";
import { hotels } from "../../data/hotels"; // сен берген массив
import "./style.css";
import HotelDetails from "./HotelDetails";
import hotelsvg from "../../assets/hotelsvg.png"

export default function HotelCarousel() {
  const [selectedHotel, setSelectedHotel] = useState(null);

  return (
    <div className="carousel-container container" style={{margin: "100px auto"}}>
      <img src={hotelsvg} alt="" className="hsvg"/>
      <h1>популярные отели</h1>
      <p>уют и роскошь в лучших отелях мира</p>
      <div className="carousel-track">
        {hotels.concat(hotels).map((hotel, i) => (
          <div
            key={i}
            className="hotel-card"
            onClick={() => setSelectedHotel(hotel)}
          >
            <img src={hotel.thumbnail} alt={hotel.name} />
            <div className="hotel-info">
              <h3>{hotel.name}</h3>
              <p>узнать подробнее</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedHotel && (
        <HotelDetails hotel={selectedHotel} onClose={() => setSelectedHotel(null)} />
      )}
    </div>
  );
}
