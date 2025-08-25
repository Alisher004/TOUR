import React from "react";
import TourCard from "../components/Tours/TourCard";
import Baner from "../components/Baner";
import baner3 from "../assets/baner3.png";

export default function Tours() {
  return (
    <div>
      <Baner
        image={baner3}
        title="Горящие туры"
        subtitle="Специальные предложения для тех, кто ищет выгодные приключения"
      />
      <TourCard />
    </div>
  );
}
