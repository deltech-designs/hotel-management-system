const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const listingsRoutes = require("./routes/listings");
const bookingsRoutes = require("./routes/bookings");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();

const app = express();

// Connect to DB

// Middleware
app.use(express.json());
app.use(cors());

connectDB();

// API Routes
app.use("/api/listings", listingsRoutes);
app.use("/api/bookings", bookingsRoutes);

// Error Handler Middleware
app.use(errorHandler);

module.exports = app;
