import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Authentication/Login';
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
import ResourceDocs from './pages/Resources/ResourceDocs';
import Notes from './pages/Courses/Notes';
import AppointmentBooking from './pages/Tutors/AppointmentBooking';
import ProtectedRoute from './components/ProtectedRoute';

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
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Landing />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/forgotpassword" element={<ForgotPassword />} />
          
          <Route
            path="/auth/onboarding"
            element={
              <ProtectedRoute>
                <Onboarding />
              </ProtectedRoute>
            }
          />
            <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/discover"
            element={
              <ProtectedRoute>
                <Discover />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses"
            element={
              <ProtectedRoute>
                <Courses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses/science"
            element={
              <ProtectedRoute>
                <Science />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses/technology"
            element={
              <ProtectedRoute>
                <Tech />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses/tech"
            element={
              <ProtectedRoute>
                <Tech />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses/arts"
            element={
              <ProtectedRoute>
                <Arts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses/specialization"
            element={
              <ProtectedRoute>
                <Specialization />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses/saved"
            element={
              <ProtectedRoute>
                <SavedCourses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses/enrolled"
            element={
              <ProtectedRoute>
                <EnrolledCourses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses/enrollment"
            element={
              <ProtectedRoute>
                <CourseEnrollment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses/enrolled/certificates"
            element={
              <ProtectedRoute>
                <Certificates />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses/enrolled/course-material"
            element={
              <ProtectedRoute>
                <CourseMaterial />
              </ProtectedRoute>
            }
          />
          <Route
            path="/resources"
            element={
              <ProtectedRoute>
                <Resources />
              </ProtectedRoute>
            }
          />
          <Route
            path="/resources/questions"
            element={
              <ProtectedRoute>
                <Questions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/resources/solutions"
            element={
              <ProtectedRoute>
                <Solutions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/resources/tests"
            element={
              <ProtectedRoute>
                <TestPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/resources/docs"
            element={
              <ProtectedRoute>
                <ResourceDocs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tests/quiz"
            element={
              <ProtectedRoute>
                <Quiz />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tutors"
            element={
              <ProtectedRoute>
                <Tutors />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tutors/science"
            element={
              <ProtectedRoute>
                <ScienceTutors />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tutors/arts"
            element={
              <ProtectedRoute>
                <ArtsTutors />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tutors/tech"
            element={
              <ProtectedRoute>
                <TechTutors />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tutors/technology"
            element={
              <ProtectedRoute>
                <TechTutors />
              </ProtectedRoute>
            }
          />
          <Route
            path="/messages"
            element={
              <ProtectedRoute>
                <Messages />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/support"
            element={
              <ProtectedRoute>
                <Support />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Notes"
            element={
              <ProtectedRoute>
                <Notes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tutor/book"
            element={
              <ProtectedRoute>
                <AppointmentBooking />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;