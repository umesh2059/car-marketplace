function Hero() {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Find Your Dream Car Today
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Buy, sell, and explore thousands of premium cars from trusted dealers
          and private sellers.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition">
          Explore Cars
        </button>
      </div>
    </section>
  );
}

export default Hero;