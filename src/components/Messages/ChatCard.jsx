import React from 'react';

const ChatCard = ({ profilePicture, onlineStatus, name, messagePreview, time, newMessages, onClick }) => {
  const shortPreview = messagePreview.length > 25 ? `${messagePreview.slice(0, 25)}...` : messagePreview;

  return (
    <div className="flex items-center gap-2 p-2 bg-white hover:bg-gray-100 cursor-pointer" onClick={onClick}>
      <img src={profilePicture} alt={name} className="w-10 h-10 rounded-full object-cover" />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-[#404660]">{name}</h4>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <div className='flex justify-between'>
        <p className="text-sm text-gray-500">{shortPreview}</p>
        {newMessages > 0 && <span className="text-xs bg-[#9835ff] text-white px-2 py-1 rounded-full">{newMessages}</span>}
        </div>
      
      </div>
    </div>
  );
};

export default ChatCard;
