// import { useParams, Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';

// const cars = [
//   {
//     id: 1,
//     name: 'BMW X5',
//     year: 2023,
//     price: '$58,000',
//     mileage: '15,000 km',
//     fuel: 'Petrol',
//     transmission: 'Automatic',
//     color: 'Black',
//     location: 'Mumbai, India',
//     image:
//       'https://images.unsplash.com/photo-1555215695-3004980ad54e',
//     description:
//       'A premium luxury SUV with exceptional comfort, performance, and advanced technology.',
//   },
//   {
//     id: 2,
//     name: 'Mercedes C-Class',
//     year: 2022,
//     price: '$48,500',
//     mileage: '20,000 km',
//     fuel: 'Diesel',
//     transmission: 'Automatic',
//     color: 'White',
//     location: 'Delhi, India',
//     image:
//       'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
//     description:
//       'Elegant design combined with outstanding driving dynamics and premium interiors.',
//   },
//   {
//     id: 3,
//     name: 'Audi A6',
//     year: 2024,
//     price: '$52,000',
//     mileage: '8,000 km',
//     fuel: 'Petrol',
//     transmission: 'Automatic',
//     color: 'Grey',
//     location: 'Bangalore, India',
//     image:
//       'https://images.unsplash.com/photo-1544636331-e26879cd4d9b',
//     description:
//       'Sophisticated sedan offering cutting-edge technology and superior ride quality.',
//   },
// ];

// function CarDetails() {
//   const { id } = useParams();
//   const car = cars.find((car) => car.id === Number(id));

//   if (!car) {
//     return (
//       <>
//         <Navbar />
//         <div className="min-h-screen flex items-center justify-center">
//           <h1 className="text-4xl font-bold">Car Not Found</h1>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />

//       <div className="bg-gray-100 min-h-screen py-12">
//         <div className="max-w-7xl mx-auto px-6">
//           <Link
//             to="/cars"
//             className="inline-block mb-8 text-blue-600 hover:underline"
//           >
//             ← Back to Cars
//           </Link>

//           <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-2 gap-10">
//             <img
//               src={car.image}
//               alt={car.name}
//               className="w-full h-full object-cover"
//             />

//             <div className="p-8">
//               <h1 className="text-5xl font-bold mb-4">{car.name}</h1>

//               <p className="text-4xl font-bold text-blue-600 mb-6">
//                 {car.price}
//               </p>

//               <p className="text-gray-600 text-lg mb-8">
//                 {car.description}
//               </p>

//               <div className="grid grid-cols-2 gap-4 mb-8">
//                 <div className="bg-gray-50 p-4 rounded-xl">
//                   <p className="text-gray-500">Year</p>
//                   <p className="font-semibold">{car.year}</p>
//                 </div>

//                 <div className="bg-gray-50 p-4 rounded-xl">
//                   <p className="text-gray-500">Mileage</p>
//                   <p className="font-semibold">{car.mileage}</p>
//                 </div>

//                 <div className="bg-gray-50 p-4 rounded-xl">
//                   <p className="text-gray-500">Fuel Type</p>
//                   <p className="font-semibold">{car.fuel}</p>
//                 </div>

//                 <div className="bg-gray-50 p-4 rounded-xl">
//                   <p className="text-gray-500">Transmission</p>
//                   <p className="font-semibold">{car.transmission}</p>
//                 </div>

//                 <div className="bg-gray-50 p-4 rounded-xl">
//                   <p className="text-gray-500">Color</p>
//                   <p className="font-semibold">{car.color}</p>
//                 </div>

//                 <div className="bg-gray-50 p-4 rounded-xl">
//                   <p className="text-gray-500">Location</p>
//                   <p className="font-semibold">{car.location}</p>
//                 </div>
//               </div>

//               <button className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
//                 Contact Seller
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CarDetails;
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from '../api';
import Navbar from '../components/Navbar';

function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await API.get(`/cars/${id}`);
        setCar(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCar();
  }, [id]);

  if (!car) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div>
        <h1>{car.title}</h1>
        <p>{car.price}</p>
        <p>{car.location}</p>
        <p>{car.description}</p>
      </div>
    </>
  );
}

export default CarDetails;