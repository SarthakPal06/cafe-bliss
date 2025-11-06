import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { cart } = useContext(CartContext); // ✅ fix: correct variable name

  const getCartCount = () =>
    cart.reduce((total, item) => total + (item.quantity || 0), 0);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🍕 FoodieHub</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <Link to="/cart" className="cart-link">
            🛒 Cart
            {getCartCount() > 0 && (
              <span className="cart-count">{getCartCount()}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;



