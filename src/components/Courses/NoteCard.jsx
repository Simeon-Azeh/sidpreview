import React from 'react';
import { CgNotes } from "react-icons/cg";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineEditNote } from "react-icons/md";

const NoteCard = ({ content, topic, viewers = [], lastEdited }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md mb-4 font-poppins">
      {/* Notes icon and viewer section */}
      <div className="flex items-center mb-4">
       <p className='text-[#9835ff] text-2xl'><CgNotes /></p>
        <div className="flex items-center ml-4">
          {viewers.map((viewer, index) => (
            <img
              key={index}
              src={viewer || 'https://via.placeholder.com/24'}
              alt="viewer"
              className="w-6 h-6 rounded-full border-2 border-white -ml-2"
            />
          ))}
          <span className="ml-4 text-gray-500 text-sm">{viewers.length} viewers</span>
        </div>
      </div>

      {/* Edit and Share buttons */}
      <div className="flex justify-end mb-4 font-poppins">
        <button className="ml-4 text-[#9835ff] text-2xl">
        <MdOutlineEditNote />
        </button>
        <button className="ml-4 text-[#9835ff] text-xl">
        <IoShareSocialOutline />
        </button>
      </div>

      {/* Last edited text */}
      <p className="text-sm text-gray-500 mb-4">Last edited: {lastEdited}</p>

      {/* Truncated note and View button */}
      <h3 className="text-lg font-medium text-[#404660] mb-2">{topic}</h3>
      <p className="text-sm text-gray-500 mb-4">{`${content.slice(0, 50)}...`}</p>
      <button className="bg-[#9835ff] text-white rounded px-4 py-2">
        View
      </button>
    </div>
  );
};

export default NoteCard;
