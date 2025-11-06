import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userDetails") || "{}");
  const [method, setMethod] = useState("");

  const handlePayment = () => {
    if (!method) {
      alert("Please select a payment method!");
      return;
    }

    setTimeout(() => {
      localStorage.removeItem("cart");
      navigate("/order-success");
    }, 1000);
  };

  return (
    <div className="payment-container">
      <h2>💳 Payment Page</h2>

      {user.name && (
        <div className="user-summary">
          <h3>Deliver To:</h3>
          <p>{user.name}</p>
          <p>{user.address}, {user.city} - {user.pincode}</p>
          <p>📞 {user.phone}</p>
        </div>
      )}

      <div className="payment-options">
        <h3>Select Payment Method</h3>
        <label>
          <input type="radio" name="payment" value="cod" onChange={() => setMethod("Cash on Delivery")} />
          Cash on Delivery
        </label>
        <label>
          <input type="radio" name="payment" value="card" onChange={() => setMethod("Credit/Debit Card")} />
          Credit/Debit Card
        </label>
        <label>
          <input type="radio" name="payment" value="upi" onChange={() => setMethod("UPI")} />
          UPI (PhonePe, GPay)
        </label>
      </div>

      <button className="pay-btn" onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Payment;
