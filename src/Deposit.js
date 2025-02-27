import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Deposit = ({ onDeposit }) => {

  const [depositAmount, setDepositAmount] = useState(0);
  const [balance, setBalance] = useState(depositAmount); // Initial balance

  const handleDeposit = () => {
    const amount = parseFloat(depositAmount);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount.');
      return;
    }
 
    const newEntry = {
      balance: amount,
      type: 'Deposit',
      time: new Date().toLocaleString(),
      orderNumber: `RC${Date.now()}${Math.floor(Math.random() * 1000)}`
    };
    onDeposit(newEntry);
    setBalance((prevBalance) => prevBalance + amount); // Update the balance
    setDepositAmount('');
  };

  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-md mx-auto p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <i onClick={()=>navigate('/Wallet')}  className="fas fa-arrow-left text-xl"></i>
          <h1 className="text-xl font-semibold">Deposit</h1>
          <button onClick={()=> navigate('/account/deposit/history')} className="text-blue-500" href="#">
            Deposit history
          </button>
        </div>
        
        {/* Balance Card */}
        <div className="bg-gradient-to-r from-red-400 to-gray-400 font-semibold text-white rounded-lg p-2 mb-2">
          <div className="flex justify-between items-center">
            <div>
              <i className="fas fa-wallet text-xl"></i>
              <span className="ml-2">Balance</span>
            </div>
            <i className="fas fa-sync-alt"></i>
          </div>
          <div className="text-xl font-bold mt-2">₹{balance.toFixed(2)}</div>
          <div className="mt-2">********</div>
        </div>
        
        {/* ARPay Section */}
        <div className="bg-white rounded-lg p-2 mb-2 shadow">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                alt="ARPay logo"
                className="w-10 h-10 mr-2"
                height="40"
                src="https://storage.googleapis.com/a1aa/image/0OpRE6W4m4mm9oAdTlZ4bq3nJBsGiSpBbGh4Exg_DYU.jpg"
                width="40"
              />
              <div>
                <div className="font-semibold">ARPay</div>
                <div className="text-gray-500 text-xs">
                  Use AR PAY to recharge for additional rewards 2% bonus
                </div>
              </div>
            </div>
            <div className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
              +2%
            </div>
          </div>
        </div>
        
        {/* Payment Options */}
        <div className="grid grid-cols-3 gap-2">
          {/* Innate UPI-QR */}
          <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
            <img
              alt="Innate UPI-QR"
              className="w-10 h-10"
              height="40"
              src="https://storage.googleapis.com/a1aa/image/X6NHpuTXLZT1EWDDfcC4o1nHU16ukgC5FIJDWbm3JZs.jpg"
              width="40"
            />
            <div className="text-center text-xs">Innate UPI-QR</div>
          </div>
          {/* Expert Paytm-QR */}
          <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow">
            <img
              alt="Expert Paytm-QR"
              className="w-10 h-10 mb-2"
              height="40"
              src="https://storage.googleapis.com/a1aa/image/pFddmSCpGL6MM75KM2ojDDzHc6qKjaarfR-hNJCcTtc.jpg"
              width="40"
            />
            <div className="text-center text-xs">Expert Paytm-QR</div>
          </div>
          {/* UPI-QR PAY */}
          <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow">
            <img
              alt="UPI-QR PAY"
              className="w-10 h-10 mb-2"
              height="40"
              src="https://storage.googleapis.com/a1aa/image/vwlSucin-7i7w2AR4LbwTvseDes1SFtQnyPD9YyWAr4.jpg"
              width="40"
            />
            <div className="text-center text-xs">UPI-QR PAY</div>
          </div>
        </div>
        
        {/* Deposit Amount */}
        <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md mt-2">
          <div className="flex items-center mb-4">
            <img
              alt="Deposit icon"
              className="mr-2"
              height="24"
              src="https://storage.googleapis.com/a1aa/image/SLphfuJh_RGCSAq2owaK_buqHppBYt7be1MpEHvfBUY.jpg"
              width="24"
            />
            <h2 className="text-xl font-semibold">Deposit amount</h2>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {['200', '400', '600', '1K', '2K', '3K', '5K', '10K', '20K', '30K', '40K', '50K'].map((amount) => (
              <button
                key={amount}
                className="border border-purple-300 rounded-lg py-1 text-purple-500 font-semibold"
                onClick={() => setDepositAmount(amount.replace('K', '000'))}
              >
                ₹ {amount}
              </button>
            ))}
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg p-2 mb-4">
            <i className="fas fa-rupee-sign text-red-500 mr-2"></i>
            <input
              className="flex-grow outline-none"
              placeholder="Please enter the amount"
              type="text"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
            />
            <i className="fas fa-times-circle text-gray-400 cursor-pointer" onClick={() => setDepositAmount('')}></i>
          </div>
          <button
            className="w-full bg-gradient-to-r from-red-400 to-gray-400 text-white py-2 rounded-lg"
            onClick={handleDeposit}
          >
            Deposit
          </button>
        </div>
        <div className='mt-6'><Footer/></div>
      </div>
    </div>
  );
};

export default Deposit;
