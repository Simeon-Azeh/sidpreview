import React, { useState, useEffect } from 'react';
import ForgotPasswordImg from '../../../public/images/ForgotPasswordImg.svg';
import AmazonLoader from '../../components/Landing/AmazonLoader';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const validate = () => {
    const errors = {};
    if (!email) {
      errors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form values:', { email });
      // Handle forgot password logic here
      // e.g., send email to reset password
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors({ ...errors, email: '' });
    }
  };

  if (loading) {
    return <AmazonLoader />;
  }

  document.title = "Forgot Password | SideC";

  return (
    <div className="w-full md:w-4/5 mx-auto md:py-10 md:px-0 font-poppins">
      <div className="flex flex-col md:flex-row items-center bg-white p-8 md:rounded-lg border">
        <img src={ForgotPasswordImg} alt="Forgot Password" className="w-full mb-8 md:mb-0 md:w-1/2 h-auto hover:scale-105 duration-300 cursor-pointer" />
        <div className="md:ml-8 w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-1 text-[#404660]">Forgot Your Password?</h2>
          <p className='text-gray-400 mb-4'>Enter your email to reset your password</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-[#404660] font-medium text-sm">Your Email</label>
              <input
                type="email"
                className="w-full font-normal text-[16px] p-2 border border-gray-300 rounded mt-1 outline-none"
                value={email}
                placeholder="example@gmail.com"
                onChange={handleEmailChange}
              />
              {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#9835ff] text-white w-full p-2 rounded hover:bg-purple-700 transition duration-300 shadow-lg"
              >
                Send Reset Link
              </button>
            </div>
            <div className='flex items-center justify-center gap-4 mt-6'>
              <div className='w-full h-[1px] bg-gray-300'></div>
              <p>or</p>
              <div className='w-full h-[1px] bg-gray-300'></div>
            </div>
            <div className="flex items-center justify-center mt-6 gap-2 md:gap-4">
              <button
                type="button"
                className="flex items-center gap-2 border py-2 px-2 md:px-4 rounded-md border-gray-400 border-solid hover:translate-y-[-2px] duration-300  font-medium text-[#404660] hover:text-[#9835ff]"
              >
                <FcGoogle size={20} />
                Login with Google
              </button>
              <button
                type="button"
                className="flex items-center gap-2 border py-2 px-2 md:px-4 rounded-md border-gray-400 border-solid hover:translate-y-[-2px] duration-300 font-medium text-[#404660] hover:text-[#9835ff]"
              >
                <FaFacebook className="text-blue-600" size={20} />
                Login with Facebook
              </button>
            </div>
          </form>
          <p className='text-gray-400 mt-4 text-center'>Remembered your password? <Link to="/auth/login" className="text-[#9835ff] hover:underline font-medium">Login</Link></p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
