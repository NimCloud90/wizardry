// Import your User model (or any other dependencies)
import Player from '../models/Player.js'; // make sure the path is correct
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Signup Controller
export async function signup(req, res) {
  try {
    const existingPlayer = await Player.findOne({ playername: req.body.playername });
    if (existingPlayer) {
      return res.status(400).json({ error: 'Playername already exists' });
    }
    const hashedPassword = await bcrypt.hash(password);

    const newPlayer = newPlayer({ playername, password: hashedPassword });
    
    const token = jwt.sign({ id: newPlayer._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ player: {id: newPlayer._id, playername}, token, message: 'Player created successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Signup failed', details: err.message });
  }
};

// Login Controller
export async function login(req, res) {
    const { playername, password } = req.body;

    try {
    const player = await Player.findOne({ playername });
    const token = jwt.sign({ id: player._id}, process.env.JWT_SECRET || 'secret',  { expiresIn: '1h' });
    const isMatch = await bcrypt.compare(password, player.password);
    if (!player || !isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // In real apps: generate token here
    res.status(200).json({ player: {id: player._id, playername}, token, message: 'Login successful!' });
  } catch (err) {
    res.status(500).json({ error: 'Login failed', details: err.message });
  }
};
