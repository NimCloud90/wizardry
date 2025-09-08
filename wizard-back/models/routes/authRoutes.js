const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

const Player = require('../models/Player');
const JWT_SECRET = process.env.JWT_SECRET || 'default_secret_key';

// POST /signup
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user already exists
    const existingPlayer = await Player.findOne({ username });
    if (existingPlayer) {
      return res.status(409).json({ message: 'Username already exists' });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create and save the new user
    const newPlayer = new Player({
      username,
      password: hashedPassword,
    });

    await newPlayer.save();

    return res.status(201).json({ message: 'User created successfully' });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
});

// POST /api/auth/register
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) return res.status(400).json({ message: 'Username and password are required.' });

  const existingPlayer = await Player.findOne({ username });
  if (existingPlayer) return res.status(409).json({ message: 'Username already taken.' });

  const hashedPassword = await bcrypt.hash(password, 10);

  const newPlayer = new Player({
    username,
    passwordHash: hashedPassword,
  });

  await newPlayer.save();

  res.status(201).json({ message: 'Player registered successfully.' });
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const player = await Player.findOne({ username });
  if (!player) return res.status(401).json({ message: 'Invalid credentials.' });

  const isMatch = await bcrypt.compare(password, player.passwordHash);
  if (!isMatch) return res.status(401).json({ message: 'Invalid credentials.' });

  
  const token = jwt.sign({ id: player._id, username: player.username }, JWT_SECRET, {
    expiresIn: '1h',
  });

  res.json({ token });
});

module.exports = router;
