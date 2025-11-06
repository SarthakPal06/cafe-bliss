import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserDetails.css";

const UserDetails = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.phone || !user.address || !user.city || !user.pincode) {
      alert("Please fill all fields!");
      return;
    }

    localStorage.setItem("userDetails", JSON.stringify(user));
    navigate("/payment");
  };

  return (
    <div className="userdetails-container">
      <h2>📝 Enter Your Details</h2>
      <form onSubmit={handleSubmit} className="userdetails-form">
        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} />
        <input name="address" placeholder="Full Address" onChange={handleChange} />
        <input name="city" placeholder="City" onChange={handleChange} />
        <input name="pincode" placeholder="Pincode" onChange={handleChange} />
        <button type="submit" className="next-btn">Next → Payment</button>
      </form>
    </div>
  );
};

export default UserDetails;
