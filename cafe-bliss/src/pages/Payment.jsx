import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userDetails") || "{}");
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const [method, setMethod] = useState("");

  const handlePayment = async () => {
    if (!method) {
      alert("Please select a payment method!");
      return;
    }

    // 🧾 Create final order data
    const orderData = {
      user,
      cart,
      paymentMethod: method,
      totalAmount: cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0),
      date: new Date().toISOString(),
    };

    try {
      // 🌐 Send order to backend
      const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
      const response = await fetch(`${API_BASE_URL}/api/order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Order saved:", result);

        // ✅ Clear cart after successful order
        localStorage.removeItem("cart");
        localStorage.removeItem("userDetails");

        // 🟢 Navigate to success page
        navigate("/order-success");
      } else {
        alert("Failed to place order. Please try again!");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Server error! Please check backend connection.");
    }
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
