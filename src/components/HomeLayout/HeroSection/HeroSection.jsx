import React from "react";
import "./HeroSection.css";
import HeroRightSlide from "../../../assets/hero-img-2.jpg";
import SlideBanner from "./SlideBanner";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-left-content">
          <h3>100% Organic Foods</h3>
          <h1>Organic Veggies & Fruits Foods</h1>
          <div className="input-box">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
            <button type="button" className="btn">
              Submit Now
            </button>
          </div>
        </div>
        <div className="hero-right-content">
          {/* <img src={HeroRightSlide} alt="right" /> */}
          <SlideBanner />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
