import { Link } from "react-router-dom";

function CarCard({car}){
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <img 
            src={car.image}
            alt={car.name}
            className="w-full h-64 object-cover"
            />

            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
                <p className="text-gray-600 mb-2">{car.year}</p>
                <p className="text-blue-600 text-2xl font-bold mb-4">{car.price}</p>

                <Link
                to={`/cars/${car.id}`}
                className="block text-center bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800 transition">
                    view Details
                </Link>
            </div>
        </div>
    );
}

export default CarCard; 