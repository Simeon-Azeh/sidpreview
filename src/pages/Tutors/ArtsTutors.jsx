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
        image: 'https://img.freepik.com/free-photo/portrait-african-american-model_23-2149072141.jpg?t=st=1721980298~exp=1721983898~hmac=52688279fd33cf6f6f7a03e3cbff1c8d5307e8ddbe1751800e342fbd842b1b5c&w=360',
        title: 'Akong Fred',
        description: 'History',
        status: { title: 'ALEVEL', icon: <TbAntennaBars4 size={20} /> },
        rating: 4.3,
        ratingCount: 78,
      },
      {
        image: 'https://img.freepik.com/free-photo/front-view-smiley-woman-home_23-2150401916.jpg?t=st=1721980365~exp=1721983965~hmac=3246f120378203a30698760147353f0763e63d3aa60418ff2927b5cd4018ee22&w=360',
        title: 'Susan Eunice',
        description: 'Economics',
        status: { title: 'ALEVEL', icon: <TbAntennaBars4 size={20} /> },
        rating: 4.7,
        ratingCount: 65,
        verifiedStatus: true,
      },
      {
        image: 'https://img.freepik.com/free-photo/medium-shot-man-doing-math-indoors_23-2150444904.jpg?t=st=1721980527~exp=1721984127~hmac=9470a09d5afc4297df48215d655af3220e3d9fd341d3bbff9908c16b4e4b395d&w=360',
        title: 'James Henry',
        description: 'Geography | Maths Statistics',
        status: { title: 'OLEVEL', icon: <TbAntennaBars3 size={20} /> },
        rating: 4.4,
        ratingCount: 72,
      },
      {
        image: 'https://img.freepik.com/free-photo/attractive-young-african-american-man-wearing-trendy-black-glasses-hat-spending-weekend-morning-home-sitting-living-room-watching-world-news-tv-having-serious-look_273609-1047.jpg?t=st=1721980637~exp=1721984237~hmac=4a722537dbb2037fb92d5d403556aa5a7cb63a671969349f6e633be8be2088fc&w=740',
        title: 'Mathew Nfor',
        description: 'History',
        status: { title: 'ALEVELS', icon: <TbAntennaBars5 size={20} /> },
        time: '6 hours',
        rating: 4.8,
        ratingCount: 90,
        verifiedStatus: true,
      },
];
const handleFilter = (filters) => {
    console.log(filters);
    // Add logic to filter ResourceData based on filters
  };
function ArtsTutors() {
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
              <li className="px-4 text-gray-700">Arts</li>
            </ol>
            <FilterButton onFilter={handleFilter} />
          </nav>
          <h2 className="text-2xl text-[#404660] font-medium mb-8">Arts Tutors</h2>
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

export default ArtsTutors;
