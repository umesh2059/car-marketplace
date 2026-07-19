import express from 'express';
import {
  getAllUsers,
  deleteUser,
  getAllCars,
  deleteCar,
  getAdminStats,
} from '../controllers/adminControllers.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(protect, admin);

router.get('/stats', getAdminStats);
router.get('/users', getAllUsers);
router.delete('/users/:id', deleteUser);
router.get('/cars', getAllCars);
router.delete('/cars/:id', deleteCar);

export default router;