import React, { useState, useEffect } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaUserEdit } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Bar } from 'react-chartjs-2'; // Ensure you have chart.js and react-chartjs-2 installed
import 'chart.js/auto'; // Required for chart.js version 3
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const ProfileContainer = () => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [timeSpanDropdownOpen, setTimeSpanDropdownOpen] = useState(false);
  const [timeSpan, setTimeSpan] = useState('This Week');
  const [profileData, setProfileData] = useState({
    firstname: '',
    lastname: '',
    avatar: '',
    description: '',
    hoursSpent: 0,
    bio: ''
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          setProfileData({
            firstname: data.firstname,
            lastname: data.lastname,
            avatar: data.avatar,
           
            hoursSpent: data.hoursSpent || 0,
            bio: data.bio || "Sidec's first beta user"
          });
        }
      }
    };

    fetchProfileData();
  }, []);

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
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-l font-medium text-[#404660]">Progress</h2>
        <div className="relative">
          <button onClick={toggleProfileDropdown} className="font-normal text-gray-500">
            <FaEllipsisV size={15} />
          </button>
          {profileDropdownOpen && (
            <div className="absolute right-0 z-10 w-48 mt-2 bg-white border rounded-lg shadow-lg">
              <ul className="text-[#404660]">
                <li className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100">Edit<FaUserEdit /></li>
                <li className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100">Settings<IoMdSettings /></li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <img src={profileData.avatar} alt="Profile" className="w-20 h-20 rounded-full " />
        <div className="text-center">
          <h3 className="text-xl font-medium text-[#404660] mt-2">{profileData.firstname} {profileData.lastname}</h3>
          <p className="text-gray-500 text-[14px] mb-2">{profileData.description}</p>
          <p className="text-gray-500 text-[14px] mb-2">{profileData.bio}</p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className='text-lg font-medium text-[#9835ff]'>{profileData.hoursSpent}</h1>
            <p className='text-[14px] text-gray-500'>Hours spent</p>
          </div>

          <div className="relative">
            <button className="flex items-center gap-2 text-sm font-medium text-[#9835ff]" onClick={toggleTimeSpanDropdown}>
              {timeSpan}
              <IoMdArrowDropdown size={16} />
            </button>
            {timeSpanDropdownOpen && (
              <div className="absolute right-0 z-10 mt-2 bg-white border rounded-lg shadow-lg w-36">
                <ul className="text-gray-600">
                  <li className="px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={() => handleTimeSpanChange('This Week')}>This Week</li>
                  <li className="px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={() => handleTimeSpanChange('This Month')}>This Month</li>
                  <li className="px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={() => handleTimeSpanChange('Today')}>Today</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="items-center h-60 lg:h-40 font-poppins"> {/* Adjust height as needed */}
          <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
        <div className='flex flex-row items-center justify-between mt-4 '>
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