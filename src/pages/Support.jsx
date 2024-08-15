import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar, { SidebarItem, DropdownItem } from '../components/Sidebar';
import Navbar from '../components/Navbar';
import WelcomeMessage from '../components/support/WelcomeMessage';
import SupportCard from '../components/support/SupportCard';
import { MdDashboardCustomize, MdPeople, MdBook, MdSettings, MdHelp, MdMessage, MdOutlineDatasetLinked } from 'react-icons/md';
import { RiCompassDiscoverFill, RiArchiveDrawerFill } from "react-icons/ri";
import { IoMdChatbubbles } from "react-icons/io";
import { FaHourglassStart, FaCreditCard, FaFacebook  } from "react-icons/fa";
import { MdManageAccounts, MdPrivacyTip, MdOutlineSupportAgent } from "react-icons/md";
import { GiTechnoHeart } from "react-icons/gi";
import { CgCommunity } from "react-icons/cg";
import { RiWhatsappFill, RiInstagramFill } from "react-icons/ri";
const Support = () => (
  <div className="flex h-screen">
    <div className="z-40">
      <Sidebar>
        <Link to="/discover">
          <SidebarItem icon={<RiCompassDiscoverFill size={20} />} text="Discover" />
        </Link>
        <Link to="/dashboard">
          <SidebarItem icon={<MdDashboardCustomize size={20} />} text="Dashboard" alert />
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
          <Link to="/courses/technology">
            <DropdownItem text="Technology" />
          </Link>
          <Link to="/courses/specialization">
            <DropdownItem text="Specialization" />
          </Link>
        </SidebarItem>
        <SidebarItem icon={<RiArchiveDrawerFill size={20} />} text="Resources" >
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
          <SidebarItem icon={<MdHelp size={20} />} text="Support" active/>
        </Link>
      </Sidebar>
    </div>
    <div className="flex-1 overflow-y-auto">
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <div className="w-full mx-auto md:pl-16 font-poppins p-4 px-6">
        <div>
        <WelcomeMessage />
        </div>
        <div>
            <h1 className='text-xl font-medium text-[#404660]'>Need help? We've got you covered!</h1>
            <p className='text-gray-500'>Perhaps you can find answers in our collection</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <SupportCard icon={<FaHourglassStart className="text-[#9835ff]" />} title="Getting Started" description="Learn how to get started with our platform." />
          <SupportCard icon={<MdManageAccounts  className="text-green-500" />} title="Account Settings" description="Manage your account settings and preferences." />
          <SupportCard icon={<FaCreditCard  className="text-yellow-400" />} title="Billing FAQ" description="Get answers to your billing questions." />
          <SupportCard icon={<GiTechnoHeart className="text-red-400" />} title="Technical Support" description="Find solutions to technical issues." />
          <SupportCard icon={<MdPrivacyTip className="text-purple-500" />} title="Privacy Policy" description="Read about our privacy policies." />
          <SupportCard icon={<MdOutlineDatasetLinked className="text-orange-500" />} title="User Guide" description="Access our comprehensive user guide." />
          <SupportCard icon={<CgCommunity className="text-teal-500" />} title="Community Forum" description="Join the community and get help from other users." />
          <SupportCard icon={<MdOutlineSupportAgent className="text-pink-500" />} title="Live Chat" description="Reach out to our support team." />
        </div>
        </div>
       <div className='flex justify-end mt-4 items-center gap-4'>
        <p className='text-gray-500 font-medium'>Other ways to find help</p>
        <div className='flex gap-4'>
            <a href="#" className='text-blue-500'><FaFacebook size={20}/></a>
            <a href="#" className='text-green-500'><RiWhatsappFill size={23} /></a>
            <a href="#" className='text-pink-500'><RiInstagramFill size={20} /></a>
        </div>
       </div>
      </div>
    </div>
  </div>
);

export default Support;
