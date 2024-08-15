import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import startlearning from '../../../public/images/startlearning.svg';

const CourseContent = ({ selectedSubtopic }) => {
  const [activeTab, setActiveTab] = useState('Transcripts');

  if (!selectedSubtopic) {
    return <div className="md:p-4 flex justify-center items-center flex-col">
        <div className='w-full'>
            <img src={startlearning} alt="" className='w-full object-contain' />
        </div>
        <p className='text-center text-md mb-4 font-medium text-[#404660]'> Choose a topic to start Learning, or continue from where you stopped!</p>
        <button className='px-4 py-2 bg-[#9835ff] text-white rounded shadow hover:translate-y-[-5px] duration-300 '>Continue Learning</button>
    </div>;
  }

  const renderContent = () => {
    if (selectedSubtopic.type === 'video') {
      return (
        <div className="mb-6">
          <div className="w-full bg-gray-200">
          <video controls className="w-full rounded-lg">
              <source src="welcome-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex space-x-4 my-4">
            <button
              className={`py-2 px-4 ${activeTab === 'Transcripts' ? 'border-b-2 border-[#9835ff] text-[#9835ff]' : 'text-gray-500'}`}
              onClick={() => setActiveTab('Transcripts')}
            >
              Transcripts
            </button>
            <button
              className={`py-2 px-4 ${activeTab === 'Notes' ? 'border-b-2 border-[#9835ff] text-[#9835ff]' : 'text-gray-500'}`}
              onClick={() => setActiveTab('Notes')}
            >
              Notes
            </button>
            <button
              className={`py-2 px-4 ${activeTab === 'Downloads' ? 'border-b-2 border-[#9835ff] text-[#9835ff]' : 'text-gray-500'}`}
              onClick={() => setActiveTab('Downloads')}
            >
              Downloads
            </button>
          </div>

          {activeTab === 'Transcripts' && (
            <div className="p-4 bg-slate-100 rounded-md">
              <p>Transcript content goes here...</p>
            </div>
          )}

          {activeTab === 'Notes' && (
            <div className="p-4 bg-slate-100 rounded-md">
              <ReactQuill />
              <button className="mt-4 py-2 px-4 bg-[#9835ff] text-white rounded">Save Notes</button>
            </div>
          )}

          {activeTab === 'Downloads' && (
            <div className="p-4 bg-slate-100 rounded-md">
              <p>Downloadable resources go here...</p>
            </div>
          )}
        </div>
      );
    } else if (selectedSubtopic.type === 'text') {
      return (
        <div className="p-4 bg-white rounded-md">
          <h3 className="text-lg font-medium mb-2 text-[#404660]">{selectedSubtopic.title}</h3>
          <p className='text-[#404660]'>{selectedSubtopic.content}</p>
          <button className="mt-4 py-2 px-4 bg-[#9835ff] text-white rounded">Mark as Complete</button>
        </div>
      );
    }
  };

  return (
    <div className="p-4">
      <nav className="mb-4">
        <ol className="flex text-sm text-gray-500 space-x-2">
          <li><Link to="/courses">Courses</Link></li>
          <li>/</li>
          <li><Link to="/courses/science">Science</Link></li>
          <li>/</li>
          <li>Navigating Sidec</li>
        </ol>
      </nav>

      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-medium text-[#404660]">{selectedSubtopic.title}</h2>

        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 bg-slate-100 rounded-full text-[#404660]"><MdChevronLeft size={20} /></button>
          <button className="p-2 bg-slate-100 rounded-full text-[#404660]"><MdChevronRight size={20} /></button>
        </div>
      </div>

      {renderContent()}
    </div>
  );
};

export default CourseContent;
