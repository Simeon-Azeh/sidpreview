// src/pages/EnrolledCourses.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { TbAntennaBars3, TbAntennaBars5, TbAntennaBars4 } from 'react-icons/tb';
import { FaBookOpen, FaFlask, FaLaptopCode } from 'react-icons/fa';
import { IoMdChatbubbles } from 'react-icons/io';
import Sidebar, { SidebarItem, DropdownItem } from '../../components/Sidebar';
import { MdDashboardCustomize, MdPeople, MdBook, MdSettings, MdHelp, MdOutlineDatasetLinked } from 'react-icons/md';
import { BsFillMenuAppFill } from "react-icons/bs";
import { RiCompassDiscoverFill, RiArchiveDrawerFill } from "react-icons/ri";
import Navbar from '../../components/Navbar';
import EnrolledCard from '../../components/Courses/EnrolledCard';


const courses = [
  {
    icon: <FaBookOpen />,
    title: 'Advanced Mathematics',
    authorImage: 'https://via.placeholder.com/40',
    authorName: 'John Doe',
    lessons: 12,
    hours: 6,
    progress: 50,
    isCompleted: false,
    courseLink: '/courses/advanced-mathematics',
    bgColor: 'bg-[#ff6361] text-white',
  },
  {
    icon: <BsFillMenuAppFill />,
    title: 'How to Navigate Sidec',
    authorImage: 'https://via.placeholder.com/40',
    authorName: 'Jane Smith',
    lessons: 10,
    hours: 1,
    progress: 100,
    isCompleted: true,
    courseLink: '/courses/introduction-to-chemistry',
    bgColor: 'bg-[#9835ff] text-white',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Computer Science Fundamentals',
    authorImage: 'https://via.placeholder.com/40',
    authorName: 'Alice Johnson',
    lessons: 15,
    hours: 7,
    progress: 75,
    isCompleted: false,
    courseLink: '/courses/computer-science-fundamentals',
    bgColor: 'bg-[#ffbf65] text-white',
  },
  {
    icon: <TbAntennaBars5 />,
    title: 'Data Structures & Algorithms',
    authorImage: 'https://via.placeholder.com/40',
    authorName: 'Bob Brown',
    lessons: 20,
    hours: 10,
    progress: 60,
    isCompleted: false,
    courseLink: '/courses/data-structures-algorithms',
    bgColor: 'bg-[#8dd7bf] text-white',
  },
  {
    icon: <TbAntennaBars4 />,
    title: 'Machine Learning Basics',
    authorImage: 'https://via.placeholder.com/40',
    authorName: 'Charlie Green',
    lessons: 18,
    hours: 9,
    progress: 90,
    isCompleted: false,
    courseLink: '/courses/machine-learning-basics',
    bgColor: 'bg-[#0065a2] text-white',
  },
  {
    icon: <IoMdChatbubbles />,
    title: 'Effective Communication',
    authorImage: 'https://via.placeholder.com/40',
    authorName: 'David White',
    lessons: 8,
    hours: 4,
    progress: 100,
    isCompleted: true,
    courseLink: '/courses/effective-communication',
    bgColor: 'bg-[#ff60a8] text-white',
  },
];

function EnrolledCourses() {
    document.title = " Courses - Enrolled Courses";
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
              <li className="px-4 text-gray-700">Enrolled</li>
            </ol>
          </nav>
          <h2 className="text-2xl text-[#404660] font-medium mb-8">Enrolled Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <EnrolledCard
                key={index}
                icon={course.icon}
                title={course.title}
                authorImage={course.authorImage}
                authorName={course.authorName}
                lessons={course.lessons}
                hours={course.hours}
                progress={course.progress}
                isCompleted={course.isCompleted}
                courseLink={course.courseLink}
                bgColor={course.bgColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnrolledCourses;
