
function SearchBar(){
    return(
        <div className="bg-white p-5 rounded-2xl shadow-md mb-8">
            <input 
            type="text"
            placeholder="Search by brand, model..."
            className="w-full px-5 py-4 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}

export default SearchBar;