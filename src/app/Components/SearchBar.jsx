import React from 'react'

const SearchBar = () => {
  return (
    <div className="flex justify-center px-4 py-10">
      <div className="flex items-center w-full max-w-2xl mx-auto">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            id="search-field"
            className="block w-full pl-10 pr-4 py-2 text-gray-700 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            placeholder="Type any job title here"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;