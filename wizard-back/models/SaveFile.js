import { Schema, model } from 'mongoose';

const saveFileSchema = new Schema({
  playerId: { type: Schema.Types.Mixed, required: true,
  progress: String, // Could be JSON or some kind of pointer
  lastSaved: { type: Date, default: Date.now },
}});


export default model('SaveFile', saveFileSchema);
