import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faCommentDots, faBullhorn, faHeadset, faBookOpen, faCube } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 ">
      <div className="bg-gray-300 p-4 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Service center</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div onClick={()=> navigate('/settings')}>
            <FontAwesomeIcon icon={faCog} className="text-red-400 text-xl mb-2" />
            <p className="text-sm">Settings</p>
          </div>
          <div onClick={()=> navigate('/feedback')}>
            <FontAwesomeIcon icon={faCommentDots} className="text-red-400 text-xl mb-2" />
            <p className="text-sm">Feedback</p>
          </div>
          <div onClick={()=> navigate('/notification')}>
            <FontAwesomeIcon icon={faBullhorn} className="text-red-400 text-xl mb-2" />
            <p className="text-sm">Notification</p>
          </div>
          <div onClick={()=> navigate('/CustomerSupport')}>
            <FontAwesomeIcon icon={faHeadset} className="text-red-400 text-xl mb-2" />
            <p className="text-sm">Customer Service</p>
          </div>
          <div onClick={()=> navigate('/guide')}>
            <FontAwesomeIcon icon={faBookOpen} className="text-red-400 text-xl mb-2" />
            <p className="text-sm">Beginner's Guide</p>
          </div>
          <div onClick={()=> navigate('/ about us')}>
            <FontAwesomeIcon icon={faCube} className="text-red-400 text-xl mb-2" />
            <p className="text-sm">About us</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SideBar;
