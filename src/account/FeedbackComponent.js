import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const FeedbackComponent = () => {
  const navigate = useNavigate()
  const feedbackImage = "https://storage.googleapis.com/a1aa/image/fx19xbWMrloN6sSTChDnsDBuk0X2pKj29tXghSBqZ5U.jpg"; // Image URL

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center justify-between mb-4">
          <FontAwesomeIcon onClick={()=>navigate('/account')} icon={faArrowLeft} className="text-l" />
          <h1 className="text-xl font-semibold">Feedback</h1>
          <div></div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p className="text-gray-400 text-xs">
            Welcome to feedback, please give feedback—please describe the problem in detail when providing feedback, preferably attach a screenshot of the problem you encountered, we will immediately process your feedback!
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-gray-700 text-sm mb-2">Send helpful feedback</p>
          <p className="text-gray-700 text-sm mb-4">Chance to win Mystery Rewards</p>
          <img
            alt="Illustration of a person giving feedback with various elements like stars and papers around them"
            className="w-40 h-32"
            src={feedbackImage}
            width="200"
            height="200"
          />
        </div>
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
                <span className="text-white">Submit</span>
            </button>
        </div>
      </div>
      
      
    </div>
  );
};

export default FeedbackComponent;
