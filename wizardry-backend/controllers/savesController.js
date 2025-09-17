import SaveFiles from '../models/SaveFiles.js';

// Save or overwrite progress
export const saveProgress = async (req, res) => {
  const { playerId, name, data } = req.body;

  if (!playerId || !name || !data) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    let saveDoc = await SaveFiles.findOne({ playerId });

    if (!saveDoc) {
      saveDoc = new SaveFiles({ playerId, saves: [] });
    }

    const existingSaveIndex = saveDoc.saves.findIndex(s => s.name === name);

    if (existingSaveIndex > -1) {
      saveDoc.saves[existingSaveIndex].data = data;
      saveDoc.saves[existingSaveIndex].createdAt = new Date();
    } else {
      if (saveDoc.saves.length >= 3) {
        return res.status(400).json({ message: 'Save limit reached (3 max)' });
      }
      saveDoc.saves.push({ name, data, createdAt: new Date() });
    }

    await saveDoc.save();
    res.status(200).json({ message: 'Progress saved', saves: saveDoc.saves });
  } catch (err) {
    console.error('Save error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Load all saves for a player
export const loadProgress = async (req, res) => {
  const { playerId } = req.params;

  try {
    const saveDoc = await SaveFiles.findOne({ playerId });

    // Return empty array instead of 404 if no saves exist
    const saves = saveDoc?.saves || [];
    res.status(200).json({ saves });
  } catch (err) {
    console.error('Load error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a specific save
export const deleteSave = async (req, res) => {
  const { playerId, name } = req.params;

  try {
    const saveDoc = await SaveFiles.findOne({ playerId });

    if (!saveDoc) {
      return res.status(200).json({ message: 'No saves found', saves: [] });
    }

    saveDoc.saves = saveDoc.saves.filter(s => s.name !== name);
    await saveDoc.save();

    res.status(200).json({ message: `Deleted save "${name}"`, saves: saveDoc.saves });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
