import React from 'react';
import { Link } from 'react-router-dom';
import { TbAntennaBars3 } from 'react-icons/tb';
import Sidebar, { SidebarItem, DropdownItem } from '../../components/Sidebar';
import { MdDashboardCustomize, MdPeople, MdBook, MdSettings, MdHelp, MdMessage, MdOutlineDatasetLinked } from 'react-icons/md';
import { RiCompassDiscoverFill, RiArchiveDrawerFill } from "react-icons/ri";
import { IoMdChatbubbles } from "react-icons/io";
import Navbar from '../../components/Navbar';
import { TbAntennaBars5, TbAntennaBars4} from 'react-icons/tb';

import { GoHome } from "react-icons/go";
import TutorCard from '../../components/Tutors/TutorCard';
import FilterButton from '../../components/Tutors/FilterButton';

const tutorsData = [
    {
        image: 'https://img.freepik.com/free-photo/front-view-man-looking-away_23-2148291498.jpg?t=st=1721981282~exp=1721984882~hmac=92e2b1f706ecc4e5340c709ed4f189adfcb0d28d131f6bfe51a557cafab8923e&w=360',
        title: 'Simeon Kongnyuy',
        description: 'HTML | CSS | Javascript',
        status: { title: 'Beginners', icon: <TbAntennaBars3 size={20} /> },
        time: '2 hours',
        rating: 4.2,
        ratingCount: 150,
      },
      {
        image: 'https://img.freepik.com/free-photo/portrait-smiling-african-american-entrepreneur-man-browsing-management-information_482257-22673.jpg?t=st=1721981233~exp=1721984833~hmac=c1673ee9b9a8918d25a487bba542e1a01f9c9491826226a26d1d66cefc750331&w=360',
        title: 'Alain Michael',
        description: 'Python | Java | C++',
        status: { title: 'Intermediate', icon: <TbAntennaBars4 size={20} /> },
        time: '5 hours',
        rating: 4.6,
        ratingCount: 140,
      },
     
];
const handleFilter = (filters) => {
    console.log(filters);
    // Add logic to filter ResourceData based on filters
  };
function TechTutors() {
  document.title = " Courses - Arts";
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
                <Link to="/tutors">Tutors </Link>
              </li>
              <li className="px-4 text-gray-700">Technology</li>
            </ol>
            <FilterButton onFilter={handleFilter} />
          </nav>
          <h2 className="text-2xl text-[#404660] font-medium mb-8">Tech Tutors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tutorsData.map((tutor, index) => (
              <Link to={`/courses/Arts/${index}`} key={index}>
                <TutorCard
                  image={tutor.image}
                  title={tutor.title}
                  description={tutor.description}
                  status={tutor.status}
                  time={tutor.time}
                  rating={tutor.rating}
                  ratingCount={tutor.ratingCount}
                  verifiedStatus={tutor.verifiedStatus}  // Passing verifiedStatus here
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechTutors;
