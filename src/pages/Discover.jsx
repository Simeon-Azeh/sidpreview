import React from 'react';
import Sidebar, { SidebarItem, DropdownItem } from '../components/Sidebar';
import { MdDashboardCustomize, MdPeople, MdAccessTime, MdReport, MdSettings, MdBook, MdHelp, MdMessage, MdExtension } from 'react-icons/md';
import { RiCompassDiscoverFill } from "react-icons/ri";
import { RiArchiveDrawerFill } from "react-icons/ri";
import { IoMdChatbubbles } from "react-icons/io";
import { MdOutlineDatasetLinked } from "react-icons/md";
import Navbar from '../components/Navbar';
import ProfileContainer from '../components/Dashboard/ProfileContainer';
import ResponsiveTable from '../components/Dashboard/ResponsiveTable';
import CourseList from '../components/Courses/CourseList';
import { Link } from 'react-router-dom';
import GreetingCard from '../components/Discover/GreetingCard';
import { Calendar, theme } from 'antd';
import UpcomingToday from '../components/Discover/UpcomingToday';
import CommunityLeaderboard from '../components/Discover/CommunityLeaderboard';
import TabComponent from '../components/Discover/TabComponent';
const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

function Discover() {
    const { token } = theme.useToken();
    const wrapperStyle = {
      width: 300,
      border: `1px solid ${token.colorBorderSecondary}`,
      borderRadius: token.borderRadiusLG,
    };
    const sampleEnrolledUsers = [
        { image: 'https://via.placeholder.com/40' },
        { image: 'https://via.placeholder.com/40' },
        { image: 'https://via.placeholder.com/40' },
        { image: 'https://via.placeholder.com/40' },
      ];

      const sampleChapters = [
        'Introduction',
        'Chapter 1: Getting Started',
        'Chapter 2: Basics',
        'Chapter 3: Advanced Topics',
        'Chapter 4: Conclusion',
      ];

      document.title = 'Discover | sidec';
  return (
    <div className="flex h-screen">
        <div className='z-40'>
        <Sidebar>
            <Link to="/discover">
                 <SidebarItem icon={<RiCompassDiscoverFill size={20} />} text="Discover" active/>
            </Link>
            <Link to="/dashboard">
            <SidebarItem icon={<MdDashboardCustomize size={20} />} text="Dashboard"  alert/>
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
            <Link to="/courses/technology">
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
          <DropdownItem text="Test" />
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
        <Link to="/tutors/tech">
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
        <div className='flex flex-col px-4 md:flex-row p-6'>
            <div className='w-full md:w-[70%] px-8'>
          <div>
           <GreetingCard />
          </div>
         <div>
       <CommunityLeaderboard />
         </div>
         <div>
            <TabComponent />
         </div>
            </div>
            <div className='w-full px-7 mt-5 md:mt-0 md:px-0 md:w-[30%]'>
            <div className='font-poppins mx-auto' style={wrapperStyle}>
      <Calendar fullscreen={false} onPanelChange={onPanelChange}    />
    </div>
    <div className="mt-5 ">
      <UpcomingToday 
        mainImage="https://img.freepik.com/free-photo/flat-lay-paper-hand-holding-heart-with-copy-space_23-2148635149.jpg?t=st=1721720922~exp=1721724522~hmac=08b6d0046b470c6f26e910d3686e1ddbd00d15bdce514cb954c4e6de2fe3b342&w=996"
        title="Empathy & Communication: neccesity for team dynamics"
        description="This is a sample description of the course."
        enrolledUsers={sampleEnrolledUsers}
        completedChapters={2}
        totalChapters={5}
        chapters={sampleChapters}
      />
    </div>
            </div>
      
        </div>
       
      </div>
      
    </div>
  );
}

export default Discover;
