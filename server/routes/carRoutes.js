import express from 'express';
import { createCar,getCars,getCarById,updateCar,deleteCar } from '../controllers/carControllers.js';

const router = express.Router();

router.post('/',createCar)
router.get('/',getCars)
router.get('/:id',getCarById)
router.put('/:id',updateCar)
router.delete('/:id',deleteCar)


export default router;

