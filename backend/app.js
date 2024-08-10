const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8000;

// Mongoose
mongoose.connect("mongodb://127.0.0.1:27017/gameLibrary");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Connected to local MongoDB"));

// Server init
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
