const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  passwordHash: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Player', PlayerSchema);
