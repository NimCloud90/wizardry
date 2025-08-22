const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000; // You can change this to any port that works for you

// Middleware
app.use(express.json()); // Allows us to parse JSON
app.use(cors());         // Allows cross-origin requests from your Angular app

// Routes
app.post('/api/saves/save', (req, res) => {
  const { playerId, progress } = req.body;
  // Simulate saving data (in reality, you'd save this to a DB)
  console.log(`Saving progress for user: ${playerId}`);
  res.status(200).send(`Progress saved for ${playerId}`);
});

app.get('/api/saves/load/:playerId', (req, res) => {
  const { playerId } = req.params;
  // Simulate loading data (in reality, fetch from DB)
  console.log(`Loading progress for player: ${playerId}`);
  res.status(200).send(`Progress loaded for ${playerId}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
