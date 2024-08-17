const express = require('express');
const Card = require('./models/card');
const router = express.Router();

// GET /ping - Check if the server is running
router.get('/ping', (req, res) => {
  res.send('pong');
});

// POST /cards - Create a new card
router.post('/cards', async (req, res) => {
  try {
    const { title, description } = req.body;
    const card = new Card({ title, description });
    await card.save();
    res.status(201).json(card);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET /cards - Get all cards
router.get('/cards', async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /cards/:title - Get a specific card by title
router.get('/cards/:title', async (req, res) => {
  try {
    const card = await Card.findOne({ title: req.params.title });
    if (!card) {
      return res.status(404).json({ error: 'Card not found' });
    }
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
