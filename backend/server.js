import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import orderRoutes from "./routes/orders.js"; // ✅ correct plural file
import connectDB from "./config/db.js"; // ✅ connect MongoDB

dotenv.config();
connectDB(); // connect MongoDB

const app = express();

// ✅ CORS setup
app.use(
  cors({
    origin: "http://localhost:3000", // frontend origin
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ✅ Parse JSON body
app.use(express.json());

// ✅ Use your order routes
app.use("/api/orders", orderRoutes); // ✅ this must match frontend fetch URL

// ✅ Default route (optional)
app.get("/", (req, res) => {
  res.send("✅ Backend is running...");
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

