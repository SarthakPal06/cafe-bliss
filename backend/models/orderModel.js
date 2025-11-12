const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  address: { type: String, required: true },
  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
  totalAmount: { type: Number, required: true },
  paymentStatus: { type: String, default: "Pending" },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;

