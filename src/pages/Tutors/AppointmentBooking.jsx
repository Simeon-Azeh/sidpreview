import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaVideo, FaEnvelope } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Sidebar, { SidebarItem, DropdownItem } from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import {
  MdDashboardCustomize,
  MdPeople,
  MdBook,
  MdSettings,
  MdHelp,
  MdOutlineDatasetLinked,
} from 'react-icons/md';
import { RiCompassDiscoverFill, RiArchiveDrawerFill } from 'react-icons/ri';
import { IoMdChatbubbles } from 'react-icons/io';
import { HiOutlineLocationMarker } from "react-icons/hi";
const AppointmentBooking = ({ tutor }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [bookingType, setBookingType] = useState('online');
  const [bookingLevel, setBookingLevel] = useState('OLEVEL');
  const [selectedHours, setSelectedHours] = useState('1 hour');
  const [selectedTime, setSelectedTime] = useState(null);

  const hourlyRate = 20; // Example hourly rate in XAF
  const numberOfDays = (endDate && startDate) ? Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) : 0;
  const dailyHours = parseInt(selectedHours, 10);
  const totalPrice = dailyHours * hourlyRate * numberOfDays;

  const timeSlots = [
    { time: '09:00 AM', booked: false },
    { time: '10:00 AM', booked: false },
    { time: '11:00 AM', booked: true },
    { time: '12:00 PM', booked: false },
    { time: '01:00 PM', booked: false },
    { time: '02:00 PM', booked: true },
    { time: '03:00 PM', booked: false },
    { time: '04:00 PM', booked: false },
  ];

  const HoursDaily = [
    { hour: '1 hour', booked: false },
    { hour: '2 hours', booked: false },
    { hour: '3 hours', booked: true },
    { hour: '4 hours', booked: false },
    { hour: '5 hours', booked: false },
    { hour: '6 hours', booked: true },
    { hour: '7 hours', booked: false },
    { hour: '8 hours', booked: false },
  ];

  useEffect(() => {
    // Update the total price whenever the selectedHours or date range changes
    setSelectedHours((prev) => prev || '1 hour');
  }, [selectedHours, startDate, endDate]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
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
          <SidebarItem icon={<MdPeople size={20} />} text="Tutors" active>
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
          <hr className="my-4" />
          <Link to="/settings">
            <SidebarItem icon={<MdSettings size={20} />} text="Settings" alert />
          </Link>
          <Link to="/support">
            <SidebarItem icon={<MdHelp size={20} />} text="Support" />
          </Link>
        </Sidebar>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        <div className="w-full mx-auto lg:pl-16 font-poppins p-4 px-6">
          <div className="p-6">
            <div className="flex flex-col lg:flex-row">
              {/* Tutor Info Section */}
              <div className="lg:w-1/3">
                <div
                  className="relative h-60 bg-cover bg-center rounded-lg overflow-hidden mb-4"
                  style={{
                    backgroundImage:
                      'url(https://img.freepik.com/free-photo/woman-teaching-classroom_23-2151696395.jpg?t=st=1723891390~exp=1723894990~hmac=2aedb5236320f9f7a34ca9673a78b8680d6cffbbea86a3625101723c0f777598&w=740)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
                </div>
                <h2 className="text-2xl font-medium text-[#404660] mb-2">Tutor Name</h2>
                <p className="text-gray-500 mb-4">Some description about this tutor, her bio and some basic info</p>
                <p className="text-[#9835ff] font-medium mb-4">Chemistry, Biology</p>
                <div className="flex space-x-4 text-[#9835ff] mb-4">
                <FiPhoneCall size={20} className='cursor-pointer hover:scale-110 duration-300' />
                <MdOutlineEmail size={20} className='cursor-pointer hover:scale-110 duration-300' />
                </div>
                <div className='flex space-x-1 items-center'>
                    <HiOutlineLocationMarker size={20} className='text-gray-500' />
                    <p className='text-gray-500'>123 Anywhere st, Buea, Cameroon</p>
                </div>
              </div>

              {/* Booking Form Section */}
              <div className="lg:w-2/3 lg:pl-8">
                {/* Booking Type */}
                <div className="mb-6">
                  <h3 className="text-base font-medium text-[#404660] mb-4">Select Booking Type</h3>
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div
                      className={`cursor-pointer p-4 border rounded-lg ${
                        bookingType === 'online'
                          ? 'border-[#9835ff] border border-solid bg-[#9835ff]/10'
                          : 'border-gray-300 border-solid'
                      }`}
                      onClick={() => setBookingType('online')}
                    >
                      <h4 className="font-medium text-[#404660] mb-2">Online</h4>
                      <p className="text-sm text-gray-500">Book an online session via video call.</p>
                    </div>
                    <div
                      className={`cursor-pointer p-4 border rounded-lg ${
                        bookingType === 'in-person'
                          ? 'border-[#9835ff] border border-solid bg-[#9835ff]/10'
                          : 'border-gray-300 border-solid'
                      }`}
                      onClick={() => setBookingType('in-person')}
                    >
                      <h4 className="font-medium text-[#404660] mb-2">In-Person</h4>
                      <p className="text-sm text-gray-500">Book a session at the tutor's location.</p>
                    </div>
                  </div>
                </div>

                {/* Select Level */}

                <div className="mb-6">
                  <h3 className="text-base font-medium text-[#404660] mb-4">Select Level</h3>
                  <div className="flex space-x-4">
                    <div
                      className={`cursor-pointer px-4 pt-2 items-center justify-center flex border rounded-lg ${
                        bookingLevel === 'OLEVEL'
                          ? 'border-[#9835ff] border border-solid bg-[#9835ff]/10'
                          : 'border-gray-300 border-solid'
                      }`}
                      onClick={() => setBookingLevel('OLEVEL')}
                    >
                      <h4 className="font-medium text-[#404660] mb-2">Ordinary Level</h4>
                
                    </div>
                    <div
                      className={`cursor-pointer px-4 pt-2 items-center justify-center flex border rounded-lg ${
                        bookingLevel === 'ALEVEL'
                          ? 'border-[#9835ff] border border-solid bg-[#9835ff]/10'
                          : 'border-gray-300 border-solid'
                      }`}
                      onClick={() => setBookingLevel('ALEVEL')}
                    >
                      <h4 className="font-medium text-[#404660] mb-2">Advanced Level</h4>
                    
                    </div>
                  </div>
                </div>

                             {/* Date Range Picker */}
                             <div className="mb-6">
                  <h3 className="text-base font-medium text-[#404660] mb-4">Select Date Range</h3>
                  <div className="flex space-x-4">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      dateFormat="dd/MM/yyyy"
                      className="w-full p-3 border rounded-lg outline-none font-poppins text-[#404660] font-medium text-sm"
                      placeholderText="Start Date"
                    />
                    <div className='flex items-center'><p className='text-[#9835ff]/60 text-3xl'><IoArrowForwardCircleSharp /></p></div>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                      dateFormat="dd/MM/yyyy"
                      className="w-full p-3 border rounded-lg outline-none font-poppins text-[#404660] font-medium text-sm"
                      placeholderText="End Date"
                    />
                  </div>
                </div>

                {/* Daily Hours */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-[#404660] mb-4">Select Hours per day</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {HoursDaily.map((hours, index) => (
                      <div
                        key={index}
                        className={`cursor-pointer p-4 border rounded-lg text-center ${
                          hours.booked
                            ? 'border-gray-300 border-solid text-gray-400'
                            : selectedHours === hours.hour
                            ? 'border-[#9835ff] border border-solid bg-[#9835ff]/10'
                            : 'border-gray-300 border-solid'
                        }`}
                        onClick={() => !hours.booked && setSelectedHours(hours.hour)}
                      >
                        <p className="font-medium">{hours.hour}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Time Slots */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-[#404660] mb-4">Select Time Slot</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {timeSlots.map((slot, index) => (
                      <div
                        key={index}
                        className={`cursor-pointer p-4 border rounded-lg text-center ${
                          slot.booked
                            ? 'border-gray-300 border-solid text-gray-400'
                            : selectedTime === slot.time
                            ? 'border-[#9835ff] border border-solid bg-[#9835ff]/10'
                            : 'border-gray-300 border-solid'
                        }`}
                        onClick={() => !slot.booked && setSelectedTime(slot.time)}
                      >
                        <p className="font-medium">{slot.time}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and Confirm Button */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-[#404660] mb-4">Price</h3>
                  <p className="text-xl font-semibold text-[#9835ff] mb-4">
                    XAF {totalPrice.toLocaleString()}
                  </p>
                  <button
                    className="w-full p-4 bg-[#9835ff] text-white font-medium rounded-lg hover:bg-[#7b2fc4] transition"
                    onClick={() => alert('Booking Confirmed!')}
                  >
                    Confirm Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;

