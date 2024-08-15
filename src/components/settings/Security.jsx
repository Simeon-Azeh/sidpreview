// src/components/settings/Privacy.jsx
import React, { useState } from 'react';
import { Modal } from 'antd';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';


function Security() {
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [securityQuestions, setSecurityQuestions] = useState({
    question1: '',
    answer1: '',
    question2: '',
    answer2: '',
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTwoFactorToggle = () => {
    setTwoFactorAuth(!twoFactorAuth);
  };

  const handleSecurityQuestionChange = (e) => {
    const { name, value } = e.target;
    setSecurityQuestions({
      ...securityQuestions,
      [name]: value,
    });
  };

  const showModal = () => {
    setIsModalVisible(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    // Logic for handling password reset goes here
    alert("Password reset instructions have been sent to your email.");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className='px-4'>
      <h2 className="text-xl font-medium text-[#404660] mb-2">Privacy</h2>

      <div className="mb-6 flex items-center justify-between">
        <div>
          <label className="flex items-center space-x-4">
            <span className='text-[#404660] text-[14px] font-medium'>Two-Factor Authentication</span>
          </label>
          <p className="text-gray-500 text-sm">An OTP will be sent to your email and phone number every time you log in.</p>
        </div>
        <Toggle
          checked={twoFactorAuth}
          onChange={handleTwoFactorToggle}
          className="custom-toggle"
        />
      </div>

      <div className="mb-6">
        <p className="text-xl font-medium text-[#404660] mb-2">Privacy Settings</p>
        <label className="flex items-center mt-2 custom-checkbox">
          <input type="checkbox" className="mr-2" />
          <span className='text-[#404660] font-medium'>Make my profile public</span>
        </label>
        <label className="flex items-center mt-2 custom-checkbox">
          <input type="checkbox" className="mr-2" checked />
          <span className='text-[#404660] font-medium' >Show my online status</span>
        </label>
        <label className="flex items-center mt-2 custom-checkbox">
          <input type="checkbox" className="mr-2" />
          <span className='text-[#404660] font-medium'>Allow search engines to index my profile</span>
        </label>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-medium text-[#404660] mb-2">Password Reset</h3>
        <p className="text-gray-500 text-sm mb-4">You can reset your password if you have forgotten it or wish to change it.</p>
        <button type="button" onClick={showModal} className="bg-[#9835ff] text-white px-4 py-2 rounded-md shadow-md">
          Reset Password
        </button>
        <Modal
          title="Password Reset"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <button key="submit" type="button" onClick={handleOk} className="bg-[#9835ff] text-white px-4 py-2 rounded-md shadow-md">
              OK
            </button>,
            <button key="cancel" type="button" onClick={handleCancel} className="border text-[#9835ff] px-4 py-2 rounded-md shadow-md">
              Cancel
            </button>,
          ]}
        >
          {loading ? (
            <div className="text-center">
              <div className="spinner-border animate-spin inline-block w-8 h-8 border--4 rounded-full"></div>
              <p className="text-gray-500 mt-2">Sending instructions to your email...</p>
            </div>
          ) : (
            <p>Password reset instructions have been sent to your email.</p>
          )}
        </Modal>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#404660]">Security Questions</h3>
        <p className="text-gray-500 text-sm mb-4">Set up security questions to help verify your identity if you forget your password.</p>

        <div className="my-4">
          <div className='flex items-center gap-4'>
            <div>
            <label htmlFor="question1" className="text-gray-400 text-[16px]">Security Question 1</label>
          <select
            id="question1"
            name="question1"
            className="w-full border p-1 px-4 text-[16px] text-[#404660] rounded-md outline-none"
            value={securityQuestions.question1}
            onChange={handleSecurityQuestionChange}
          >
            <option value="" disabled>Select a question</option>
            <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
            <option value="What was the name of your first pet?">What was the name of your first pet?</option>
            <option value="What was your first car?">What was your first car?</option>
          </select>
            </div>
            <div>
            <label htmlFor="answer1" className="text-gray-400 text-[16px]">Answer 1</label>
          <input
            type="text"
            id="answer1"
            name="answer1"
            className="w-full border p-1 px-4 text-[16px] text-[#404660] rounded-md outline-none"
            value={securityQuestions.answer1}
            onChange={handleSecurityQuestionChange}
          />
            </div>
          </div>
         
        
        </div>

        <div className="my-4">
          <div className='flex items-center gap-4'>
            <div>
            <label htmlFor="question2" className="text-gray-400 text-[16px]">Security Question 2</label>
          <select
            id="question2"
            name="question2"
            className="w-full border p-1 px-4 text-[16px] text-[#404660] rounded-md outline-none"
            value={securityQuestions.question2}
            onChange={handleSecurityQuestionChange}
          >
            <option value="" disabled>Select a question</option>
            <option value="What was the name of your elementary school?">What was the name of your elementary school?</option>
            <option value="In what city were you born?">In what city were you born?</option>
            <option value="What is your favorite book?">What is your favorite book?</option>
          </select>
            </div>
            <div>
            <label htmlFor="answer2" className="text-gray-400 text-[16px]">Answer 2</label>
          <input
            type="text"
            id="answer2"
            name="answer2"
            className="w-full border p-1 px-4 text-[16px] text-[#404660] rounded-md outline-none"
            value={securityQuestions.answer2}
            onChange={handleSecurityQuestionChange}
          />
            </div>
          </div>
      
        
        </div>
      </div>
      <div className='flex gap-4'>
      <button className=' bg-[#9835ff] text-white py-2 px-3 rounded-md shadow-md shadow-[#dfd3ec] hover:translate-y-[-5px] duration-300'>Update Preferences</button>
      <button className=' border text-[#9835ff] py-2 px-3 rounded-md hover:translate-y-[-5px] duration-300'>Cancel</button>
      </div>
    </div>
  );
}

export default Security;
