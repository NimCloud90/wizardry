// Import your User model (or any other dependencies)
import Player from '../models/Player.js'; // make sure the path is correct

// Signup Controller
export async function signup(req, res) {
  try {
    const { playername, password } = req.body;
    
    const hashedPassword = await bcrypt.hash(password); // 10 = salt rounds
    const newPlayer = newPlayer({ playername, password: hashedPassword });
    

    res.status(201).json({ message: 'Player created successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Signup failed', details: err.message });
  }
}

// Login Controller
export async function login(req, res) {
  try {
    const { playername, password } = req.body;

    const player = await Player.findOne({ playername });
    const isMatch = await bcrypt.compare(password, player.password);
    if (!player || !isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // In real apps: generate token here
    res.status(200).json({ message: 'Login successful!' });
  } catch (err) {
    res.status(500).json({ error: 'Login failed', details: err.message });
  }
}
