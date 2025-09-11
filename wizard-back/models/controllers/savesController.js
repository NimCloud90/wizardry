import SaveFile from '../models/SaveFile.js';

// Save or update a game file
export async function saveGame(req, res) {
  try {
    const { playerId, progress } = req.body;

    if (!playerId || !progress) {
      return res.status(400).json({ error: 'Missing playerId or progress' });
    }

    const save = await SaveFile.findOneAndUpdate(
      { playerId },
      { progress, lastSaved: new Date() },
      { upsert: true, new: true }
    );

    res.json(save);
  } catch (err) {
    console.error('Error saving game:', err);
    res.status(500).json({ error: 'Failed to save game', details: err.message });
  }
}

// Load a saved game file
export async function loadGame(req, res) {
  try {
    const { playerId } = req.params;

    const save = await SaveFile.findOne({ playerId });
    if (!save) {
      return res.status(404).json({ message: 'No save found' });
    }

    res.json(save);
  } catch (err) {
    console.error('Error loading game:', err);
    res.status(500).json({ error: 'Failed to load game', details: err.message });
  }
}
