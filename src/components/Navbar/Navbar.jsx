import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBagShopping,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/ContextProvider";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <nav className="navbar flex-div shadowBox">
      <div className="logo">
        <Link to="/">
          <h1>Fruitables</h1>
        </Link>
      </div>
      <ul className="menu flex-div">
        <li>
          <Link className="active" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/productdetails/:id">Product Details</Link>
        </li>
        <li>
          <Link>Contacts</Link>
        </li>
      </ul>
      <div className="right-side flex-div">
        <Link>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Link>
        <Link className="cart-bag-block" to="/cart">
          <FontAwesomeIcon icon={faBagShopping} size="xl" />
          <span className="cart-quantity">{cart.length}</span>
        </Link>
        <Link>
          <FontAwesomeIcon icon={faUser} size="xl" />
        </Link>
      </div>
      <div className="menu-bar-icon">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};

export default Navbar;
