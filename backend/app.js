const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Game = require("./models/game");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;

// Mongoose
mongoose.connect("mongodb://127.0.0.1:27017/gameLibrary");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Connected to local MongoDB"));

// Middleware
app.use(express.json());

// Routes
app.get("/api/v1/games", async (req, res) => {
  const games = await Game.find();
  res.status(200).json({
    status: "success",
    data: {
      games,
    },
  });
});

app.post("/api/v1/games", async (req, res) => {
  const { title, platform } = req.body;
  const game = new Game({ title, platform });
  await game.save();
  res.status(201).send("Game created successfully!");
});

// Server init
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
