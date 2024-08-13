const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
  },
});

module.exports = mongoose.model('Game', GameSchema);
