import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import API from '../api';

function Dashboard() {
  const navigate = useNavigate();
  const [myCars, setMyCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchMyCars = async () => {
      try {
        const res = await API.get('/cars');
        setMyCars(res.data.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMyCars();
  }, [navigate]);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this car?')) return;
    try {
      await API.delete(`/cars/${id}`);
      setMyCars((prev) => prev.filter((car) => car.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p className="text-center mt-20 text-xl">Loading...</p>;

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
            <div>
              <h1 className="text-4xl font-bold">My Dashboard</h1>
              <p className="text-gray-600 mt-2">Manage your car listings easily.</p>
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
                key={car.id || car._id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <img
                  src={car.image}
                  alt={car.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{car.title}</h2>
                  <p className="text-gray-600 mb-2">{car.year}</p>
                  <p className="text-blue-600 text-2xl font-bold mb-6">₹ {car.price}</p>

                  <div className="flex gap-4">
                    <button className="flex-1 bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition cursor-pointer">
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(car.id || car._id)}
                      className="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {myCars.length === 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">No Cars Listed Yet</h2>
              <p className="text-gray-600 mb-6">Start by adding your first car listing.</p>
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