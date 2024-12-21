// filepath: /c:/Users/HP/Desktop/Projects/sidecwebapp/src/components/ButtonLoader.jsx
import React from 'react';

const ButtonLoader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="loader"></div>
      <style jsx>{`
        .loader {
          border: 4px solid rgba(0, 0, 0, 0.1);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border-left-color: #ffffff;
          animation: spin 1s ease infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default ButtonLoader;