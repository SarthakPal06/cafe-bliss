import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <h1>Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty ☕</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>₹{item.price} each</p>
                  <div className="quantity">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <p>Subtotal: ₹{item.price * item.quantity}</p>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>❌</button>
              </div>
            ))}
          </div>

          <h2>Total: ₹{total}</h2>
          <div className="cart-actions">
            <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
            <button
              className="checkout-btn"
              onClick={() => navigate("/user-details")}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
