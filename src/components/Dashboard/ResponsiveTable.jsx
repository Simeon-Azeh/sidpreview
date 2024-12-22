import React, { useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { MdWorkHistory } from "react-icons/md";
import { FaCheckCircle } from 'react-icons/fa';
import { FaBarsProgress } from "react-icons/fa6";
import { getAuth } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Link } from 'react-router-dom';

const ResponsiveTable = () => {
  const [courses, setCourses] = useState([]);
  const [courseProgress, setCourseProgress] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourseProgress = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const progressQuery = query(collection(db, "CourseProgress"), where("userId", "==", user.uid));
        const progressSnapshot = await getDocs(progressQuery);
        const progressData = progressSnapshot.docs.map(doc => doc.data());

        if (progressData.length > 0) {
          const courseQuery = query(collection(db, "courses"));
          const courseSnapshot = await getDocs(courseQuery);
          const courseData = courseSnapshot.docs.map(doc => doc.data());

          const combinedData = progressData.map(progress => {
            const course = courseData.find(course => course.name === progress.courseName);
            return {
              ...progress,
              ...course,
              status: progress.progress === 100 ? { title: 'Completed', icon: <FaCheckCircle size={16} className="text-[#9835ff]" /> } : { title: 'In Progress', icon: <FaBarsProgress size={16} className="text-yellow-500" /> }
            };
          });

          setCourseProgress(combinedData);
        }
        setLoading(false);
      }
    };

    fetchCourseProgress();
  }, []);

  if (loading) {
    return (
      <div className="px-4 py-6 mt-6 bg-white border rounded-md font-poppins">
        <h1 className="text-lg font-medium text-[#404660] mb-4">Continue Learning</h1>
        <div className="space-y-4">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-100 rounded animate-pulse"
              >
                <div className="w-1/3 h-4 bg-gray-300 rounded"></div>
                <div className="w-16 h-2 bg-gray-300 rounded"></div>
                <div className="w-20 h-6 bg-gray-300 rounded"></div>
              </div>
            ))}
        </div>
      </div>
    );
  }
  

  if (courseProgress.length === 0) {
    return (
      <div className="py-10 mt-6 text-center bg-white border rounded-md shadow-md font-poppins">
        <div className="flex flex-col items-center">
          <div className="text-[#9835ff] mb-4">
            {/* Icon */}
            <FaBarsProgress size={48} />
          </div>
         
          <p className="mb-6 text-sm text-gray-500">You have not started any courses yet. Explore new opportunities and start learning today!</p>
          <Link
            to="/courses"
            className="inline-block bg-[#9835ff] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#7b2bcc] transition duration-300"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    );
  }
  

  return (
    <div className='py-6 mt-6 bg-white border rounded-md font-poppins'>
      <div className='flex justify-between px-4 mb-2'>
        <h1 className='text-lg font-medium text-[#404660]'>Continue Learning</h1>
        <Link to='/courses' className='text-sm text-gray-500 border py-1 px-3 cursor-pointer rounded hover:translate-y-[-5px] duration-300'>View all</Link>
      </div>
      <div className="px-4 overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="w-full bg-[#F9feff] rounded-lg text-[#404660] text-left text-sm">
              <th className="px-4 py-3 font-medium">Course Name</th>
              <th className="px-4 py-3 font-medium">Progress</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {courseProgress.map((course, index) => (
              <tr key={index} className="border-t cursor-pointer hover:bg-gray-50">
                <td className="flex items-center px-4 py-4">
                  {course.icon}
                  <div className="ml-4">
                    <h1 className="font-medium text-[#404660] text-sm md:text-[16px]">{course.name}</h1>
                    <div className="hidden text-sm text-gray-500 md:block">{course.difficulty} • {course.timeToComplete} hours</div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-gray-200 rounded-full">
                      <div
                        className="bg-[#9835ff] h-2 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-700">{course.progress}%</span>
                  </div>
                </td>
                <td className="flex items-center justify-between px-4 py-4">
                  <div className="flex items-center px-3 py-1 border rounded">
                    {course.status.icon}
                    <span className="ml-2 text-sm font-medium">{course.status.title}</span>
                  </div>
                  <FiChevronRight size={20} className="text-gray-500" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResponsiveTable;