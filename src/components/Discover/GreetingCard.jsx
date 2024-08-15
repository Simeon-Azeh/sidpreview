import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import GreetingsImg from '../../../public/images/GreetingsImg.png';

const GreetingCard = () => {
  const [greeting, setGreeting] = useState('');
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) {
      setGreeting('Good morning');
    } else if (hours < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg border flex items-center flex-col sm:flex-row font-poppins">
      <div className='w-full md:h-auto h-[310px] md:w-1/3'>
        <img 
          src={GreetingsImg}
          alt="Icon" 
          className="w-full"
        />
      </div>
      <div className="md:mt-4 sm:mt-0 sm:ml-4 w-full">
        {isSmallScreen && <p className="text-lg mb-2 mt-2 font-medium text-[#404660]">{greeting}, <span className='text-[#9835ff]'>Simeon Azeh!</span></p>}
        <h1 className="text-[16px] md:text-xl font-medium text-[#404660] mb-2">What do you want to learn today?</h1>
        <div className="relative w-full md:mb-0 mb-6">
          <input 
            type="text" 
            placeholder="Search for courses..." 
            className="px-4 py-2 border rounded-lg w-full pl-10 outline-none text-gray-500 "
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default GreetingCard;
