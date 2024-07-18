import React from "react";
import "./ThreeFruitsCard.css";
import featurImgOne from "../../../assets/featur-1.jpg";
import featurImgTwo from "../../../assets/featur-2.jpg";
import featurImgThree from "../../../assets/featur-3.jpg";

const ThreeFruitsCard = () => {
  return (
    <div className="container">
      <div className="three-cards">
        <div className="one-card main">
          <img src={featurImgOne} alt="card image" />
          <div className="inner-text">
            <h4>Fresh Apples</h4>
            <p>20% OFF</p>
          </div>
          <div className="orangeBg"></div>
        </div>

        <div className="two-card main">
          <img src={featurImgTwo} alt="card image" />
          <div className="inner-text bg-white">
            <h4>Tasty Fruits</h4>
            <p>Free delivery</p>
          </div>
          <div className="darkGrayBg bgBlueDark"></div>
        </div>

        <div className="three-card main">
          <img src={featurImgThree} alt="card image" />
          <div className="inner-text bg-yellow">
            <h4>Exotic Vegitable</h4>
            <p>Discount 30$</p>
          </div>
          <div className="greenBg bg-green"></div>
        </div>
      </div>
    </div>
  );
};

export default ThreeFruitsCard;
