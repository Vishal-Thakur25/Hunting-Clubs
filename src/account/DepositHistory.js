import React from 'react';
import { FaArrowLeft, FaThLarge, FaChevronDown, FaCopy } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';

const DepositHistory = ({ history }) => {
  const navigate = useNavigate();

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Order number copied to clipboard!');
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg mt-6">
      <div className="flex items-center justify-between p-4 border-b">
        <button onClick={() => navigate('/account/deposit')}>
          <FaArrowLeft className="text-xl" />
        </button>
        <h1 className="text-xl font-semibold">Deposit History</h1>
        <div></div>
      </div>
      <div className="flex justify-around p-2 gap-2 border-b">
        <button className="flex items-center px-4 py-4 h-10 text-xs bg-red-400 text-white rounded-l">
          <FaThLarge className="mr-2" /> All
        </button>
        <button className="flex items-center px-4 py-4 h-10 text-xs bg-gray-200 text-gray-600 rounded-l">
          <img
            alt="Innate UPI-QR"
            className="mr-2"
            height="20"
            src="https://storage.googleapis.com/a1aa/image/no5tAt9y7mlpYzaLKA1mwbzQnAbzgkG2IPCnRPRHIdQ.jpg"
            width="20"
          /> 
          Innate UPI-QR
        </button>
        <button className="flex items-center px-4 py-4   h-10 text-xs sm:text-xs bg-gray-200 text-gray-600 rounded-l">
          <img
            alt="Expert Paytm-QR"
            className="mr-2"
            height="20"
            src="https://storage.googleapis.com/a1aa/image/uXE2nCNRfCX5N5jY5kFrrwTO_GIyVcxJGLmkWHXsn1g.jpg"
            width="20"
          /> 
          Expert Paytm-QR
        </button>
      </div>
      <div className="flex justify-between p-4 border-b">
        <button className="flex items-center px-4 py-2 sm:text-xs bg-gray-200 text-gray-600 rounded-full">
          All <FaChevronDown className="ml-2" />
        </button>
        <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-600 rounded-full">
          Choose a date <FaChevronDown className="ml-2" />
        </button>
      </div>
      <div className="p-4">
        {history.slice().reverse().map((item, index) => (
          <div key={index} className="bg-white p-2 rounded-lg shadow-md mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full">Deposit</span>
              <span className="text-blue-500">To Be Paid</span>
            </div>
            <div className="text-gray-600 flex justify-between mb-2">
              <div>
                <p className='text-sm'>
                  Balance 
                </p>
                <p className='text-sm'>
                  Type 
                </p>
                <p className='text-sm'>
                  Time 
                </p>
                <p className='text-sm'>
                  Order number 
                </p>
              </div>
              <div className='text-right text-sm'>
                <p className="text-orange-500">₹{item.balance}</p>
                <p className="text-gray-800">{item.type}</p>
                <p className="text-gray-800">{item.time}</p>
                <p className="text-gray-800">{item.orderNumber} 
                  <FaCopy 
                    onClick={() => handleCopy(item.orderNumber)} 
                    className="cursor-pointer" 
                  />
                </p> 
              </div>
            </div>
            <button className="w-full bg-red-400 text-white py-2 rounded-full">
              Submit Receipt
            </button>
          </div>
        ))}
      </div>
      <div className="text-center text-gray-600 py-4">No more</div>
      <div className='mt-12'><Footer/></div>
    </div>
  );
};

export default DepositHistory;
