const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/database'); // Corrected path
const questionRoutes = require('./routes/question.route');
const answerRoutes = require('./routes/answer.route'); // Import answer routes
const { Question, Answer } = require('./models');
const { Op, Sequelize } = require('sequelize');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Use question routes with versioning
app.use('/api/v1/questions', questionRoutes);

// Use answer routes with versioning
app.use('/api/v1/answers', answerRoutes);

// GET /api/v1/questions/random => Fetch a random question
app.get('/api/v1/questions/random', async (req, res) => {
  try {
    const question = await Question.findOne({
      order: Sequelize.literal('RAND()') // Fetch a random question
    });

    if (!question) {
      return res.status(404).json({ error: 'No questions found.' });
    }

    res.json(question);
  } catch (error) {
    console.error('Error:', error.message); // Debugging log
    res.status(500).json({ error: error.message });
  }
});

// POST /answers => Save user answer
app.post('/answers', async (req, res) => {
  try {
    console.log('Request Body:', req.body); // Debugging log

    const { questionId, answer } = req.body;

    // Validate request body
    if (!questionId || !answer) {
      return res.status(400).json({ error: 'questionId and answer are required.' });
    }

    const newAnswer = await Answer.create({
      questionId,
      userId: 'random', // hardcoded abhi, baad me JWT use kar sakte
      answer
    });
    res.json(newAnswer);
  } catch (error) {
    console.error('Error:', error.message); // Debugging log
    res.status(500).json({ error: error.message });
  }
});

// Test route
app.get('/', async (req, res) => {
    try {
        await sequelize.authenticate();
        res.send('Server is running and connected to the database!');
    } catch (error) {
        res.status(500).send('Server is running, but database connection failed.');
    }
});

// Start server only if the database connection is successful
sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully!');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error.message);
  });
 