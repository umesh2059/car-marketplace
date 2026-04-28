import { Link } from 'react-router-dom';
import { FaCarSide } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-blue-600"
        >
          <FaCarSide className="text-3xl" />
          AutoMarket
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/cars" className="hover:text-blue-600 transition">
            Cars
          </Link>
          <Link to="/login" className="hover:text-blue-600 transition">
            Login
          </Link>
          <Link
            to="/register"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;