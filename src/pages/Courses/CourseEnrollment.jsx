import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FaHeart, FaReply, FaEdit, FaTrashAlt, FaStar } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { HiMiniUserGroup } from "react-icons/hi2";
import { CiBookmark } from "react-icons/ci";
import { MdHelp, MdDashboardCustomize, MdPeople, MdBook, MdSettings, MdOutlineDatasetLinked, MdAccessTime, MdReviews, MdAssignment } from 'react-icons/md';
import { RiCompassDiscoverFill, RiArchiveDrawerFill } from 'react-icons/ri';
import { IoMdChatbubbles } from 'react-icons/io';
import avatarImg1 from '../../../public/images/avatartwo.avif'; // Simeon's avatar
import avatarImg2 from '../../../public/images/avatarthree.svg';
import Navbar from '../../components/Navbar';
import Sidebar, { SidebarItem, DropdownItem } from '../../components/Sidebar';
import { Link } from 'react-router-dom';

const CourseEnrollment = () => {
  const [comment, setComment] = useState('');
  const [replyTo, setReplyTo] = useState(null);
  const [replyContent, setReplyContent] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'John Doe',
      avatar: avatarImg2,
      comment: 'Great course! Highly recommend it.',
      likes: 12,
      liked: false,
      replies: [
        {
          id: 1,
          name: 'Jane Smith',
          avatar: avatarImg2,
          reply: 'I agree, it was very informative!',
        },
      ],
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: avatarImg2,
      comment: 'Very informative and well-structured.',
      likes: 8,
      liked: false,
      replies: [
        {
          id: 2,
          name: 'John Doe',
          avatar: avatarImg2,
          reply: 'Thank you, Jane!',
        },
      ],
    },
  ]);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingContent, setEditingContent] = useState('');

  const handleCommentChange = (value) => {
    setComment(value);
  };

  const handleReplyChange = (value) => {
    setReplyContent(value);
  };

  const handleReplyClick = (commentId) => {
    setReplyTo(commentId);
  };

  const handleLikeClick = (commentId) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId ? { ...comment, likes: comment.liked ? comment.likes - 1 : comment.likes + 1, liked: !comment.liked } : comment
      )
    );
  };

  const handleSaveCourse = () => {
    // Implement save course functionality
    alert('Course saved!');
  };

  const handlePostComment = () => {
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        name: 'Simeon Azeh',
        avatar: avatarImg1,
        comment: comment.trim(),
        likes: 0,
        liked: false,
        replies: [],
      };
      setComments([...comments, newComment]);
      setComment('');
    }
  };

  const handleDeleteComment = (commentId) => {
    setComments(comments.filter(comment => comment.id !== commentId));
  };

  const handleEditComment = (commentId) => {
    const commentToEdit = comments.find(comment => comment.id === commentId);
    setEditingContent(commentToEdit.comment);
    setEditingCommentId(commentId);
  };

  const handleSaveEdit = () => {
    setComments(comments.map(comment =>
      comment.id === editingCommentId ? { ...comment, comment: editingContent } : comment
    ));
    setEditingCommentId(null);
    setEditingContent('');
  };

  return (
    <div className="flex h-screen font-poppins">
      <div className="z-40">
        <Sidebar>
          <Link to="/discover">
            <SidebarItem icon={<RiCompassDiscoverFill size={20} />} text="Discover" />
          </Link>
          <Link to="/dashboard">
            <SidebarItem icon={<MdDashboardCustomize size={20} />} text="Dashboard" alert />
          </Link>
          <SidebarItem icon={<MdBook size={20} />} text="Courses" active>
            <Link to="/courses">
              <DropdownItem text="All" />
            </Link>
            <Link to="/courses/arts">
              <DropdownItem text="Arts" />
            </Link>
            <Link to="/courses/science">
              <DropdownItem text="Science" />
            </Link>
            <Link to="/courses/tech">
              <DropdownItem text="Technology" />
            </Link>
            <Link to="/courses/specialization">
              <DropdownItem text="Specialization" />
            </Link>
          </SidebarItem>
          <SidebarItem icon={<RiArchiveDrawerFill size={20} />} text="Resources">
            <Link to="/resources">
              <DropdownItem text="All" />
            </Link>
            <Link to="/resources/questions">
              <DropdownItem text="Questions" />
            </Link>
            <Link to="/resources/solutions">
              <DropdownItem text="Solutions" />
            </Link>
            <Link to="/resources/tests">
              <DropdownItem text="Tests" />
            </Link>
          </SidebarItem>
          <SidebarItem icon={<MdPeople size={20} />} text="Tutors">
            <Link to="/tutors">
              <DropdownItem text="All" />
            </Link>
            <Link to="/tutors/science">
              <DropdownItem text="Science" />
            </Link>
            <Link to="/tutors/arts">
              <DropdownItem text="Arts" />
            </Link>
            <Link to="/tutors/technology">
              <DropdownItem text="Tech" />
            </Link>
            <Link to="/tutors/specialization">
              <DropdownItem text="Specialization" />
            </Link>
          </SidebarItem>
          <Link to="/messages">
            <SidebarItem icon={<IoMdChatbubbles size={20} />} text="Messages" alert />
          </Link>
          <Link to="/iqlink">
            <SidebarItem icon={<MdOutlineDatasetLinked size={20} />} text="IQ Link" alert />
          </Link>
          <hr className="my-4" />
          <Link to="/settings">
            <SidebarItem icon={<MdSettings size={20} />} text="Settings" alert />
          </Link>
          <Link to="/support">
            <SidebarItem icon={<MdHelp size={20} />} text="Support" />
          </Link>
        </Sidebar>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>

        <div className="w-full mx-auto md:pl-16 p-4 px-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-medium text-[#404660]">Course Title</h1>
            <button className="text-[#404660] flex items-center border py-1 px-3 rounded font-medium" onClick={handleSaveCourse}>
              <CiBookmark size={24} className='font-semibold'/>
              <span className="ml-2">Save Course</span>
            </button>
          </div>
          <div className="mb-4 p-4  rounded-2xl bg-slate-50">
            <video controls className="w-full rounded-lg">
              <source src="welcome-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='mb-4'>
  <p className="mb-4 text-gray-700">
    This is a course description. It provides an overview of what the course is about and what you will learn.
  </p>
  <ul className="list-disc p-4 rounded space-y-2 bg-slate-50">
    <li className="flex items-center text-gray-500 ">
      <FaCheck className="text-[#9835ff] mr-2" />
      Understand the fundamentals of the subject.
    </li>
    <li className="flex items-center text-gray-500">
      <FaCheck className="text-[#9835ff] mr-2" />
      Gain practical skills and knowledge.
    </li>
    <li className="flex items-center text-gray-500">
      <FaCheck className="text-[#9835ff] mr-2" />
      Apply concepts in real-world scenarios.
    </li>
    <li className="flex items-center text-gray-500">
      <FaCheck className="text-[#9835ff] mr-2" />
      Develop problem-solving techniques.
    </li>
    <li className="flex items-center text-gray-500">
      <FaCheck className="text-[#9835ff] mr-2" />
      Prepare for advanced studies or career opportunities.
    </li>
  </ul>
</div>
         
          <div className="mb-4 text-gray-600 flex items-center">
            <MdAccessTime size={20} className="mr-2 text-gray-500" />
            <p className="mr-4 text-[14px] font-medium text-gray-500"> 4 hours</p>
            <HiMiniUserGroup size={20} className="mr-2 text-gray-500" />
            <p className="mr-4 text-[14px] font-medium text-gray-500"> 1200</p>
            <FaStar size={18} className="mr-2 text-yellow-400" />
            <p className="mr-4 text-[14px] font-medium text-gray-500"> 150</p>
          </div>
          <div className="mb-4">
    
            <div className="flex items-center mt-2">
                <div className="w-10  mr-2">
                <img src='https://img.freepik.com/free-photo/african-woman-successful-entrepreneur-wearing-glasses-face-portrait_53876-148050.jpg?t=st=1721979719~exp=1721983319~hmac=77100b3a66927cc25412472b05a908ee6ad81a4abfdb931008fe2174360240ae&w=740' alt="Tutor" className="w-full object-contain rounded-full" />
                </div>
              <div>
                <h3 className="text-[16px] font-medium text-[#404660]">Fonui Solange</h3>
                <p className="text-gray-600">A short description about the tutor.</p>
              </div>
            
            </div>
            <button className='bg-[#9835ff] text-white px-4 py-2 rounded mt-4'>Enroll</button>
            <hr className='my-6' />
          </div>
          <div className="mb-4">
            <h2 className="text-[16px] font-medium mb-2 text-[#404660]">Reviews and Comments</h2>
            {comments.map((comment) => (
              <div key={comment.id} className="border-b pb-4 mb-4">
                <div className="flex items-center mb-2">
                  <img src={comment.avatar} alt={comment.name} className="w-10 h-10 rounded-full mr-2" />
                 
                  <div className=''>
                    <h3 className="text-[16px] font-medium text-[#404660]">{comment.name}</h3>
                    {editingCommentId === comment.id ? (
                      <>
                        <ReactQuill
                          value={editingContent}
                          onChange={setEditingContent}
                          className="mb-4"
                        />
                        <button
                          className="bg-[#9835ff] text-white px-4 py-2 rounded mr-2"
                          onClick={handleSaveEdit}
                        >
                          Save
                        </button>
                        <button
                          className="bg-red-500 text-white px-4 py-2 rounded"
                          onClick={() => setEditingCommentId(null)}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <p className="text-gray-600">{comment.comment}</p>
                        <div className="flex items-center mt-2">
                          <FaHeart
                            className={`cursor-pointer ${comment.liked ? 'text-[#9835ff]' : 'text-gray-600'} mr-2`}
                            onClick={() => handleLikeClick(comment.id)}
                          />
                          <span className="text-gray-600 mr-4">{comment.likes}</span>
                          <FaReply
                            className="text-gray-600 cursor-pointer"
                            onClick={() => handleReplyClick(comment.id)}
                          />
                          <span className="text-gray-600 ml-2">{comment.replies.length} replies</span>
                          {comment.name === 'Simeon Azeh' && (
                            <>
                              <FaEdit
                                className="text-gray-600 cursor-pointer ml-4"
                                onClick={() => handleEditComment(comment.id)}
                              />
                              <FaTrashAlt
                                className="text-red-500 cursor-pointer ml-2"
                                onClick={() => handleDeleteComment(comment.id)}
                              />
                            </>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="ml-10 mt-2 flex items-center mb-2">
                    <img src={reply.avatar} alt={reply.name} className="w-8 h-8 rounded-full mr-2" />
                    <div>
                      <h4 className="text-md font-medium text-[#404660]">{reply.name}</h4>
                      <p className="text-gray-600">{reply.reply}</p>
                    </div>
                  </div>
                ))}
                {replyTo === comment.id && (
                  <div className="mt-4 border-t pt-4 ml-10">
                    <ReactQuill
                      value={replyContent}
                      onChange={handleReplyChange}
                      className="mb-4"
                    />
                    <button className="bg-[#9835ff] text-white px-4 py-2 rounded">Submit Reply</button>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-[#404660]">Add a Comment</h2>
            <ReactQuill value={comment} onChange={handleCommentChange} className="mb-4" />
            <button className="bg-[#9835ff] text-white px-4 py-2 rounded" onClick={handlePostComment}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseEnrollment;
