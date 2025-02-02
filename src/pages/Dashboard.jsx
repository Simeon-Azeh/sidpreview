import React, { useEffect, useState } from 'react';
import Sidebar, { SidebarItem, DropdownItem } from '../components/Sidebar';
import { MdDashboardCustomize, MdPeople, MdBook, MdSettings, MdHelp, MdMessage, MdOutlineDatasetLinked } from 'react-icons/md';
import { IoMdChatbubbles } from "react-icons/io";
import { RiCompassDiscoverFill, RiArchiveDrawerFill } from "react-icons/ri";
import Navbar from '../components/Navbar';
import { FaBook, FaChalkboardTeacher, FaCertificate } from 'react-icons/fa';
import Card from '../components/Dashboard/Card';
import ProfileContainer from '../components/Dashboard/ProfileContainer';
import ResponsiveTable from '../components/Dashboard/ResponsiveTable';
import CourseList from '../components/Courses/CourseList';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

function Dashboard() {
  const [enrolledCoursesCount, setEnrolledCoursesCount] = useState(0);
  const [savedCoursesCount, setSavedCoursesCount] = useState(0);
  const [certificatesCount, setCertificatesCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const userEmail = user.email;

        // Fetch enrolled courses count
        const enrolledCoursesQuery = query(collection(db, 'enrolledcourses'), where('email', '==', userEmail));
        const enrolledCoursesSnapshot = await getDocs(enrolledCoursesQuery);
        setEnrolledCoursesCount(enrolledCoursesSnapshot.size);

        // Fetch saved courses count
        const savedCoursesQuery = query(collection(db, 'savedcourses'), where('email', '==', userEmail));
        const savedCoursesSnapshot = await getDocs(savedCoursesQuery);
        setSavedCoursesCount(savedCoursesSnapshot.size);

        // Fetch certificates count
        const certificatesQuery = query(collection(db, 'certificates'), where('email', '==', userEmail));
        const certificatesSnapshot = await getDocs(certificatesQuery);
        setCertificatesCount(certificatesSnapshot.size);
      }
    };

    fetchCounts();
  }, []);

  document.title = "Sidec dashboard";
  return (
    <div className="flex h-screen">
      <div className='z-40'>
        <Sidebar>
          <Link to="/discover">
            <SidebarItem icon={<RiCompassDiscoverFill size={20} />} text="Discover" />
          </Link>
          <Link to="/dashboard">
            <SidebarItem icon={<MdDashboardCustomize size={20} />} text="Dashboard" active alert/>
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
            <Link to="/courses/tech">
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
            <Link to="/tutors/technology">
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
            <SidebarItem icon={<MdOutlineDatasetLinked size={20} />} text="IQ Link" alert/>
          </Link>
          <hr className='my-4'/>
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
        <div className='flex flex-col p-6 px-4 lg:flex-row'>
          <div className='w-full lg:w-[70%] px-2 lg:pl-8'>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <Card
                icon={FaBook}
                bgColor="border-[#9835ff] border bg-white"
                title={enrolledCoursesCount.toString()}
                description="Enrolled Courses"
                detailsLink="/courses/enrolled"
                IbgColor="bg-[#9835ff] text-white"
                BtnBgcolor="text-[#9835ff]"
              />
              <Card
                icon={FaChalkboardTeacher}
                bgColor="bg-white border"
                title={savedCoursesCount.toString()}
                description="Saved Courses"
                detailsLink="/courses/saved"
                IbgColor="bg-emerald-400 text-white"
                BtnBgcolor="text-gray-400"
              />
              <Card
                icon={FaCertificate}
                bgColor="bg-white border"
                title={certificatesCount.toString()}
                description="Certificates"
                detailsLink="/courses/enrolled/certificates"
                IbgColor="bg-fuchsia-500 text-white"
                BtnBgcolor="text-gray-400"
              />
            </div>
            <div className="mt-6">
              <ResponsiveTable />
            </div>
          </div>
          <div className='w-full px-2 mt-5 lg:mt-0 lg:px-0 lg:w-[30%]'>
            <ProfileContainer />
          </div>
        </div>
        <div className='w-full px-4 pl-6 pr-6 lg:pl-12 lg:pr-4'>
          <CourseList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;