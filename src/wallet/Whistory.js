import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const NoDataImage = "https://storage.googleapis.com/a1aa/image/9YoH9c0pcLG5a4OKyUV3QekWKxX0NeuWnsDNKb5GYs0.jpg"; // Image URL

const Whistory = () => {
  return (
    <div className="bg-gray-100 ">
         <div className="flex justify-between p-4">
          <div className="relative w-1/2 pr-2">
            <select className="w-full h-10 pl-3 pr-6 text-gray-600 bg-white border rounded-lg appearance-none focus:outline-none focus:shadow-outline">
              <option>All</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <FontAwesomeIcon icon={faChevronDown} className="text-gray-400" />
            </div>
          </div>
          <div className="relative w-1/2 pl-2">
            <select className="w-full h-10 pl-3 pr-6 text-gray-600 bg-white border rounded-lg appearance-none focus:outline-none focus:shadow-outline">
              <option>Choose a date</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <FontAwesomeIcon icon={faChevronDown} className="text-gray-400" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-64">
          <img alt="Illustration of no data available" className="mb-4" height="100" src="https://storage.googleapis.com/a1aa/image/qKUShxS1lKcWpG0Roel8y1apZ-UnnCpEBly0ss9IrT8.jpg" width="100"/>
          <p className="text-gray-400">No data</p>
        </div>
    </div>
  );
};

export default Whistory;
