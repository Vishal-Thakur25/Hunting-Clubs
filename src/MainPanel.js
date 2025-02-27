import React from 'react';
import { useState } from 'react';
import MainComponent from './MainComponent';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const images = [
    'https://tse1.mm.bing.net/th?id=OIP.7ZFBBiy_3_AaQVfGX-frRQHaE6&pid=Api&rs=1&c=1&qlt=95&w=158&h=105', // provide your image URLs here
    'url2.jpg', 
    'url3.jpg'
];

const MainPanel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [showDepositPage, setShowDepositPage] = useState(false);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + images.length) % images.length
        );
    };

    const navigate = useNavigate();

    return (
        <div className="bg-gradient-to-r from-red-400 to-gray-400 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="text-white bg-gradient-to-r from-red-500 to-gray-400 text-center p-1 rounded-t-lg">
        <h1 className="text-xl font-bold">HUNTING CLUB</h1>
        </div>
            {/* Slider Section */}
            <div className="relative">
                <img 
                    src={images[currentIndex]} 
                    alt="Slider" 
                    className="w-full h-40 object-cover"
                />
                <button onClick={prevImage} 
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
                    &lt;
                </button>
                <button onClick={nextImage} 
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
                    &gt;
                </button>
            </div>
            {/* Wallet Balance Section */}
            <div className="items-center bg-gray-300 rounded-b-lg justify-between border-t pt-4">
                <div className="text-l m-1">
                    <p className="text-l text-black font-semibold">Wallet balance</p>
                    
                </div>
                <div className="flex items-center space-x-2 m-2">
                <p className="w-32 rounded-lg text-xl">₹0.53</p>
                    <button onClick={()=> navigate('/account/withdrawhistory')} className="bg-green-700 text-white px-2 py-1 rounded-full">Withdraw</button>
                    <button onClick={()=> navigate('/account/deposit')} className="bg-blue-500 text-white px-2 py-1 rounded-full" >Deposit</button>
                </div>
            </div>
            <div className='bg-gray-200 rounded lg'>
            <div className='bg-gray-200 flex rounded lg'>
                <div><img className='w-10 mt-2' src='img/balls.svg'/></div>
                <div className='flex flex-col ml-2 bg-gray-20'>
                <span className='text-sm text-black font-bold' >Lottery </span>
                <span className='text-[10px] text-gray-500 '>The games are independently developed by our team, fun, fair, and safe</span>
                </div>
            </div>
            <div className='bg-gray-200  rounded lg'>
            <MainComponent/>
            </div>
            </div>
           
            <div className='m-14'><Footer /></div>
        
        </div>
    );
}

export default MainPanel
