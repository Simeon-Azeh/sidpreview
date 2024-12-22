import React, { useState, useEffect } from 'react';
import { getAuth } from "firebase/auth";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { motion, AnimatePresence } from "framer-motion";
import avatarImg from '/images/avatartwo.avif';
import awardone from '/images/awardone.png';
import awardtwo from '/images/awardtwo.png';
import awardthree from '/images/awardthree.png';
import awardfour from '/images/awardfour.png';
import { FaChalkboardTeacher, FaUsers, FaEye } from "react-icons/fa";
import { MdHelp, MdDelete } from "react-icons/md";

function ProfileDetails() {
  const [profileData, setProfileData] = useState({
    firstname: '',
    lastname: '',
    avatar: avatarImg,
    userType: 'Beta User',
    coursesInProgress: 0,
    coursesCompleted: 0,
  });

  const [badges, setBadges] = useState([]);
  const [modalData, setModalData] = useState({
    isVisible: false,
    title: '',
    content: '',
    action: null,
  });

  const closeModal = () => setModalData({ isVisible: false, title: '', content: '', action: null });

  useEffect(() => {
    const fetchProfileData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          setProfileData({
            firstname: data.firstname,
            lastname: data.lastname,
            avatar: data.avatar || avatarImg,
            userType: data.userType || 'Beta User',
            coursesInProgress: data.coursesInProgress || 0,
            coursesCompleted: data.coursesCompleted || 0,
          });

          // Fetch badges
          const badgesQuery = query(collection(db, "badges"), where("email", "==", user.email));
          const badgesSnapshot = await getDocs(badgesQuery);
          const badgesData = badgesSnapshot.docs.map(doc => doc.data());
          setBadges(badgesData);
        }
      }
    };

    fetchProfileData();
  }, []);

  const handleModal = (title, content, action) => {
    setModalData({
      isVisible: true,
      title,
      content,
      action,
    });
  };

  const handleBecomeTutor = () => {
    handleModal(
      "Become a Tutor",
      "Are you sure you want to apply to become a tutor? This action cannot be undone.",
      () => {
        console.log("Tutor application submitted!");
        closeModal();
      }
    );
  };

  const handleNeedSupport = () => {
    handleModal(
      "Need Support?",
      "Our support team will assist you with any issues or concerns. Submit your request now.",
      () => {
        console.log("Support request sent!");
        closeModal();
      }
    );
  };

  const handleInviteFriends = () => {
    handleModal(
      "Invite Friends",
      "Share your referral link or invite friends directly to join our platform.",
      () => {
        console.log("Friends invited!");
        closeModal();
      }
    );
  };

  const handleDeleteAccount = () => {
    handleModal(
      "Delete Account",
      "Are you sure you want to delete your account? This action is irreversible.",
      () => {
        console.log("Account deleted!");
        closeModal();
      }
    );
  };

  const handleChangeVisibility = () => {
    handleModal(
      "Change Visibility",
      "Toggle your profile visibility settings to control who can see your information.",
      () => {
        console.log("Visibility updated!");
        closeModal();
      }
    );
  };

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col items-center justify-between'>
        <div className='flex w-20 m-auto'>
          <img src={profileData.avatar} alt="Profile Avatar" className='object-contain w-full mb-2 rounded-full shadow-sm' />
        </div>
        <div>
          <h1 className='text-lg font-medium text-[#404660]'>{profileData.firstname} {profileData.lastname}</h1>
          <p className='text-sm text-center bg-[#9835ff] text-white p-1 rounded-md mt-2'>{profileData.userType}</p>
        </div>
        <div className='flex gap-4 my-6'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-[#9835ff] bg-slate-50 p-2 mb-2 w-10 h-10 rounded-full font-medium text-lg'>{profileData.coursesInProgress}</h1>
            <p className='text-[#404660] text-sm'>Courses in Progress</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-[#ff35f5] bg-slate-50 p-2 mb-2 w-10 h-10 rounded-full font-medium text-lg'>{profileData.coursesCompleted}</h1>
            <p className='text-[#404660] text-sm'>Courses Completed</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-start justify-start w-full p-4'>
        <h1 className='text-[16px] font-medium text-[#404660] my-4'>Badges</h1>
        <div className='flex items-center justify-between gap-3 md:gap-6'>
          {badges.length > 0 ? (
            badges.map((badge, index) => (
              <div key={index} className='w-16 bg-[#fff7cd] p-2 py-2.5 rounded-full h-16 cursor-pointer hover:scale-105 duration-300'>
                <img src={badge.image} alt={badge.name} className='object-contain w-full duration-300 cursor-pointer hover:scale-105' />
              </div>
            ))
          ) : (
            <p className='text-[#404660] text-sm'>No badges available</p>
          )}
        </div>
      </div>

      <div className='flex flex-col items-start justify-start w-full p-4'>
        <h1 className='text-[16px] font-medium text-[#404660] my-4'>Quick Actions</h1>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-1'>
          <div className='flex items-center gap-3' onClick={handleBecomeTutor}>
            <FaChalkboardTeacher size={30} className='text-[#9835ff] bg-slate-50 p-2 w-8 h-8 rounded' />
            <p className='text-[#404660] text-[16px] font-medium cursor-pointer border px-4 py-1 rounded hover:translate-y-[-3px] duration-300'>Become a Tutor</p>
          </div>
          <div className='flex items-center gap-2' onClick={handleNeedSupport}>
            <MdHelp size={30} className='w-8 h-8 p-2 rounded text-emerald-400 bg-slate-50' />
            <p className='text-[#404660] text-[16px] font-medium cursor-pointer border px-4 py-1 rounded hover:translate-y-[-3px] duration-300'>Need Support?</p>
          </div>
          <div className='flex items-center gap-2' onClick={handleInviteFriends}>
            <FaUsers size={30} className='w-8 h-8 p-2 text-blue-400 rounded bg-slate-50' />
            <p className='text-[#404660] text-[16px] font-medium cursor-pointer border px-4 py-1 rounded hover:translate-y-[-3px] duration-300'>Invite Friends</p>
          </div>
          <hr />
          <div className='flex items-center gap-2' onClick={handleDeleteAccount}>
            <MdDelete size={30} className='w-8 h-8 p-2 text-red-400 rounded bg-slate-50' />
            <p className='text-[#404660] text-[16px] font-medium cursor-pointer border px-4 py-1 rounded hover:translate-y-[-3px] duration-300'>Delete Account</p>
          </div>
          <div className='flex items-center gap-2' onClick={handleChangeVisibility}>
            <FaEye size={30} className='w-8 h-8 p-2 text-red-400 rounded bg-slate-50' />
            <p className='text-[#404660] text-[16px] font-medium cursor-pointer border px-4 py-1 rounded hover:translate-y-[-3px] duration-300'>Change Visibility</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalData.isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          >
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h2 className="mb-4 text-lg font-bold">{modalData.title}</h2>
              <p className="mb-4">{modalData.content}</p>
              <div className="flex justify-end gap-2">
                <button className="px-4 py-2 bg-gray-300 rounded" onClick={closeModal}>
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-[#9835ff] text-white rounded"
                  onClick={modalData.action}
                >
                  Confirm
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProfileDetails;