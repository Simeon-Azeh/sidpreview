import React, { useState, useEffect } from 'react';
import RegisterImg from '/images/RegisterImgg.gif';
import AmazonLoader from '../../components/Landing/AmazonLoader';
import ButtonLoader from '../../components/CustomLoader';
import CustomErrorMessage from '../../components/CustomErrorMessage';
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setButtonLoading(true);
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          emailVerified: false,
          onboardingCompleted: false, // Add this field to track onboarding completion
        });
        setSuccessMessage('User registered successfully.');
        setTimeout(() => {
          setSuccessMessage('');
          navigate('/auth/onboarding');
        }, 3000);
      } catch (error) {
        console.error('Error registering user:', error);
        handleFirebaseError(error);
      } finally {
        setButtonLoading(false);
      }
    }
  };

  const handleFirebaseError = (error) => {
    let errorMessage = 'An error occurred. Please try again.';
    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage = 'The email address is already in use by another account.';
        break;
      case 'auth/invalid-email':
        errorMessage = 'The email address is not valid.';
        break;
      case 'auth/operation-not-allowed':
        errorMessage = 'Email/password accounts are not enabled.';
        break;
      case 'auth/weak-password':
        errorMessage = 'The password is too weak.';
        break;
      default:
        errorMessage = error.message;
        break;
    }
    setErrors({ general: errorMessage });
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log('User signed in with Google');
      // Redirect to dashboard or another page
    } catch (error) {
      console.error('Error signing in with Google:', error);
      handleFirebaseError(error);
    }
  };

  const handleFacebookSignIn = async () => {
    const provider = new FacebookAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log('User signed in with Facebook');
      // Redirect to dashboard or another page
    } catch (error) {
      console.error('Error signing in with Facebook:', error);
      handleFirebaseError(error);
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
    <div className="w-full mx-auto lg:py-8 lg:px-8 md:px-0 font-poppins ">
      <div className="flex flex-col items-center p-8 bg-white border lg:flex-row md:rounded-lg">
        <img src={RegisterImg} alt="Register" className="w-full h-auto mb-8 duration-300 cursor-pointer md:mb-0 md:w-4/5 lg:w-1/2 hover:scale-105" />
        <div className="w-full lg:ml-8 md:w-4/5 lg:w-1/2">
          <h2 className="text-xl font-semibold mb-1 text-[#404660]">Create your account</h2>
          <p className='mb-4 text-gray-400'>Sign up to get started</p>
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
              {errors.email && <p className="text-sm text-red-400">{errors.email}</p>}
            </div>
            <div className="relative mb-4">
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
                className="absolute text-gray-500 right-4 top-9"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
              {renderPasswordStrength()}
              <p className="text-xs text-gray-400">Password strength: {passwordStrength}%</p>
            </div>
            <div className="relative mb-4">
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
                className="absolute text-gray-500 right-4 top-9"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
            </div>
            <div className='mb-4'>
              <button
                type="submit"
                className="bg-[#9835ff] text-white w-full p-2 rounded hover:bg-purple-700 transition duration-300 shadow-lg"
              >
                {buttonLoading ? <ButtonLoader /> : 'Register'}
              </button>
            </div>
            {successMessage && (
              <div className="relative px-4 py-3 text-green-700 bg-green-100 border border-green-400 rounded" role="alert">
               
                <span className="block sm:inline">{successMessage}</span>
              </div>
            )}
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
               Register with Google
              </button>
              <button
                type="button"
                className="flex items-center gap-2 border py-2 px-2 md:px-4 rounded-md w-[100%] justify-center border-gray-400 border-solid hover:translate-y-[-2px] duration-300 font-medium text-[#404660] hover:text-[#9835ff]"
                onClick={handleFacebookSignIn}
              >
                <FaFacebook className="text-blue-600" size={20} />
                Register with Facebook
              </button>
            </div>
          </form>
          <p className='mt-4 text-center text-gray-400'>Already have an account? <Link to="/auth/login" className="text-[#9835ff] hover:underline font-medium">Login</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Register;