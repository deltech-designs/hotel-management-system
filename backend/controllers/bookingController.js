const Booking = require("../models/Booking");

// @desc Create a booking
// @route POST /api/bookings
exports.createBooking = async (req, res) => {
  try {
    const { listingId, checkIn, checkOut, guests, user } = req.body;

    const booking = new Booking({
      listing: listingId,
      checkIn: new Date(checkIn),
      checkOut: new Date(checkOut),
      guests,
      user,
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating booking", error: error.message });
  }
};

// @desc Get all bookings for a listing
// @route GET /api/bookings/:listingId
exports.getBookingsForListing = async (req, res) => {
  try {
    const bookings = await Booking.find({ listing: req.params.listingId });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
