import React, { useState, useEffect } from 'react';
import { getAuth } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import avatarImg from '/images/avatartwo.avif';
import { TbCameraPlus } from "react-icons/tb";
import ButtonLoader from '../CustomLoader';
import { Modal, message } from 'antd';


const avatarLinks = [
  'https://img.freepik.com/premium-vector/student-avatar-illustration-user-profile-icon-youth-avatar_118339-4395.jpg',
  'https://img.freepik.com/premium-vector/logo-kid-gamer_573604-742.jpg',
  'https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4432.jpg',
  'https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Dog-512.png',
  'https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Panda-512.png',
  'https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Penguin-512.png',
];

const ProfileDetab = () => {
  const [profileData, setProfileData] = useState({
    firstname: '',
    lastname: '',
    avatar: avatarImg,
    userType: 'Beta User',
    coursesInProgress: 0,
    coursesCompleted: 0,
    email: '',
    phone: '',
    address: '',
    state: '',
    city: '',
    country: '',
    bio: ''
  });

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [avatarModalVisible, setAvatarModalVisible] = useState(false);
  const [bioWordCount, setBioWordCount] = useState(0);
  const countries = countryList().getData();

  useEffect(() => {
    const fetchProfileData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          setProfileData({
            firstname: data.firstname || '',
            lastname: data.lastname || '',
            avatar: data.avatar || avatarImg,
            userType: data.userType || 'Beta User',
            coursesInProgress: data.coursesInProgress || 0,
            coursesCompleted: data.coursesCompleted || 0,
            email: user.email,
            phone: data.phone || '',
            address: data.address || '',
            state: data.state || '',
            city: data.city || '',
            country: data.country || '',
            bio: data.bio || ''
          });
          setSelectedCountry(countries.find(country => country.label === data.country));
          setBioWordCount(data.bio ? data.bio.split(/\s+/).length : 0);
        }
      }
    };

    fetchProfileData();
  }, [countries]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'bio') {
      const wordCount = value.split(/\s+/).length;
      if (wordCount <= 50) {
        setProfileData(prevState => ({
          ...prevState,
          [name]: value
        }));
        setBioWordCount(wordCount);
      }
    } else {
      setProfileData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handlePhoneChange = (value) => {
    setProfileData(prevState => ({
      ...prevState,
      phone: value
    }));
  };

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
    setProfileData(prevState => ({
      ...prevState,
      country: value.label
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      await updateDoc(userDocRef, {
        firstname: profileData.firstname,
        lastname: profileData.lastname,
        phone: profileData.phone,
        address: profileData.address,
        state: profileData.state,
        city: profileData.city,
        country: profileData.country,
        bio: profileData.bio,
        avatar: profileData.avatar
      });
      setLoading(false);
      message.success("Profile updated successfully!");
    }
  };

  const handleAvatarClick = () => {
    setAvatarModalVisible(true);
  };

  const handleAvatarSelect = async (avatar) => {
    setProfileData(prevState => ({
      ...prevState,
      avatar
    }));
    setAvatarModalVisible(false);
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      await updateDoc(userDocRef, {
        avatar
      });
      message.success("Avatar updated successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='pb-4 border-b'>
        <div className='relative flex w-20 mx-auto'>
          <img src={profileData.avatar} alt="Avatar" className='object-contain w-full rounded-full shadow-sm' />
          <TbCameraPlus className='absolute bottom-1 right-0 bg-[#9835ff] text-white p-1 rounded-full w-7 h-7 cursor-pointer' onClick={handleAvatarClick} />
        </div>
      </div>
      <div>
        <div className='flex flex-col md:flex-row md:gap-4'>
          <div className='flex-1 my-4'>
            <label htmlFor="firstname" className='text-gray-400 text-[16px]'>Full Name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              className='w-full border p-1 px-4 text-[16px] text-[#404660] font-medium rounded-md focus:outline-none'
              value={profileData.firstname}
              onChange={handleInputChange}
            />
          </div>
          <div className='flex-1 my-4'>
            <label htmlFor="lastname" className='text-gray-400 text-[16px]'>Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              className='w-full border p-1 px-4 text-[16px] text-[#404660] font-medium rounded-md focus:outline-none'
              value={profileData.lastname}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:gap-4'>
          <div className='flex-1 my-4'>
            <label htmlFor="email" className='text-gray-400 text-[16px]'>Email</label>
            <input
              type="text"
              id="email"
              name="email"
              className='w-full border p-1 px-4 text-[16px] text-[#404660] rounded-md focus:outline-none'
              value={profileData.email}
              readOnly
            />
          </div>
          <div className='flex-1 my-4'>
            <label htmlFor="phone" className='text-gray-400 text-[16px]'>Phone</label>
            <PhoneInput
              country={'us'}
              value={profileData.phone}
              onChange={handlePhoneChange}
              inputClass='w-full border p-1 px-4 text-[16px] text-[#404660] font-medium rounded-md focus:outline-none'
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:gap-4'>
          <div className='flex-1 my-4'>
            <label htmlFor="address" className='text-gray-400 text-[16px]'>Address</label>
            <input
              type="text"
              id="address"
              name="address"
              className='w-full border p-1 px-4 text-[16px] text-[#404660] rounded-md focus:outline-none'
              value={profileData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className='flex-1 my-4'>
            <label htmlFor="state" className='text-gray-400 text-[16px]'>State | Province</label>
            <input
              type="text"
              id="state"
              name="state"
              className='w-full border p-1 px-4 text-[16px] text-[#404660] font-medium rounded-md focus:outline-none'
              value={profileData.state}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:gap-4'>
          <div className='flex-1'>
            <label htmlFor="city" className='text-gray-400 text-[16px]'>City</label>
            <input
              type="text"
              id="city"
              name="city"
              className='w-full border p-1 px-4 text-[16px] text-[#404660] rounded-md focus:outline-none'
              value={profileData.city}
              onChange={handleInputChange}
            />
          </div>
          <div className='flex-1'>
            <label htmlFor="country" className='text-gray-400 text-[16px]'>Country</label>
            <Select
              options={countries}
              value={selectedCountry}
              onChange={handleCountryChange}
              className='w-full border p-1 px-8 text-[16px] text-[#404660] rounded-md focus:outline-none'
            />
          </div>
        </div>
        <div>
          <label htmlFor="bio" className='text-gray-400 text-[16px]'>Bio</label>
          <textarea
            id="bio"
            name="bio"
            className='w-full border p-1 px-4 text-[16px] text-[#404660] rounded-md focus:outline-none'
            value={profileData.bio}
            onChange={handleInputChange}
          />
          <div className='text-right text-gray-400 text-[14px]'>{bioWordCount}/50 words</div>
        </div>
      </div>
      <div className='flex items-center justify-start gap-4'>
        <button type="submit" className='bg-[#9835ff] text-white py-2 px-3 rounded-md shadow-md shadow-[#dfd3ec] hover:translate-y-[-5px] duration-300'>
          {loading ? <ButtonLoader /> : "Update Profile"}
        </button>
        <button type="button" className='border text-[#9835ff] py-2 px-3 rounded-md hover:translate-y-[-5px] duration-300'>Cancel</button>
      </div>

      <Modal
        title="Select an Avatar"
        visible={avatarModalVisible}
        onCancel={() => setAvatarModalVisible(false)}
        footer={null}
      >
        <div className="grid grid-cols-3 gap-4">
          {avatarLinks.map((link, index) => (
            <img
              key={index}
              src={link}
              alt={`Avatar ${index + 1}`}
              className="w-full h-auto rounded-full cursor-pointer"
              onClick={() => handleAvatarSelect(link)}
            />
          ))}
        </div>
      </Modal>
    </form>
  );
}

export default ProfileDetab;