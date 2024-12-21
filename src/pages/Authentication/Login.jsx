import React, { useState, useEffect } from 'react';
import LoginImg from '/images/LoginImgg.gif';
import AmazonLoader from '../../components/Landing/AmazonLoader';
import ButtonLoader from '../../components/CustomLoader';
import CustomErrorMessage from '../../components/CustomErrorMessage';
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);
  const navigate = useNavigate();

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
    }
    if (!password) {
      errors.password = 'Please enter your password';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setButtonLoading(true);
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists() && userDoc.data().onboardingCompleted) {
          navigate('/dashboard');
        } else {
          navigate('/auth/onboarding');
        }
      } catch (error) {
        console.error('Error logging in:', error);
        handleFirebaseError(error);
      } finally {
        setButtonLoading(false);
      }
    }
  };

  const handleFirebaseError = (error) => {
    let errorMessage = 'An error occurred. Please try again.';
    switch (error.code) {
      case 'auth/invalid-credential':
        errorMessage = 'Please check your credentials.';
        break;
      case 'auth/wrong-password':
        errorMessage = 'Incorrect password.';
        break;
      case 'auth/invalid-email':
        errorMessage = 'The email address is not valid.';
        break;
      default:
        errorMessage = 'An unexpected error occurred. Please try again later.';
        break;
    }
    setErrors({ general: errorMessage });
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists() && userDoc.data().onboardingCompleted) {
        navigate('/dashboard');
      } else {
        navigate('/auth/onboarding');
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
      handleFirebaseError(error);
    }
  };

  const handleFacebookSignIn = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists() && userDoc.data().onboardingCompleted) {
        navigate('/dashboard');
      } else {
        navigate('/auth/onboarding');
      }
    } catch (error) {
      console.error('Error signing in with Facebook:', error);
      handleFirebaseError(error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (loading) {
    return <AmazonLoader />;
  }

  document.title = " Login | SideC";

  return (
    <div className="w-full mx-auto lg:w-5/6 lg:py-8 md:px-0 font-poppins lg:mt-10">
      <div className="flex flex-col items-center p-8 bg-white border lg:flex-row md:rounded-lg">
        <img src={LoginImg} alt="Login" className="w-full h-auto mb-8 duration-300 cursor-pointer md:mb-0 md:w-4/5 lg:w-1/2 hover:scale-105" />
        <div className="w-full lg:ml-8 md:w-4/5 lg:w-1/2">
          <h2 className="text-xl font-semibold mb-1 text-[#404660]">Welcome back!</h2>
          <p className='mb-4 text-gray-400'>Log into your account</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-[#404660] font-medium text-sm">Your Email</label>
              <input
                type="email"
                className="w-full font-normal text-[16px] p-2 border border-gray-300 rounded mt-1 outline-none"
                value={email}
                placeholder="example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-sm text-red-400">{errors.email}</p>}
            </div>
            <div className="relative mb-4">
              <label className="block text-[#404660] font-medium text-sm">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full font-normal text-[16px] p-2 border border-gray-300 rounded mt-1 outline-none"
                value={password}
                placeholder='••••••••••'
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute text-gray-500 right-4 top-9"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
            </div>
            <div className="flex items-center justify-between mb-8">
              <label className="flex items-center text-gray-700">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              <a href="/auth/forgotpassword" className="text-[#9835ff] hover:underline">Forgot Password?</a>
            </div>
            <div className='mb-4'>
              <button
                type="submit"
                className="bg-[#9835ff] text-white w-full p-2 rounded hover:bg-purple-700 transition duration-300 shadow-lg"
              >
                {buttonLoading ? <ButtonLoader /> : 'Login'}
              </button>
            </div>
            {errors.general && <CustomErrorMessage message={errors.general} />}
            <div className='flex items-center justify-center gap-4 mt-6'>
               <div className='w-full h-[1px] bg-gray-300'></div>
                <p>or</p>
                <div className='w-full h-[1px] bg-gray-300'></div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 mt-6 md:flex-row md:gap-4">
              <button
                type="button"
                className="flex items-center gap-2 border py-2 px-2 md:px-4 rounded-md w-[100%] justify-center border-gray-400 border-solid hover:translate-y-[-2px] duration-300  font-medium text-[#404660] hover:text-[#9835ff]"
                onClick={handleGoogleSignIn}
              >
                <FcGoogle size={20}/>
                Login with Google
              </button>
              <button
                type="button"
                className="flex items-center gap-2 border py-2 px-2 md:px-4 rounded-md w-[100%] justify-center border-gray-400 border-solid hover:translate-y-[-2px] duration-300 font-medium text-[#404660] hover:text-[#9835ff]"
                onClick={handleFacebookSignIn}
              >
                <FaFacebook className="text-blue-600" size={20} />
                Login with Facebook
              </button>
            </div>
          </form>
          <p className='mt-4 text-center text-gray-400'>Don't have an account? <Link to="/auth/register" className="text-[#9835ff] hover:underline font-medium">Register</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;