import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar, { SidebarItem, DropdownItem } from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { MdDashboardCustomize, MdPeople, MdBook, MdSettings, MdHelp, MdOutlineDatasetLinked } from 'react-icons/md';
import { RiCompassDiscoverFill, RiArchiveDrawerFill } from "react-icons/ri";
import { IoMdChatbubbles } from "react-icons/io";
import TeamsSection from '../components/Messages/TeamsSection';
import ChatCard from '../components/Messages/ChatCard';
import MessagingSection from '../components/Messages/MessagingSection';
import SharedPhotos from '../components/Messages/SharedPhotos';
import SharedFiles from '../components/Messages/SharedFiles';
import MessagingImg from '../../public/images/Messaging.svg';
import { CiLock } from "react-icons/ci";

const chatData = [
  {
    profilePicture: 'https://img.freepik.com/free-photo/adult-holding-digital-tablet-typing-touch-screen-online-remote-work-business-man-using-modern-device-working-from-home-corporate-project-entrepreneur-with-technology_482257-35650.jpg?t=st=1722004371~exp=1722007971~hmac=40b0fe4d88558f1f8850cf0c71354ac996c9f4bce4bf0c5405dc15c9be525206&w=360',
    onlineStatus: true,
    name: 'Alain Michael',
    newMessages: 0,
    messages: [
      { text: 'Hey, how’s your day going?', time: '9:00 AM', isMine: false },
      { text: 'Just got started, feeling productive!', time: '9:05 AM', isMine: true },
      { text: 'Great to hear! Any plans for the weekend?', time: '9:10 AM', isMine: false },
      { text: 'Not much, just relaxing. What about you?', time: '9:15 AM', isMine: true },
      { text: 'Let me know?', time: '9:15 AM', isMine: true }
    ]
  },
  {
    profilePicture: 'https://img.freepik.com/free-photo/african-woman-successful-entrepreneur-wearing-glasses-face-portrait_53876-148050.jpg?t=st=1722008330~exp=1722011930~hmac=b8b34d51a927d9a39231e64526e5a1c0d7aa17f76aa7b095f8e594b98ec48bab&w=740',
    onlineStatus: false,
    name: 'Fonui',
    newMessages: 0,
    messages: [
      { text: 'Can we reschedule our meeting?', time: '11:15 AM', isMine: false },
      { text: 'Sure, what time works for you?', time: '11:20 AM', isMine: true },
      { text: 'How about 3 PM tomorrow?', time: '11:25 AM', isMine: false },
      { text: '3 PM works for me. See you then!', time: '11:30 AM', isMine: true }
    ]
  },
  {
    profilePicture: 'https://img.freepik.com/premium-vector/businesswoman-avatar-cartoon-character-profile_18591-50579.jpg?w=740',
    onlineStatus: false,
    name: 'Faith Ama',
    newMessages: 1,
    messages: [
      { text: 'Just checking in, any updates on the project?', time: '1:30 PM', isMine: false },
      { text: 'I’m finalizing the report. Should be ready by end of day.', time: '1:35 PM', isMine: true },
      { text: 'Perfect, thanks for the update!', time: '1:40 PM', isMine: false },
      { text: 'No problem! Let me know if you need anything else.', time: '1:45 PM', isMine: false }
    ]
  },
  {
    profilePicture: 'https://img.freepik.com/free-photo/portrait-man-cartoon-style_23-2151133887.jpg?t=st=1722008262~exp=1722011862~hmac=4558b97a15e5eafad03f9dce6d6709e89351160ed3e4e09adfbf29012b30918d&w=826',
    onlineStatus: false,
    name: 'Jesse2',
    newMessages: 0,
    messages: [
      { text: 'Received the files. Will review them soon.', time: '3:00 PM', isMine: false },
      { text: 'Great, let me know if you need anything.', time: '3:05 PM', isMine: true },
      { text: 'Will do. Thanks!', time: '3:10 PM', isMine: false },
      { text: 'You’re welcome! I’ll be available if you need help.', time: '3:15 PM', isMine: true }
    ]
  },
  {
    profilePicture: 'https://img.freepik.com/free-vector/cloud-robotics-abstract-concept-illustration_335657-3801.jpg?t=st=1722008723~exp=1722012323~hmac=62ad5dfd2a0532064e38ef17d50462aff5739d944b7d63d869aa058287a4770f&w=740',
    onlineStatus: true,
    name: 'Sidec Bot',
    newMessages: 2,
    messages: [
      { text: 'Reminder: Your subscription expires tomorrow.', time: '4:00 PM', isMine: false },
      { text: 'Thanks for the heads-up. I’ll renew it now.', time: '4:05 PM', isMine: true },
      { text: 'If you need assistance, just let me know!', time: '4:10 PM', isMine: false },
      { text: 'Will do! Thanks for the support.', time: '4:15 PM', isMine: true }
    ]
  },
  {
    profilePicture: 'https://img.freepik.com/premium-photo/flat-no-picture-avatar-profile-picture_941097-35012.jpg?w=740',
    onlineStatus: false,
    name: 'Arrey Fred',
    newMessages: 0,
    messages: [
      { text: 'Are you free to discuss the proposal?', time: '5:00 PM', isMine: false },
      { text: 'Yes, I’m available now. Let’s chat.', time: '5:10 PM', isMine: true },
      { text: 'Great, I’ll call you shortly.', time: '5:15 PM', isMine: false },
      { text: 'Looking forward to it. Talk soon!', time: '5:20 PM', isMine: true }
    ]
  },
  {
    profilePicture: 'https://img.freepik.com/free-photo/young-businessman-wearing-suit-jacket-office_1150-13942.jpg?w=740',
    onlineStatus: true,
    name: 'Lucas Morris',
    newMessages: 5,
    messages: [
      { text: 'Can you send over the draft?', time: '6:00 PM', isMine: false },
      { text: 'I’ve just sent it to your email.', time: '6:05 PM', isMine: true },
      { text: 'Received, thanks! Will review it tonight.', time: '6:10 PM', isMine: false },
      { text: 'Let me know if you need any revisions.', time: '6:15 PM', isMine: true }
    ]
  },
  {
    profilePicture: 'https://img.freepik.com/free-photo/business-woman-with-suit-jacket-holding-coffee-cup-office_1150-13424.jpg?w=740',
    onlineStatus: true,
    name: 'Sophia Lee',
    newMessages: 4,
    messages: [
      { text: 'Do you have the meeting agenda?', time: '7:00 PM', isMine: false },
      { text: 'Yes, it’s attached to the invite.', time: '7:05 PM', isMine: true },
      { text: 'Got it. I’ll see you in the meeting.', time: '7:10 PM', isMine: false },
      { text: 'Looking forward to it. Thanks!', time: '7:15 PM', isMine: true }
    ]
  }
];
const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatCardClick = (chat) => {
    setSelectedChat(chat);
  };

  const handleBackClick = () => {
    setSelectedChat(null);
  };

  return (
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
            <SidebarItem icon={<IoMdChatbubbles size={20} />} text="Messages" alert active />
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
        <div className="w-full mx-auto py-2 md:pl-16 font-poppins md:p-4 px-6">
          <div className="flex flex-col md:flex-row gap-2 h-screen">
            <div className={`md:bg-white  p-4 border rounded w-full md:w-1/3 ${selectedChat ? 'hidden md:block' : 'block'}`}>
              <div className="mb-2">
                <TeamsSection />
              </div>
              <div className="overflow-y-auto">
                <h1 className="rounded font-medium bg-[#f9f9f9] p-2 text-[#404660]">My Chats</h1>
                <div className="flex flex-col gap-1 mt-4 md:max-h-96 overflow-y-auto">
                  {chatData.map((chat, index) => {
                    const lastMessage = chat.messages[chat.messages.length - 1];
                    return (
                      <ChatCard
                        key={index}
                        profilePicture={chat.profilePicture}
                        onlineStatus={chat.onlineStatus}
                        name={chat.name}
                        messagePreview={lastMessage.text}
                        time={lastMessage.time}
                        newMessages={chat.newMessages}
                        onClick={() => handleChatCardClick(chat)}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className={`h-screen flex-1  md:bg-white ${selectedChat ? 'block' : 'hidden md:block'}`}>
              {selectedChat ? (
                <MessagingSection selectedChat={selectedChat} onBack={handleBackClick} />
              ) : (
                <div className="text-center p-4 flex flex-col justify-between h-full">
  <div className='w-full mx-auto '>
    <img src={MessagingImg} alt="" className='w-full object-cover' />
  </div>
  <h2 className="text-xl text-gray-500 ">
    <span className='text-[#9835ff] font-medium'>Simeon,</span> Please select a chat to start messaging.
  </h2>
  <div className='mt-auto'>
    <p className='text-gray-500 flex gap-1'>
      <CiLock size={30}/>Your messages are secured & private, but keep it respectful.
    </p>
  </div>
</div>

              )}
            </div>
            <div className="bg-white p-4 border rounded w-full md:w-1/4 hidden md:block">
              <SharedPhotos />
              <SharedFiles />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;