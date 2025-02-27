import React from 'react';
import { useNavigate } from 'react-router-dom';


const MainComponent = () => {
    const navigate = useNavigate();

    const handleNavigate = (route) => {
      navigate(route);
    };
  
    return (
        
      <div style={{ display: 'grid', gap: '10px' }} className="grid grid-cols-2 gap-4 m-2">
        <div 
          onClick={() => handleNavigate("/mines")} 
          style={{ cursor: 'pointer', backgroundColor: '#4A90E2', borderRadius: '8px', color: 'white' }}>
          <img className='w-full md:h-32 h-24' src='img/MInes.png'/>
        </div>
        <div 
          onClick={() => handleNavigate("/k3")} 
          style={{ cursor: 'pointer', backgroundColor: '#F39C12', borderRadius: '8px', color: 'white' }}>
          <img className='w-full md:h-32 h-24' src='img/Wingo.png'/>
        </div>
        <div 
          onClick={() => handleNavigate("/5d")} 
          style={{ cursor: 'pointer', backgroundColor: '#2ECC71', borderRadius: '8px', color: 'white' }}>
         <img className='w-full md:h-32 h-24' src='img/wingo.jpg'/>
        </div>
      </div>
     
    );
  };

export default MainComponent;