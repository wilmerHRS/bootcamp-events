import { Router } from 'express';
import { getAll, create, getSearch } from '../controllers/event.controller';

const router = Router();

router.get('/', getAll);
router.get('/search', getSearch);
router.post('/', create);

export default router;