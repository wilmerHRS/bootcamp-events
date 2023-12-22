import { Router } from 'express';
import { getAll } from '../controllers/w-reservation.controller';

const router = Router();

router.get('/', getAll);

export default router;