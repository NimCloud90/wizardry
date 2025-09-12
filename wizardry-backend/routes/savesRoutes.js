import express from 'express';
import { saveProgress, loadProgress, deleteSave } from '../controllers/savesController.js';

const router = express.Router();

router.post('/save', saveProgress);
router.get('/load/:playerId', loadProgress);
router.delete('/:playerId/:name', deleteSave);

export default router;