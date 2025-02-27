import React from 'react';
import WalletIcon from '@mui/icons-material/Wallet';
import Dashboard from './Dashboard';
import Sidebar from './SideBar';
import Footer from '../Footer';
import LogoutButton from './ServiceCenter';
import { useNavigate } from 'react-router-dom';
const UserCard = () => {
  const navigate = useNavigate();
   
  return (
    <div className='bg-gradient-to-r from-red-500 to-gray-400 max-w-sm mx-auto  '>
       <div className="text-white text-center p-1 rounded-t-lg">
        <h1 className="text-xl font-bold">HUNTING CLUB</h1>
        </div>
    <div className="max-w-sm mx-auto bg-gradient-to-r from-red-500 to-gray-400 rounded-lg shadow-md p-6 text-white">
      <div className="flex items-center mb-4">
        <img
          src="your-image-url.jpg" // Replace with the actual image URL
          alt="User LOGO"
          className="w-16 h-16 rounded-full border-2 border-white mr-4"
        />
        <div>
          <h2 className="text-sm font-semibold">UserName</h2>
          <p className="text-xs bg-yellow-500 rounded-lg">UID | 1816038</p>
          <p className="text-xs">Last login: 2025-02-22 16:39:22</p>
        </div>
        <div className="ml-auto">
          <img
            src="vip-icon-url.png" // Replace with the actual VIP icon URL
            alt="VIP"
            className="w-8 h-8"
          />
        </div>
        {/* <div className="bg-gray-300 rounded-lg">
      
        </div> */}
      </div>
      
      {/* <p className="text-sm text-gray-800">Total balance</p>
      <p className="text-m text-black">₹0.53</p> */}

   

    </div>
    <div className="bg-gray-300 h-16 mt-1 rounded-lg w-full flex justify-center items-center p-4">
  <button onClick={() => navigate('/account/deposit')} className="flex flex-col items-center justify-center text-gray-700 p-2 mt-4 font-semibold rounded w-full md:w-auto">
    <span className="material-icons mb-1"><WalletIcon /></span>
    <p>Deposit</p>
  </button>
  <button onClick={() => navigate('/account/withdraw')} className="flex flex-col items-center justify-center text-gray-700 p-2 mt-4 font-semibold rounded w-full md:w-auto ml-2 md:ml-4">
    <span className="material-icons mb-1"><WalletIcon /></span>
    <p>Withdraw</p>
  </button>
</div>

{/* <Dashboard/> */}
<Sidebar/>
<LogoutButton/>

<div className='m-10'><Footer /></div>

    </div>
  );
};

export default UserCard;
