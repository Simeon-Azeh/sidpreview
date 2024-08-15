import React from 'react';
import { Link } from 'react-router-dom';
import { TbAntennaBars3 } from 'react-icons/tb';
import Sidebar, { SidebarItem, DropdownItem } from '../../components/Sidebar';
import { MdDashboardCustomize, MdPeople, MdBook, MdSettings, MdHelp, MdMessage, MdOutlineDatasetLinked } from 'react-icons/md';
import { RiCompassDiscoverFill, RiArchiveDrawerFill } from "react-icons/ri";
import { IoMdChatbubbles } from "react-icons/io";
import Navbar from '../../components/Navbar';
import { TbAntennaBars5, TbAntennaBars4 } from 'react-icons/tb';
import CourseCard from '../../components/Courses/CourseCard';

const coursesData = [
  {
    image: 'https://img.freepik.com/free-photo/luxury-office-table-with-business-tools_1262-21441.jpg',
    title: 'Business Management',
    description: 'Gain the skills to manage and lead businesses...',
    status: { title: 'Advanced', icon: <TbAntennaBars5 size={20} /> },
    time: '10 hours',
    rating: 4.9,
    ratingCount: 100,
  },
  {
    image: 'https://img.freepik.com/free-photo/doctor-holding-x-ray-human-lungs-white-background_1301-5131.jpg',
    title: 'Medical Science',
    description: 'Dive into the world of medical science and healthcare...',
    status: { title: 'Expert', icon: <TbAntennaBars5 size={20} /> },
    time: '12 hours',
    rating: 4.7,
    ratingCount: 85,
  },
  {
    image: 'https://img.freepik.com/free-photo/numerology-concept-composition_23-2150169791.jpg?t=st=1721765242~exp=1721768842~hmac=637882a13ddfe72e18ba6b152ecc90b36ebb4f70deaa43822733e8083ee76a32&w=740',
    title: 'Advanced Mathematics',
    description: 'Dive deep into advanced mathematical concepts...',
    status: { title: 'Advanced', icon: <TbAntennaBars5 size={20} /> },
    time: '6 hours',
    rating: 4.9,
    ratingCount: 100,
  },
  {
    image: 'https://img.freepik.com/premium-photo/building-earth-coins-chart-3d-rendering-business-content_35719-1758.jpg?w=740',
    title: 'Economics for Beginners',
    description: 'Understand the basics of economics and apply in your...',
    status: { title: 'Beginner', icon: <TbAntennaBars3 size={20} /> },
    time: '4 hours',
    rating: 4.5,
    ratingCount: 90,
  },
  {
    image: 'https://img.freepik.com/premium-photo/justice-scales-books-wooden-gavel-table-justice-concept_488220-74309.jpg?w=740',
    title: 'Introduction to Law',
    description: 'Explore the fundamentals of legal systems...',
    status: { title: 'Intermediate', icon: <TbAntennaBars4 size={20} /> },
    time: '5 hours',
    rating: 4.7,
    ratingCount: 85,
  },
  {
    image: 'https://img.freepik.com/premium-photo/pills-medical-equiupments-border-green-background-top-view_8087-237.jpg?w=740',
    title: 'Medical Sciences',
    description: 'Learn about the basics of medical sciences...',
    status: { title: 'Advanced', icon: <TbAntennaBars5 size={20} /> },
    time: '6 hours',
    rating: 4.8,
    ratingCount: 80,
  },
  // other courses...
];

function Specialization() {
  document.title = " Courses - Specialization";
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
          <SidebarItem icon={<MdBook size={20} />} text="Courses" active>
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
          <nav className="mb-4" aria-label="breadcrumb">
            <ol className="flex leading-none text-[#9835ff] divide-x divide-indigo-400">
              <li className="pr-4">
                <Link to="/courses">Courses </Link>
              </li>
              <li className="px-4 text-gray-700">Specialization</li>
            </ol>
          </nav>
          <h2 className="text-2xl text-[#404660] font-medium mb-8">Specialization Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coursesData.map((course, index) => (
              <Link to={`/courses/specialization/${index}`} key={index}>
                <CourseCard
                  image={course.image}
                  title={course.title}
                  description={course.description}
                  status={course.status}
                  time={course.time}
                  rating={course.rating}
                  ratingCount={course.ratingCount}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specialization;
