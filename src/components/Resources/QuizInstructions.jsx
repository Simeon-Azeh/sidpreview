import React, { useState } from 'react';
import { SiDogecoin } from 'react-icons/si';
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { RxLapTimer } from "react-icons/rx";
import { MdLibraryBooks } from "react-icons/md";
import Spinner from './Spinner'; // Import the Spinner component

function QuizInstructions({ onStart }) {
  const [loading, setLoading] = useState(false);

  const handleStart = () => {
    setLoading(true);
    onStart(); // Call the parent function to start the quiz
    // Simulate a delay (e.g., fetching quiz data)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed
  };

  return (
    <div className="flex flex-col p-6 bg-white border rounded-md max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-xl font-medium mb-2 text-[#404660]">General Knowledge Mock Test</h1>
      <p className="text-lg md:text-md font-medium text-[#404660] mb-4 flex items-center gap-2">
        Earn <span className="text-[#9835ff] flex items-center gap-1">
          <SiDogecoin size={20} /> 100 Sidcoins
        </span>
      </p>
      <div className="bg-[#faf6ff] p-4 rounded-md border mb-4 flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="flex-1">
          <h2 className="text-lg md:text-md font-medium text-[#404660] flex items-center gap-2">
            <BsFillPatchQuestionFill size={20} /> <span className="font-medium text-[#9835ff]">5 Questions</span>
          </h2>
          <p className='text-[#404660] font-normal mt-2'><span className="text-[#9835ff]">20 Points</span> per correct answer</p>
        </div>
        <div className='w-[1px] bg-gray-300 md:hidden'></div>
        <div className="flex-1">
          <h2 className="text-lg md:text-md font-medium text-[#404660] flex items-center gap-2">
            <RxLapTimer size={20} /> <span className="text-[#9835ff]">30 Minutes</span>
          </h2>
          <p className='text-[#404660] font-normal mt-2'>Approx time to complete test</p>
        </div>
        <div className='w-[1px] bg-gray-300 md:hidden'></div>
        <div className="flex-1">
          <h2 className="text-lg md:text-md font-medium text-[#404660] flex items-center gap-2">
            <MdLibraryBooks size={20} /> <span className="text-[#9835ff]">2 Attempts</span>
          </h2>
          <p className='text-[#404660] font-normal mt-2'>Number of retakes</p>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-xl md:text-lg font-medium text-[#404660] mb-2">Instructions:</h3>
        <ul className="list-disc pl-5 text-md text-[#404660] space-y-4">
          <li>Read each question carefully.</li>
          <li>Select or type your answers as needed.</li>
          <li>Click "Next" to proceed to the next question.</li>
          <li>You can go back to previous questions.</li>
          <li>Submit your answers when you have finished the quiz.</li>
        </ul>
      </div>
      <button
        className="bg-[#9835ff] text-white px-6 py-2 rounded-md text-lg flex items-center justify-center"
        onClick={handleStart}
        disabled={loading} // Disable the button while loading
      >
        {loading ? <Spinner /> : 'Start Mock Quiz'}
      </button>
    </div>
  );
}

export default QuizInstructions;
