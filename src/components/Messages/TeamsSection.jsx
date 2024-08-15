// src/components/TeamsSection.jsx
import React from 'react';
import { FaPlus } from 'react-icons/fa';

const TeamsSection = () => (
  <div className=" ">
    <div className="flex justify-between items-center mb-2 ">
      <h2 className="text-xl font-medium text-[#404660]">Teams</h2>
      <FaPlus className="text-[#404660] cursor-pointer bg-slate-50 p-2 rounded" size={30}/>
    </div>
    <hr className='my-2' />
    {/* Add your team items here */}
    <div className='flex gap-4 overflow-hidden overflow-x-auto'>
      <div className="text-gray-500 text-center flex flex-col items-center">
        <div className='w-10 '>
            <img src="https://via.placeholder.com/40" alt="" className='w-full object-cover rounded-full' />
        </div>
        <p className='text-sm text-gray-500 my-2'>Elite</p>
      </div>
      <div className="text-gray-500 text-center flex flex-col items-center">
        <div className='w-10 '>
            <img src="https://via.placeholder.com/40" alt="" className='w-full object-cover rounded-full' />
        </div>
        <p className='text-sm text-gray-500 my-2'>TPhysics</p>
      </div>
      <div className="text-gray-500 text-center">
        <div className='w-10 '>
            <img src="https://via.placeholder.com/40" alt="" className='w-full object-cover rounded-full' />
        </div>
        <p className='text-sm text-gray-500 my-2'>GBBda</p>
      </div> 
      <div className="text-gray-500 text-center flex flex-col items-center">
        <div className='w-10 '>
            <img src="https://via.placeholder.com/40" alt="" className='w-full object-cover rounded-full' />
        </div>
        <p className='text-sm text-gray-500 my-2'>liteMean</p>
      </div>
      <div className="text-gray-500 text-center flex flex-col items-center">
        <div className='w-10 '>
            <img src="https://via.placeholder.com/40" alt="" className='w-full object-cover rounded-full' />
        </div>
        <p className='text-sm text-gray-500 my-2'>StudyFun</p>
      </div>
      <div className="text-gray-500 text-center flex flex-col items-center">
        <div className='w-10 '>
            <img src="https://via.placeholder.com/40" alt="" className='w-full object-cover rounded-full' />
        </div>
        <p className='text-sm text-gray-500 my-2'>ScienceMad</p>
      </div>
    </div>
  
  </div>
);

export default TeamsSection;
