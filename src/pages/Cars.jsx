import { useEffect, useState } from 'react';
import axios from 'axios';
import CarCard from '../components/CarCard';

function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/cars')
      .then((res) => {
        console.log('Full response:', res.data);
        console.log('Cars array:', res.data.data);
        console.log('Number of cars:', res.data.data?.length);
        setCars(res.data.data);
      })
      .catch((err) => {
        console.error('Error fetching cars:', err);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">All Cars</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default Cars;