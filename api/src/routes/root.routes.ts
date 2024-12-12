import { Router } from 'express';
import RootController from '../controllers/root.controller';

const router = Router();

router.get('/', RootController.index);

export default router;
