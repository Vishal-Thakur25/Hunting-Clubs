import React from 'react';
import 'tailwindcss/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-gray-100 font-roboto min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10">
        <div className="bg-gradient-to-r from-red-500 to-pink-500 p-4 text-white flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="img/logohunter.png"
              alt="91 Club Logo"
              className="h-10 w-10 rounded-lg"
            />
            <span className="ml-2 text-xl font-bold">HUNTING CLUB</span>
          </div>
          <div className="flex items-center">
            <img
              src="https://storage.googleapis.com/a1aa/image/udvD-JOaY0KAtq2Y20g3mkBK3DXSpP_HBgxveB3aAIM.jpg"
              alt="US Flag"
              className="h-5 w-5"
            />
            <span className="ml-1">EN</span>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">Log in</h2>
          <p className="text-sm text-gray-600 mb-4">
            Please log in with your phone number or email
            <br />
            If you forget your password, please contact customer service
          </p>
          <div className="flex border-b border-gray-300 mb-4">
            <button className="flex-1 py-2 text-center text-red-500 border-b-2 border-red-500">
              <i className="fas fa-mobile-alt"></i> phone number
            </button>
            {/* <button className="flex-1 py-2 text-center text-gray-500">
              <i className="fas fa-envelope"></i> Email Login
            </button> */}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">
              <i className="fas fa-mobile-alt text-red-500"></i> Phone number
            </label>
            <div className="flex">
              <select className="border border-gray-300 rounded-l px-3 py-2">
                <option>+91</option>
              </select>
              <input
                type='telephone'
                maxLength={10}
                className="border border-gray-300 rounded-r px-3 py-2 flex-1"
               placeholder='enter your phone number'
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">
              <i className="fas fa-lock text-red-500"></i> Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="border border-gray-300 rounded w-full px-3 py-2"
                placeholder="Password"
              />
              <i className="fas fa-eye absolute right-3 top-3 text-gray-500"></i>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-gray-600">
              Remember password
            </label>
          </div>
          <button className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-2 rounded mb-4">
            Log in
          </button>
          <button onClick={()=> navigate('/register')} className="w-full border border-red-500 text-red-500 py-2 rounded mb-4">
            Register
          </button>
          <div className="flex justify-between">
            <div className="text-center">
              <i className="fas fa-lock text-red-500 text-2xl"></i>
              <p className="text-gray-600 text-sm">Forgot password</p>
            </div>
            <div className="text-center">
              <i className="fas fa-headset text-red-500 text-2xl"></i>
              <p className="text-gray-600 text-sm">Customer Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
