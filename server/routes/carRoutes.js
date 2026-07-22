import express from 'express';
import { createCar, getCars, getCarById, updateCar, deleteCar } from '../controllers/carControllers.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getCars);
router.get('/:id', getCarById);
router.post('/', protect, admin, createCar);
router.put('/:id', protect, admin, updateCar);
router.delete('/:id', protect, admin, deleteCar);

export default router;