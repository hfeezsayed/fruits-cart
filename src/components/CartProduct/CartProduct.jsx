import React, { useContext } from "react";
import "./CartProduct.css";
import { CartContext } from "../../context/ContextProvider";

const CartProduct = ({ item }) => {
  const { cart, dispatch } = useContext(CartContext);

  const increase = (id) => {
    const IndexI = cart.findIndex((p) => p.id === id);
    if (cart[IndexI].quantity < 10) {
      dispatch({ type: "INCREMENT", id });
    }
  };
  const decrease = (id) => {
    const IndexD = cart.findIndex((p) => p.id === id);
    if (cart[IndexD].quantity > 1) {
      dispatch({ type: "DECREMENT", id });
    }
  };
  return (
    <div className="cart-product">
      <div className="cart-details-left">
        <img src={item.image} className="img-fluid" alt={item.title} />
      </div>
      <div className="cart-details-right">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>{item.price} / kg</p>
        <div className="button-block">
          <button onClick={() => decrease(item.id)}>
            <strong>-</strong>
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => increase(item.id)}>
            <strong>+</strong>
          </button>
        </div>
        <button
          className="btn-remove"
          onClick={() => dispatch({ type: "REMOVE", id: item.id })}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
