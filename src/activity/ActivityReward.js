import React from 'react';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';

const ActivityReward = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-gray-100 max-w-md mx-auto">
      <div className="max-w-screen-lg mx-auto  p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <i onClick={()=> navigate('/activity')} className="fas fa-arrow-left text-xl"></i>
          <div className="flex items-center">
            <i className="fas fa-history text-sm mr-2"></i>
            <span className="text-sm">Collection record</span>
          </div>
        </div>
        {/* Content */}
        <div className="bg-[url(https://91appl.com/assets/png/award_bg-00eaec82.png)] text-white p-6 rounded-lg flex items-center">
          <div className="flex-1">
            <h1 className="text-sm font-bold mb-2">Activity Award</h1>
            <p className="text-xs">
              Complete weekly/daily tasks to receive rich rewards
            </p>
            <p className="text-xs mt-2">
              Weekly rewards cannot be accumulated to the next week, and daily rewards cannot be accumulated to the next day.
            </p>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default ActivityReward;