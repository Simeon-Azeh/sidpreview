import React from 'react';
import badgeImage from '../../../public/images/awardone.png'; // Adjust the path as necessary

function Badges() {
  return (
    <div className='w-full bg-white rounded-md border h-96 px-8 py-4'>
      <h1 className='text-xl font-semibold text-[#404660] mb-4'>New Badge</h1>
      <div className='flex justify-center items-center mb-4'>
        <div className="flex justify-center items-center bg-[#9835ff] w-60 h-60 rounded-full shadow-lg hover:scale-105 duration-300 p-4">
          <img src={badgeImage} alt="Badge" className="w-full h-full object-cover rounded-full bg-white p-2 pt-6" />
        </div>
      </div>
      <div className='flex justify-center'>
        <button className='px-4 py-2 bg-[#9835ff] text-white rounded shadow hover:translate-y-[-5px] duration-300'>
          View More
        </button>
      </div>
    </div>
  );
}

export default Badges;
