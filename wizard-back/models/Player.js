import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  username: String,

  password: String, // Optional for visual novels
});

export default model('Player', userSchema);
