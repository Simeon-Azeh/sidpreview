import React, { useState } from 'react';
import { MdCall, MdMoreVert, MdArrowBack } from 'react-icons/md';
import { FaPlus, FaSmile, FaEdit, FaTrash } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import TypingEffect from './TypingEffect';
import avatarone from '../../../public/images/avatartwo.avif';

const MessagingSection = ({ selectedChat, onBack }) => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [showMessageOptions, setShowMessageOptions] = useState({});

  const toggleMessageOptions = (index) => {
    setShowMessageOptions((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Determine the index of the most recent message from the user
  const getRecentUserMessageIndex = () => {
    const userMessages = selectedChat.messages.filter(msg => msg.isMine);
    const lastUserMessage = userMessages[userMessages.length - 1];
    return selectedChat.messages.lastIndexOf(lastUserMessage);
  };

  const recentUserMessageIndex = selectedChat ? getRecentUserMessageIndex() : -1;

  if (!selectedChat) return null;

  return (
    <div className="h-full flex flex-col px-1 md:px-4 py-2">
      <div className="flex items-center justify-between border-b pb-2 mb-4">
        <div className="flex items-center gap-2">
          <MdArrowBack size={24} className="text-gray-500 cursor-pointer md:hidden" onClick={onBack} />
          <img src={selectedChat.profilePicture} alt={selectedChat.name} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <h2 className="font-semibold text-[#404660]">{selectedChat.name}</h2>
            <p className="text-sm text-gray-500">{selectedChat.onlineStatus ? 'Online' : `Last online ${selectedChat.time}`}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <MdCall size={24} className="text-gray-500 cursor-pointer" />
          <div className="relative">
            <MdMoreVert size={24} className="text-gray-500 cursor-pointer" onClick={() => setShowMoreOptions(!showMoreOptions)} />
            {showMoreOptions && (
              <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg z-10 px-4 ">
                <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Block</button>
                <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Mute</button>
                <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Delete</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <h3 className="text-center text-gray-500 mb-4">Today</h3>
      <div className="flex-1 overflow-y-auto h-96 px-2">
        <div className="flex flex-col gap-4">
          {selectedChat.messages &&
            selectedChat.messages.map((message, index) => (
              <div key={index} className={`flex flex-col gap-1 ${message.isMine ? 'self-end items-end' : 'items-start'}`}>
                <div className="flex items-start gap-2">
                  {!message.isMine && <img src={selectedChat.profilePicture} alt={selectedChat.name} className="w-8 h-8 rounded-full object-cover" />}
                  {message.isMine && (
                    <div className="flex items-center gap-2">
                      <FaEdit size={16} className="text-gray-500 cursor-pointer" />
                      <FaTrash size={16} className="text-gray-500 cursor-pointer" />
                    </div>
                  )}
                  <div className={`${message.isMine ? 'bg-[#9835ff] text-white' : 'bg-slate-50 text-[#404660]'} p-2 rounded-lg relative`}>
                    <p>{message.text}</p>
                    <span className={`text-xs ${message.isMine ? 'text-gray-200' : 'text-gray-500'}`}>{message.time}</span>
                    {!message.isMine && (
                      <MdMoreVert size={16} className="absolute top-2 right-2 text-gray-500 cursor-pointer" onClick={() => toggleMessageOptions(index)} />
                    )}
                    {showMessageOptions[index] && !message.isMine && (
                      <div className="absolute top-6 right-0 mt-2 bg-white border rounded shadow-lg z-10">
                        <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Report</button>
                        <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Delete</button>
                      </div>
                    )}
                  </div>
                  {message.isMine && <img src={avatarone} className="w-8 h-8 rounded-full object-cover" />}
                </div>
                {message.isMine && index === recentUserMessageIndex && selectedChat.messages[index + 1]?.isMine === undefined && (
                  <div className="text-xs text-gray-500 mt-1">
                    <span>Read</span>
                  </div>
                )}
              </div>
            ))}
          <div className="flex items-center gap-2">
            <img src={selectedChat.profilePicture} alt={selectedChat.name} className="w-8 h-8 rounded-full object-cover" />
            <TypingEffect />
          </div>
        </div>
      </div>
      <div className="md:mt-4 flex items-center gap-2 border-t pt-2">
        <FaPlus size={30} className="text-[#9835ff] border p-1 rounded bg-slate-50 cursor-pointer" />
        <input type="text" placeholder="Type your message here..." className="flex-1 rounded p-1 px-4 outline-none" />
        <FaSmile size={30} className="text-[#9835ff] border p-1 rounded bg-slate-50 cursor-pointer" />
        <IoMdSend size={32} className="bg-[#9835ff] rounded-full p-1 text-white px-auto cursor-pointer" />
      </div>
    </div>
  );
};

export default MessagingSection;
