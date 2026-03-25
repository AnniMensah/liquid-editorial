const express = require('express');
const Mixologist = require('../models/Mixologist');
const auth = require('../middleware/auth');

const router = express.Router();

// Get all mixologists
router.get('/', async (req, res) => {
  try {
    const mixologists = await Mixologist.find().populate('user', 'name email');
    res.send(mixologists);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get mixologist by id
router.get('/:id', async (req, res) => {
  try {
    const mixologist = await Mixologist.findById(req.params.id).populate('user', 'name email');
    if (!mixologist) {
      return res.status(404).send();
    }
    res.send(mixologist);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Create mixologist profile (only for mixologists)
router.post('/', auth, async (req, res) => {
  if (req.user.role !== 'mixologist') {
    return res.status(403).send({ error: 'Only mixologists can create profiles' });
  }
  try {
    const mixologist = new Mixologist({ ...req.body, user: req.user._id });
    await mixologist.save();
    res.status(201).send(mixologist);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update mixologist profile
router.patch('/:id', auth, async (req, res) => {
  try {
    const mixologist = await Mixologist.findOne({ _id: req.params.id, user: req.user._id });
    if (!mixologist) {
      return res.status(404).send();
    }
    Object.assign(mixologist, req.body);
    await mixologist.save();
    res.send(mixologist);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;