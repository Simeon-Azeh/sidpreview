// src/pages/Questions.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { TbAntennaBars3, TbAntennaBars4, TbAntennaBars5 } from 'react-icons/tb';
import Sidebar, { SidebarItem, DropdownItem } from '../../components/Sidebar';
import { MdDashboardCustomize, MdPeople, MdBook, MdSettings, MdHelp, MdMessage, MdOutlineDatasetLinked } from 'react-icons/md';
import { RiCompassDiscoverFill, RiArchiveDrawerFill } from "react-icons/ri";
import { IoMdChatbubbles } from "react-icons/io";
import Navbar from '../../components/Navbar';
import ResourcesCard from '../../components/Resources/ResourcesCard';
import FilterButton from '../../components/Resources/FilterButton';

const ResourceData = [
    {
        image: 'https://img.freepik.com/free-vector/gradient-broken-light-bulb_23-2149143198.jpg?t=st=1721901158~exp=1721904758~hmac=3bedd7dc84fc88b27a8450a6af82127b2d5b5ab9b03aee8de5893f6567b7f024&w=740',
        title: 'History II',
        description: 'GCE 2024',
        status: { title: 'ALEVELS', icon: <TbAntennaBars4 size={20} /> },
        rating: 4.3,
        ratingCount: 78,
      },
      {
        image: 'https://img.freepik.com/free-vector/gradient-broken-light-bulb_23-2149143198.jpg?t=st=1721901158~exp=1721904758~hmac=3bedd7dc84fc88b27a8450a6af82127b2d5b5ab9b03aee8de5893f6567b7f024&w=740',
        title: 'Maths III (Mechanics)',
        description: 'GCE 2023',
        status: { title: 'ALEVELS', icon: <TbAntennaBars4 size={20} /> },
        rating: 4.7,
        ratingCount: 65,
      },
      {
        image: 'https://img.freepik.com/free-vector/gradient-broken-light-bulb_23-2149143198.jpg?t=st=1721901158~exp=1721904758~hmac=3bedd7dc84fc88b27a8450a6af82127b2d5b5ab9b03aee8de5893f6567b7f024&w=740',
        title: 'Biology I',
        description: 'GCE 2024',
        status: { title: 'Beginner', icon: <TbAntennaBars3 size={20} /> },
        rating: 4.4,
        ratingCount: 72,
      },
      {
        image: 'https://img.freepik.com/free-vector/gradient-broken-light-bulb_23-2149143198.jpg?t=st=1721901158~exp=1721904758~hmac=3bedd7dc84fc88b27a8450a6af82127b2d5b5ab9b03aee8de5893f6567b7f024&w=740',
        title: 'Physics III (Tutorials)',
        description: 'GCE 2024',
        status: { title: 'Advanced', icon: <TbAntennaBars5 size={20} /> },
        time: '6 hours',
        rating: 4.8,
        ratingCount: 90,
      },
];

function Solutions() {
  const handleFilter = (filters) => {
    console.log(filters);
    // Add logic to filter ResourceData based on filters
  };

  document.title = "Solutions - Sidec";

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
        <div className='w-full mx-auto md:pl-16 font-poppins p-4 px-6'>
          <nav className="mb-4 flex justify-between items-center" aria-label="breadcrumb">
            <ol className="flex leading-none text-[#9835ff] divide-x divide-indigo-400">
              <li className="pr-4">
                <Link to="/resources">Resources </Link>
              </li>
              <li className="px-4 text-gray-700">Solutions</li>
            </ol>
            <FilterButton onFilter={handleFilter} />
          </nav>
          <h2 className="text-2xl text-[#404660] font-medium mb-8">Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ResourceData.map((resource, index) => (
              <Link to={`/courses/science/${index}`} key={index}>
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
  );
}

export default Solutions;
