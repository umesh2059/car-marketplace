import dotenv from 'dotenv';
import connectDB, { sequelize } from './config/db.js';
import Car from './models/Car.js';

dotenv.config();

const sampleCars = [
  {
    title: 'BMW X5',
    brand: 'BMW',
    model: 'X5',
    year: 2023,
    price: 5800000,
    mileage: '15000 km',
    fuelType: 'petrol',
    transmission: 'Automatic',
    location: 'Mumbai, India',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
    description: 'A premium luxury SUV with exceptional comfort, performance, and advanced technology.',
  },
  {
    title: 'Mercedes C-Class',
    brand: 'Mercedes',
    model: 'C-Class',
    year: 2022,
    price: 4850000,
    mileage: '20000 km',
    fuelType: 'diesel',
    transmission: 'Automatic',
    location: 'Delhi, India',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',
    description: 'Elegant design combined with outstanding driving dynamics and premium interiors.',
  },
  {
    title: 'Audi A6',
    brand: 'Audi',
    model: 'A6',
    year: 2024,
    price: 5200000,
    mileage: '8000 km',
    fuelType: 'petrol',
    transmission: 'Automatic',
    location: 'Bangalore, India',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800',
    description: 'Sophisticated sedan offering cutting-edge technology and superior ride quality.',
  },
  {
    title: 'Toyota Fortuner',
    brand: 'Toyota',
    model: 'Fortuner',
    year: 2022,
    price: 4200000,
    mileage: '25000 km',
    fuelType: 'diesel',
    transmission: 'Automatic',
    location: 'Pune, India',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
    description: 'Rugged SUV built for adventure with powerful performance and spacious interiors.',
  },
  {
    title: 'Hyundai Creta',
    brand: 'Hyundai',
    model: 'Creta',
    year: 2023,
    price: 1800000,
    mileage: '12000 km',
    fuelType: 'petrol',
    transmission: 'Automatic',
    location: 'Chennai, India',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
    description: 'Stylish compact SUV with modern features and excellent fuel efficiency.',
  },
  {
    title: 'Tesla Model 3',
    brand: 'Tesla',
    model: 'Model 3',
    year: 2024,
    price: 6500000,
    mileage: '5000 km',
    fuelType: 'electric',
    transmission: 'Automatic',
    location: 'Hyderabad, India',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800',
    description: 'Cutting-edge electric sedan with autopilot, minimalist interior, and zero emissions.',
  },
  {
    title: 'Porsche 911 Carrera',
    brand: 'Porsche',
    model: '911 Carrera',
    year: 2023,
    price: 18500000,
    mileage: '3000 km',
    fuelType: 'petrol',
    transmission: 'Automatic',
    location: 'Mumbai, India',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
    description: 'Iconic sports car delivering breathtaking performance and timeless design.',
  },
  {
    title: 'Maruti Suzuki Swift',
    brand: 'Maruti Suzuki',
    model: 'Swift',
    year: 2024,
    price: 850000,
    mileage: '8000 km',
    fuelType: 'petrol',
    transmission: 'Manual',
    location: 'Jaipur, India',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800',
    description: 'Popular hatchback known for its peppy performance, sporty looks, and great fuel economy.',
  },
  {
    title: 'Range Rover Velar',
    brand: 'Range Rover',
    model: 'Velar',
    year: 2023,
    price: 9500000,
    mileage: '10000 km',
    fuelType: 'diesel',
    transmission: 'Automatic',
    location: 'Gurgaon, India',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
    description: 'Luxury SUV with sleek design, premium interior, and off-road capability.',
  },
];

const seedCars = async () => {
  try {
    await connectDB();
    console.log('PostgreSQL connected');

    await sequelize.sync({ force: true });
    console.log('Tables created');

    const createdCars = await Car.bulkCreate(sampleCars);
    console.log(`${createdCars.length} cars added successfully`);

    await sequelize.close();
    console.log('Disconnected');
    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error.message);
    process.exit(1);
  }
};

seedCars();