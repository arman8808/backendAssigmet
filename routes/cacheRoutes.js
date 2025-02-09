import express from 'express';
import { addToCache, getFromCache, removeFromCache } from '../controllers/cacheController.js';

const router = express.Router();


router.post('/', addToCache);


router.get('/:key', getFromCache);


router.delete('/:key', removeFromCache);

export default router;
