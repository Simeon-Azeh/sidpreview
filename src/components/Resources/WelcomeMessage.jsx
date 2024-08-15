// src/components/WelcomeMessage.jsx
import React from 'react';
import MocktestImg from '../../../public/images/Mocktest.svg';
import TakeTestButton from './TakeTestButton';

const WelcomeMessage = () => (
  <div className="bg-white border rounded px-8 py-6 mb-4 flex flex-col md:flex-row justify-center items-center gap-4 font-poppins">
    <div className='md:w-[30%] w-full'>
      <img src={MocktestImg} alt="Mocktest" className="w-full object-cover" />
    </div>
    <div>
    <h2 className="text-2xl font-semibold mb-2 text-[#404660]">Welcome to Mocktest!</h2>
    <p className='text-gray-500'>We've built a sample of your <span className='text-[#9835ff] font-medium'>GCE Mock</span> exam to get you ready anyday, anytime. Get your scores in <span className='text-[#9835ff] font-medium'>realtime</span>.</p>
    <TakeTestButton />
    </div>
  </div>
);

export default WelcomeMessage;
