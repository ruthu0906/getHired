const express = require("express");
const cors = require("cors");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/api/v1/health", (req, res) => {
  const mongoose = require("mongoose");
  const dbStatus =
    mongoose.connection.readyState === 1 ? "connected" : "disconnected";
  res.status(200).json({
    success: true,
    data: {
      status: "Server is running",
      database: dbStatus,
      timestamp: new Date().toISOString(),
    },
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: { code: 404, message: `Route ${req.originalUrl} not found` },
  });
});

// Global error handler — must be last
app.use(errorMiddleware);

module.exports = app;
