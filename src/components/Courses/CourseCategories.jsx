import React from 'react';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';
import { TbAntennaBars5, TbAntennaBars4, TbAntennaBars3 } from 'react-icons/tb';

const coursesData = {
  Science: [
    {
      image: 'https://img.freepik.com/premium-photo/light-vintage-bulb-chalk-board-background_641298-22644.jpg?w=740',
      title: 'Physics Basics',
      description: 'Understand the fundamentals of Physics and apply...',
      status: { title: 'Olevels', icon: <TbAntennaBars3 size={20} /> },
      time: '4 hours',
      rating: 4.2,
      ratingCount: 120,
    },
    {
      image: 'https://img.freepik.com/premium-photo/medical-science-blue-banner_978521-27821.jpg?w=826',
      title: 'Chemistry Essentials',
      description: 'Learn the basics of Chemistry and use it to prep for your...',
      status: { title: 'Intermediate', icon: <TbAntennaBars4 size={20} /> },
      time: '5 hours',
      rating: 4.5,
      ratingCount: 95,
    },
    {
      image: 'https://img.freepik.com/free-photo/3d-medical-background-with-virus-cells-dna-strand_1048-7596.jpg?t=st=1721764163~exp=1721767763~hmac=6d2c1c0a34bc80fae33115e4a83cccb68e475a83ae4d560e3794b158565a19bc&w=740',
      title: 'Biology for Beginners',
      description: 'Introduction to Biology and its branches...',
      status: { title: 'Beginner', icon: <TbAntennaBars3 size={20} /> },
      time: '3 hours',
      rating: 4.1,
      ratingCount: 110,
    },
    {
      image: 'https://img.freepik.com/premium-photo/thermometer-earth-eco-climate-change-concept-3d-rendering_35719-8004.jpg?w=740',
      title: 'Earth Science',
      description: 'Explore the basics of Earth Science...',
      status: { title: 'Advanced', icon: <TbAntennaBars5 size={20} /> },
      time: '6 hours',
      rating: 4.6,
      ratingCount: 85,
    },
  ],
  Arts: [
    {
      image: 'https://img.freepik.com/free-photo/vintage-desk-concept-with-copyspace-right_23-2147791060.jpg?t=st=1721764493~exp=1721768093~hmac=0659d110ff4a0fc5f81a3ecf3de8af7abdd29a769ebba77516b5949e2e7f20eb&w=740',
      title: 'History of Art',
      description: 'Dive into the history and evolution of art...',
      status: { title: 'Beginner', icon: <TbAntennaBars3 size={20} /> },
      time: '4 hours',
      rating: 4.3,
      ratingCount: 78,
    },
    {
      image: 'https://img.freepik.com/free-photo/radio-concept-with-microphone-copy-space_23-2148681165.jpg?t=st=1721764579~exp=1721768179~hmac=875474cec38e09c4959c14a348a6f3c8b7526f81dca5c607b823f64b797723d4&w=740',
      title: 'Music Theory',
      description: 'Learn the fundamental concepts of music theory...',
      status: { title: 'Intermediate', icon: <TbAntennaBars4 size={20} /> },
      time: '5 hours',
      rating: 4.7,
      ratingCount: 65,
    },
    {
      image: 'https://img.freepik.com/premium-photo/blank-chalkboard-with-curtains_780608-3337.jpg?w=740',
      title: 'Introduction to Theatre',
      description: 'An overview of theatre history and practice...',
      status: { title: 'Beginner', icon: <TbAntennaBars3 size={20} /> },
      time: '3 hours',
      rating: 4.4,
      ratingCount: 72,
    },
    {
      image: 'https://img.freepik.com/free-photo/artist-props-photography-studio_23-2148885635.jpg?t=st=1721764748~exp=1721768348~hmac=69bbcd74fa092f2b9da142ecd41ca4f0928f40baf27ab26bb25b67b038844c54&w=360',
      title: 'Photography Basics',
      description: 'Understand the basics of photography and camera use...',
      status: { title: 'Advanced', icon: <TbAntennaBars5 size={20} /> },
      time: '6 hours',
      rating: 4.8,
      ratingCount: 90,
    },
  ],
  Technology: [
    {
      image: 'https://img.freepik.com/free-photo/programming-background-collage_23-2149901771.jpg?t=st=1721764931~exp=1721768531~hmac=119784a10bf4faed08460d44515e77c0521dffa62ab42aac1d109bc0aebbfcce&w=740',
      title: 'Introduction to Programming',
      description: 'Learn the basics of programming with JavaScript...',
      status: { title: 'Beginner', icon: <TbAntennaBars3 size={20} /> },
      time: '4 hours',
      rating: 4.2,
      ratingCount: 150,
    },
    {
      image: 'https://img.freepik.com/free-photo/programming-background-collage_23-2149901782.jpg?t=st=1721764997~exp=1721768597~hmac=7f27bdf50c336d858b38f44f938f6b4611439db3be4b0287e61b1d61404e55cb&w=740',
      title: 'Web Development',
      description: 'Get started with HTML, CSS, and JavaScript...',
      status: { title: 'Intermediate', icon: <TbAntennaBars4 size={20} /> },
      time: '5 hours',
      rating: 4.6,
      ratingCount: 140,
    },
    {
      image: 'https://img.freepik.com/premium-photo/abstract-background-molecules-technology-with-polygonal-shapes-connecting-dots-lines_7247-1132.jpg?w=740',
      title: 'Mobile App Development',
      description: 'Build your first mobile app with React Native...',
      status: { title: 'Beginner', icon: <TbAntennaBars3 size={20} /> },
      time: '3 hours',
      rating: 4.3,
      ratingCount: 130,
    },
    {
      image: 'https://img.freepik.com/premium-photo/molecules-technology-with-polygonal-shapes-connecting-dots-lines_7247-1922.jpg?w=740',
      title: 'Data Science Basics',
      description: 'Introduction to data science and machine learning...',
      status: { title: 'Advanced', icon: <TbAntennaBars5 size={20} /> },
      time: '6 hours',
      rating: 4.7,
      ratingCount: 120,
    },
  ],
  Specialization: [
    {
      image: 'https://img.freepik.com/free-photo/numerology-concept-composition_23-2150169791.jpg?t=st=1721765242~exp=1721768842~hmac=637882a13ddfe72e18ba6b152ecc90b36ebb4f70deaa43822733e8083ee76a32&w=740',
      title: 'Advanced Mathematics',
      description: 'Dive deep into advanced mathematical concepts...',
      status: { title: 'Advanced', icon: <TbAntennaBars5 size={20} /> },
      time: '6 hours',
      rating: 4.9,
      ratingCount: 100,
    },
    {
      image: 'https://img.freepik.com/premium-photo/building-earth-coins-chart-3d-rendering-business-content_35719-1758.jpg?w=740',
      title: 'Economics for Beginners',
      description: 'Understand the basics of economics...',
      status: { title: 'Beginner', icon: <TbAntennaBars3 size={20} /> },
      time: '4 hours',
      rating: 4.5,
      ratingCount: 90,
    },
    {
      image: 'https://img.freepik.com/premium-photo/justice-scales-books-wooden-gavel-table-justice-concept_488220-74309.jpg?w=740',
      title: 'Introduction to Law',
      description: 'Explore the fundamentals of legal systems...',
      status: { title: 'Intermediate', icon: <TbAntennaBars4 size={20} /> },
      time: '5 hours',
      rating: 4.7,
      ratingCount: 85,
    },
    {
      image: 'https://img.freepik.com/premium-photo/pills-medical-equiupments-border-green-background-top-view_8087-237.jpg?w=740',
      title: 'Medical Sciences',
      description: 'Learn about the basics of medical sciences...',
      status: { title: 'Advanced', icon: <TbAntennaBars5 size={20} /> },
      time: '6 hours',
      rating: 4.8,
      ratingCount: 80,
    },
  ],
};

const CourseCategories = () => {
  return (
    <div className="p-6 rounded-lg font-poppins">
    {Object.keys(coursesData).map((category) => (
      <div key={category} className="mb-8">
        <h2 className="text-xl text-[#404660] font-medium mb-8 border-b pb-2">{category}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {coursesData[category].map((course, index) => (
            <Link to={`/courses/${category.toLowerCase()}/${index}`} key={index}>
              <CourseCard
                image={course.image}
                title={course.title}
                description={course.description}
                status={course.status}
                time={course.time}
                rating={course.rating}
                ratingCount={course.ratingCount}
              />
            </Link>
          ))}
        </div>
        <Link to={`/courses/${category.toLowerCase()}`}>
          <button className="text-sm text-[#404660] m-auto flex font-medium mt-8 border py-1 px-3 rounded hover:translate-y-[-5px] duration-300">See more</button>
        </Link>
      </div>
    ))}
  </div>
  );
};

export default CourseCategories;
