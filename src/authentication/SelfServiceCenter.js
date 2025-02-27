import React from 'react';
import 'tailwindcss/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';


const SelfServiceCenter = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-md mx-auto bg-white shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-white border-b">
          <i onClick={()=> navigate('/account')} className="fas fa-home text-xl"></i>
          <h1 className="text-lg font-semibold">Self Service Center</h1>
          <div className="flex items-center space-x-2">
            <i className="fas fa-flag-usa text-xl"></i>
            <span>English</span>
          </div>
        </div>
        {/* Banner */}
        <div className="relative">
          <img
            src="https://h5.workorder.support/assets/home_banner-DcKIbb-T.png"
            alt="Welcome to the Self Service Customer Service Center banner with a smiling customer service representative"
            className="w-full"
            height="80"
           
          />
          
        </div>
        
        <div className="p-4">
          <h2 className="text-lg font-semibold">Self Service</h2>
          <ul className="space-y-4 ">
            <li className="flex items-center justify-between p-2 bg-gray-100 rounded-lg">
              <div className="flex items-center space-x-4">
                <i className="fas fa-question-circle text-sm text-pink-500"></i>
                <span className='text-xs'>FAQ</span>
              </div>
              <i className="fas fa-chevron-right text-gray-400"></i>
            </li>
            <li className="flex items-center justify-between p-2 bg-gray-100 rounded-lg">
              <div className="flex items-center space-x-4">
                <i className="fas fa-calendar-alt text-sm text-red-500"></i>
                <span className='text-xs'>91CLUB Event Center</span>
              </div>
              <i className="fas fa-chevron-right text-gray-400"></i>
            </li>
            <li className="flex items-center justify-between p-2 bg-gray-100 rounded-lg">
              <div className="flex items-center space-x-4">
                <i className="fas fa-question text-sm text-red-500"></i>
                <span className='text-xs'>Tutorial Apply Bonus Winstreak 91CLUB</span>
              </div>
              <i className="fas fa-chevron-right text-gray-400"></i>
            </li>
            <li className="flex items-center justify-between p-2 bg-gray-100 rounded-lg">
              <div className="flex items-center space-x-4">
                <i className="fas fa-wallet text-sm text-red-500"></i>
                <span className='text-xs'>Deposit Not Receive</span>
              </div>
              <i className="fas fa-chevron-right text-gray-400"></i>
            </li>
            <li className="flex items-center justify-between p-2 bg-gray-100 rounded-lg">
              <div className="flex items-center space-x-4">
                <i className="fas fa-university text-sm text-red-500"></i>
                <span className='text-xs'>IFSC Modification</span>
              </div>
              <i className="fas fa-chevron-right text-gray-400"></i>
            </li>
            <li className="flex items-center justify-between p-2 bg-gray-100 rounded-lg">
              <div className="flex items-center space-x-4">
                <i className="fas fa-unlink text-sm text-red-500"></i>
                <span className='text-xs'>Delete Withdraw Bank Account and Rebind</span>
              </div>
              <i className="fas fa-chevron-right text-gray-400"></i>
            </li>
            <li className="flex items-center justify-between p-2 bg-gray-100 rounded-lg">
              <div className="flex items-center space-x-4">
                <i className="fas fa-exclamation-circle text-sm text-red-500"></i>
                <span className='text-xs'>Withdrawal problem</span>
              </div>
              <i className="fas fa-chevron-right text-gray-400"></i>
            </li>
            <li className="flex items-center justify-between p-2 bg-gray-100 rounded-lg">
              <div className="flex items-center space-x-4">
                <i className="fas fa-key text-sm text-red-500"></i>
                <span className='text-xs'>Change ID Login Password</span>
              </div>
              <i className="fas fa-chevron-right text-gray-400"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelfServiceCenter;
