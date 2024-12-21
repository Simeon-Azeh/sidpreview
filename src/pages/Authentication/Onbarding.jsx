import React, { useState, useEffect } from 'react';
import { message } from 'antd';
import CustomStep from '../../components/Landing/CustomStep';
import StepContent from '../../components/Landing/StepContent';
import StepIcons from '../../components/Landing/StepIcons';
import Footer from '../../components/Landing/Footer';
import { getAuth } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Onboarding = () => {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    country: '',
    city: '',
    dateOfBirth: null,
    verificationCode: Array(6).fill(''),
    avatar: '',
    educationalLevel: '',
    currentSchool: '',
    howSidecHelps: '',
  });
  const [emailVerified, setEmailVerified] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const checkEmailVerification = async () => {
      const user = auth.currentUser;
      if (user) {
        await user.reload(); // Reload user data from Firebase Authentication
        if (user.emailVerified) {
          setEmailVerified(true);
          await updateDoc(doc(db, 'users', user.uid), {
            emailVerified: true,
          });
        } else {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists() && userDoc.data().emailVerified) {
            setEmailVerified(true);
          }
        }
      }
    };

    checkEmailVerification();
  }, [auth]);

  const next = () => {
    if (current === 0 && !formData.firstname) {
      message.error('Please enter your first name');
    } else if (current === 0 && !formData.lastname) {
      message.error('Please enter your last name');
    } else if (current === 1 && !emailVerified) {
      message.error('Please verify your email to continue');
    } else if (current === 2 && !formData.avatar) {
      message.error('Please select an avatar');
    } else if (current === 3 && !formData.educationalLevel) {
      message.error('Please enter your educational level');
    } else {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, dateOfBirth: date });
  };

  const handleAvatarSelect = (avatar) => {
    setFormData({ ...formData, avatar });
  };

  const handleSchoolLevelSelect = (level) => {
    setFormData({ ...formData, educationalLevel: level });
  };

  const handleVerificationCodeChange = (e, index) => {
    const { value } = e.target;
    const updatedCode = [...formData.verificationCode];
    updatedCode[index] = value;
    setFormData({ ...formData, verificationCode: updatedCode });
  };

  document.title = "Getting started with Sidec";

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="w-full max-w-3xl p-6 md:px-20 lg:px-0">
          <div className="flex justify-around mb-6">
            {StepIcons.map((step, index) => (
              <CustomStep
                key={index}
                step={step}
                index={index}
                current={current}
                setCurrent={setCurrent}
              />
            ))}
          </div>
          <div className="mb-6">
            <StepContent
              current={current}
              formData={formData}
              handleChange={handleChange}
              handleDateChange={handleDateChange}
              handleAvatarSelect={handleAvatarSelect}
              handleSchoolLevelSelect={handleSchoolLevelSelect}
              handleVerificationCodeChange={handleVerificationCodeChange}
            />
          </div>
          <div className="flex justify-between">
            {current > 0 && (
              <button
                onClick={prev}
                className="flex items-center text-[#404660] border py-2 px-4 rounded hover:bg-gray-100 transition duration-300 font-poppins"
              >
                <ArrowLeft size={20} className="mr-2" />
                Previous
              </button>
            )}
            {current < StepIcons.length - 1 && (
              <button
                onClick={next}
                className="flex items-center bg-[#9835ff] text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300 font-poppins"
              >
                Next
                <ArrowRight size={20} className="ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Onboarding;