import React from 'react';
import { Link } from 'react-router-dom';
import { TbAntennaBars3 } from 'react-icons/tb';
import Sidebar, { SidebarItem, DropdownItem } from '../../components/Sidebar';
import { MdDashboardCustomize, MdPeople, MdBook, MdSettings, MdHelp, MdMessage, MdOutlineDatasetLinked } from 'react-icons/md';
import { RiCompassDiscoverFill, RiArchiveDrawerFill } from "react-icons/ri";
import { IoMdChatbubbles } from "react-icons/io";
import Navbar from '../../components/Navbar';
import { TbAntennaBars5, TbAntennaBars4} from 'react-icons/tb';
import CourseCard from '../../components/Courses/CourseCard';
import { GoHome } from "react-icons/go";

const coursesData = [
  {
    image: 'https://img.freepik.com/premium-photo/light-vintage-bulb-chalk-board-background_641298-22644.jpg?w=740',
    title: 'Physics Basics',
    description: 'Understand the fundamentals of Physics and apply...',
    status: { title: 'Olevels', icon: <TbAntennaBars3 size={20} /> },
    time: '4 hours',
    rating: 4.2,
    ratingCount: 120,
  },
  {
    image: 'https://img.freepik.com/premium-photo/medical-science-blue-banner_978521-27821.jpg?w=826',
    title: 'Chemistry Essentials',
    description: 'Learn the basics of Chemistry and use it to prep for your...',
    status: { title: 'Intermediate', icon: <TbAntennaBars4 size={20} /> },
    time: '5 hours',
    rating: 4.5,
    ratingCount: 95,
  },
  {
    image: 'https://img.freepik.com/free-photo/3d-medical-background-with-virus-cells-dna-strand_1048-7596.jpg?t=st=1721764163~exp=1721767763~hmac=6d2c1c0a34bc80fae33115e4a83cccb68e475a83ae4d560e3794b158565a19bc&w=740',
    title: 'Biology for Beginners',
    description: 'Introduction to Biology and its branches...',
    status: { title: 'Beginner', icon: <TbAntennaBars3 size={20} /> },
    time: '3 hours',
    rating: 4.1,
    ratingCount: 110,
  },
  {
    image: 'https://img.freepik.com/premium-photo/thermometer-earth-eco-climate-change-concept-3d-rendering_35719-8004.jpg?w=740',
    title: 'Earth Science',
    description: 'Explore the basics of Earth Science...',
    status: { title: 'Advanced', icon: <TbAntennaBars5 size={20} /> },
    time: '6 hours',
    rating: 4.6,
    ratingCount: 85,
  },
  {
    image: 'https://img.freepik.com/premium-photo/medical-science-blue-banner_978521-27821.jpg?w=826',
    title: 'Chemistry Essentials',
    description: 'Learn the basics of Chemistry and use it to prep for your...',
    status: { title: 'Intermediate', icon: <TbAntennaBars4 size={20} /> },
    time: '5 hours',
    rating: 4.5,
    ratingCount: 95,
  },
  {
    image: 'https://img.freepik.com/free-photo/3d-medical-background-with-virus-cells-dna-strand_1048-7596.jpg?t=st=1721764163~exp=1721767763~hmac=6d2c1c0a34bc80fae33115e4a83cccb68e475a83ae4d560e3794b158565a19bc&w=740',
    title: 'Biology for Beginners',
    description: 'Introduction to Biology and its branches...',
    status: { title: 'Beginner', icon: <TbAntennaBars3 size={20} /> },
    time: '3 hours',
    rating: 4.1,
    ratingCount: 110,
  },
  {
    image: 'https://img.freepik.com/premium-photo/thermometer-earth-eco-climate-change-concept-3d-rendering_35719-8004.jpg?w=740',
    title: 'Earth Science',
    description: 'Explore the basics of Earth Science...',
    status: { title: 'Advanced', icon: <TbAntennaBars5 size={20} /> },
    time: '6 hours',
    rating: 4.6,
    ratingCount: 85,
  },
  // other courses...
];

function Science() {
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
              <li className="px-4 text-gray-700">Science</li>
            </ol>
          </nav>
          <h2 className="text-2xl text-[#404660] font-medium mb-8">Science Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coursesData.map((course, index) => (
              <Link to={`/courses/science/${index}`} key={index}>
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

export default Science;
