// src/components/settings/ProfileDetails.jsx
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import avatarImg from '../../../public/images/avatartwo.avif';
import { TbCameraPlus } from "react-icons/tb";

const ProfileDetails = () => {
  const [phone, setPhone] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const countries = countryList().getData();

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };

  return (
    <div>
      <div className='border-b pb-4'>
        <div className='w-20 flex mx-auto relative'>
          <img src={avatarImg} alt="Avatar" className='w-full object-contain rounded-full shadow-sm' />
          <TbCameraPlus className='absolute bottom-1 right-0 bg-[#9835ff] text-white p-1 rounded-full w-7 h-7 cursor-pointer' />
        </div>
      </div>
      <div>
        <div className='flex flex-col md:flex-row md:gap-4'>
          <div className='my-4 flex-1'>
            <label htmlFor="fname" className='text-gray-400 text-[16px]'>Full Name</label>
            <input type="text" id="fname" name="fname" className='w-full border p-1 px-4 text-[16px] text-[#404660] font-medium rounded-md focus:outline-none' value={"Simeon Azeh"} />
          </div>
          <div className='my-4 flex-1'>
            <label htmlFor="lname" className='text-gray-400 text-[16px]'>Username</label>
            <input type="text" id="lname" name="lname" className='w-full border p-1 px-4 text-[16px] text-[#404660] font-medium rounded-md focus:outline-none' value={"simeon6"} />
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:gap-4'>
          <div className='my-4 flex-1'>
            <label htmlFor="email" className='text-gray-400 text-[16px]'>Email</label>
            <input type="text" id="email" name="email" className='w-full border p-1 px-4 text-[16px] text-[#404660] rounded-md focus:outline-none' value={"simeon@gmail.com"} />
          </div>
          <div className='my-4 flex-1'>
            <label htmlFor="phone" className='text-gray-400 text-[16px]'>Phone</label>
            <PhoneInput
              country={'us'}
              value={phone}
              onChange={handlePhoneChange}
              inputClass='w-full border p-1 px-4 text-[16px] text-[#404660] font-medium rounded-md focus:outline-none'
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:gap-4'>
          <div className='my-4 flex-1'>
            <label htmlFor="address" className='text-gray-400 text-[16px]'>Address</label>
            <input type="text" id="address" name="address" className='w-full border p-1 px-4 text-[16px] text-[#404660] rounded-md focus:outline-none' value={"123, Oberge street"} />
          </div>
          <div className='my-4 flex-1'>
            <label htmlFor="state" className='text-gray-400 text-[16px]'>State | Province</label>
            <input type="text" id="state" name="state" className='w-full border p-1 px-4 text-[16px] text-[#404660] font-medium rounded-md focus:outline-none' value={""} />
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:gap-4'>
          <div className=' flex-1'>
            <label htmlFor="city" className='text-gray-400 text-[16px]'>City</label>
            <input type="text" id="city" name="city" className='w-full border p-1 px-4 text-[16px] text-[#404660] rounded-md focus:outline-none' value={"Buea"} />
          </div>
          <div className=' flex-1'>
            <label htmlFor="country" className='text-gray-400 text-[16px]'>Country</label>
            <Select
              options={countries}
              value={selectedCountry}
              onChange={handleCountryChange}
              className='w-full border p-1 px-8 text-[16px] text-[#404660] rounded-md focus:outline-none'
            />
          </div>
        </div>
        <div>
          <label htmlFor="bio" className='text-gray-400 text-[16px]'>Bio</label>
          <textarea id="bio" name="bio" className='w-full border p-1 px-4 text-[16px] text-[#404660] rounded-md focus:outline-none' value={"A short description about user"} />
        </div>
      </div>
      <div className='flex items-center justify-start gap-4'>
        <button className=' bg-[#9835ff] text-white py-2 px-3 rounded-md shadow-md shadow-[#dfd3ec] hover:translate-y-[-5px] duration-300'>Update Profile</button>
        <button className=' border text-[#9835ff] py-2 px-3 rounded-md hover:translate-y-[-5px] duration-300'>Cancel</button>
      </div>
    </div>
  );
}

export default ProfileDetails;
