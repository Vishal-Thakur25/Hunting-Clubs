import React from 'react';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';

const SuperJackpot = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-gray-100">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-white p-4 flex items-center justify-between">
          <i onClick={()=> navigate('/activity')} className="fas fa-arrow-left text-xl"></i>
          <h1 className="text-xl font-semibold">Super Jackpot</h1>
          <div></div>
        </div>
        <div className="relative">
          <img
            alt="A gift box with coins and confetti"
            className="w-full h-40 "
            height="100"
            src="https://91appl.com/assets/png/superJackpot-53463ffb.png"
            width="400"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-500 opacity-75"></div>
          <div className="absolute inset-0 flex flex-col  text-white p-4">
            <h2 className="text-xl font-bold">Super Jackpot</h2>
            <p className="text-xs">
              When you get the Super Jackpot in [Slots] Can get 1 additional bonus
            </p>
            <p className="text-xs">
              The reward is valid for 1 day, and you will not be able to claim it after it expires!
            </p>
          </div>
        </div>
        <div className="p-4">
          <button className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg flex items-center justify-center">
            <i className="fas fa-download mr-2"></i>
            Receive in batches
          </button>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <button className="bg-white border border-gray-300 text-gray-700 py-2 rounded-lg flex items-center justify-center">
              <i className="fas fa-book mr-2"></i>
              Rule
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 py-2 rounded-lg flex items-center justify-center">
              <i className="fas fa-crown mr-2"></i>
              Winning star
            </button>
          </div>
          <div className="bg-white border border-gray-300 text-gray-500 py-8 mt-4 rounded-lg flex flex-col items-center justify-center">
            <img
              alt="Placeholder image of a jackpot"
              className="mb-4"
              height="100"
              src="https://storage.googleapis.com/a1aa/image/FdrxbHiHGWIQ-GXcv6n4_4QcvH-JdWFdJ8BOSJDy8m0.jpg"
              width="100"
            />
            <p>You don't have a big jackpot yet, let's bet</p>
          </div>
          <button className="w-full bg-gradient-to-r from-red-400 to-red-600 text-white py-2 rounded-lg mt-4">
            Go bet
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuperJackpot;