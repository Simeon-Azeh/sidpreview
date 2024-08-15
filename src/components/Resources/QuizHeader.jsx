import React from 'react';
import { RxLapTimer } from 'react-icons/rx';

function QuizHeader({ title, session, progress, timeLeft }) {
  return (
    <div className="bg-white p-4 rounded-md border flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div className="mb-4 sm:mb-0">
        <h1 className="text-lg font-medium text-[#404660]">{title}</h1>
        <p className="text-gray-500 text-sm">{session}</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
        <div className="w-full sm:w-96 bg-gray-200 h-3 rounded-full mb-2 sm:mb-0">
          <div
            className="bg-[#9835ff] h-3 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex items-center space-x-1 text-gray-700">
          <RxLapTimer size={24} className="text-[#9835ff] bg-slate-100 p-1 rounded-full" />
          <span className="text-[#9835ff] font-semibold text-sm">{timeLeft}</span>
          <p className="text-xs font-semibold text-gray-500">Min left</p>
        </div>
      </div>
    </div>
  );
}

export default QuizHeader;
