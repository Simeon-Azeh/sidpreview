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
        image: 'https://img.freepik.com/free-photo/portrait-attractive-dark-skinned-student-wearing-checkered-shirt-with-confident-joyful-expression-standing-chalkboard-wall_273609-5907.jpg',
        title: 'Foryoung Junior',
        description: 'WEB development | Computer Science',
        status: { title: 'ALEVEL | OLEVEL', icon: <TbAntennaBars4 size={20} /> },
        rating: 4.2,
        ratingCount: 51,
        verifiedStatus: true,
      },
      {
        image: 'https://img.freepik.com/free-photo/smiling-young-afro-american-student-with-backpack-holding-arrow-pointing-up-thumbing-up_141793-123003.jpg?t=st=1721979051~exp=1721982651~hmac=d2961972fdcc144544bec1e25f0d912e2e0b8056bdf6e63e1a68368f54dd3d9c&w=740',
        title: 'Alain Jeff',
        description: 'Physics | Maths |  Mechanics',
        status: { title: 'ALEVEL', icon: <TbAntennaBars4 size={20} /> },
        rating: 4.5,
        ratingCount: 95,
      },
      {
        image: 'https://img.freepik.com/free-photo/smiley-man-work-medium-shot_23-2149741161.jpg?t=st=1721979433~exp=1721983033~hmac=0b9723486a3f9dc51a578adbce7d00091e4b53df07308dea7a8657d19f657573&w=360',
        title: 'Jesse Nfor',
        description: 'Chemisty',
        status: { title: 'OLEVEL', icon: <TbAntennaBars3 size={20} /> },
        rating: 4.1,
        ratingCount: 110,
        verifiedStatus: true,
      },
      {
        image: 'https://img.freepik.com/free-photo/african-woman-successful-entrepreneur-wearing-glasses-face-portrait_53876-148050.jpg?t=st=1721979719~exp=1721983319~hmac=77100b3a66927cc25412472b05a908ee6ad81a4abfdb931008fe2174360240ae&w=740',
        title: 'Fonui Solange',
        description: 'Biolgy | Zoology',
        status: { title: 'ALEVEL', icon: <TbAntennaBars5 size={20} /> },
        rating: 4.6,
        ratingCount: 85,
        verifiedStatus: true,
      },
];
const handleFilter = (filters) => {
    console.log(filters);
    // Add logic to filter ResourceData based on filters
  };
function ScienceTutors() {
  document.title = " Courses - Science";
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
              <li className="px-4 text-gray-700">Science</li>
            </ol>
            <FilterButton onFilter={handleFilter} />
          </nav>
          <h2 className="text-2xl text-[#404660] font-medium mb-8">Science Tutors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tutorsData.map((tutor, index) => (
              <Link to={`/courses/science/${index}`} key={index}>
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

export default ScienceTutors;
