import React, { useState, useEffect } from 'react';
import QuizHeader from '../../components/Resources/QuizHeader';
import Question from '../../components/Resources/Questions';
import ScorePage from '../../components/Resources/Scorepage';
import QuizInstructions from '../../components/Resources/QuizInstructions'; // Import QuizInstructions
import CustomRadioButton from '../../components/Resources/CustomRadioButton';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FaHeart, FaReply, FaEdit, FaTrashAlt, FaStar } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { HiMiniUserGroup } from "react-icons/hi2";
import { CiBookmark } from "react-icons/ci";
import { MdHelp, MdDashboardCustomize, MdPeople, MdBook, MdSettings, MdOutlineDatasetLinked, MdAccessTime, MdReviews, MdAssignment } from 'react-icons/md';
import { RiCompassDiscoverFill, RiArchiveDrawerFill } from 'react-icons/ri';
import { IoMdChatbubbles } from 'react-icons/io';
import avatarImg1 from '../../../public/images/avatartwo.avif'; // Simeon's avatar
import avatarImg2 from '../../../public/images/avatarthree.svg';
import Navbar from '../../components/Navbar';
import Sidebar, { SidebarItem, DropdownItem } from '../../components/Sidebar';
import { Link } from 'react-router-dom';

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    type: "multiple",
    options: ["Paris", "London", "Berlin", "Madrid"],
  },
  {
    id: 2,
    question: "Which of the following is a prime number?",
    type: "multiple",
    options: ["4", "6", "9", "11"],
  },
 
  {
    id: 4,
    question: "Select all programming languages you know.",
    type: "checkbox",
    options: ["JavaScript", "Python", "C++", "Java"],
  },

  {
    id: 3,
    question: "Explain the theory of relativity.",
    type: "essay",
    options: [],
  },
  {
    id: 5,
    question: "Rate your experience with React.",
    type: "rating",
    options: [1, 2, 3, 4, 5],
  }
];

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [progress, setProgress] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30); // example countdown time
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const [isInstructionsVisible, setIsInstructionsVisible] = useState(true); // Added state for instructions visibility
    const [timeTaken, setTimeTaken] = useState(0);
    const [score, setScore] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 60000);
  
      return () => clearInterval(timer);
    }, []);
  
    const handleAnswerChange = (questionId, answer) => {
      setAnswers({ ...answers, [questionId]: answer });
    };
  
    const handleNext = () => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setProgress(((currentQuestion + 2) / questions.length) * 100);
      } else {
        handleSubmit();
      }
    };
  
    const handlePrevious = () => {
      if (currentQuestion > 0) {
        setCurrentQuestion(currentQuestion - 1);
        setProgress(((currentQuestion) / questions.length) * 100);
      }
    };
  
    const handleSubmit = () => {
      // Calculate the score here (simple example)
      let calculatedScore = 0;
      questions.forEach((question) => {
        if (answers[question.id] === question.correctAnswer) {
          calculatedScore += 1;
        }
      });
  
      setScore(calculatedScore);
      setTimeTaken(30 - timeLeft); // assuming a 30-minute quiz
      setIsQuizCompleted(true);
    };
  
    const handleRetake = () => {
      setCurrentQuestion(0);
      setAnswers({});
      setProgress(0);
      setTimeLeft(30);
      setIsQuizCompleted(false);
      setIsInstructionsVisible(true); // Show instructions again
    };

    const handleStart = () => {
      setIsInstructionsVisible(false);
    };
  return (
    <div className="flex h-screen font-poppins">
      <div className="z-40">
      <Sidebar>
          <Link to="/discover">
            <SidebarItem icon={<RiCompassDiscoverFill size={20} />} text="Discover" />
          </Link>
          <Link to="/dashboard">
            <SidebarItem icon={<MdDashboardCustomize size={20} />} text="Dashboard" alert />
          </Link>
          <SidebarItem icon={<MdBook size={20} />} text="Courses" >
            <Link to="/courses">
              <DropdownItem text="All" />
            </Link>
            <Link to="/courses/arts">
              <DropdownItem text="Arts" />
            </Link>
            <Link to="/courses/science">
              <DropdownItem text="Science" />
            </Link>
            <Link to="/courses/tech">
              <DropdownItem text="Technology" />
            </Link>
            <Link to="/courses/specialization">
              <DropdownItem text="Specialization" />
            </Link>
          </SidebarItem>
          <SidebarItem icon={<RiArchiveDrawerFill size={20} />} text="Resources" active>
            <Link to="/resources">
              <DropdownItem text="All" />
            </Link>
            <Link to="/resources/questions">
              <DropdownItem text="Questions" />
            </Link>
            <Link to="/resources/solutions">
              <DropdownItem text="Solutions" />
            </Link>
            <Link to="/resources/tests">
              <DropdownItem text="Tests" />
            </Link>
          </SidebarItem>
          <SidebarItem icon={<MdPeople size={20} />} text="Tutors">
            <Link to="/tutors">
              <DropdownItem text="All" />
            </Link>
            <Link to="/tutors/science">
              <DropdownItem text="Science" />
            </Link>
            <Link to="/tutors/arts">
              <DropdownItem text="Arts" />
            </Link>
            <Link to="/tutors/technology">
              <DropdownItem text="Tech" />
            </Link>
            <Link to="/tutors/specialization">
              <DropdownItem text="Specialization" />
            </Link>
          </SidebarItem>
          <Link to="/messages">
            <SidebarItem icon={<IoMdChatbubbles size={20} />} text="Messages" alert />
          </Link>
          <Link to="/iqlink">
            <SidebarItem icon={<MdOutlineDatasetLinked size={20} />} text="IQ Link" alert />
          </Link>
          <hr className="my-4" />
          <Link to="/settings">
            <SidebarItem icon={<MdSettings size={20} />} text="Settings" alert />
          </Link>
          <Link to="/support">
            <SidebarItem icon={<MdHelp size={20} />} text="Support" />
          </Link>
        </Sidebar>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>

        <div className="w-full mx-auto md:pl-16 p-4 px-6">
          {isInstructionsVisible ? (
            <QuizInstructions onStart={handleStart} />
          ) : (
            <>
              {!isQuizCompleted && (
                <QuizHeader
                  title="General Knowledge"
                  session="Mock Test: Session 1"
                  progress={progress}
                  timeLeft={timeLeft}
                />
              )}
              {isQuizCompleted ? (
                <ScorePage
                  score={score}
                  totalQuestions={questions.length}
                  timeTaken={timeTaken}
                  onRetake={handleRetake}
                />
              ) : (
                <>
                  <Question
                    question={questions[currentQuestion]}
                    onAnswerChange={handleAnswerChange}
                    answer={answers[questions[currentQuestion].id]}
                  />
                  <div className="flex justify-between mt-4">
                    <button
                      className={`border border-gray-300 text-[#404660] px-4 py-2 rounded ${currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      onClick={handlePrevious}
                      disabled={currentQuestion === 0}
                    >
                      Previous
                    </button>
                    <button
                      className="bg-[#9835ff] text-white px-4 py-2 rounded"
                      onClick={handleNext}
                    >
                      {currentQuestion < questions.length - 1 ? 'Next' : 'Submit'}
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;