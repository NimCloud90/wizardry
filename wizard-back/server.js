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
  credentials: false,
}));

// --- Routes ---
app.use('/api/auth', authRoutes);
app.use('/api/saves', savesRoutes);

// --- Extra Test Endpoints (can be removed later) ---
app.post('/api/saves/save', (req, res) => {
  const { playerId, progress } = req.body;
  console.log(`Saving progress for user: ${playerId}`);
  res.status(200).send(`Progress saved for ${playerId}`);
});

app.get('/api/saves/load/:playerId', (req, res) => {
  const { playerId } = req.params;
  console.log(`Loading progress for player: ${playerId}`);
  res.status(200).send(`Progress loaded for ${playerId}`);
});

// --- Database Connection ---
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
