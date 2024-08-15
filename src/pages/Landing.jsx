import React, { useState, useEffect } from 'react';
import HeroImg from '../../public/images/HeroImg.svg';
import { GiArchiveRegister } from "react-icons/gi";
import { IoMdArrowForward } from "react-icons/io";
import {Link} from 'react-router-dom';
import AOS from 'aos';
import Footer from '../components/Landing/Footer';

function Landing() {
  const texts = ["Effortless", "Effective", "Innovative"];
  const [currentText, setCurrentText] = useState(0);
  const [fade, setFade] = useState(true);
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false); // Trigger the fade-out animation
      setTimeout(() => {
        setCurrentText((prevText) => (prevText + 1) % texts.length);
        setFade(true); // Trigger the fade-in animation
      }, 500); // Wait for the fade-out animation to complete before changing the text
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000, // Duration of animations
    });
  }, []);

 document.title = "welcome to sidec";
  return (
    <div>
             <div className='min-h-screen flex items-center justify-between md:w-4/5 m-auto font-poppins'>
      <div className='flex flex-col md:flex-row items-center p-2 md:p-0'>
        <div className='text-center mt-20 md:mt-0 md:text-left md:w-1/2' data-aos='fade-down'>
          <h1 className='text-3xl md:text-4xl font-bold mb-4 text-[#404660] pop'>
            Welcome to an{' '}
            <span
              className={`text-[#9835ff] inline-block transition-all duration-500 transform ${fade ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            >
              {texts[currentText]}
            </span>{' '}
            Learning Experience
          </h1>
          <p className='md:text-lg mb-6  text-gray-500'>
            Our platform offers a seamless way for students to prepare for their National Exams. Join us to start your journey.
          </p>
          <div className='flex gap-4 items-center justify-center md:justify-start'>
            <Link to="/auth/login">
            <button
              onClick={() => navigateToAuthentication('/login')}
              className='bg-[#9835ff] text-white px-6 py-3 rounded-lg font-normal text-lg transition-transform duration-300 hover:translate-y-[-3px] pop flex items-center gap-2 md:m-0'
            >
              Login <IoMdArrowForward />
            </button>
            </Link>
                <Link to="/auth/register">
                <button
              onClick={() => navigateToAuthentication('/register')}
              className='border border-[#9835ff] text-[#9835ff] px-6 py-3 rounded-lg font-normal text-lg transition-transform duration-300 hover:translate-y-[-3px] pop flex items-center gap-2 md:m-0'
            >
           <GiArchiveRegister size={20} /> Register
            </button>
                </Link>
          
          </div>
        </div>
        <div className='mt-8 md:mt-0 md:ml-8 md:w-1/2' data-aos='fade-right'>
          <img src={HeroImg} alt="Hero Image" className='w-full h-auto' />
        </div>
      </div>
      
    </div>
    <div>
        <Footer />
      </div>
    </div>
   
  );
}

export default Landing;
