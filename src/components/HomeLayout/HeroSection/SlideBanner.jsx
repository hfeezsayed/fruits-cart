import React, { useEffect, useState, useRef } from "react";
import "./SliderBanner.css";

// const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const bannerImage = [
  {
    id: 1,
    image: "https://themewagon.github.io/fruitables/img/hero-img-1.png",
    itemName: "Fruits",
  },
  {
    id: 2,
    image: "https://themewagon.github.io/fruitables/img/hero-img-2.jpg",
    itemName: "Vegitables",
  },
];
const delay = 3500;
const SlideBanner = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === bannerImage.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {bannerImage.map((item, index) => (
          <div className="slide" key={index}>
            <img src={item.image} alt="banner" />
            <div className="Item-Name">{item.itemName}</div>
            <div className="slideshowDots">
              {bannerImage.map((_, idx) => (
                <div
                  key={idx}
                  // className={`slideshowDot${index === idx ? " active" : ""}`}
                  onClick={() => {
                    setIndex(idx);
                  }}
                >
                  <div className="prev-next-control" key={index}>
                    {index === idx ? (
                      <a href="#" className="next round">
                        &#8250;
                      </a>
                    ) : (
                      <a href="#" className="previous round active">
                        &#8249;
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideBanner;
