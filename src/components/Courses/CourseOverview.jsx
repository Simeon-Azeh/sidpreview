import React, { useState } from 'react';
import { FaChevronRight, FaChevronDown, FaLock, FaCheckCircle, FaTrophy, FaPlayCircle, FaFileAlt } from 'react-icons/fa';
import { RiProgress5Line } from 'react-icons/ri';
import { MdOutlineReplyAll } from "react-icons/md";

const topics = [
  {
    title: 'Introduction',
    completed: true,
    subtopics: [
      { title: 'What is this course about?', type: 'video', content: 'This course is about...' },
      { title: 'Course objectives', type: 'text', content: 'The objectives of this course are...' }
    ],
  },
  {
    title: 'Chapter 1: Basics',
    completed: true,
    subtopics: [
      { title: 'Basic concepts', type: 'video' },
      { title: 'Examples of basics', type: 'video' }
    ],
  },
  {
    title: 'Chapter 2: Advanced Topics',
    completed: false,
    subtopics: [
      { title: 'Advanced concept 1', type: 'text', content: 'Advanced concept 1 details...' },
      { title: 'Advanced concept 2', type: 'video', content: 'Advanced concept 2 details...' }
    ],
  },
  {
    title: 'Chapter 3: Legendary topics',
    completed: false,
    subtopics: [
      { title: 'Advanced concept 3', type: 'text', content: 'Advanced concept 4 details...' },
      { title: 'Advanced concept 4', type: 'video', content: 'Advanced concept 4 details...' }
    ],
  },
  {
    title: 'Summative Exam',
    completed: false,
    subtopics: [
      { title: 'Test your knowledge', type: 'text', content: 'Test your knowledge' },
      { title: 'Test your knowledge 2', type: 'text', content: 'Advanced concept 4 details...' }
    ],
  },
  // Add more topics as needed
];

const CourseOverview = ({ onSelectTopic }) => {
  const [expandedTopic, setExpandedTopic] = useState(null);

  const totalTopics = topics.length;
  const completedTopics = topics.filter(topic => topic.completed).length;
  const progressPercentage = (completedTopics / totalTopics) * 100;
  const chunkSize = 100 / totalTopics;

  const toggleExpand = (index) => {
    setExpandedTopic(expandedTopic === index ? null : index);
  };

  return (
    <div className="p-4 bg-white border rounded-md font-poppins">
      <h2 className="text-lg font-semibold text-[#404660] mb-4">Navigating Sidec</h2>

      <div className="flex items-center justify-between mb-2 uppercase text-xs  font-medium text-gray-400">
        <p>{completedTopics}/{totalTopics} completed</p>
        <FaTrophy size={16} className="text-[#9835ff]" />
      </div>
      <div className="w-full bg-slate-100 rounded-full h-1 mb-4 flex">
        {Array.from({ length: totalTopics }).map((_, index) => (
          <div
            key={index}
            className={`h-full ${index < completedTopics ? 'bg-[#9835ff] ' : 'bg-gray-300'}`}
            style={{ width: `${chunkSize}%` }}
          ></div>
        ))}
      </div>

      <div className="space-y-4">
        {topics.map((topic, index) => (
          <div key={index} className="">
            <button
              onClick={() => toggleExpand(index)}
              className="flex items-center justify-between w-full p-1"
            >
              <div className="flex items-center gap-2">
                {topic.completed ? (
                  <FaCheckCircle size={20} className="text-[#9835ff]" />
                ) : (
                  <RiProgress5Line size={20} className="text-gray-400" />
                )}
                <span className='text-[#404660] font-medium text-md'>{topic.title}</span>
              </div>
              {expandedTopic === index ? <FaChevronDown className='text-gray-400 text-sm' /> : <FaChevronRight className='text-gray-400 text-sm' />}
            </button>
            {expandedTopic === index && (
              <div className="bg-white p-4 space-y-2">
                {topic.subtopics.map((subtopic, subIndex) => (
                  <div
                    key={subIndex}
                    onClick={() => onSelectTopic(subtopic)}
                    className="flex items-center gap-2 cursor-pointer text-gray-500 hover:text-[#9835ff]"
                  >
                    {subtopic.type === 'video' ? (
                      <FaPlayCircle size={16} className="text-gray-500" />
                    ) : (
                      <FaFileAlt size={16} className="text-gray-500" />
                    )}
                    <p>{subtopic.title}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-slate-100 rounded-md">
        <h3 className="text-lg font-medium mb-2 text-[#404660]">Discussions</h3>
        <div className="space-y-4">
          <div className="p-4 bg-white shadow rounded-md">
            <div className="flex items-center space-x-4 mb-2">
              <img src="https://via.placeholder.com/40" alt="Tutor" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-medium text-sm">Tutor Name</p>
                <p className="text-xs text-gray-500">2 days ago</p>
              </div>
            </div>
            <p className="mb-4 text-sm text-[#404660]">This is a comment from the tutor about this topic. Feel free to ask questions and discuss.</p>
            <div className="flex items-center space-x-4">
                <div className='flex items-center gap-2'>
                <button className="text-sm text-[#9835ff] flex items-center gap-2"><MdOutlineReplyAll /> Reply</button>
                <p className='text-sm text-gray-500 cursor-pointer'>| show 8 replies</p>
                </div>
             
            </div>

            <div className="mt-4 space-y-2 pl-4">
              <div className="p-2 bg-gray-50 rounded-md">
                <div className="flex items-center space-x-2 mb-2">
                  <img src="https://via.placeholder.com/30" alt="Student" className="w-8 h-8 rounded-full" />
                  <div>
                    <p className="font-medium text-sm">Student Name</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
                <p className='text-sm text-[#404660]'>This is a reply from a student.</p>
              </div>
              <div className="p-2 bg-gray-50 rounded-md">
                <div className="flex items-center space-x-2 mb-2">
                  <img src="https://via.placeholder.com/30" alt="Student" className="w-8 h-8 rounded-full" />
                  <div>
                    <p className="font-medium text-sm">Another Student</p>
                    <p className="text-xs text-gray-500">12 hours ago</p>
                  </div>
                </div>
                <p className='text-sm text-[#404660]'>This is another reply from a different student.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
