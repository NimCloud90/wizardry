import mongoose from 'mongoose';

const PlayerSchema = new mongoose.Schema({
  playername: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {  // Changed from passwordHash to match controller
    type: String,
    required: true,
  },
}, { timestamps: true });

const Player = mongoose.model('Player', PlayerSchema);
export default Player;
