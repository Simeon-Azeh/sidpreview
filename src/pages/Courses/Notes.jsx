import React, { useState } from 'react';
import { format } from 'date-fns';
import { Modal } from 'antd';
import 'antd/dist/reset.css'; // or 'antd/dist/antd.css'

import Sidebar, { SidebarItem, DropdownItem } from '../../components/Sidebar';
import NoteCard from '../../components/Courses/NoteCard';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import { MdDashboardCustomize, MdPeople, MdBook, MdSettings, MdHelp, MdOutlineDatasetLinked } from 'react-icons/md';
import { RiCompassDiscoverFill, RiArchiveDrawerFill } from 'react-icons/ri';
import { IoMdChatbubbles } from 'react-icons/io';

// Sample data for notes
const notesData = [
  {
    date: '2024-08-12',
    notes: [
      { id: '1', content: 'First note of the day, a detailed note to check how it works in practice.', topic: 'Topic 1' },
      { id: '2', content: 'Second note of the day with more information and details.', topic: 'Topic 2' },
      { id: '3', content: 'Second note of the day with more information and details.', topic: 'Topic 2' },
    ],
  },
  {
    date: '2024-08-13',
    notes: [
      { id: '3', content: 'Note from the next day with additional insights and information.', topic: 'Topic 3' },
    ],
  },
];

const Notes = () => {
  const [visibleNote, setVisibleNote] = useState(null);

  const [visibleModal, setVisibleModal] = useState(false);

  const handleViewClick = (note) => {
    setVisibleNote(note);
    setVisibleModal(true);
  };
  
  const handleCloseModal = () => {
    setVisibleModal(false);
    setVisibleNote(null);
  };
  return (
    <div className="flex h-screen">
      <div className='z-40'>
        <Sidebar>
          <Link to="/discover">
            <SidebarItem icon={<RiCompassDiscoverFill size={20} />} text="Discover" />
          </Link>
          <Link to="/dashboard">
            <SidebarItem icon={<MdDashboardCustomize size={20} />} text="Dashboard" alert />
          </Link>

          <SidebarItem icon={<MdBook size={20} />} text="Courses">
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

          <SidebarItem icon={<RiArchiveDrawerFill size={20} />} text="Resources">
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
          <hr className='my-4' />
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

        {/* Notes content */}
        <div className="w-full mx-auto lg:pl-16 font-poppins p-4 px-6">
          <h1 className="text-2xl font-medium text-[#404660] mb-6">Notes</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {notesData.flatMap((item) =>
              item.notes.map((note) => (
                <NoteCard
                  key={note.id}
                  content={note.content}
                  topic={note.topic}
                  lastEdited="2024-08-15"
                >
                  <button
                    className="bg-blue-500 text-white rounded px-4 py-2 mt-4"
                    onClick={() => handleViewClick(note)}
                  >
                    View
                  </button>
                </NoteCard>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Ant Design Modal */}
      <Modal
  title={visibleNote ? visibleNote.topic : ''}
  visible={visibleModal}
  onCancel={handleCloseModal}
  footer={null}
>
        {visibleNote && (
          <div>
            <h3 className="text-lg font-medium mb-2">{visibleNote.topic}</h3>
            <p>{visibleNote.content}</p>
            <p className="text-sm text-gray-500">Last edited: {format(new Date('2024-08-15'), 'MMMM dd, yyyy')}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Notes;
