// routes/savesRoutes.js
import express from 'express';
import { saveProgress, loadProgress } from '../controllers/savesController.js';

const router = express.Router();

router.post('/save', saveProgress);
router.get('/load/:playerId', loadProgress);

export default router;
