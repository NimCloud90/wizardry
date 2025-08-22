const SaveFile = require('../models/SaveFile');

exports.saveGame = async (req, res) => {
  const { playerId, progress } = req.body;
  const save = await SaveFile.findOneAndUpdate(
    { playerId },
    { progress, lastSaved: new Date() },
    { upsert: true, new: true }
  );
  res.json(save);
};

exports.loadGame = async (req, res) => {
  const { playerId } = req.params;
  const save = await SaveFile.findOne({ playerId });
  if (!save) return res.status(404).json({ message: 'No save found' });
  res.json(save);
};
