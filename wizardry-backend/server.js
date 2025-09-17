// --- Dependencies ---
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// --- Route Imports ---
import authRoutes from './routes/authRoutes.js';
import savesRoutes from './routes/savesRoutes.js';

// --- Config ---
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// --- Middleware ---
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: false,
}));

// --- Routes ---
app.use('/api/auth', authRoutes);
app.use('/api/saves', savesRoutes);

// --- Database Connection ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
