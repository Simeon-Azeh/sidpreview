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
    image: 'https://img.freepik.com/free-photo/code-with-technology-background-programming-concept_53876-124027.jpg',
    title: 'Web Development',
    description: 'Learn to build websites using HTML, CSS, and JavaScript...',
    status: { title: 'Beginner', icon: <TbAntennaBars3 size={20} /> },
    time: '8 hours',
    rating: 4.8,
    ratingCount: 150,
  },
  {
    image: 'https://img.freepik.com/free-photo/closeup-image-computer-circuit-board_58466-10273.jpg',
    title: 'Introduction to Hardware',
    description: 'Understand the components of a computer system...',
    status: { title: 'Intermediate', icon: <TbAntennaBars4 size={20} /> },
    time: '6 hours',
    rating: 4.5,
    ratingCount: 130,
  },
  {
    image: 'https://img.freepik.com/free-photo/programming-background-collage_23-2149901771.jpg?t=st=1721764931~exp=1721768531~hmac=119784a10bf4faed08460d44515e77c0521dffa62ab42aac1d109bc0aebbfcce&w=740',
    title: 'Introduction to Programming',
    description: 'Learn the basics of programming with JavaScript...',
    status: { title: 'Beginner', icon: <TbAntennaBars3 size={20} /> },
    time: '4 hours',
    rating: 4.2,
    ratingCount: 150,
  },
  {
    image: 'https://img.freepik.com/free-photo/programming-background-collage_23-2149901782.jpg?t=st=1721764997~exp=1721768597~hmac=7f27bdf50c336d858b38f44f938f6b4611439db3be4b0287e61b1d61404e55cb&w=740',
    title: 'Web Development',
    description: 'Get started with HTML, CSS, and JavaScript...',
    status: { title: 'Intermediate', icon: <TbAntennaBars4 size={20} /> },
    time: '5 hours',
    rating: 4.6,
    ratingCount: 140,
  },
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
    image: 'https://img.freepik.com/premium-photo/molecules-technology-with-polygonal-shapes-connecting-dots-lines_7247-1922.jpg?w=740',
    title: 'Data Science Basics',
    description: 'Introduction to data science and machine learning...',
    status: { title: 'Advanced', icon: <TbAntennaBars5 size={20} /> },
    time: '6 hours',
    rating: 4.7,
    ratingCount: 120,
  },
  // other courses...
];


function Tech() {
  document.title='Courses - Technology';
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
              <li className="px-4 text-gray-700">Technology</li>
            </ol>
          </nav>
          <h2 className="text-2xl text-[#404660] font-medium mb-8">Technology Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coursesData.map((course, index) => (
              <Link to={`/courses/tech/${index}`} key={index}>
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

export default Tech;
