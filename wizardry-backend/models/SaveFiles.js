import mongoose from 'mongoose';

const savefilesSchema = new mongoose.Schema({
  playerId: {
    type: String,
    required: true,
    unique: true
  },
  saves: [
    {
      name: { type: String, required: true },
      data: { type: Object, required: true},
      createdAt: { type: Date, default: Date.now }
    }
  ]

}, { timestamps: true });

// Optional: index playerId for faster queries
saveSchema.index({ playerId: 1 }, { unique: true });

export default mongoose.model('SaveFiles', savefilesSchema);
