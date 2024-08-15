import React from 'react';

import { Link } from 'react-router-dom';
import { TbAntennaBars5, TbAntennaBars4, TbAntennaBars3 } from 'react-icons/tb';
import ResourcesCard from './ResourcesCard';

const ResourceData = {
  Questions: [
    {
      image: 'https://img.freepik.com/free-psd/3d-rendering-questions-background_23-2151455632.jpg?t=st=1721900388~exp=1721903988~hmac=767788fc2c2b6c7e4e99e6a62cc54cb29f188c038ebb89e60cfc5f954e0d5d54&w=740',
      title: 'Physics II',
      description: 'GCE 2024',
      status: { title: 'ALEVELS', icon: <TbAntennaBars4 size={20} /> },
      rating: 4.2,
      ratingCount: 120,
    },
    {
      image: 'https://img.freepik.com/free-psd/3d-rendering-questions-background_23-2151455632.jpg?t=st=1721900388~exp=1721903988~hmac=767788fc2c2b6c7e4e99e6a62cc54cb29f188c038ebb89e60cfc5f954e0d5d54&w=740',
      title: 'Chemistry I',
      description: 'WAEC 2024',
      status: { title: 'ALEVELS', icon: <TbAntennaBars4 size={20} /> },
      rating: 4.5,
      ratingCount: 95,
    },
    {
      image: 'https://img.freepik.com/free-psd/3d-rendering-questions-background_23-2151455632.jpg?t=st=1721900388~exp=1721903988~hmac=767788fc2c2b6c7e4e99e6a62cc54cb29f188c038ebb89e60cfc5f954e0d5d54&w=740',
      title: 'Biology II',
      description: 'GCE 2024',
      status: { title: 'OLEVELS', icon: <TbAntennaBars3 size={20} /> },
      time: '3 hours',
      rating: 4.1,
      ratingCount: 110,
    },
    {
      image: 'https://img.freepik.com/free-psd/3d-rendering-questions-background_23-2151455632.jpg?t=st=1721900388~exp=1721903988~hmac=767788fc2c2b6c7e4e99e6a62cc54cb29f188c038ebb89e60cfc5f954e0d5d54&w=740',
      title: 'Computer Science',
      description: 'HND 2024',
      status: { title: 'Advanced', icon: <TbAntennaBars5 size={20} /> },
      time: '6 hours',
      rating: 4.6,
      ratingCount: 85,
    },
  ],
  Solutions: [
    {
      image: 'https://img.freepik.com/free-vector/gradient-broken-light-bulb_23-2149143198.jpg?t=st=1721901158~exp=1721904758~hmac=3bedd7dc84fc88b27a8450a6af82127b2d5b5ab9b03aee8de5893f6567b7f024&w=740',
      title: 'History II',
      description: 'GCE 2024',
      status: { title: 'ALEVELS', icon: <TbAntennaBars4 size={20} /> },
      rating: 4.3,
      ratingCount: 78,
    },
    {
      image: 'https://img.freepik.com/free-vector/gradient-broken-light-bulb_23-2149143198.jpg?t=st=1721901158~exp=1721904758~hmac=3bedd7dc84fc88b27a8450a6af82127b2d5b5ab9b03aee8de5893f6567b7f024&w=740',
      title: 'Maths III (Mechanics)',
      description: 'GCE 2023',
      status: { title: 'ALEVELS', icon: <TbAntennaBars4 size={20} /> },
      rating: 4.7,
      ratingCount: 65,
    },
    {
      image: 'https://img.freepik.com/free-vector/gradient-broken-light-bulb_23-2149143198.jpg?t=st=1721901158~exp=1721904758~hmac=3bedd7dc84fc88b27a8450a6af82127b2d5b5ab9b03aee8de5893f6567b7f024&w=740',
      title: 'Biology I',
      description: 'GCE 2024',
      status: { title: 'Beginner', icon: <TbAntennaBars3 size={20} /> },
      rating: 4.4,
      ratingCount: 72,
    },
    {
      image: 'https://img.freepik.com/free-vector/gradient-broken-light-bulb_23-2149143198.jpg?t=st=1721901158~exp=1721904758~hmac=3bedd7dc84fc88b27a8450a6af82127b2d5b5ab9b03aee8de5893f6567b7f024&w=740',
      title: 'Physics III (Tutorials)',
      description: 'GCE 2024',
      status: { title: 'Advanced', icon: <TbAntennaBars5 size={20} /> },
      time: '6 hours',
      rating: 4.8,
      ratingCount: 90,
    },
  ],
  Mock: [
    {
      image: 'https://img.freepik.com/premium-vector/education-seamless-pattern_643500-73.jpg?w=740',
      title: 'Physics, Maths, and Chemistry',
      description: '2 hours to complete',
      status: { title: 'ALEVEL', icon: <TbAntennaBars3 size={20} /> },
      time: '2 hours',
      rating: 4.2,
      ratingCount: 150,
    },
    {
      image: 'https://img.freepik.com/premium-vector/education-seamless-pattern_643500-73.jpg?w=740',
      title: 'Web Development',
      description: '1 hour to complete',
      status: { title: 'Intermediate', icon: <TbAntennaBars4 size={20} /> },
      time: '5 hours',
      rating: 4.6,
      ratingCount: 140,
    },
    {
      image: 'https://img.freepik.com/premium-vector/education-seamless-pattern_643500-73.jpg?w=740',
      title: 'Biology I',
      description: '30 minutes to complete',
      status: { title: 'ALEVELS', icon: <TbAntennaBars3 size={20} /> },
      time: '3 hours',
      rating: 4.3,
      ratingCount: 130,
    },
    {
      image: 'https://img.freepik.com/premium-vector/education-seamless-pattern_643500-73.jpg?w=740',
      title: 'Geography II',
      description: '2 hours to complete',
      status: { title: 'Advanced', icon: <TbAntennaBars5 size={20} /> },
      time: '2 hours',
      rating: 4.7,
      ratingCount: 120,
    },
  ],
 
};

const ResourceCategories = () => {
  return (
    <div className="p-6 rounded-lg font-poppins">
    {Object.keys(ResourceData).map((category) => (
      <div key={category} className="mb-8">
        <h2 className="text-xl text-[#404660] font-medium mb-8 border-b pb-2">{category}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ResourceData[category].map((Resource, index) => (
            <Link to={`/resources/${category.toLowerCase()}/${index}`} key={index}>
              <ResourcesCard
                image={Resource.image}
                title={Resource.title}
                description={Resource.description}
                status={Resource.status}
                time={Resource.time}
                rating={Resource.rating}
                ratingCount={Resource.ratingCount}
              />
            </Link>
          ))}
        </div>
        <Link to={`/resources/${category.toLowerCase()}`}>
          <button className="text-sm text-[#404660] m-auto flex font-medium mt-8 border py-1 px-3 rounded hover:translate-y-[-5px] duration-300">See more</button>
        </Link>
      </div>
    ))}
  </div>
  );
};

export default ResourceCategories;
