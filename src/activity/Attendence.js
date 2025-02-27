import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const Attendance = () => {
    const navigate = useNavigate()
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-red-500 p-4 text-white">
        <div className="flex items-center justify-between">
          <i onClick={()=>navigate('/activity')} className="fas fa-arrow-left"></i>
          <h1 className="text-lg font-semibold">Attendance</h1>
          <div></div>
        </div>
        <div className="mt-4">
          <h2 className="text-sm font-bold">Attendance bonus</h2>
          <p className="text-xs">Get rewards based on consecutive login days</p>
          <div className="mt-4 flex items-center">
            <div className="bg-red-600 p-1 rounded-lg">
              <p className="text-xs">Attended consecutively</p>
              <p className="text-lg font-bold">0 Day</p>
            </div>
            <img
              alt="Illustration of a calendar and a pencil"
              className="ml-auto"
              height="100"
              src="https://storage.googleapis.com/a1aa/image/MrBnabbBLFPC-mQWO-cVrtbW14hArCaam2SBEACzDTY.jpg"
              width="100"
            />
          </div>
          <p className="mt-4 text-xl font-bold">₹0.00</p>
          <div className="flex space-x-4">
            <button className="bg-yellow-400 text-red-500 px-4 py-2 rounded-full">
              Game Rules
            </button>
           
          </div>
        </div>
      </div>
      <div className="p-2 grid grid-cols-3 gap-2">
        {[
          { amount: '₹5.00', days: '1 Day' },
          { amount: '₹18.00', days: '2 Day' },
          { amount: '₹100.00', days: '3 Day' },
          { amount: '₹200.00', days: '4 Day' },
          { amount: '₹400.00', days: '5 Day' },
          { amount: '₹3,000.00', days: '6 Day' },
        ].map((reward, index) => (
          <div key={index} className="bg-white items-center p-4 h-32 rounded-lg shadow">
            <p className="text-xs font-bold">{reward.amount}</p>
            <img
              alt="Gold coin with a star"
              className=" my-2 text-sm"
              height="30"
              src="https://91appl.com/assets/png/coin-294b6998.png"
              width="30"
            />
            <p className="text-xs">{reward.days}</p>
          </div>
        ))}
      </div>
      <div className="p-4 bg-white rounded-lg shadow mt-4 flex items-center">
        <img
          alt="Gift box with gold coins"
          className="mr-4"
          height="50"
          src="https://91appl.com/assets/png/coin-294b6998.png"
          width="50"
        />
        <div>
          <p className="text-lg font-bold">₹7,000.00</p>
          <p className="text-sm">7 Day</p>
        </div>
      </div>
      <div className="p-4">
        <button className="w-full bg-gradient-to-r from-red-400 to-pink-500 text-white py-2 rounded-full">
          Attendance
        </button>
      </div>
    </div>
  );
};

export default Attendance;