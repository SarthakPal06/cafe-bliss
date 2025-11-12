import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();

  // 🔹 Load user & cart data from localStorage
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);
  const [method, setMethod] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userDetails") || "{}");
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setUser(storedUser);
    setCart(storedCart);
  }, []);

  // 🔹 Calculate total price
  const totalAmount = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  const handlePayment = async () => {
    if (!method) {
      alert("⚠️ Please select a payment method!");
      return;
    }

    if (!cart.length) {
      alert("🛒 Your cart is empty!");
      return;
    }

    // 🔹 Prepare order data
    const orderData = {
      userName: user.name || "Guest User",
      address: `${user.address || ""}, ${user.city || ""} - ${user.pincode || ""}`,
      items: cart.map((item) => ({
        name: item.name,
        quantity: item.quantity || 1,
        price: item.price || 0,
      })),
      totalAmount,
      paymentStatus: "Pending",
    };

    console.log("🧾 Cart Data:", cart);
    console.log("🧾 Order Data Sent to Backend:", orderData);

    try {
      const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

      const response = await fetch(`${API_BASE_URL}/api/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("✅ Order saved successfully:", result);

        // Clear local storage after order placed
        localStorage.removeItem("cart");
        localStorage.removeItem("userDetails");

        // Navigate to success page
        navigate("/order-success");
      } else {
        const errorMsg = await response.text();
        alert(`❌ Failed to place order: ${errorMsg}`);
      }
    } catch (error) {
      console.error("🚨 Error placing order:", error);
      alert("Server error! Please check backend connection.");
    }
  };

  return (
    <div className="payment-container">
      <h2>💳 Payment Page</h2>

      {user.name ? (
        <div className="user-summary">
          <h3>Deliver To:</h3>
          <p>{user.name}</p>
          <p>
            {user.address}, {user.city} - {user.pincode}
          </p>
          <p>📞 {user.phone}</p>
        </div>
      ) : (
        <p>No user details found.</p>
      )}

      {cart.length > 0 ? (
        <div className="cart-summary">
          <h3>🛍️ Your Order Summary:</h3>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} × {item.quantity || 1} = ₹
                {item.price * (item.quantity || 1)}
              </li>
            ))}
          </ul>
          <h3>💰 Total: ₹{totalAmount}</h3>
        </div>
      ) : (
        <p>Your cart is empty!</p>
      )}

      <div className="payment-options">
        <h3>Select Payment Method</h3>
        <label>
          <input
            type="radio"
            name="payment"
            value="cod"
            onChange={() => setMethod("Cash on Delivery")}
          />
          Cash on Delivery
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="card"
            onChange={() => setMethod("Credit/Debit Card")}
          />
          Credit/Debit Card
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="upi"
            onChange={() => setMethod("UPI")}
          />
          UPI (PhonePe, GPay)
        </label>
      </div>

      <button className="pay-btn" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
