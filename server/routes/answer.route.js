const express = require('express');
const { Answer } = require('../models');

const router = express.Router();

// GET /answers => Fetch all answers
router.get('/', async (req, res) => {
  try {
    const answers = await Answer.findAll();
    res.json(answers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } 
});

// POST /answers => Save a new answer
router.post('/', async (req, res) => {
  try {
    const { questionId, userId, answer } = req.body;
    const newAnswer = await Answer.create({ questionId, userId, answer });
    res.status(201).json(newAnswer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
