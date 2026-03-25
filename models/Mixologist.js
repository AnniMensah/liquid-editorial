const mongoose = require('mongoose');

const mixologistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  specialties: [{
    type: String,
  }],
  experience: {
    type: Number, // years
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  availability: [{
    day: String,
    startTime: String,
    endTime: String,
  }],
  rate: {
    type: Number, // per hour or event
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Mixologist', mixologistSchema);