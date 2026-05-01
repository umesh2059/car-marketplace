import { useState } from 'react';
import Navbar from '../components/Navbar';

function AddCar() {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    year: '',
    price: '',
    mileage: '',
    fuel: 'Petrol',
    transmission: 'Automatic',
    location: '',
    description: '',
    image: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Car added successfully!');
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h1 className="text-4xl font-bold mb-8 text-center">
              Add New Car
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Car Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <input
                  type="text"
                  name="brand"
                  placeholder="Brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <input
                  type="number"
                  name="year"
                  placeholder="Year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <input
                  type="number"
                  name="mileage"
                  placeholder="Mileage (km)"
                  value={formData.mileage}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <select
                  name="fuel"
                  value={formData.fuel}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Petrol</option>
                  <option>Diesel</option>
                  <option>Electric</option>
                  <option>Hybrid</option>
                </select>

                <select
                  name="transmission"
                  value={formData.transmission}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Automatic</option>
                  <option>Manual</option>
                </select>
              </div>

              <input
                type="url"
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleChange}
                className="w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <textarea
                name="description"
                rows="5"
                placeholder="Car Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-5 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
              >
                Add Car
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCar;