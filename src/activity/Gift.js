import React from 'react';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';

const Gift = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <button className="text-gray-500">
            <i onClick={()=>navigate('/activity')} className="fas fa-chevron-left"></i>
          </button>
          <h1 className="text-lg font-semibold">Gift</h1>
          <div></div>
        </div>
        <div className="p-4">
          <img
            alt="Gift box with various items coming out of it"
            className="w-full rounded-lg mb-4"
            height="300"
            src="https://91appl.com/assets/png/gift-d7507b9b.png"
            width="600"
          />
          <div className="bg-white p-2 rounded-lg shadow-md mb-4">
            <p className="text-gray-700 text-xs">Hi</p>
            <p className="text-gray-700 text-xs">We have a gift for you</p>
            <p className="text-gray-700 text-sm font-medium mt-2">Please enter the gift code below</p>
            <input
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Please enter gift code"
              type="text"
            />
            <button className="w-full mt-4 p-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounded-lg">
              Receive
            </button>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              <i className="fas text-sm fa-history text-red-500 mr-2"></i>
              <h2 className="text-gray-700 font-semibold text-lg">History</h2>
            </div>
            <div className="flex flex-col items-center justify-center">
             
              <p className="text-gray-500">No data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;