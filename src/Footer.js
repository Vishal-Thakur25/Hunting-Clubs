import React from 'react';
import { FaHeart, FaGift, FaWallet, FaUser } from 'react-icons/fa'; // You can use any icon library
import CasinoIcon from '@mui/icons-material/Casino';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="fixed bottom-0 left-0 p-2 right-0 bg-white shadow-lg max-w-sm mx-auto">
      <div className="flex justify-between items-center">
        <button onClick={()=>navigate('/promotion')} className="flex flex-1 justify-center">
          <div className="flex flex-col items-center text-black">
            <FaHeart className="text-xs" />
            <span>Promotion</span>
          </div>
        </button>
        <button  onClick={()=>navigate('/activity')} className="flex flex-1 justify-center">
          <div className="flex flex-col items-center text-black">
            <FaGift className="text-xs" />
            <span>Activity</span>
          </div>
        </button>
        <button className="flex flex-1 justify-center">
          {/* Center button */}
          <button onClick={()=> navigate('/games')} className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
            <span className="text-xs"><CasinoIcon/></span> {/* Add an appropriate icon here */}
          </button>
        </button>
        <button onClick={()=> navigate('/Wallet')} className="flex flex-1 justify-center">
          <div className="flex flex-col items-center text-black">
            <FaWallet className="text-xs" />
            <span>Wallet</span>
          </div>
        </button>
        <button onClick={()=> navigate('/account')} className="flex flex-1 justify-center">
          <div className="flex flex-col items-center text-black">
            <FaUser className="text-xs" />
            <span>Account</span>
          </div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;