const express = require('express');
const { Question } = require('../models');

const router = express.Router();

// GET /questions => Fetch all questions
router.get('/', async (req, res) => {
  try {
    const questions = await Question.findAll();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /questions => Create a new question
router.post('/', async (req, res) => {
  try {
    const { text } = req.body;
    const newQuestion = await Question.create({ text });
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
