import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Car from './models/car.js';
import carRoutes from './routes/carRoutes.js';

dotenv.config();
connectDB();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

console.log('Car model:', Car.modelName);

app.get('/',(req,res)=>{
    res.send('car marketplace api is runnning...')
});
app.use('/api/cars',carRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});