import React from 'react';
import awardui from '../../../public/images/awardui.png';
import { FaQuestionCircle, FaCheckCircle, FaShareAlt } from "react-icons/fa";
import { IoCloseCircle, IoCreate } from "react-icons/io5";

function QuizSummary() {
  return (
    <div className='bg-white border rounded-md px-8 py-8 w-full flex justify-center flex-col items-center relative h-96  '>
      <div className='w-32 md:w-38 absolute top-[-10%]'>
        <img src={awardui} alt="Award" className='w-full object-contain' />
      </div>
      <div className='text-center flex flex-col gap-2 mt-20 '>
        <h1 className='text-2xl font-semibold text-[#404660]'>Congratulations!</h1>
        <p className='text-gray-500'>You've scored <span className='text-[#9835ff] font-medium text-[18px]'>+80</span> in your last mock</p>
      </div>
      <div className='flex justify-between items-center gap-20 mt-6 border-t pt-6 '>
        <div className='flex flex-col items-center border-l border-r px-2 '>
          <h1 className='flex items-center gap-2 text-lg'><FaQuestionCircle className="text-[#9835ff]" />20</h1>
          <p className='text-sm text-gray-500'>Questions</p>
        </div>
        <div className='flex flex-col items-center border-r pr-2'>
          <h1 className='flex items-center gap-2 text-lg'><FaCheckCircle className="text-green-500" />17</h1>
          <p className='text-sm text-gray-500'>Correct</p>
        </div>
        <div className='flex flex-col items-center border-r pr-2'>
          <h1 className='flex items-center gap-2 text-lg'><IoCloseCircle className="text-red-500" />03</h1>
          <p className='text-sm text-gray-500'>Wrong</p>
        </div>
      </div>
      <div className='flex gap-4 pt-10'>
        <button className='flex items-center gap-2 bg-[#9835ff] text-white px-4 py-2 rounded hover:translate-y-[-5px] duration-300'>
          <FaShareAlt /> Share
        </button>
        <button className='flex items-center gap-2 border text-[#404660] px-4 py-2 rounded hover:translate-y-[-5px] duration-300'>
          <IoCreate /> Retake
        </button>
      </div>
    </div>
  );
}

export default QuizSummary;
