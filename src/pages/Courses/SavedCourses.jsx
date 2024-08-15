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
        image: 'https://img.freepik.com/premium-photo/abstract-background-molecules-technology-with-polygonal-shapes-connecting-dots-lines_7247-1132.jpg?w=740',
        title: 'Mobile App Development',
        description: 'Build your first mobile app with React Native...',
        status: { title: 'Beginner', icon: <TbAntennaBars3 size={20} /> },
        time: '3 hours',
        rating: 4.3,
        ratingCount: 130,
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
    image: 'https://img.freepik.com/free-photo/artist-props-photography-studio_23-2148885635.jpg?t=st=1721764748~exp=1721768348~hmac=69bbcd74fa092f2b9da142ecd41ca4f0928f40baf27ab26bb25b67b038844c54&w=360',
    title: 'Photography Basics',
    description: 'Understand the basics of photography and camera use...',
    status: { title: 'Advanced', icon: <TbAntennaBars5 size={20} /> },
    time: '6 hours',
    rating: 4.8,
    ratingCount: 90,
  },
  // other courses...
];

function SavedCourses() {
  document.title = " Courses - Saved Courses";
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
              <li className="px-4 text-gray-700">Saved</li>
            </ol>
          </nav>
          <h2 className="text-2xl text-[#404660] font-medium mb-8">Saved Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coursesData.map((course, index) => (
              <Link to={`/courses/arts/${index}`} key={index}>
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

export default SavedCourses;
