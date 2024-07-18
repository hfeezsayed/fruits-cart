import React, { useContext, useEffect, useState } from "react";
import "./OrganicProducts.css";
//import data from "../../fruitsApi.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { CartContext } from "../../context/ContextProvider";

const OrganicProducts = () => {
  const [dataList, setDataList] = useState([]);
  const { dispatch } = useContext(CartContext);

  // const addToCart = () => {
  //   setCart([...cart, dataList]);
  // };

  const handleBtns = (categoryName) => {
    const updateCategory = dataList.filter((curEle) => {
      return curEle.category === categoryName;
    });
    setDataList(updateCategory);

    //for active and inactive on Tabs
    const navLinkEls = document.querySelectorAll(".btn");
    navLinkEls.forEach((navLinkEl) => {
      navLinkEl.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        navLinkEl.classList.add("active");
      });
    });
  };

  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = async () => {
    await axios
      .get("http://localhost:8000/posts")
      .then((res) => setDataList(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="products-block">
      <div className="organic-products">
        <h1>
          Our Organic <br />
          Products
        </h1>
        <div className="tabs">
          <button
            type="button"
            value="All"
            className="btn"
            onClick={() => setDataList(dataList)}
          >
            All Products
          </button>
          <button
            type="button"
            value="vegetable"
            className="btn"
            onClick={() => handleBtns("vegetable")}
          >
            Vegetables
          </button>
          <button
            type="button"
            value="fruit"
            className="btn"
            onClick={() => handleBtns("fruit")}
          >
            Fruits
          </button>
          <button
            type="button"
            value="meat"
            className="btn"
            onClick={() => handleBtns("meat")}
          >
            Meat
          </button>
        </div>
        <div className="product-list-dropdown">
          <select>
            <option>All Products</option>
            <option>Vegetables</option>
            <option>Fruits</option>
            <option>Meat</option>
          </select>
        </div>
      </div>
      <div className="products-lists">
        {dataList.map((item) => {
          return (
            <div className="fruits-card" key={item.id}>
              <span className="fruits-category">{item.category}</span>
              <img src={item.image} alt={item.name} />
              <div className="fruits-details">
                <h4>{item.title}</h4>
                <p>{item.details}</p>
                <h4>{item.price}</h4>
                <button
                  className="button"
                  onClick={() => dispatch({ type: "ADD", item: item })}
                >
                  <FontAwesomeIcon icon={faBagShopping} />
                  &nbsp; Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrganicProducts;
