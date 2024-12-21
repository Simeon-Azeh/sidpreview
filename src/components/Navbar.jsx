import React, { useEffect, useState } from "react";
import FlagEN from "/images/en-flag.png"; // Replace with your actual flag image path
import FlagES from "/images/fr-flag.png"; // Replace with your actual flag image path
import { FiSearch } from "react-icons/fi";
import { AiOutlineBell } from "react-icons/ai";
import { IoLanguageOutline } from "react-icons/io5";
import { MdWavingHand } from "react-icons/md";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

function Navbar() {
  const [greeting, setGreeting] = useState("");
  const [firstName, setFirstName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting("Good morning");
    } else if (currentHour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setFirstName(userDoc.data().firstname);
          setAvatar(userDoc.data().avatar);
        }
      }
    };

    fetchUserData();
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setLanguageDropdownOpen(false); // Close language dropdown when profile is opened
  };

  const toggleNotification = () => {
    setNotificationOpen(!notificationOpen);
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  return (
    <div className="sticky top-0 flex items-center justify-center px-10 py-4 bg-white md:flex-row md:justify-between md:px-14 font-poppins">
      <h1 className="items-center hidden gap-2 text-lg font-semibold text-gray-500 lg:flex">
        {greeting}, <span className="text-[#9835ff] text-[22px]">{firstName}!</span>
        <MdWavingHand className="wave-icon" />
      </h1>
      <div className="flex items-center gap-4 ml-auto">
        <div className="relative w-[80%] md:w-[400px] lg:w-[300px] ml-6 md:ml-0 ">
          <input
            type="text"
            placeholder="Find Courses..." className="w-full p-2 pl-8 text-sm text-gray-400 bg-white border rounded-lg outline-none"
          />
          <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
        </div>
        <div className="relative">
          <button
            onClick={toggleNotification} className="relative p-1 text-xl text-gray-400 bg-white rounded-md"
          >
            <AiOutlineBell size={30} className="font-normal" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full"></span>
          </button>
          {notificationOpen && (
            <div className="absolute right-0 z-10 w-48 mt-2 bg-white border rounded-lg shadow-md">
              <div className="p-2 px-4 text-gray-600 cursor-pointer"
                onClick={() => alert("Notification clicked!")}
              >
                Email not verified
                <span className="absolute w-2 h-2 bg-yellow-400 rounded-full top-4 right-4"></span>
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <div className="w-12">
            <img
              src={avatar}
              alt="Avatar" className="object-contain w-full border border-white rounded-full shadow-md cursor-pointer"
              onClick={toggleDropdown}
            />
          </div>
          {dropdownOpen && (
            <div className="absolute right-0 z-10 p-2 mt-2 bg-white border rounded-lg shadow-lg w-60">
              <p className="font-medium text-gray-600">Student<span className="text-[#9835ff] border px-2 rounded ml-2">Beta user</span></p>
              <button className="w-full text-left text-[#9835ff] p-2 hover:bg-gray-100">
                Switch to tutor
              </button>
              <hr />
              <button className="w-full text-[#9835ff] p-2 hover:bg-gray-100 flex items-center gap-2" onClick={toggleLanguageDropdown}>
                <IoLanguageOutline /> Change Language
              </button>
              {languageDropdownOpen && (
                <div className="mt-2">
                  <button className="flex items-center w-full gap-2 p-2 text-gray-600 hover:bg-gray-100">
                    <img src={FlagEN} alt="English" className="w-5 h-5" /> English
                  </button>
                  <button className="flex items-center w-full gap-2 p-2 text-gray-600 hover:bg-gray-100">
                    <img src={FlagES} alt="Spanish" className="w-5 h-5" /> French
                  </button>
                </div>
              )}
            </div>
          )}
          <span className="absolute w-2 h-2 bg-green-500 border border-white border-solid rounded-full top-8 right-1" title="Online"></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;