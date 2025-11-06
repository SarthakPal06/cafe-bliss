const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    name: String,
    phone: String,
    address: String,
    city: String,
    pincode: String
  },
  items: [
    {
      productId: Number,
      name: String,
      quantity: Number,
      price: Number
    }
  ],
  total: Number,
  paymentStatus: { type: String, default: "pending" },
  orderDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema);
