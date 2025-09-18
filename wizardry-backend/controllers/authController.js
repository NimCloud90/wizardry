import Player from '../models/Player.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// --- Signup Controller ---
export async function signup(req, res) {
  try {
    const { playername, password } = req.body;

    if (!playername || !password) {
      return res.status(400).json({ error: 'Playername and password are required' });
    }

    const existingPlayer = await Player.findOne({ playername });
    if (existingPlayer) {
      return res.status(400).json({ error: 'Playername already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newPlayer = new Player({ playername, password: hashedPassword });
    await newPlayer.save();

    const token = jwt.sign({ id: newPlayer._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({
      player: { id: newPlayer._id, playername },
      token,
      message: 'Player created successfully!'
    });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ error: 'Signup failed', details: err.message });
  }
}

// --- Login Controller ---
export async function login(req, res) {
  try {
    const { playername, password } = req.body;

    if (!playername || !password) {
      return res.status(400).json({ error: 'Playername and password are required' });
    }

    const player = await Player.findOne({ playername });
    if (!player) return res.status(401).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, player.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: player._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      player: { id: player._id, playername: player.playername },
      token,
      message: 'Login successful!'
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Server error', details: err.message });
  }
}
