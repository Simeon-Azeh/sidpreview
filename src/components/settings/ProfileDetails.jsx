import React from 'react'
import avatarImg from '../../../public/images/avatartwo.avif'
import awardone from '../../../public/images/awardone.png'
import awardtwo from '../../../public/images/awardtwo.png'
import awardthree from '../../../public/images/awardthree.png'
import awardfour from '../../../public/images/awardfour.png'
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";

function ProfileDetails() {
  return (
    <div className='   flex flex-col '>
        <div className='flex items-center justify-between flex-col'>
        <div className='w-20 flex m-auto'>
        <img src={avatarImg} alt="" className='w-full object-contain rounded-full shadow-sm'/>
     </div>
     <div>
        <h1 className='text-lg font-medium tet-[#404660]'>Simeon Azeh</h1>
        <p className='text-sm text-center bg-[#9835ff] text-white p-1 rounded-md'>Beta User</p>
     </div>
     <div className='flex gap-4 my-6'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-[#9835ff] bg-slate-50 p-2 mb-2 w-10 h-10 rounded-full font-medium text-lg'>06</h1>
            <p className='text-[#404660] text-sm'>Courses in Progress</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-[#ff35f5] bg-slate-50 p-2 mb-2 w-10 h-10 rounded-full font-medium text-lg'>05</h1>
            <p className='text-[#404660] text-sm'>Courses completed</p>
        </div>
     </div>
     <div>
        <h1 className='text-[16px] font-medium text-[#404660] mb-2'>Badges</h1>
        <div className='flex justify-between items-center gap-3 md:gap-6'>
           <div className='w-16 bg-[#fff7cd] p-2 py-2.5  rounded-full h-16 cursor-pointer hover:scale-105 duration-300 '>
            <img src={awardone} alt="" className='w-full object-contain cursor-pointer hover:scale-105 duration-300' />
            </div> 
            <div className='w-16 bg-[#fff7cd] p-2 py-2.5  rounded-full h-16 cursor-pointer hover:scale-105 duration-300'>
            <img src={awardtwo} alt="" className='w-full object-contain cursor-pointer hover:scale-105 duration-300' />
            </div> 
            <div className='w-16 bg-[#fff7cd] p-2 py-2.5  rounded-full h-16 cursor-pointer hover:scale-105 duration-300 '>
            <img src={awardthree} alt="" className='w-full object-contain cursor-pointer hover:scale-105 duration-300' />
            </div> 
            <div className='w-16 bg-[#fff7cd] p-2 py-2.5  rounded-full h-16 cursor-pointer hover:scale-105 duration-300 '>
            <img src={awardfour} alt="" className='w-full object-contain cursor-pointer hover:scale-105 duration-300' />
            </div> 
        </div>
     </div>
        </div>
   
     <div className='flex flex-col justify-start items-start w-full p-4'>
        <h1 className='text-[16px] font-medium text-[#404660] my-4'>Quick Actions</h1>
        <div className='space-y-4'>
            <div className='flex items-center gap-3'>
            <FaChalkboardTeacher size={30} className='text-[#9835ff] bg-slate-50 p-2 w-8 h-8 rounded' />
            <p className=' text-[#404660] text-[16px] font-medium cursor-pointer border px-4 py-1 rounded hover:translate-y-[-3px] duration-300'>Become a Tutor</p>
            </div>
            <div className='flex items-center gap-2'>
            <MdHelp size={30} className='text-emerald-400 bg-slate-50 p-2 w-8 h-8 rounded'  />
            <p className='text-[#404660] text-[16px] font-medium cursor-pointer border px-4 py-1 rounded hover:translate-y-[-3px] duration-300'>Need Support?</p>
            </div>
            <div className='flex items-center gap-2'>
            <FaUsers size={30} className='text-blue-400 bg-slate-50 p-2 w-8 h-8 rounded' />
            <p className='text-[#404660] text-[16px] font-medium cursor-pointer border px-4 py-1 rounded hover:translate-y-[-3px] duration-300'>Invite friends</p>
            </div>
            <hr />
            <div className='flex items-center gap-2'>
            <MdDelete size={30} className='text-red-400 bg-slate-50 p-2 w-8 h-8 rounded' />
            <p className='text-[#404660] text-[16px] font-medium cursor-pointer border px-4 py-1 rounded hover:translate-y-[-3px] duration-300'>Delete account</p>
            </div>
            <div className='flex items-center gap-2'>
            <FaEye size={30} className='text-red-400 bg-slate-50 p-2 w-8 h-8 rounded' />
            <p className='text-[#404660] text-[16px] font-medium cursor-pointer border px-4 py-1 rounded hover:translate-y-[-3px] duration-300'>Change Visibilty</p>
            </div>

        </div>
     </div>
    </div>
  )
}

export default ProfileDetails
