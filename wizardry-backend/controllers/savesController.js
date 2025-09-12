import SaveFile from '../models/SaveFiles.js';

// Save progress
export const saveProgress = async (req, res) => {
  const { playerId, progress } = req.body;

  try {
    let save = await Save.findOne({ playerId });

    if (save) {
      // Update existing
      save.progress = progress;
      await save.save();
    } else {
      // Create new
      save = await Save.create({ playerId, progress });
    }

    res.status(200).json({ message: `Progress saved for ${playerId}` });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Load progress
export const loadProgress = async (req, res) => {
  const { playerId } = req.params;

  try {
    const save = await Save.findOne({ playerId });
    if (!save) return res.status(404).json({ message: 'No progress found' });

    res.status(200).json({ playerId, progress: save.progress });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
