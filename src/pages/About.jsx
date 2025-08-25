import React from "react";
import AboutUs from "../components/About/AboutSection";
import baner6 from "../assets/baner6.png";

export default function About() {
  return (
    <div className="" style={{ marginTop: 70, paddingBottom: 24 }}>
      <div className="about-baner">
        <img src={baner6} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div className="about-box" style={{position: "absolute", top:"20%", left: "50%", transform: "translate(-50%, -50%)"}}>
          <h1 style={{fontSize: "100px", color: "white"}}>о нас</h1>
          <p style={{color: "white"}}>Наши история и ценности:  Ваш надежный проводник в мире путешествий</p>
        </div>
      </div>
      <AboutUs />

      <style>
      </style>
    </div>
  );
}
