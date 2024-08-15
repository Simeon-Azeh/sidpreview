import React, { useState, useEffect } from 'react';
import RegisterImg from '../../../public/images/RegisterImgg.gif';
import AmazonLoader from '../../components/Landing/AmazonLoader';
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [passwordStrength, setPasswordStrength] = useState(0);

  useEffect(() => {
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
    if (!password) {
      errors.password = 'Please enter your password';
    }
    if (!confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form values:', { email, password });
      // Handle registration logic here
      // history.push('/dashboard');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors({ ...errors, email: '' });
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordStrength(calculatePasswordStrength(newPassword));
    if (errors.password) {
      setErrors({ ...errors, password: '' });
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (errors.confirmPassword) {
      setErrors({ ...errors, confirmPassword: '' });
    }
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    return strength;
  };

  const renderPasswordStrength = () => {
    const chunks = Array(4).fill('bg-gray-200');
    if (passwordStrength >= 25) chunks[0] = 'bg-red-400';
    if (passwordStrength >= 50) chunks[1] = 'bg-yellow-400';
    if (passwordStrength >= 75) chunks[2] = 'bg-green-400';
    if (passwordStrength === 100) chunks[3] = 'bg-[#9835ff]';

    return (
      <div className="flex gap-1 mt-2">
        {chunks.map((chunk, index) => (
          <div key={index} className={`h-1 w-1/4 ${chunk} rounded-sm mb-1`}></div>
        ))}
      </div>
    );
  };

  if (loading) {
    return <AmazonLoader />;
  }

  document.title = " Register with sidec";
  return (
    <div className="w-full md:w-4/5 mx-auto md:py-8 md:px-0 font-poppins">
      <div className="flex flex-col md:flex-row items-center bg-white p-8 md:rounded-lg border">
        <img src={RegisterImg} alt="Register" className="w-full mb-8 md:mb-0 md:w-1/2 h-auto hover:scale-105 duration-300 cursor-pointer" />
        <div className="md:ml-8 w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-1 text-[#404660]">Create your account</h2>
          <p className='text-gray-400 mb-4'>Sign up to get started</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-[#404660] font-medium text-sm">Your Email</label>
              <input
                type="email"
                className={`w-full font-normal text-[16px] p-2 border rounded mt-1 outline-none ${email ? 'border-[#9835ff] border border-solid' : 'border-gray-300 border-solid'}`}
                value={email}
                placeholder="example@gmail.com"
                onChange={handleEmailChange}
              />
              {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
            </div>
            <div className="mb-4 relative">
              <label className="block text-[#404660] font-medium text-sm">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                className={`w-full font-normal text-[16px] p-2 border rounded mt-1 outline-none ${password ? 'border-[#9835ff] border border-solid' : 'border-gray-300 border-solid'}`}
                value={password}
                placeholder='••••••••••'
                onChange={handlePasswordChange}
              />
              <button
                type="button"
                className="absolute right-4 top-9 text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              {renderPasswordStrength()}
              <p className="text-gray-400 text-xs">Password strength: {passwordStrength}%</p>
            </div>
            <div className="mb-4 relative">
              <label className="block text-[#404660] font-medium text-sm">Confirm Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                className={`w-full font-normal text-[16px] p-2 border rounded mt-1 outline-none ${confirmPassword ? 'border-[#9835ff] border border-solid' : 'border-gray-300 border-solid'}`}
                value={confirmPassword}
                placeholder='••••••••••'
                onChange={handleConfirmPasswordChange}
              />
              <button
                type="button"
                className="absolute right-4 top-9 text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#9835ff] text-white w-full p-2 rounded hover:bg-purple-700 transition duration-300 shadow-lg"
              >
                Register
              </button>
            </div>
            <div className='flex items-center justify-center gap-4 mt-6'>
              <div className='w-full h-[1px] bg-gray-300'></div>
              <p>or</p>
              <div className='w-full h-[1px] bg-gray-300'></div>
            </div>
            <div className="flex items-center justify-center  mt-6 gap-2 md:gap-4">
              <button
                type="button"
                className="flex items-center gap-2 border py-2 px-2 md:px-4 rounded-md border-gray-400 border-solid hover:translate-y-[-2px] duration-300 font-medium text-[#404660] hover:text-[#9835ff]"
              >
                <FcGoogle size={20} />
                Google Sign-Up
              </button>
              <button
                type="button"
                className="flex items-center gap-2 border py-2 px-2 md:px-4 rounded-md border-gray-400 border-solid hover:translate-y-[-2px] duration-300 font-medium text-[#404660] hover:text-[#9835ff]"
              >
                <FaFacebook className="text-blue-600" size={20} />
                Facebook Sign-Up
              </button>
            </div>
          </form>
          <p className='text-gray-400 mt-4 text-center'>Already have an account? <Link to="/auth/login" className="text-[#9835ff] hover:underline font-medium">Login</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
