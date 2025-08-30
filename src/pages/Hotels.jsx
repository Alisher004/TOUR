import React from "react";
import HotelsCom from "../components/hotels";
import Baner from "../components/Baner";
import baner5 from "../assets/baner5.png";

function Hotels() {
  return (
    <div style={{ marginTop: "70px" }}>
      <Baner
        image={baner5}
        title="Oтели"
        subtitle="Идеальные отели для вашего отдыха"
      />
      <HotelsCom />
    </div>
  );
}

export default Hotels;