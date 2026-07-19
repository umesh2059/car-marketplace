import { Link, useNavigate } from 'react-router-dom';
import { FaCarSide } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch {
        setUser(null);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-blue-600"
        >
          <FaCarSide className="text-3xl" />
          CarDekho
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/cars" className="hover:text-blue-600 transition">Cars</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>

          {user ? (
            <>
              <Link to="/dashboard" className="hover:text-blue-600 transition">Dashboard</Link>
              {user.role === 'admin' && (
                <Link to="/admin" className="hover:text-red-600 transition font-semibold">Admin</Link>
              )}
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-blue-600 transition">Login</Link>
              <Link
                to="/register"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;