import React from 'react';
import 'tailwindcss/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';


const RegisterPage = () => {
    const navigate = useNavigate()
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between  items-center mb-4">
          <i onClick={()=>navigate('/')} className="fas fa-arrow-left text-xl text-gray-600"></i>
          
        <h1 className="text-xl font-bold">HUNTING CLUB</h1>
        
          <img
            src="https://91appl.com/assets/png/en-4c6eba8e.png"
            alt="US flag"
            className="h-5"
          />
        </div>
        <h1 className="text-xl font-bold text-gray-800 mb-1">Register</h1>
        <p className="text-sm text-gray-500 mb-6">Please register by phone number or email</p>
        <div className="text-center  mb-6">
          <img
            src="https://storage.googleapis.com/a1aa/image/utMwHq4wh4e-ukQaFrs7kOpqsEkoIckuKzghLTbhDfU.jpg"
            alt="Phone icon"
            className="mx-auto mb-2"
            height="30"
            width="30"
          />
          <h2 className="text-lg font-bold text-red-500">Register your phone</h2>
          <hr className="border-red-500 mt-2" />
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
              <i className="fas fa-phone-alt text-red-500 mr-2"></i> Phone number
            </label>
            <div className="flex">
              <select className="bg-gray-200 border border-gray-300 text-gray-700 py-2 px-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>+91</option>
                {/* Add other country codes as needed */}
              </select>
              <input
                type="text"
                id="phone"
                placeholder="Please enter the phone number"
                className="bg-gray-200 border border-gray-300 text-gray-700 py-2 px-3 rounded-r-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              <i className="fas fa-lock text-red-500 mr-2"></i> Set password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder="Set password"
                className="bg-gray-200 border border-gray-300 text-gray-700 py-2 px-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <i className="fas fa-eye-slash absolute right-3 top-3 text-gray-500"></i>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="confirm-password">
              <i className="fas fa-lock text-red-500 mr-2"></i> Confirm password
            </label>
            <div className="relative">
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm password"
                className="bg-gray-200 border border-gray-300 text-gray-700 py-2 px-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <i className="fas fa-eye-slash absolute right-3 top-3 text-gray-500"></i>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="invite-code">
              <i className="fas fa-envelope-open-text text-red-500 mr-2"></i> Invite code
            </label>
            <input
              type="text"
              id="invite-code"
              placeholder="Please enter the invitation code"
              className="bg-gray-200 border border-gray-300 text-gray-700 py-2 px-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="agree" className="mr-2" />
            <label htmlFor="agree" className="text-gray-700 text-sm">
              I have read and agree <a href="#" className="text-red-500">【Privacy Agreement】</a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-lg font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Register
          </button>
        </form>
        <div class="border border-red-400 rounded-full py-2 px-8 mt-3 w-full content-center inline-block">
            <span class="text-gray-500 m-5">I have an account <a href="/" class="text-red-500 font-bold">Login</a></span>
            
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
