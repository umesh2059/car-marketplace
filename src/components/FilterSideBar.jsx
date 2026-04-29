
function FilterSideBar(){
    return(
        <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-6">Filters</h2>
            <div className="space-y-5">
                <select className="w-full p-3 border rounded-lg">
                    <option>All Brands</option>
                    <option>BMW</option>
                    <option>Mercedes</option>
                    <option>Audi</option>
                    <option>toyota</option>
                    <option>Fortuner</option>
                </select>

                <select className="w-full p-3 border rounded=lg">
                    <option>Price range</option>
                    <option>Under rs 30000</option>
                    <option>rs50000</option>
                    <option>rs70000</option>
                    <option>rs30000-rs60000</option>
                    <option>Above rs70000</option>
                </select>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                    Apply Filters
                </button>
            </div>
        </div>
    );

}

export default FilterSideBar;