import React, { useState } from 'react';
import Sidebar, { SidebarItem, DropdownItem } from '../../components/Sidebar';
import { MdDashboardCustomize, MdPeople, MdBook, MdSettings, MdHelp } from 'react-icons/md';
import { RiCompassDiscoverFill, RiArchiveDrawerFill } from 'react-icons/ri';
import { IoMdChatbubbles } from 'react-icons/io';
import { MdOutlineDatasetLinked } from 'react-icons/md';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import { PiDownload } from "react-icons/pi";

function ResourceDocs() {
  document.title = "Resource Docs";
  const [loadPDF, setLoadPDF] = useState(false);

  const handleLoadPDF = () => {
    setLoadPDF(true);
  };

  return (
    <div className="flex h-screen font-poppins">
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
            <Link to="/courses/tech">
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

        <div className="w-full mx-auto lg:pl-16 p-5">
          <h2 className="text-2xl text-secondary mb-4 text-[#404660] font-poppins ">Mathematics PII</h2>
          <div className="flex items-center text-[#9835ff] mb-3">
            <MdBook className="mr-2" size={24} />
            <span className="font-medium">GCE 2020</span>
          </div>
          <div className="flex items-center text-[#9835ff] mb-5 ">
            <MdPeople className="mr-2" size={24} />
            <span className="font-medium">Advanced</span>
          </div>

          {loadPDF ? (
            <iframe
              src="https://drive.google.com/file/d/1s1JaLCIy3BCcNnYrwMJMmW-l56K8jDxg/preview"
              className="w-full h-[70vh] lg:h-[100vh] bg-white rounded-lg mb-5"
              title="Mathematics PII"
              frameBorder="0"
              allowFullScreen
            />
          ) : (
            <button
              className="bg-[#9835ff] text-[#fff] py-2 px-4 rounded-lg mb-5"
              onClick={handleLoadPDF}
            >
              Load PDF
            </button>
          )}

          <div className="flex lg:justify-end gap-2">
            <button className="bg-primary text-[#404660] flex items-center py-2 px-4 rounded-lg font-medium border border-[#404660] hover:translate-y-[-5px] duration-300">
              <PiDownload className="mr-2" size={24} />
              <span>Download</span>
            </button>
            <button className="bg-[#9835ff] text-white border border-primary flex items-center py-2 px-4 rounded-lg  hover:translate-y-[-5px] duration-300">
              <span>Check Solutions</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourceDocs;
