import React from 'react';
import Confetti from 'react-confetti'; // Import Confetti library
import { Link } from 'react-router-dom';
import ScoreSuccess from '../../../public/images/ScoreSuccess.svg';
import NotSuccess from '../../../public/images/NotSuccess.svg';
import { FaRegFaceSadTear } from 'react-icons/fa6';
import { SiDogecoin } from 'react-icons/si';
import { FaBarsProgress } from 'react-icons/fa6';

const ScorePage = ({ score, totalQuestions, timeTaken, onRetake, showAnswers }) => {
  const averageScore = totalQuestions / 2; // Example average calculation

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 bg-white relative overflow-hidden">
      {score >= averageScore && <Confetti />}
      
      <h2 className="text-xl font-semibold mb-4 text-[#404660]">
        {score >= averageScore ? 'Congratulations! You have scored' : 'Good try! You scored'}
      </h2>
      
      <div className='flex items-center gap-2 bg-[#faf6ff] px-4 py-2 rounded border'>
        <h1 className='text-3xl font-semibold text-[#9835ff]'>{score}</h1>
        <p className="text-md font-medium text-[#404660]"> out of {totalQuestions}</p>
      </div>
      
      <div className='my-4 flex flex-col justify-center items-center gap-2'>
        <p className='text-md font-medium text-[#404660]'>You have earned</p>
        <span className='text-lg border border-[#9835ff] p-2 rounded-full px-4 border-solid font-semibold text-[#9835ff] flex items-center gap-2'>
          <SiDogecoin /> 80 sidcoins
        </span>
      </div> 
      
      <p className="my-4 flex items-center gap-2 bg-[#faf6ff] px-4 py-2 rounded border text-sm font-medium text-[#404660]">
        <FaBarsProgress className='text-[#9835ff]' /> You took {timeTaken} minutes to complete this attempt
      </p>
      
      <div className="flex gap-4">
        <button
          className="bg-[#9835ff] text-white px-4 py-2 rounded"
          onClick={onRetake}
        >
          Retake Quiz
        </button>
        
        <Link to="/correct-answers">
          <button
            className="bg-slate-100 font-medium text-[#404660] px-4 py-2 rounded"
            onClick={showAnswers}
          >
            See Correct Answers
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ScorePage;
