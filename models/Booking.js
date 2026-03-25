const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  mixologist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mixologist',
    required: true,
  },
  eventType: {
    type: String,
    required: true, // e.g., wedding, party, corporate
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  duration: {
    type: Number, // hours
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  specialRequests: {
    type: String,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending',
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Booking', bookingSchema);