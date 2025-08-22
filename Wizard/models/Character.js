import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  charname: String,

  role: String, 

  perstat: Number,

  agstat: Number,

  strstat: Number,

  intstat: Number,

  chastat: Number,
});

export default model('Character', userSchema);
