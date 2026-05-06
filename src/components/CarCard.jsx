import { Link } from 'react-router-dom';

function CarCard({ car }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">

      <img
        src={car.image}
        alt={car.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">
          {car.title}
        </h2>

        <p className="text-blue-600 font-semibold text-lg">
          ₹ {car.price}
        </p>

        <Link
          to={`/car/${car._id}`}
          className="inline-block mt-4 text-blue-500 hover:underline"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}

export default CarCard;