// src/components/EnrolledCard.jsx
import React, { useState } from 'react';
import { FaCheck, FaEllipsisV } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { CiChat1 } from "react-icons/ci";

function EnrolledCard({
  icon,
  title,
  authorImage,
  authorName,
  lessons,
  hours,
  progress,
  isCompleted,
  courseLink,
  bgColor,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="border rounded-lg p-4 mb-4 bg-white relative hover:translate-y-[-5px] duration-300 cursor-pointer">
      <div className="flex justify-between items-center mb-2">
        <div className={`flex items-center space-x-2 p-2 rounded text-2xl ${bgColor}`}>
          {icon}
        </div>
        <button onClick={toggleDropdown} className="relative text-gray-400">
          <FaEllipsisV />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Resume</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Reset Deadline</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-400">Remove</li>
              </ul>
            </div>
          )}
        </button>
      </div>
      <h1 className='text-[16px] font-medium text-[#404660] hover:text-[#9835ff] my-4'>
        <Link to={courseLink}>
          {title}
        </Link>
      </h1>
      <div className="flex items-center space-x-2 mb-4">
        <img src={authorImage} alt={authorName} className="w-8 h-8 rounded-full" />
        <p className="text-gray-400 font-normal text-[14px]">{authorName}</p>
      </div>
      <div className="flex items-center gap-4 mb-2">
        <div className="flex items-center space-x-1 text-gray-400 font-normal text-[14px]">
          <CiChat1 />
          <span>{lessons} lessons</span>
        </div>
        <div className="flex items-center space-x-1 text-gray-400 font-normal text-[14px]">
          <IoMdTime />
          <span>{hours} hours</span>
        </div>
      </div>
      {isCompleted ? (
        <div className="flex items-center space-x-2 text-[#9835ff] font-medium mb-2">
          <IoIosCheckmarkCircle />
          <span className='text-[#404660]'>Completed</span>
        </div>
      ) : (
        <div className="flex items-center space-x-2 mb-2"></div>
      )}
      {!isCompleted && (
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div className="bg-[#9835ff] h-2 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      )}
    </div>
  );
}

export default EnrolledCard;
