import mongoose from 'mongoose';

const savefilesSchema = new mongoose.Schema({
  playerId: {
    type: String,
    required: true,
    unique: true
  },
  progress: {
    type: Object,
    required: true,
    default: {}
  },
}, { timestamps: true });

// Optional: index playerId for faster queries
saveSchema.index({ playerId: 1 }, { unique: true });

export default mongoose.model('SaveFiles', savefilesSchema);
