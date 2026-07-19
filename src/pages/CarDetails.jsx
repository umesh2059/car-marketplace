import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaCalendar, FaTachometerAlt, FaGasPump, FaCogs, FaMapMarkerAlt, FaTag, FaCar, FaPhone, FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import API from '../api';
import CarCard from '../components/CarCard';

function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [relatedCars, setRelatedCars] = useState([]);

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

  useEffect(() => {
    if (car) {
      API.get('/cars')
        .then((res) => {
          const others = res.data.data.filter((c) => c.id !== car.id).slice(0, 3);
          setRelatedCars(others);
        })
        .catch(() => {});
    }
  }, [car]);

  if (!car) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600 text-lg">Loading car details...</p>
      </div>
    </div>
  );

  const specs = [
    { label: 'Year', value: car.year, icon: FaCalendar },
    { label: 'Mileage', value: car.mileage, icon: FaTachometerAlt },
    { label: 'Fuel Type', value: car.fuelType, icon: FaGasPump },
    { label: 'Transmission', value: car.transmission, icon: FaCogs },
    { label: 'Location', value: car.location, icon: FaMapMarkerAlt },
    { label: 'Brand', value: car.brand, icon: FaTag },
    { label: 'Model', value: car.model, icon: FaCar },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <Link
          to="/cars"
          className="inline-flex items-center gap-2 mb-8 text-blue-600 hover:text-blue-800 font-semibold transition"
        >
          <FaArrowLeft /> Back to Cars
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden lg:grid lg:grid-cols-5 mb-12">
          <div className="lg:col-span-3">
            <img
              src={car.image}
              alt={car.title}
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>

          <div className="lg:col-span-2 p-8 flex flex-col">
            <div className="mb-2">
              <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
                {car.fuelType}
              </span>
              <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full ml-2">
                {car.transmission}
              </span>
            </div>

            <h1 className="text-4xl font-bold mb-2">{car.title}</h1>
            <p className="text-gray-500 text-lg mb-4">
              {car.brand} {car.model} · {car.year}
            </p>

            <p className="text-4xl font-bold text-blue-600 mb-6">
              ₹ {car.price.toLocaleString()}
            </p>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {car.description}
            </p>

            <div className="border-t pt-6 mt-auto">
              <h3 className="font-semibold text-lg mb-4">Seller Information</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition">
                  <FaPhone /> Call Seller
                </button>
                <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
                  <FaEnvelope /> Send Message
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Specifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {specs.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <div key={index} className="bg-gray-50 p-5 rounded-2xl hover:shadow-md transition">
                  <Icon className="text-blue-600 text-xl mb-2" />
                  <p className="text-gray-500 text-sm">{spec.label}</p>
                  <p className="font-semibold text-lg">{spec.value}</p>
                </div>
              );
            })}
          </div>
        </div>

        {relatedCars.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Similar Cars</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedCars.map((rc) => (
                <CarCard key={rc.id} car={rc} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CarDetails;