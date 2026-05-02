import express from 'express';
import { createCar } from '../controllers/carControllers.js';

const router = express.Router();

router.post('/',createCar);
export default router;

