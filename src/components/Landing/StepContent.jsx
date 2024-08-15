import React from 'react';
import { DatePicker, message } from 'antd';
import moment from 'moment';
import avatarone from '../../../public/images/avatarone.png';
import avatarTwo from '../../../public/images/avatartwo.avif';
import avatarThree from '../../../public/images/avatarthree.svg';
import { Link } from 'react-router-dom';

const StepContent = ({
  current,
  formData,
  handleChange,
  handleDateChange,
  handleAvatarSelect,
  handleVerificationCodeChange,
}) => {
  switch (current) {
    case 0:
      return (
        <div className="font-poppins">
          <form className="flex flex-col space-y-4">
            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="flex flex-col w-full">
                <label className="block text-[#404660] font-medium text-sm my-4 md:my-0">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="w-full font-normal text-[16px] p-2 border border-gray-300 rounded mt-1 outline-none text-gray-500"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="block text-[#404660] font-medium text-sm my-4 md:my-0">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="w-full font-normal text-[16px] p-2 border border-gray-300 rounded mt-1 outline-none text-gray-500"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="flex flex-col w-full">
                <label className="block text-[#404660] font-medium text-sm my-4 md:my-0">Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full font-normal text-[16px] p-2 border border-gray-300 rounded mt-1 outline-none text-gray-500"
                >
                  <option value="">Select a country</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Rwanda">Rwanda</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label className="block text-[#404660] font-medium text-sm my-4 md:my-0">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full font-normal text-[16px] p-2 border border-gray-300 rounded mt-1 outline-none text-gray-500"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="block text-[#404660] font-medium text-sm my-4 md:my-0">Date of Birth</label>
                <DatePicker
                  onChange={handleDateChange}
                  className="w-full font-normal text-[16px] p-2 border border-gray-300 rounded mt-1 outline-none text-gray-500"
                  format="YYYY-MM-DD"
                  value={formData.dateOfBirth ? moment(formData.dateOfBirth) : null}
                />
              </div>
            </div>
          </form>
        </div>
      );
    case 1:
      return (
        <div className='font-poppins'>
          <p className="mb-4 text-[#404660]">
            A verification code has been sent to <span className="text-[#9835ff] font-medium">simeon@gmail.com</span>, Please enter it below:
          </p>
          <div className="flex gap-2 mb-4">
            {formData.verificationCode.map((code, index) => (
              <input
                key={index}
                type="text"
                name={`verificationCode${index}`}
                value={code}
                onChange={(e) => handleVerificationCodeChange(e, index)}
                maxLength="1"
                className="w-12 h-12 text-center border border-gray-300 rounded outline-none"
              />
            ))}
          </div>
          <span className="text-[#404660] mr-4">Didn't receive the code?</span>
          <button className="text-[#9835ff] underline">Click to resend</button>
        </div>
      );
    case 2:
      return (
        <div className="flex justify-around">
          {[avatarone, avatarTwo, avatarThree].map((avatar, index) => (
            <div
              key={index}
              className={`w-24 h-24 border rounded-full flex items-center justify-center cursor-pointer ${
                formData.avatar === avatar ? 'border-[#9835ff]' : 'border-gray-300'
              }`}
              onClick={() => handleAvatarSelect(avatar)}
            >
              <img src={avatar} alt={`avatar${index + 1}`} className="w-20 h-20 rounded-full" />
            </div>
          ))}
        </div>
      );
    case 3:
      return (
        <form className="flex flex-col font-poppins">
          <label className="block text-[#404660] font-medium text-sm mb-4">Educational Level</label>
          <input
            type="text"
            name="educationalLevel"
            value={formData.educationalLevel}
            onChange={handleChange}
            className="w-full font-normal text-[16px] p-2 border border-gray-300 rounded mt-1 outline-none text-gray-500 mb-4"
          />
          <label className="block text-[#404660] font-medium text-sm mb-4">Current School</label>
          <input
            type="text"
            name="currentSchool"
            value={formData.currentSchool}
            onChange={handleChange}
            className="w-full font-normal text-[16px] p-2 border border-gray-300 rounded mt-1 outline-none text-gray-500 mb-4"
          />
         
        </form>
      );
    case 4:
      return (
        <div className='font-poppins'>
          <p className='text-[#404660] mb-8'>Welcome to Sidec! Watch this video to know how it works, or go to your dashboard.</p>
          <div className="relative pb-[56.25%] mb-8">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-md shadow-xl"
              src="https://www.youtube.com/embed/Zq8TpFSMxSM?si=XJpmhLcGiZUWrcly"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <Link to="/dashboard">
            <button className="bg-[#9835ff] text-white py-2 px-4 rounded mt-4 flex mx-auto">Go to Dashboard</button>
          </Link>
        </div>
      );
    default:
      return null;
  }
};

export default StepContent;
