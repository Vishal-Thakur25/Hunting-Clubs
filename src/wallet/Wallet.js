import React from 'react';
import { FaWallet } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';

const WalletAccount = () => {
  const navigate = useNavigate();
  return (
    <div className=" rounded-lg shadow-lg max-w-md mx-auto ">
       <div className="text-white bg-gradient-to-r from-red-500 to-gray-400 text-center p-1 rounded-t-lg">
        <h1 className="text-xl font-bold">HUNTING CLUB</h1>
        </div>
      <div className="flex flex-col items-center bg-gradient-to-b from-red-400 to-gray-300 p-3 rounded-b-lg shadow-lg max-w-md mx-auto">
      <h1 className="text-white text-xl font-bold">Wallet</h1>
      <FaWallet className="text-lg" />         
      <span className="text-white font-bold text-2xl font-semibold">₹0.53</span>
      <span className="text-white font-bold">Total balance</span>
      <div className="grid grid-cols-2 gap-4 my-2">
        <div className="flex flex-col items-center">
          <span className="text-black font-bold text-sm">0</span>
          <span className="text-black text-xs">Withdrawable</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-black font-bold text-sm">100</span>
          <span className="text-black text-xs">Total Deposit amount</span>
        </div>
      </div>

      </div>
      <div className="flex flex-row justify-between items-center w-full p-5 mt-1">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center  border-8 border-red-500 p-4 w-24 h-24 bg-white rounded-full">
            <p className="text-black font-bold mt-3">100%</p>
          </div>
          <span className="text-sm text-black mt-1">₹0.53</span>
          <span className="text-black text-sm">Main wallet</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center bg-white border-8 border-red-500 p-4 w-24 h-24 rounded-full">
            <p className="text-black font-bold mt-3">0%</p>
          </div>
          <span className="text-xs text-black mt-2">₹0.00</span>
          <span className="text-black text-xs">Bonus Wallet</span>
        </div>
      </div>
      <button className="mt-1 w-full md:w-80 md:ml-16 bg-red-400 text-white py-2 px-4 rounded-full">Main wallet transfer</button>
      <div className="grid grid-cols-4 gap-4 mt-4 p-2 w-full">
        <button onClick={()=> navigate('/account/deposit')} className="flex flex-col items-center">
          <img src="img/deppost.png" alt="Deposit" className="w-16 h-16"/>
          <span className="text-gray-400 text-xs font-bold">Deposit</span>
        </button>
        <button onClick={()=> navigate('/account/withdraw')} className="flex flex-col items-center">
          <img src="img/withdrawBlue.png" alt="Withdraw" className="w-16 h-16"/>
          <span className="text-gray-400 text-xs font-bold">Withdraw</span>
        </button>
        <button onClick={()=> navigate('/account/deposit/history')} className="flex flex-col items-center">
          <img src="img/rechargehistory.png" alt="Deposit History" className="w-16 h-16"/>
          <span className="text-gray-400 text-xs font-bold">Deposit history</span>
        </button>
        <button onClick={()=> navigate('/account/withdrawhistory')} className="flex flex-col items-center">
          <img src="img/withdrawhistory.png" alt="Withdrawal History" className="w-16 h-16"/>
          <span className="text-gray-400 text-xs font-bold">Withdrawl history</span>
        </button>
      </div>
      <div className='m-10'><Footer /></div>
    </div>
  );
};

export default WalletAccount;