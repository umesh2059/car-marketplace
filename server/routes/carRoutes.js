import express from 'express';
import { createCar,getCars,getCarById,updateCar } from '../controllers/carControllers.js';

const router = express.Router();

router.post('/',createCar)
router.get('/',getCars)
router.get('/:id',getCarById)
router.put('/',updateCar)


export default router;

