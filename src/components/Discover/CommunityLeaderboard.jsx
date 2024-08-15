import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const leaderboardData = [
  {
    rank: 1,
    change: 'up',
    name: 'Fred Smith',
    profilePicture: 'https://via.placeholder.com/30',
    completedCourses: 15,
    hours: 50,
    score: 1430,
    scoreIncrease: 10,
  },
  {
    rank: 2,
    change: 'down',
    name: 'Simeon Azeh',
    profilePicture: 'https://via.placeholder.com/30',
    completedCourses: 13,
    hours: 40,
    score: 1100,
    scoreIncrease: -23,
  },
  {
    rank: 3,
    change: 'up',
    name: 'Lenora Faith',
    profilePicture: 'https://via.placeholder.com/30',
    completedCourses: 12,
    hours: 40,
    score: 900,
    scoreIncrease: 50,
  },
  {
    rank: 4,
    change: 'up',
    name: 'Ateh Frank',
    profilePicture: 'https://via.placeholder.com/30',
    completedCourses: 9,
    hours: 40,
    score: 890,
    scoreIncrease: 35,
  },
  {
    rank: 5,
    change: 'down',
    name: 'Jane Lemnyuy',
    profilePicture: 'https://via.placeholder.com/30',
    completedCourses: 8,
    hours: 40,
    score: 600,
    scoreIncrease: -5,
  },
 
  // Add more members as needed
];

const CommunityLeaderboard = () => {
  return (
    <div>
         <div className='flex items-center justify-between '>
        <h1 className='text-[16px] font-semibold text-[#404660] py-4'>Community Leaderboard</h1>
            <a href="#" className='text-[14px] font-medium text-[#404660] px-4 border  rounded'>Join</a>
        </div>
          <div className=" bg-white  rounded-md overflow-x-auto  border font-poppins pb-4 ">
       
      <table className="w-full ">
        <thead>
          <tr className='text-gray-400'>
            <th className="py-2 px-4 font-medium text-[14px] ">Rank</th>
            <th className="py-2 px-4 font-medium text-[14px]">Member</th>
            <th className="py-2 px-4 font-medium text-[14px]">Courses</th>
            <th className="py-2 px-4 font-medium  text-[14px]">Hours</th>
            <th className="py-2 px-4 font-medium text-[14px]">Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((member, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4 text-[#404660] font-medium">
                {member.rank}
                {member.change === 'up' ? (
                  <FaArrowUp size={12} className="inline-block text-[#00D68F] ml-1" />
                ) : (
                  <FaArrowDown size={12} className="inline-block text-red-400 ml-1" />
                )}
              </td>
              <td className="py-2 px-4  flex items-center">
                <img 
                  src={member.profilePicture} 
                  alt={member.name} 
                  className="w-8 h-8 rounded-full mr-2"
                />
                <h1 className='text-[#404660] font-medium text-[14px]'>
                {member.name}

                </h1>
              </td>
              <td className="py-2 px-4 font-medium text-[#404660]">{member.completedCourses}</td>
              <td className="py-2 px-4 font-medium text-[#404660]">{member.hours}</td>
              <td className="py-2 px-4 font-medium text-[#404660]">
                {member.score}
                <span className={`ml-2 ${member.scoreIncrease > 0 ? 'text-[#00D68F]' : 'text-red-400'}`}>
                  {member.scoreIncrease > 0 ? '+' : ''}{member.scoreIncrease}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  
  );
};

export default CommunityLeaderboard;
