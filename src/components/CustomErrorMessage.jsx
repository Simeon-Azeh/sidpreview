// filepath: /c:/Users/HP/Desktop/Projects/sidecwebapp/src/components/CustomErrorMessage.jsx
import React from 'react';

const CustomErrorMessage = ({ message }) => {
  return (
    <div className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded" role="alert">
     
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

export default CustomErrorMessage;