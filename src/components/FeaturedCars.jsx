const cars = [
  {
    id: 1,
    name: 'BMW X5',
    price: 'Rs 58,000',
    image:
      'https://images.unsplash.com/photo-1555215695-3004980ad54e',
  },
  {
    id: 2,
    name: 'Mercedes C-Class',
    price: 'RS48,500',
    image:
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
  },
  {
    id: 3,
    name: 'Audi A6',
    price: 'RS52,000',
    image:
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b',
  },
];

function FeaturedCars() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
          Featured Cars
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
                <p className="text-blue-600 text-xl font-semibold">
                  {car.price}
                </p>

                <button className="mt-5 w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCars;