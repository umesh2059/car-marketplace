import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

function AdminDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [users, setUsers] = useState([]);
  const [cars, setCars] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [statsRes, usersRes, carsRes] = await Promise.all([
        API.get('/admin/stats'),
        API.get('/admin/users'),
        API.get('/admin/cars'),
      ]);
      setStats(statsRes.data.data);
      setUsers(usersRes.data.data);
      setCars(carsRes.data.data);
    } catch (err) {
      console.error(err);
      if (err.response?.status === 403 || err.response?.status === 401) {
        navigate('/');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm('Delete this user and all their cars?')) return;
    try {
      await API.delete(`/admin/users/${id}`);
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteCar = async (id) => {
    if (!window.confirm('Delete this car?')) return;
    try {
      await API.delete(`/admin/cars/${id}`);
      setCars((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p className="text-center mt-20 text-xl">Loading...</p>;

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-600 mb-8">Full control over the marketplace.</p>

          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            {['overview', 'users', 'cars'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-semibold capitalize transition cursor-pointer ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tab === 'overview' ? 'Overview' : tab === 'users' ? 'Users' : 'Cars'}
              </button>
            ))}
          </div>

          {/* Overview */}
          {activeTab === 'overview' && stats && (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <p className="text-gray-500 text-lg">Total Cars</p>
                <p className="text-5xl font-bold text-blue-600 mt-2">{stats.totalCars}</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <p className="text-gray-500 text-lg">Total Users</p>
                <p className="text-5xl font-bold text-green-600 mt-2">{stats.totalUsers}</p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <p className="text-gray-500 text-lg">Admins</p>
                <p className="text-5xl font-bold text-purple-600 mt-2">{stats.totalAdmins}</p>
              </div>
            </div>
          )}

          {/* Users */}
          {activeTab === 'users' && (
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4">ID</th>
                    <th className="text-left p-4">Name</th>
                    <th className="text-left p-4">Email</th>
                    <th className="text-left p-4">Role</th>
                    <th className="text-left p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-t">
                      <td className="p-4">{user.id}</td>
                      <td className="p-4 font-semibold">{user.name}</td>
                      <td className="p-4">{user.email}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          user.role === 'admin'
                            ? 'bg-purple-100 text-purple-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="p-4">
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition text-sm cursor-pointer"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {users.length === 0 && <p className="text-center p-8 text-gray-500">No users found.</p>}
            </div>
          )}

          {/* Cars */}
          {activeTab === 'cars' && (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {cars.map((car) => (
                <div key={car.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img src={car.image} alt={car.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{car.title}</h3>
                    <p className="text-gray-600">{car.brand} {car.model} · {car.year}</p>
                    <p className="text-blue-600 text-xl font-bold mt-2">₹ {car.price}</p>
                    <button
                      onClick={() => handleDeleteCar(car.id)}
                      className="mt-4 w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition cursor-pointer"
                    >
                      Delete Car
                    </button>
                  </div>
                </div>
              ))}
              {cars.length === 0 && <p className="col-span-full text-center text-gray-500">No cars found.</p>}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;