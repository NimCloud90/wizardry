import { Schema, model } from 'mongoose';

const saveFileSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  progress: String, // Could be JSON or some kind of pointer
  lastSaved: { type: Date, default: Date.now },
});

export default model('SaveFile', saveFileSchema);
