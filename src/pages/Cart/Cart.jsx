import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/ContextProvider";
import CartProduct from "../../components/CartProduct/CartProduct";
import { totalItem, totalPrice } from "../../context/CartReducer";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="cart-details">
      <div>
        {cart.map((product, i) => (
          <CartProduct item={product} key={i}></CartProduct>
        ))}
      </div>
      <div className="product-item-info">
        <div className="item-info">
          <h5>Total Items: {totalItem(cart)}</h5>
          <h5>Total Price: ${totalPrice(cart)}</h5>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
