import React from 'react';
import MocktestImg from '../../../public/images/Support.svg';
import { FaSearch } from 'react-icons/fa';


const WelcomeMessage = () => (
  <div>
    <div className="bg-white border rounded px-8 py-6 mb-4 flex flex-col md:flex-row justify-center items-center gap-4 font-poppins">
      <div className='md:w-[40%] w-full'>
        <img src={MocktestImg} alt="Mocktest" className="w-full object-cover" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2 text-[#404660]">Welcome to Sidec support!</h2>
        <p className='text-gray-500'>Get help <span className='text-[#9835ff] font-medium'>anytime.</span> Our customer support team will be happy to help. <span className='text-[#9835ff] font-medium'>help.</span></p>
        <div className="relative mt-4">
          <input type="text" className="w-full border p-1 px-4 text-[16px] text-[#404660] rounded-md focus:outline-none pl-10" placeholder="How can we help you?" />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>
    </div>
  </div>
);

export default WelcomeMessage;
