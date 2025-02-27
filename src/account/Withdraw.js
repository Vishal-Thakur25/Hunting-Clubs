import React from 'react';
import Footer from '../Footer';
import './Withdraw.css'

const Withdraw = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-gray-200">
        
      <h1 className="text-2xl font-bold mb-4">Withdraw</h1>
      
      <div className="p-3 justify-between bg-gradient-to-br from-red-400 to-gray-600 rounded-lg">
      <div className='flex'>
      
      <h2 className="text-xs text-white">Available balance</h2>
      </div>
        <span className="text-lg text-white">₹0.53</span>
        <button className="text-white ml-2 hover:opacity-75">&#x21BB;</button>
      </div>

      <div className="mt-4 mb-2">
        <div className="flex items-center">
          <div className="border rounded-full flex items-center justify-center w-12 h-12 bg-red-200 mr-2">
            <span>🅰️</span>
          </div>
          
          <div><span className="text-sm">ARPay</span>
        <p className="text-xs text-gray-600">Supports UPI for fast payment, and bonuses for withdrawals</p></div>
        </div>
        
        
      </div>

      <div className='flex'>
      <div className="max-w-xs w-1/2">
      <div className="bg-gradient-to-br from-red-400 to-gray-600 rounded-lg p-2 shadow-lg text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-yellow-400 w-16 h-10 rounded-lg shadow-md flex items-center justify-center">
            <div className="bg-white rounded-full w-4 h-4 mx-1"></div>
            <div className="bg-white rounded-full w-4 h-4"></div>
          </div>
        </div>
        <h2 className="text-white text-xl font-bold">BANK CARD</h2>
      </div>
    </div>
    <div className="max-w-xs w-1/2">
      <div className="bg-gradient-to-br from-red-400 to-gray-600 rounded-lg p-2 ml-1 shadow-lg text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-10 rounded-lg shadow-md flex items-center justify-center">
            <div className="bg-white rounded-full mx-1"><img src='img/USDT.png'/></div>
            
          </div>
        </div>
        <h2 className="text-white text-xl font-bold">USDT</h2>
      </div>
    </div>
    </div>
      
     

      <div className="mt-4">
        <h2 className="text-xs mb-2">Please enter the amount</h2>
        <input 
          type="number" 
          className="border rounded-lg w-full p-2" 
          placeholder="Withdrawal amount" 
        />
      </div>

      <div className="mt-4 bg-blue-100 p-4 rounded-lg">
        <p className="text-xs">Withdrawable balance ₹{0.00}</p>
        <p className="font-bold text-xs">Withdrawal amount received ₹{0.00}</p>
      </div>

      <button className="mt-4 w-full bg-blue-600 text-white p-2 rounded-lg">
        Withdraw
      </button>

      <div className="bg-white shadow-2lg rounded-lg shadow-md max-w-md mx-auto mt-10">
      <div className="bg-red-100 shadow-lg rounded-lg shadow-md max-w-md mx-auto mt-10">
      <div className="text-gray-500">
        <div className="flex items-start">
          <p className="text-xs ml-2 mt-2">◆ Need to bet <span className='text-red-500'>₹0.21</span> to be able to withdraw</p>
        </div>
        <div className="flex items-start">
          <p className="text-xs ml-2">◆ Withdraw time <span className='text-red-500'>00:00-23:59 </span></p>
        </div>
        <div className="flex items-start">
          <p className="text-xs ml-2">◆ Today Remaining Withdrawal Times: <span className='text-red-500'>3</span></p>
        </div>
        <div className="flex items-start">
          <p className="text-xs ml-2">◆  Withdrawal amount range <span className='text-red-500'>₹110.00 - ₹200,000.00</span></p>
        </div>
        <div className="flex items-start">
          <p className="text-xs ml-2">◆ Please confirm your beneficial account information before withdrawing. If your information is incorrect, our company will not be liable for the amount of loss.</p>
        </div>
        <div className="flex items-start">
          <p className="text-xs ml-2">◆ If your beneficial information is incorrect, please contact customer service.</p>
        </div>
      </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-4 mt-4">
        <img src=''/>
        <h1 className="text-lg font-semibold text-gray-800">Withdrawal history</h1>
        <div className="flex items-center flex-col mt-3">
          <div className="w-16 h-16 bg-gray-300 flex items-center justify-center rounded-full">
            {/* Placeholder for an icon or image */}
            <span className="text-gray-500">📦</span>
          </div>
          <p className="text-gray-400 mt-2">No data</p>
          <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg">
            All history
          </button>
        </div>
      </div>
    </div>
    <div className='m-10'><Footer /></div>
    </div>
  );
};

export default Withdraw;