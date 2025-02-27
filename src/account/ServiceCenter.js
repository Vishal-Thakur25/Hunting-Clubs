// LogoutButton.js

import React from 'react';

const LogoutButton = () => {
    return (
        <div className="flex justify-center bg-white items-center py-2">
            <button className="flex items-center bg-red-500 border border-red-800 outline-ring rounded-full px-4 py-2 hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 transition duration-200 ease-in-out">
                <svg
                    className="w-5 h-5 mr-2 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-2H9v-2h3V8l4 4-4 4v-2z" />
                </svg>
                <span className="text-white">Log out</span>
            </button>
        </div>
    );
};

export default LogoutButton;