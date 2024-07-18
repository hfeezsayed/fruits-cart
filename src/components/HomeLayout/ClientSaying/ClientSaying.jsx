import React from "react";
import "./ClientSaying.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const ClientSaying = () => {
  return (
    <div className="container">
      <div className="heading-part text-center">
        <h3>Our Testimonial</h3>
        <h1>Our Client Saying!</h1>
        <div className="next-right-button">
          <button>&larr;</button>
          <button>&rarr;</button>
        </div>
      </div>

      <div className="testimonial flex-main">
        <div className="client-details flex-main">
          <div className="testimonial-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              in quam elementum lorem dapibus molestie. Etiam quis rutrum
              turpis. Donec sed lacus pharetra
            </p>
            <hr />
            <div className="client-info flex-main">
              <div>
                <img src="https://themewagon.github.io/fruitables/img/testimonial-1.jpg" />
              </div>
              <div className="text-pera">
                <h1>Client Name</h1>
                <p>Profession</p>
                <div>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
              <div className="quote-right">
                <FontAwesomeIcon icon={faQuoteRight} />
              </div>
            </div>
          </div>
          <div className="testimonial-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              in quam elementum lorem dapibus molestie. Etiam quis rutrum
              turpis. Donec sed lacus pharetra
            </p>
            <hr />
            <div className="client-info flex-main">
              <div>
                <img src="https://themewagon.github.io/fruitables/img/testimonial-1.jpg" />
              </div>
              <div className="text-pera">
                <h1>Client Name</h1>
                <p>Profession</p>
                <div>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
              <div className="quote-right">
                <FontAwesomeIcon icon={faQuoteRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSaying;
