import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, description, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg flex flex-row items-start justify-between space-y-1 hover:shadow-lg transition duration-200 ease-in-out">
      <div className="text-2xl">{icon}</div>
      <div className='mr-2'>
      <h2 className="text-xs font-semibold">{title}</h2>
      <p className="text-gray-600 text-xs">{description}</p>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const navigate= useNavigate();
  return (
    <div className="bg-gray-200 grid grid-cols-2 gap-2 lg:flex-row lg:space-x-3 p-2 mt-1 bg-gray-100">
      <Card 
        title="Game History" 
        description="My game history" 
        icon={<span className="text-blue-500">📊</span>} 
      />
      <Card 
        title="Transaction" 
        description="My transaction history" 
        icon={<span className="text-green-500">💵</span>} 
      />
      <button onClick = {()=>navigate('/account/deposit/history')}>
      <Card 
        title="Deposit" 
        description="My deposit history" 
        icon={<span className="text-red-500">💰</span>} 
      />
      </button>
      <Card 
        title="Withdraw" 
        description="My withdraw history" 
        icon={<span className="text-orange-500">📤</span>} 
      />
    </div>
  );
};

export default Dashboard;