const mongoose = require('mongoose');

// Don't forget to update the POST request route with new fields
const GameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
  },
  media: {
    type: String,
  },
  cover: {
    type: String,
  },
});

module.exports = mongoose.model('Game', GameSchema);
