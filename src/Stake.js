import React from 'react';
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faWallet, faUser , faBell } from '@fortawesome/free-solid-svg-icons';

const StakePanel = () => {
    return (
        <div className="flex flex-col items-center p-4 bg-gray-900 text-white max-w-md mx-auto">
            {/* Top Bar */}
            <div className="w-full flex justify-between items-center bg-gray-800 p-4 rounded-lg mb-4">
                <div className="flex items-center space-x-2">
                    <span className="text-lg">0.00000000</span>
                    <FontAwesomeIcon  className="text-yellow-500" />
                </div>
                <div className="flex items-center space-x-4">
                    <FontAwesomeIcon icon={faWallet} className="text-blue-500" />
                    <FontAwesomeIcon icon={faUser } />
                    <FontAwesomeIcon icon={faBell} />
                </div>
            </div>

            {/* Grid */}
            <button className="grid grid-cols-5 gap-2 bg-gray-800 p-4 rounded-lg mb-4">
                {Array.from({ length: 25 }).map((_, index) => (
                    <div key={index} className="w-16 h-16 bg-gray-700 rounded-lg"></div>
                ))}
            </button>

            {/* Bet Amount */}
            <div className="w-full bg-gray-800 p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center mb-2">
                    <span>Bet Amount</span>
                    <span>$0.00</span>
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        className="w-full bg-gray-700 p-2 rounded-lg text-white"
                        defaultValue="0.00000000"
                    />
                    <FontAwesomeIcon  className="text-yellow-500" />
                    <button className="bg-gray-700 p-2 rounded-lg">½</button>
                    <button className="bg-gray-700 p-2 rounded-lg">2×</button>
                </div>
            </div>

            {/* Cashout Button */}
            <button className="w-full bg-green-600 p-4 rounded-lg">Cashout</button>
        </div>
    );
};

export default StakePanel;