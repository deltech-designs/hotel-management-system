const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  location: String,
  price: {
    type: Number,
    required: true,
  },
  availableDates: [Date],
  imageUrl: String,
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
