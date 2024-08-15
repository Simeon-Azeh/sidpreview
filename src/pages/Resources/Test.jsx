// src/pages/Test.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar, { SidebarItem, DropdownItem } from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import WelcomeMessage from '../../components/Resources/WelcomeMessage';
import PerformanceGraph from '../../components/Resources/PerformanceGraph';
import TakeTestButton from '../../components/Resources/TakeTestButton';
import { MdDashboardCustomize, MdPeople, MdBook, MdSettings, MdHelp, MdMessage, MdOutlineDatasetLinked } from 'react-icons/md';
import { RiCompassDiscoverFill, RiArchiveDrawerFill } from "react-icons/ri";
import { IoMdChatbubbles } from "react-icons/io";
import ResourcesCard from '../../components/Resources/ResourcesCard';
import { TbAntennaBars3, TbAntennaBars4, TbAntennaBars5 } from 'react-icons/tb';
import QuizSummary from '../../components/Resources/QuizSummary';
import Badges from '../../components/Resources/Badges';

const mockResourceData = [
    {
        image: 'https://img.freepik.com/premium-vector/education-seamless-pattern_643500-73.jpg?w=740',
        title: 'Physics, Maths, and Chemistry',
        description: '2 hours to complete',
        status: { title: 'ALEVEL', icon: <TbAntennaBars3 size={20} /> },
        time: '2 hours',
        rating: 4.2,
        ratingCount: 150,
      },
      {
        image: 'https://img.freepik.com/premium-vector/education-seamless-pattern_643500-73.jpg?w=740',
        title: 'Web Development',
        description: '1 hour to complete',
        status: { title: 'Intermediate', icon: <TbAntennaBars4 size={20} /> },
        time: '5 hours',
        rating: 4.6,
        ratingCount: 140,
      },
      {
        image: 'https://img.freepik.com/premium-vector/education-seamless-pattern_643500-73.jpg?w=740',
        title: 'Biology I',
        description: '30 minutes to complete',
        status: { title: 'ALEVELS', icon: <TbAntennaBars3 size={20} /> },
        time: '3 hours',
        rating: 4.3,
        ratingCount: 130,
      },
];

const TestPage = () => (
  <div className="flex h-screen">
    <div className="z-40">
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
          <Link to="/courses/technology">
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
      <div className="w-full mx-auto md:pl-16 font-poppins p-4 px-6">
        <div>
        <WelcomeMessage />
        </div>
        <div>
        <PerformanceGraph />
        </div>
        <div className='flex flex-col md:flex-row gap-4 justify-between'>
            <div className='w-full md:1/2'>
                <QuizSummary />
            </div>
            <div className='w-full md:1/2'>
               <Badges /> 
            </div>
        </div>
       
        <div className="mt-8">
          <h2 className="text-xl text-[#404660] font-medium mb-4">Start from a Template</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockResourceData.map((resource, index) => (
              <Link to={`/resources/template/${index}`} key={index}>
                <ResourcesCard
                  image={resource.image}
                  title={resource.title}
                  description={resource.description}
                  status={resource.status}
                  time={resource.time}
                  rating={resource.rating}
                  ratingCount={resource.ratingCount}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TestPage;
