import { Link } from 'react-router-dom';
import { FaCalendar, FaTachometerAlt, FaGasPump, FaCogs, FaMapMarkerAlt } from 'react-icons/fa';

function CarCard({ car }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition group">
      <div className="relative overflow-hidden">
        <img
          src={car.image}
          alt={car.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
        />
        <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {car.fuelType}
        </div>
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold mb-1">{car.title}</h2>
        <p className="text-gray-500 text-sm mb-3">{car.brand} {car.model} · {car.year}</p>

        <p className="text-blue-600 font-bold text-2xl mb-4">₹ {car.price.toLocaleString()}</p>

        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
          <span className="flex items-center gap-1"><FaCalendar className="text-blue-500" /> {car.year}</span>
          <span className="flex items-center gap-1"><FaTachometerAlt className="text-blue-500" /> {car.mileage}</span>
          <span className="flex items-center gap-1"><FaGasPump className="text-blue-500" /> {car.fuelType}</span>
          <span className="flex items-center gap-1"><FaCogs className="text-blue-500" /> {car.transmission}</span>
          <span className="flex items-center gap-1 col-span-2"><FaMapMarkerAlt className="text-blue-500" /> {car.location}</span>
        </div>

        <Link
          to={`/cars/${car.id}`}
          className="w-full block text-center bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default CarCard;