import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB, { sequelize } from './config/db.js';
import User from './models/User.js';
import Car from './models/Car.js';
import carRoutes from './routes/carRoutes.js';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('car marketplace api is running...');
});

app.use('/api/cars', carRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

const startServer = async () => {
  await connectDB();

  User.hasMany(Car, { foreignKey: 'sellerId' });
  Car.belongsTo(User, { foreignKey: 'sellerId' });

  await sequelize.sync({ alter: true });
  console.log('Database synced');

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();