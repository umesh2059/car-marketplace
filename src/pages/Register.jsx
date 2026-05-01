import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Register() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
        <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">
          <h1 className="text-4xl font-bold text-center mb-8">
            Create Account
          </h1>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition">
              Register
            </button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;