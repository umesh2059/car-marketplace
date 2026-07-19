import { Link } from 'react-router-dom';
import { FaCarSide, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-400 mb-4">
            <FaCarSide className="text-3xl" />
            CarDekho
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            India's trusted car marketplace. Buy, sell, and explore thousands of premium cars from verified sellers.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link to="/cars" className="hover:text-blue-400 transition">Cars</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
            <li><Link to="/login" className="hover:text-blue-400 transition">Login</Link></li>
            <li><Link to="/register" className="hover:text-blue-400 transition">Register</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>123, Car Street, Connaught Place</li>
            <li>New Delhi, 110001</li>
            <li>info@cardekho.com</li>
            <li>+91 98765 43210</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-2xl text-gray-400">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition"><FaLinkedin /></a>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Subscribe to our newsletter for the latest car deals.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} CarDekho. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
