import React from 'react';
import { Progress } from 'antd';
import 'antd/dist/reset.css';
import { IoArrowForward } from "react-icons/io5";

const UpcomingToday = ({ 
  mainImage, 
  title, 
  description, 
  enrolledUsers, 
  completedChapters, 
  totalChapters, 
  chapters 
}) => {
  const percentageCompleted = (completedChapters / totalChapters) * 100;

  return (
    <div className="bg-white p-4 rounded-lg border font-poppins">
      <img 
        src={mainImage} 
        alt="Main" 
        className="w-full rounded-lg mb-4"
      />
      <h1 className="text-[16px] font-medium text-[#404660] mb-2">{title}</h1>
      <p className="mb-4 text-gray-400 text-[14px]">{description}</p>
      <div className="flex items-center mb-4">
        <div className="flex -space-x-2">
          {enrolledUsers.map((user, index) => (
            <img 
              key={index} 
              src={user.image} 
              alt={`User ${index + 1}`} 
              className="w-8 h-8 rounded-full border--2 border-white"
            />
          ))}
        </div>
        <span className="ml-2 text-gray-400 text-[14px]">{enrolledUsers.length} enrolled</span>
      </div>
      <Progress 
        percent={percentageCompleted} 
        strokeColor="#9835ff" 
        status="active"
        className="mb-4"
      />
      <ul className="mb-4 text-sm font-medium text-[#404660]">
        {chapters.map((chapter, index) => (
          <li key={index} className={ index < completedChapters ? 'line-through text-gray-400' : ''}>
            {chapter}
          </li>
        ))}
      </ul>
      <div className="flex flex-col md:flex-row gap-4">
        <button className="text-[#404660] border  font-medium py-2 px-4 rounded hover:translate-y-[-5px] duration-300">
          Reschedule
        </button>
        <button className="bg-[#9835ff]  md:flex items-center gap-1 text-white font-medium py-2 px-4 rounded hover:translate-y-[-5px] duration-300">
        Resume <IoArrowForward className='hidden md:block' />
        </button>
      </div>
    </div>
  );
};

export default UpcomingToday;
