import React from "react";
import "./PolicyRow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarSide,
  faUserShield,
  faRightLeft,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const PolicyRow = () => {
  const policyItem = [
    {
      id: 1,
      faName: faCarSide,
      title: "Free Shipping",
      line: "Free on order over $300",
    },
    {
      id: 2,
      faName: faUserShield,
      title: "Security Payment",
      line: "100% security payment",
    },
    {
      id: 3,
      faName: faRightLeft,
      title: "30 Day Return",
      line: "30 day money guarantee",
    },
    {
      id: 4,
      faName: faPhoneAlt,
      title: "24/7 Support",
      line: "Support every time fast",
    },
  ];

  return (
    <div className="policy-row">
      {policyItem.map((itemList, index) => {
        return (
          <div className="card-block" key={index}>
            <div className="map-circle">
              <FontAwesomeIcon icon={itemList.faName} />
            </div>
            <h3>{itemList.title}</h3>
            <p>{itemList.line}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PolicyRow;
