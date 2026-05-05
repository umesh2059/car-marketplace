import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import FilterSidebar from '../components/FilterSidebar';
import CarCard from '../components/CarCard';

const cars = [
  {
    id: 1,
    name: 'BMW X5',
    year: 2023,
    price: '$58,000',
    image:
      'https://images.unsplash.com/photo-1555215695-3004980ad54e',
  },
  {
    id: 2,
    name: 'Mercedes C-Class',
    year: 2022,
    price: '$48,500',
    image:
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
  },
  {
    id: 3,
    name: 'Audi A6',
    year: 2024,
    price: '$52,000',
    image:
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b',
  },
  {
    id: 4,
    name: 'Tesla Model 3',
    year: 2024,
    price: '$61,000',
    image:
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89',
  },
];

function Cars() {
  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-6">
          <SearchBar />

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <FilterSidebar />
            </div>

            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {cars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cars;

import { useEffect,useState } from 'react';
import API from "../api";

const Cars =()=>{
  const [cars , setCars]=useState([]);

  useEffect(()=>{
    const fetchCars = async()=>{
      try{
        const res = await API.get('/cars');
        setCars(res.data.data);
      }catch(error){
        console.log(error);
      }
    }
    fetchCars();

  },[]);
  return (
        <div>
            <h1>Cars</h1>
            {cars.map((car) => (
                <div key={car._id}>
                    <h3>{car.title}</h3>
                    <p>{car.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Cars;
