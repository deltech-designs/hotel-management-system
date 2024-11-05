const express = require("express");
const {
  createBooking,
  getBookingsForListing,
} = require("../controllers/bookingController");
const router = express.Router();

router.post("/", createBooking);
router.get("/:listingId", getBookingsForListing);

module.exports = router;
