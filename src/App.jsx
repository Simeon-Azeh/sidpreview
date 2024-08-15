import { useState, useEffect } from 'react'
import { BrowserRouter ,Routes, Route, useLocation } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Authentication/Login'
import Register from './pages/Authentication/Register';
import Onboarding from './pages/Authentication/Onbarding';
import Dashboard from './pages/Dashboard';
import Discover from './pages/Discover';
import Courses from './pages/Courses/Courses';
import Science from './pages/Courses/Science';
import Tech from './pages/Courses/Technology';
import Arts from './pages/Courses/Arts';
import Specialization from './pages/Courses/Specialization';
import SavedCourses from './pages/Courses/SavedCourses';
import EnrolledCourses from './pages/Courses/EnrolledCourses';
import Certificates from './pages/Courses/Certificates';
import Profile from './pages/Settings';
import Settings from './pages/Settings';
import Resources from './pages/Resources/Resources';
import Questions from './pages/Resources/Questions';
import Solutions from './pages/Resources/Solutions';
import TestPage from './pages/Resources/Test';
import Support from './pages/Support';
import Tutors from './pages/Tutors/Tutors';
import ScienceTutors from './pages/Tutors/ScienceTutors';
import ArtsTutors from './pages/Tutors/ArtsTutors';
import TechTutors from './pages/Tutors/TechnologyTutors';
import Messages from './pages/Messages';
import ForgotPassword from './pages/Authentication/ForgotPass';
import CourseEnrollment from './pages/Courses/CourseEnrollment';
import Quiz from './pages/Resources/Quiz';
import CourseMaterial from './pages/Courses/CourseMaterial';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  

  return (
    <>
     <BrowserRouter>
     <ScrollToTop />
     <Routes>
       <Route path="/" element={<Landing/>} />
       <Route path="*" element={<Landing/>} />
       <Route path="/auth/login" element={<Login/>} />
       <Route path="/auth/register" element={<Register/>} />
       <Route path="/auth/forgotpassword" element={<ForgotPassword/>} />
       <Route path="/auth/onboarding" element={<Onboarding/>} />
       <Route path="/dashboard" element={<Dashboard/>} />
       <Route path="/discover" element={<Discover/>} />
       <Route path="/courses" element={<Courses/>} />
       <Route path="/courses/science" element={<Science/>} />
       <Route path="/courses/technology" element={<Tech/>} />
       <Route path="/courses/tech" element={<Tech/>} />
       <Route path="/courses/arts" element={<Arts/>} />
       <Route path="/courses/specialization" element={<Specialization/>} />
       <Route path="/courses/saved" element={<SavedCourses/>} />
       <Route path="/courses/enrolled" element={<EnrolledCourses/>} />
       <Route path="/courses/enrollment" element={<CourseEnrollment/>} />
       <Route path="/courses/enrolled/certificates" element={<Certificates/>} />
       <Route path="/courses/enrolled/course-material" element={<CourseMaterial/>} />
       <Route path="/resources" element={<Resources/>} />
       <Route path="/resources/questions" element={<Questions/>} />
       <Route path="/resources/solutions" element={<Solutions/>} />
       <Route path="/resources/tests" element={<TestPage/>} />
       <Route path="/tests/quiz" element={<Quiz/>} />
       <Route path="/tutors" element={<Tutors/>} />
       <Route path="/tutors/science" element={<ScienceTutors/>} />
       <Route path="/tutors/arts" element={<ArtsTutors/>} />
       <Route path="/tutors/tech" element={<TechTutors/>} />
       <Route path="/tutors/technology" element={<TechTutors/>} />
       <Route path="/messages" element={<Messages/>} />
       <Route path="/settings" element={<Settings/>} />
       <Route path="/support" element={<Support/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
