import React, { useState, useEffect } from 'react';
import { DatePicker, message } from 'antd';
import moment from 'moment';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, sendEmailVerification } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import ButtonLoader from '../CustomLoader';
import { MailCheck, SendHorizontal, School, GraduationCap, BookOpen } from 'lucide-react';

const avatarLinks = [
  'https://img.freepik.com/premium-vector/student-avatar-illustration-user-profile-icon-youth-avatar_118339-4395.jpg',
  'https://img.freepik.com/premium-vector/logo-kid-gamer_573604-742.jpg',
  'https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4432.jpg',
  'https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Dog-512.png',
  'https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Panda-512.png',
  'https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Penguin-512.png',
];

const schoolLevels = [
  { label: 'High School', icon: <School size={40} /> },
  { label: 'Secondary', icon: <BookOpen size={40} /> },
  { label: 'University', icon: <GraduationCap size={40} /> },
];

const StepContent = ({
  current,
  formData,
  handleChange,
  handleDateChange,
  handleAvatarSelect,
  handleSchoolLevelSelect,
}) => {
  const [resendTimer, setResendTimer] = useState(0);
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [checkLoading, setCheckLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserEmail = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setUserEmail(userDoc.data().email);
        }
      }
    };

    fetchUserEmail();
  }, [auth]);

  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendTimer]);

  const handleResendVerification = async () => {
    if (resendTimer > 0) return;

    setLoading(true);
    try {
      const user = auth.currentUser;
      if (user) {
        const actionCodeSettings = {
          url: `https://${auth.app.options.projectId}.firebaseapp.com/auth/verify-email?uid=${user.uid}`,
          handleCodeInApp: true,
        };
        await sendEmailVerification(user, actionCodeSettings);
        message.success('Verification email sent successfully.');
        setResendTimer(60); // Set timer to 60 seconds
      }
    } catch (error) {
      console.error('Error sending verification email:', error);
      message.error('Failed to send verification email.');
    } finally {
      setLoading(false);
    }
  };

  const checkEmailVerification = async () => {
    setCheckLoading(true);
    try {
      const user = auth.currentUser;
      if (user) {
        await user.reload();
        if (user.emailVerified) {
          setEmailVerified(true);
          await updateDoc(doc(db, 'users', user.uid), {
            emailVerified: true,
            avatar: formData.avatar,
            educationalLevel: formData.educationalLevel,
          });
          message.success('Email verified successfully.');
        } else {
          message.error('Email not verified yet. Please check your email.');
        }
      }
    } catch (error) {
      console.error('Error checking email verification:', error);
    } finally {
      setCheckLoading(false);
    }
  };

  const handleSubmit = async () => {
    setSubmitLoading(true);
    try {
      const user = auth.currentUser;
      if (user) {
        await updateDoc(doc(db, 'users', user.uid), {
          firstname: formData.firstname,
          lastname: formData.lastname,
          country: formData.country,
          city: formData.city,
          dateOfBirth: formData.dateOfBirth ? formData.dateOfBirth.toDate() : null,
          avatar: formData.avatar,
          educationalLevel: formData.educationalLevel,
          onboardingCompleted: true,
        });
        message.success('Information updated successfully.');
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error updating information:', error);
      message.error('Failed to update information.');
    } finally {
      setSubmitLoading(false);
    }
  };
  switch (current) {
    case 0:
      return (
        <div className="font-poppins">
          <form className="flex flex-col space-y-4">
            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="flex flex-col w-full">
                <label className="block text-[#404660] font-medium text-sm my-4 md:my-0">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="w-full font-normal text-[16px] p-2 border border-gray-300 rounded mt-1 outline-none text-gray-500"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="block text-[#404660] font-medium text-sm my-4 md:my-0">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="w-full font-normal text-[16px] p-2 border border-gray-300 rounded mt-1 outline-none text-gray-500"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="flex flex-col w-full">
                <label className="block text-[#404660] font-medium text-sm my-4 md:my-0">Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full font-normal text-[16px] p-2 border border-gray-300 rounded mt-1 outline-none text-gray-500"
                >
                  <option value="">Select a country</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Rwanda">Rwanda</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label className="block text-[#404660] font-medium text-sm my-4 md:my-0">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full font-normal text-[16px] p-2 border border-gray-300 rounded mt-1 outline-none text-gray-500"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="block text-[#404660] font-medium text-sm my-4 md:my-0">Date of Birth</label>
                <DatePicker
                  onChange={handleDateChange}
                  className="w-full font-normal text-[16px] p-2 border border-gray-300 rounded mt-1 outline-none text-gray-500"
                  format="YYYY-MM-DD"
                  value={formData.dateOfBirth ? moment(formData.dateOfBirth) : null}
                />
              </div>
            </div>
          </form>
        </div>
      );
    case 1:
      return (
        <div className='font-poppins'>
         <p className="mb-4 text-[#404660]">
  Welcome aboard, <span className="font-medium text-[#9835ff]">{formData.firstname}</span>! We're thrilled to have you join our learning community. 🎉 To get started, let’s set up your account:
</p>
<p className="mb-4 text-[#404660]">
  Simply click the button below, and we’ll send a quick verification link to your email: <span className="text-[#9835ff] font-medium">{userEmail}</span>. 📩
</p>

          <button
            className={`py-2 px-4 rounded mt-4 flex items-center justify-center gap-2 ${resendTimer > 0 || loading ? 'bg-gray-400 text-slate-200 cursor-not-allowed' : 'bg-[#9835ff] text-white'}`}
            onClick={handleResendVerification}
            disabled={resendTimer > 0 || loading}
          >
            {loading ? <ButtonLoader /> : resendTimer > 0 ? `Resend in ${resendTimer}s` : 'Send Verification Link'}
            <SendHorizontal size={20} />
          </button>
          <div className="mt-4">
            <button
              className="flex items-center justify-center gap-2 px-4 py-2 text-white transition duration-300 bg-[#7e2eaa] rounded hover:scale-105 focus:outline-none"
              onClick={checkEmailVerification}
              disabled={checkLoading}
            >
              {checkLoading ? <ButtonLoader /> : 'Check Email Verification Status'}
              <MailCheck size={20} />
            </button>
          </div>
          {emailVerified && (
            <p className="mt-4 text-green-500">Your email has been verified!</p>
          )}
        </div>
      );
    case 2:
      return (
        <div className="flex justify-around">
          {avatarLinks.map((avatar, index) => (
            <div
              key={index}
              className={`w-24 h-24 border rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 ${
                formData.avatar === avatar ? 'border-[#9835ff] transform scale-110' : 'border-gray-300'
              }`}
              onClick={() => handleAvatarSelect(avatar)}
            >
              <img src={avatar} alt={`avatar${index + 1}`} className="w-20 h-20 rounded-full" />
            </div>
          ))}
        </div>
      );
    case 3:
      return (
        <div className="flex justify-around">
          {schoolLevels.map((level, index) => (
            <div
              key={index}
              className={`w-32 h-24 border rounded-lg flex flex-col items-center font-poppins justify-center cursor-pointer p-2 transition-transform duration-300 ${
                formData.educationalLevel === level.label ? 'border-[#9835ff] transform scale-110' : 'border-gray-300'
              }`}
              onClick={() => handleSchoolLevelSelect(level.label)}
            >
              <span className='text-[#9835ff]'>{level.icon}</span>
              
              <span className="text-sm text-[#404660] font-medium mt-2">{level.label}</span>
            </div>
          ))}
        </div>
      );
    case 4:
      return (
        <div className='font-poppins'>
          <p className='text-[#404660] mb-8'>Welcome to Sidec! Watch this video to know how it works, or go to your dashboard.</p>
          <div className="relative pb-[56.25%] mb-8">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-md shadow-xl"
              src="https://www.youtube.com/embed/Zq8TpFSMxSM?si=XJpmhLcGiZUWrcly"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-[#9835ff] text-white py-2 px-4 rounded mt-4 flex mx-auto"
          >
            {submitLoading ? <ButtonLoader /> : 'Submit and Go to Dashboard'}
          </button>
        </div>
      );
    default:
      return null;
  }
};

export default StepContent;