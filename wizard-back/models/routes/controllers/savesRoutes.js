import { Router } from 'express';
const router = Router();
import { saveGame, loadGame } from './saveController';

router.post('/save', saveGame);
router.get('/load/:playerId', loadGame);

export default router;
