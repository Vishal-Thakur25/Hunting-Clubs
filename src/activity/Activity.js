// App.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';

const Activity = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg shadow-lg max-w-sm mx-auto">
      {/* Header */}
      <div className='bg-gradient-to-r from-red-500 to-red-300 text-white'>
      <div className="text-white text-center p-1 rounded-t-lg">
        <h1 className="text-xl font-bold">HUNTING CLUB</h1>
        </div>
        <div className="p-2 text-white">
        <h2 className="text-sm">Activity</h2>
        <p className="text-[10px]"><span>Please remember to follow the event page</span><br></br>
        <span>We will launch user feedback activities from time to time</span></p>
        <span className="text-[10px]"></span>
      </div>
      </div>

      {/* Icon Section */}
      <div className="grid grid-cols-2 gap-4 p-2 w-full">
        <button onClick={()=> navigate('/activity/ reward')} className="flex flex-col items-center">
          <img src="img/activityReward.png" alt="Activit Reward" className="w-10 h-10"/>
          <span className="text-gray-400 text-[10px] font-bold">Activity Reward</span>
        </button>
        {/* <button onClick={()=> navigate('/account/withdraw')} className="flex flex-col items-center">
          <img src="img/BettingRebate.png" alt="Withdraw" className="w-10 h-10"/>
          <span className="text-gray-400 text-[10px] font-bold">Betting Rebate</span>
        </button> */}
        <button onClick={()=> navigate('/activity/ jackpot')} className="flex flex-col items-center">
          <img src="img/superJackpot.png" alt="Jackpot" className="w-10 h-10"/>
          <span className="text-gray-400 text-[10px] font-bold">Super Jackpot</span>
        </button>
        {/* <button className="flex flex-col items-center">
          <img src="img/memberGift.png" alt="Withdrawal History" className="w-10 h-10"/>
          <span className="text-gray-400 text-[10px] font-bold">New Member Gift Package</span>
        </button> */}
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-2 p-2">
        <div onClick={()=> navigate('/activity/gifts')} className="bg-white rounded-lg shadow-lg p-1 flex flex-col items-start">
          <img src='img/Gifts.png'/>
          <h3 className="font-bold text-xs text-black">Gifts</h3>
          <p className="text-xs text-gray-600">Enter the redemption code to receive gift rewards</p>
        </div>

        <div onClick={()=>navigate('/activity / attendence')} className="bg-white shadow-lg rounded-lg p-1 flex flex-col items-start">
        <img src='img/Attendence.png'/>
          <h3 className="font-bold text-xs text-black">Attendance Bonus</h3>
          <p className="text-xs text-gray-600">The more consecutive days you sign in, the higher the reward will be.</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Activity;