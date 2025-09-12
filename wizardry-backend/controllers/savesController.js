// controllers/savesController.js
import Save from '../models/Save.js';

// Save or overwrite progress
export const saveProgress = async (req, res) => {
  const { playerId, name, data } = req.body;

  if (!playerId || !name || !data) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    let saveDoc = await Save.findOne({ playerId });

    if (!saveDoc) {
      saveDoc = new Save({ playerId, saves: [] });
    }

    // Check if save with same name exists
    const existingSaveIndex = saveDoc.saves.findIndex(s => s.name === name);

    if (existingSaveIndex > -1) {
      // Overwrite existing save
      saveDoc.saves[existingSaveIndex].data = data;
      saveDoc.saves[existingSaveIndex].createdAt = new Date();
    } else {
      // If already 3 saves, reject
      if (saveDoc.saves.length >= 3) {
        return res.status(400).json({ message: 'Save limit reached (3 max)' });
      }
      // Add new save
      saveDoc.saves.push({ name, data });
    }

    await saveDoc.save();
    res.status(200).json({ message: 'Progress saved', saves: saveDoc.saves });
  } catch (err) {
    console.error('Save error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Load all saves for player
export const loadProgress = async (req, res) => {
  const { playerId } = req.params;

  try {
    const saveDoc = await Save.findOne({ playerId });
    if (!saveDoc) {
      return res.status(404).json({ message: 'No saves found', saves: [] });
    }

    res.status(200).json({ saves: saveDoc.saves });
  } catch (err) {
    console.error('Load error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a specific save by name
export const deleteSave = async (req, res) => {
  const { playerId, name } = req.params;

  try {
    const saveDoc = await Save.findOne({ playerId });
    if (!saveDoc) {
      return res.status(404).json({ message: 'No saves found' });
    }

    saveDoc.saves = saveDoc.saves.filter(s => s.name !== name);
    await saveDoc.save();

    res.status(200).json({ message: `Deleted save "${name}"`, saves: saveDoc.saves });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
