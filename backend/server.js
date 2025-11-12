const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const orderRoutes = require("./routes/orders");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// ✅ CORS setup for Kubernetes / any frontend origin
app.use(
  cors({
    origin: "*", // Kubernetes me frontend ka NodePort alag ho sakta hai, sab allow kar diya
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// ✅ Parse JSON body
app.use(express.json());

// ✅ Use order routes
app.use("/api/orders", orderRoutes);

// ✅ Default route
app.get("/", (req, res) => {
  res.send("✅ Backend is running...");
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
