const express = require('express');
const cors = require('cors');
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

// CORS configuration
/*
  For safety reasons, use the options to limit to the front-end url
*/
const REACT_SERVER_URL = 'http://localhost:5173';
const corsOptions = { origin: REACT_SERVER_URL, optionsSuccessStatus: 200 };
app.use(cors(corsOptions));

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
// TODO: change to HTTPS
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
