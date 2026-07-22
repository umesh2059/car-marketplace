import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import API from '../api';

function Dashboard() {
  const navigate = useNavigate();
  const [myCars, setMyCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const decoded = jwtDecode(token);
    setUser(decoded);

    if (decoded.role === 'admin') {
      navigate('/admin');
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

  if (loading) return <p className="text-center mt-20 text-xl">Loading...</p>;

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10">
            <h1 className="text-4xl font-bold">My Dashboard</h1>
            <p className="text-gray-600 mt-2">Browse available cars.</p>
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
                  </div>
                </div>
              </div>
            ))}
          </div>

          {myCars.length === 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">No Cars Available</h2>
              <p className="text-gray-600">Check back later for new listings.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;