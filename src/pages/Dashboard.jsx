import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const myCars = [
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
];

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
            <div>
              <h1 className="text-4xl font-bold">My Dashboard</h1>
              <p className="text-gray-600 mt-2">
                Manage your car listings easily.
              </p>
            </div>

            <Link
              to="/add-car"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition text-center"
            >
              + Add New Car
            </Link>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {myCars.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">
                    {car.name}
                  </h2>

                  <p className="text-gray-600 mb-2">{car.year}</p>

                  <p className="text-blue-600 text-2xl font-bold mb-6">
                    {car.price}
                  </p>

                  <div className="flex gap-4">
                    <button className="flex-1 bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition">
                      Edit
                    </button>

                    <button className="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {myCars.length === 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                No Cars Listed Yet
              </h2>
              <p className="text-gray-600 mb-6">
                Start by adding your first car listing.
              </p>

              <Link
                to="/add-car"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition"
              >
                Add Car
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;