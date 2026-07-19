import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../api';
import CarCard from './CarCard';

function FeaturedCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    API.get('/cars')
      .then((res) => setCars(res.data.data.slice(0, 4)))
      .catch(() => {});
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-14">
          <h2 className="text-4xl font-bold">Featured Cars</h2>
          <Link
            to="/cars"
            className="text-blue-600 font-semibold hover:underline"
          >
            View All Cars →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCars;