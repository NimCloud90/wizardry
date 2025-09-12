// controllers/savesController.js
export const saveProgress = (req, res) => {
    const { playerId, progress } = req.body;
    console.log(`Saving progress for ${playerId}`);
    res.status(200).json({ message: `Progress saved for ${playerId}` });
  };
  
  export const loadProgress = (req, res) => {
    const { playerId } = req.params;
    console.log(`Loading progress for ${playerId}`);
    res.status(200).json({ message: `Progress loaded for ${playerId}` });
  };
  