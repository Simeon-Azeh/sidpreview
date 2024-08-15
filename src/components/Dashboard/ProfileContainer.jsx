import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaUserEdit } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import ProfileImg from '../../../public/images/avatartwo.avif';
import { Bar } from 'react-chartjs-2'; // Ensure you have chart.js and react-chartjs-2 installed
import 'chart.js/auto'; // Required for chart.js version 3

const ProfileContainer = () => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [timeSpanDropdownOpen, setTimeSpanDropdownOpen] = useState(false);
  const [timeSpan, setTimeSpan] = useState('This Week');

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
    setTimeSpanDropdownOpen(false); // Close time span dropdown when profile dropdown is opened
  };

  const toggleTimeSpanDropdown = () => {
    setTimeSpanDropdownOpen(!timeSpanDropdownOpen);
    setProfileDropdownOpen(false); // Close profile dropdown when time span dropdown is opened
  };

  const handleTimeSpanChange = (span) => {
    setTimeSpan(span);
    setTimeSpanDropdownOpen(false); // Close the dropdown after selection
    // You can add logic to fetch and update chart data based on the selected time span
  };

  // Example data for the chart
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Hours Spent',
        data: [2, 4, 5, 3, 6, 2, 4], // Example data
        backgroundColor: '#9835ff',
      },
    ],
  };

  return (
    <div className="p-4 bg-white border rounded-lg font-poppins">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-l font-medium text-[#404660]">Progress</h2>
        <div className="relative">
          <button onClick={toggleProfileDropdown} className="text-gray-500 font-normal">
            <FaEllipsisV size={15} />
          </button>
          {profileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
              <ul className="text-[#404660]">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">Edit<FaUserEdit /></li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">Settings<IoMdSettings /></li>
               
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <img src={ProfileImg} alt="Profile" className="w-20 h-20 rounded-full " />
        <div className="text-center">
          <h3 className="text-xl font-medium text-[#404660] mt-2">Simeon Azeh</h3>
          <p className="text-gray-500 text-[14px] mb-2">A brief description about the user.</p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
            <div>
                <h1 className='text-lg font-medium text-[#9835ff]'>30</h1>
                <p className='text-[14px] text-gray-500'>Hours spent</p>
            </div>
    
          <div className="relative">
            <button className="flex items-center gap-2 text-sm font-medium text-[#9835ff]" onClick={toggleTimeSpanDropdown}>
              {timeSpan}
              <IoMdArrowDropdown size={16} />
            </button>
            {timeSpanDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white border rounded-lg shadow-lg z-10">
                <ul className="text-gray-600">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleTimeSpanChange('This Week')}>This Week</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleTimeSpanChange('This Month')}>This Month</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleTimeSpanChange('Today')}>Today</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="h-30 items-center font-poppins"> {/* Adjust height as needed */}
          <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
        <div className='flex flex-row  items-center justify-between mt-4 '>
            <div>
            <p className="text-[14px] text-gray-500 mt-2">Updated: 12:00 PM</p> 
            </div>
            <div>
            <p className='text-[14px] text-gray-500'>Jun 30, - Jul 14</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
