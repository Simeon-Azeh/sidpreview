import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar, { SidebarItem, DropdownItem } from '../components/Sidebar';
import { MdDashboardCustomize, MdPeople, MdBook, MdSettings, MdHelp, MdMessage, MdOutlineDatasetLinked } from 'react-icons/md';
import { RiCompassDiscoverFill, RiArchiveDrawerFill } from "react-icons/ri";
import { IoMdChatbubbles } from "react-icons/io";
import Navbar from '../components/Navbar';
import ProfileDetails from '../components/settings/ProfileDetails';
import Payment from '../components/settings/Payment';
import ProfileDetab from '../components/settings/ProfileDetab';
import Preferences from '../components/settings/Preferences';
import Security from '../components/settings/Security';

const tabs = [
 { name: 'Profile Details', component: <ProfileDetab /> },
  { name: 'Preferences', component: <Preferences/> },
  { name: 'Security', component: <Security /> },
  { name: 'Payment', component: <Payment /> },
];

function Settings() {
  const [activeTab, setActiveTab] = useState(0);
  document.title="Settings";
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
            <SidebarItem icon={<MdSettings size={20} />} text="Settings" alert active />
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
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-2/5 bg-white p-4 border rounded-md">
              <ProfileDetails />
            </div>
            <div className="flex-1 bg-white p-4 border rounded-md">
                <h1 className='text-lg font-medium text-[#404660] mb-4'>Profile Settings</h1>
              <div className="flex flex-col md:flex-row mb-4">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    className={`py-2 px-4 mb-4 text-sm font-medium ${index === activeTab ? 'text-[#9835ff] border-b-2 border-[#9835ff] border-solid' : 'text-gray-500 '} rounded-t-lg`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
              <div className="">
                {tabs[activeTab].component}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
