const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');

const Game = require('./models/game');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;

// Mongoose
const URI = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to Atlas MongoDB'));

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.get('/api/v1/games', async (req, res) => {
  const games = await Game.find();
  res.status(200).json({
    status: 'success',
    data: {
      games,
    },
  });
});

app.post('/api/v1/games', async (req, res) => {
  const { title, platform, media, cover } = req.body;
  const game = new Game({ title, platform, media, cover });
  await game.save();
  res.status(201).send('Game created successfully!');
});

// Server init
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
