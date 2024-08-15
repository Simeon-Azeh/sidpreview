// src/components/CertificateCard.jsx
import React from 'react';
import { FaDownload, FaAward } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CiCalendarDate } from "react-icons/ci";
import { MdGrade } from "react-icons/md";
function CertificateCard({ title, issuer, date, certificateLink, grade }) {
  return (
    <div className="border rounded-lg p-4 mb-4 bg-white relative hover:translate-y-[-5px] duration-300 cursor-pointer">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2 p-2 rounded text-2xl text-white bg-gradient-to-r from-[#fad126] to-[#ffc524]">
          <FaAward />
        </div>
        <Link to={certificateLink} className="text-gray-400 hover:text-[#9835ff]">
          <FaDownload />
        </Link>
      </div>
      <h1 className='text-[16px] font-medium text-[#404660] hover:text-[#9835ff] my-4'>
        {title}
      </h1>
      <div className="text-gray-400 font-normal text-[14px] mb-2">
        Issued by: {issuer}
      </div>
      <div className='flex justify-between'>
      <div className="text-gray-400 font-normal text-[14px] flex items-center gap-1">
      <CiCalendarDate /> {date}
      </div>
      <div className='text-gray-400 font-normal text-[14px] flex items-center gap-1'>
      <MdGrade /> {grade}
      </div>
      </div>
      
    </div>
  );
}

export default CertificateCard;
