import React from 'react';

const SupportCard = ({ icon, title, description }) => (
  <div className="bg-white border rounded-lg p-4 flex flex-col items-start gap-2  hover:translate-y-[-5px]  duration-300 cursor-pointer">
    <div className="text-2xl mb-2">{icon}</div>
    <h3 className="text-xl font-medium text-[#404660]">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </div>
);

export default SupportCard;
