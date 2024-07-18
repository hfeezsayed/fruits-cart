import React from "react";
import "./FreshFruits.css";
import banner1 from "../../../assets/baner-1.png";

const FreshFruits = () => {
  return (
    <div className="fresh-fruits bg-secondary">
      <div className="flex-main">
        <div className="left-div">
          <h1>
            Fresh Exotic <br />
            Fruits
          </h1>
          <h2>in Our Store</h2>
          <p>
            The generated Lorem Ipsum is therefore always free from repetition
            injected humour, or non-characteristic words etc.
          </p>
          <button>BUY</button>
        </div>
        <div className="right-div">
          <img src={banner1} alt="banner" />
          <div className="discount">
            <div>
              <h1>1</h1>
            </div>
            <p>
              50$ <br />
              kg
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshFruits;
