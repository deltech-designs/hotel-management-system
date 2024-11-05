const Listing = require("../models/Listings");

// @desc Get all listings or search based on query
// @route GET /api/listings
exports.getListings = async (req, res) => {
  try {
    const { destination, checkIn, checkOut, guests } = req.query;

    const query = {};

    if (destination) query.location = { $regex: destination, $options: "i" };
    if (guests) query.guests = guests;

    // Filter by availability
    if (checkIn && checkOut) {
      query.availableDates = {
        $elemMatch: { $gte: new Date(checkIn), $lte: new Date(checkOut) },
      };
    }

    const listings = await Listing.find(query);
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc Get single listing by ID
// @route GET /api/listings/:id
exports.getListingById = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) return res.status(404).json({ message: "Listing not found" });

    res.json(listing);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
