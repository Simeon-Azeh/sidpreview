import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiCompassDiscoverFill } from 'react-icons/ri';
import { MdDashboardCustomize, MdBook, MdSettings, MdHelp, MdOutlineDatasetLinked, MdPeople } from 'react-icons/md';
import { IoMdChatbubbles } from 'react-icons/io';
import Navbar from '../../components/Navbar';
import Sidebar, { SidebarItem, DropdownItem } from '../../components/Sidebar';
import CourseContent from '../../components/Courses/CourseContent';
import CourseOverview from '../../components/Courses/CourseOverview';

function CourseMaterial() {
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);

  return (
    <div className="flex h-screen font-poppins">
      <div className="z-40">
        <Sidebar>
          <Link to="/discover">
            <SidebarItem icon={<RiCompassDiscoverFill size={20} />} text="Discover" />
          </Link>
          <Link to="/dashboard">
            <SidebarItem icon={<MdDashboardCustomize size={20} />} text="Dashboard" />
          </Link>
          <Link to="/people">
            <SidebarItem icon={<MdPeople size={20} />} text="People" />
          </Link>
          <Link to="/courses">
            <SidebarItem icon={<MdBook size={20} />} text="Courses">
              <DropdownItem text="Modules" />
              <DropdownItem text="Specialization" />
            </SidebarItem>
          </Link>
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
        <div className="flex md:px-8 flex-col md:flex-row">
          <div className="w-full md:w-2/3 ">
            <CourseContent selectedSubtopic={selectedSubtopic} />
          </div>
          <div className="w-full md:w-1/3 py-4">
            <CourseOverview onSelectTopic={setSelectedSubtopic} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseMaterial;
