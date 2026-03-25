const express = require('express');
const Booking = require('../models/Booking');
const auth = require('../middleware/auth');

const router = express.Router();

// Get bookings for current user
router.get('/', auth, async (req, res) => {
  try {
    let bookings;
    if (req.user.role === 'customer') {
      bookings = await Booking.find({ customer: req.user._id }).populate('mixologist');
    } else {
      // For mixologist, find their profile first
      const Mixologist = require('../models/Mixologist');
      const mixologist = await Mixologist.findOne({ user: req.user._id });
      if (mixologist) {
        bookings = await Booking.find({ mixologist: mixologist._id }).populate('customer');
      } else {
        bookings = [];
      }
    }
    res.send(bookings);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Create booking
router.post('/', auth, async (req, res) => {
  if (req.user.role !== 'customer') {
    return res.status(403).send({ error: 'Only customers can create bookings' });
  }
  try {
    const booking = new Booking({ ...req.body, customer: req.user._id });
    await booking.save();
    res.status(201).send(booking);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update booking status
router.patch('/:id', auth, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).send();
    }
    // Check if user is customer or the mixologist
    const Mixologist = require('../models/Mixologist');
    const mixologist = await Mixologist.findOne({ user: req.user._id });
    if (req.user._id.toString() !== booking.customer.toString() && (!mixologist || mixologist._id.toString() !== booking.mixologist.toString())) {
      return res.status(403).send({ error: 'Not authorized' });
    }
    Object.assign(booking, req.body);
    await booking.save();
    res.send(booking);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;