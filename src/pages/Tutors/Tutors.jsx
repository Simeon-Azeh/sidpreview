import React from 'react';
import Sidebar, { SidebarItem, DropdownItem } from '../../components/Sidebar';
import { MdDashboardCustomize, MdPeople, MdAccessTime, MdReport, MdSettings, MdBook, MdHelp, MdMessage, MdExtension } from 'react-icons/md';
import { RiCompassDiscoverFill } from "react-icons/ri";
import { RiArchiveDrawerFill } from "react-icons/ri";
import { IoMdChatbubbles } from "react-icons/io";
import { MdOutlineDatasetLinked } from "react-icons/md";
import Navbar from '../../components/Navbar';
import { FaBook, FaChalkboardTeacher, FaCertificate } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import TutorCategories from '../../components/Tutors/TutorCategories';

function Tutors() {
    document.title="Tutors";
  return (
    <div className="flex h-screen">
        <div className='z-40'>
        <Sidebar>
            <Link to="/discover">
                 <SidebarItem icon={<RiCompassDiscoverFill size={20} />} text="Discover" />
            </Link>
            <Link to="/dashboard">
            <SidebarItem icon={<MdDashboardCustomize size={20} />} text="Dashboard"  alert/>
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
          
      
        <SidebarItem icon={<RiArchiveDrawerFill size={20} />} text="Resources" >
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
          <DropdownItem text="Test" />
        </Link>
        </SidebarItem>
        <SidebarItem icon={<MdPeople size={20} />} text="Tutors" active>
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
        <SidebarItem icon={<MdOutlineDatasetLinked size={20} />} text="IQ Link" alert/>
        </Link>
        <hr className='my-4'/>
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
        
        <div className='w-full mx-auto md:pl-9 '>
           <TutorCategories/>
        </div>
      </div>
      
    </div>
  );
}

export default Tutors;
