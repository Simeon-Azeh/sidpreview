// src/components/settings/Notifications.jsx
import React, { useState } from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

const Preferences = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);

  const handleEmailToggle = () => {
    setEmailNotifications(!emailNotifications);
  };

  const handlePushToggle = () => {
    setPushNotifications(!pushNotifications);
  };

  return (
    <div className='px-4'>
      <h2 className="text-xl font-medium text-[#404660] mb-4">Preferences</h2>
      
      <div className="mb-6 flex items-center justify-between">
        <div>
        <label className="flex items-center space-x-4">
          <span className='text-[#404660] text-[14px] font-medium'>Email Notifications</span>
        </label>
        <p className="text-gray-500 text-sm">Receive email notifications for important updates.</p>
        </div>
       
        <Toggle className=""
            checked={emailNotifications}
            onChange={handleEmailToggle}
          />

      </div>
      
      <div className="mb-6 flex items-center justify-between">
        <div>
        <label className="flex items-center space-x-4">
          <span className='text-[#404660] text-[14px] font-medium'>Push Notifications</span>
        
        </label>
        <p className="text-gray-500 text-sm">Get push notifications directly to your device.</p>
        </div>
       
        <Toggle
            checked={pushNotifications}
            onChange={handlePushToggle}
          />
      </div>

      <div className="mb-6">
        <p className="text-xl font-medium text-[#404660]">Notify me when...</p>
        <label className="flex items-center mt-2">
          <input type="checkbox" className="mr-2" />
          <span className='text-[#404660] font-medium'>A new course is added</span>
        </label>
        <label className="flex items-center mt-2">
          <input type="checkbox" className="mr-2" checked/>
          <span className='text-[#404660] font-medium'>My course progress is updated</span>
        </label>
        <label className="flex items-center mt-2">
          <input type="checkbox" className="mr-2" />
          <span className='text-[#404660] font-medium'>I receive a message</span>
        </label>
        <label className="flex items-center mt-2">
          <input type="checkbox" className="mr-2" />
          <span className='text-[#404660] font-medium'>There is a new announcement</span>
        </label>
        <label className="flex items-center mt-2">
          <input type="checkbox" className="mr-2" checked />
          <span className='text-[#404660] font-medium'>There is a new mock test</span>
        </label>
      </div>

      <div className="mb-6 flex items-center justify-between gap-20">
        <div>
        <label className="block  font-medium text-[#404660]">Appearance</label>
        <p className='text-gray-500 text-[14px]'>Choose your preferred theme.</p>
        </div>
     
        <select className="w-24 border p-2 rounded-md font-medium text-[#404660] outline-none">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System Default</option>
        </select>
      </div>

      <div className="mb-6 flex items-center justify-between gap-20">
        <div>
        <label className="block  font-medium text-[#404660]">Language</label>
        <p className='text-gray-500 text-[14px]'>Choose your preferred language.</p>
        </div>
        <select className="w-24 border p-2 rounded-md font-medium text-[#404660] outline-none">
          <option value="en">English</option>
          <option value="fr">French</option>
        </select>
      </div>

      <div className="mb-6 flex items-center justify-between gap-20">
        <div>
        <label className="block  font-medium text-[#404660]">Time Zone</label>
        <p className='text-gray-500 text-[14px]'>Choose your preferred time zone. <span>Your current time zone is <span className="text-[#9835ff] font-medium">GMT</span></span></p>
        </div>
      
        <select className="w-24 border p-2 rounded-md font-medium text-[#404660] outline-none">
          <option value="gmt">GMT</option>
          <option value="est" disabled className='cursor-not-allowed'>Eastern Standard Time</option>
          <option value="pst" disabled>Pacific Standard Time</option>
          <option value="cet" disabled>Central European Time</option>
        </select>
      </div>
      <div className='flex gap-4'>
      <button className=' bg-[#9835ff] text-white py-2 px-3 rounded-md shadow-md shadow-[#dfd3ec] hover:translate-y-[-5px] duration-300'>Update Preferences</button>
      <button className=' border text-[#9835ff] py-2 px-3 rounded-md hover:translate-y-[-5px] duration-300'>Cancel</button>
      </div>
    </div>
  );
}

export default Preferences;
