import mongoose from 'mongoose';

const PlayerSchema = new mongoose.Schema({
  playername: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    minlength: 3,
    maxlength: 30
  },
  password: {  // Changed from passwordHash to match controller
    type: String,
    required: true,
    minlength: 6
  },
}, { timestamps: true });

PlayerSchema.post('save', function(error, doc, next) {
    if(error.name === 'MongoServerError' && error.code === 11000) {
        next(new Error('Playername already exists'));
    }else {
        next(error);
    }
}
);

const Player = mongoose.model('Player', PlayerSchema);
export default Player;
