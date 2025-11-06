import React from "react";
import { Link } from "react-router-dom";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  return (
    <div className="success-container">
      <h1>✅ Order Placed Successfully!</h1>
      <p>Thank you for ordering with FoodieHub 🍕</p>
      <Link to="/" className="home-btn">Back to Home</Link>
    </div>
  );
};

export default OrderSuccess;
