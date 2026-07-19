import express from 'express';
import { createCar, getCars, getCarById, updateCar, deleteCar } from '../controllers/carControllers.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', createCar);
router.get('/', getCars);
router.get('/:id', getCarById);
router.put('/:id', protect, updateCar);
router.delete('/:id', protect, deleteCar);

export default router;