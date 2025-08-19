import React from "react";
import Baner from "../components/Baner";
import Tours from "../components/Tours/TourCard";
import FeaturedCarousel from "../components/FeaturedCarousel";
import Reviews from "../components/Reviews";
import News from "../components/News";
import AboutSection from "../components/AboutSection";

function Home() {
  return (
    <div className="home">
      <Baner />
      <Tours />
      <FeaturedCarousel />
      <Reviews />
      <News />
      <AboutSection />
    </div>
  );
}

export default Home;