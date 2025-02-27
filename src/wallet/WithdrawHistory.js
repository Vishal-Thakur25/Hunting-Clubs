import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faThLarge, faExclamationTriangle, faCreditCard, faRupeeSign, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Whistory from './Whistory';
import { useNavigate } from 'react-router-dom';

const WithdrawalHistory = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center">
      <div className="w-full max-w-md mx-auto">
        <div className="flex items-center justify-between p-4">
          <FontAwesomeIcon onClick={()=> navigate('/Wallet')} icon={faChevronLeft} className="text-xl" />
          <h3 className="text-xl font-semibold">Withdrawal History</h3>
          <div></div>
        </div>
        <div className="flex justify-between p-4">
          <button className="flex items-center justify-center w-32 h-10 bg-yellow-200 rounded-lg">
            <FontAwesomeIcon icon={faExclamationTriangle} className="text-yellow-500" />
            <span className="ml-2 text-yellow-500">UPI</span>
          </button>
          <button className="flex items-center justify-center w-32 bg-red-200 rounded-lg">
            <FontAwesomeIcon icon={faCreditCard} className="text-red-500" />
            <span className="ml-2 text-red-500">BANK CARD</span>
          </button>
          
        </div>
    
        <Whistory/>
      </div>
    </div>
  );
};

export default WithdrawalHistory;
