const express = require('express');
const Review = require('../models/Review');
const Booking = require('../models/Booking');
const auth = require('../middleware/auth');

const router = express.Router();

// Get reviews for a mixologist
router.get('/mixologist/:id', async (req, res) => {
  try {
    const reviews = await Review.find({ mixologist: req.params.id }).populate('customer', 'name');
    res.send(reviews);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Create review (after booking completed)
router.post('/', auth, async (req, res) => {
  try {
    const { bookingId, rating, comment } = req.body;
    const booking = await Booking.findById(bookingId);
    if (!booking || booking.customer.toString() !== req.user._id.toString() || booking.status !== 'completed') {
      return res.status(400).send({ error: 'Invalid booking or not completed' });
    }
    const review = new Review({
      booking: bookingId,
      customer: req.user._id,
      mixologist: booking.mixologist,
      rating,
      comment,
    });
    await review.save();
    res.status(201).send(review);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;