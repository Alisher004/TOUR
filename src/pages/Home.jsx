import React from "react";
import Baner from "../components/Baner";
import Tours from "../components/Tours/TourCard";
import FeaturedCarousel from "../components/hotels";
import Reviews from "../components/Review";
import News from "../components/New/News";
import AboutSection from "../components/About/AboutSection";
import baner1 from "../assets/baner.png";

function Home() {
  return (
    <div className="home">
      <Baner
        image={baner1}
        title="Путешествия мечты"
        subtitle="выбери свою"
      />
      <Tours />
      <FeaturedCarousel />
      <Reviews />
      <News />
      <AboutSection />
    </div>
  );
}

export default Home;