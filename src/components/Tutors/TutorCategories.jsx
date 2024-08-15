import React from 'react';
import { Link } from 'react-router-dom';
import { TbAntennaBars5, TbAntennaBars4, TbAntennaBars3 } from 'react-icons/tb';
import TutorCard from '../../components/Tutors/TutorCard';

const TutorData = {
  Science: [
    {
        image: 'https://img.freepik.com/free-photo/portrait-attractive-dark-skinned-student-wearing-checkered-shirt-with-confident-joyful-expression-standing-chalkboard-wall_273609-5907.jpg',
        title: 'Foryoung Junior',
        description: 'WEB development | Computer Science',
        status: { title: 'ALEVEL | OLEVEL', icon: <TbAntennaBars4 size={20} /> },
        rating: 4.2,
        ratingCount: 51,
        verifiedStatus: true,
      },
      {
        image: 'https://img.freepik.com/free-photo/smiling-young-afro-american-student-with-backpack-holding-arrow-pointing-up-thumbing-up_141793-123003.jpg?t=st=1721979051~exp=1721982651~hmac=d2961972fdcc144544bec1e25f0d912e2e0b8056bdf6e63e1a68368f54dd3d9c&w=740',
        title: 'Alain Jeff',
        description: 'Physics | Maths |  Mechanics',
        status: { title: 'ALEVEL', icon: <TbAntennaBars4 size={20} /> },
        rating: 4.5,
        ratingCount: 95,
      },
      {
        image: 'https://img.freepik.com/free-photo/smiley-man-work-medium-shot_23-2149741161.jpg?t=st=1721979433~exp=1721983033~hmac=0b9723486a3f9dc51a578adbce7d00091e4b53df07308dea7a8657d19f657573&w=360',
        title: 'Jesse Nfor',
        description: 'Chemisty',
        status: { title: 'OLEVEL', icon: <TbAntennaBars3 size={20} /> },
        rating: 4.1,
        ratingCount: 110,
        verifiedStatus: true,
      },
      {
        image: 'https://img.freepik.com/free-photo/african-woman-successful-entrepreneur-wearing-glasses-face-portrait_53876-148050.jpg?t=st=1721979719~exp=1721983319~hmac=77100b3a66927cc25412472b05a908ee6ad81a4abfdb931008fe2174360240ae&w=740',
        title: 'Fonui Solange',
        description: 'Biolgy | Zoology',
        status: { title: 'ALEVEL', icon: <TbAntennaBars5 size={20} /> },
        rating: 4.6,
        ratingCount: 85,
        verifiedStatus: true,
      },
  ],
 Arts: [
    {
      image: 'https://img.freepik.com/free-photo/portrait-african-american-model_23-2149072141.jpg?t=st=1721980298~exp=1721983898~hmac=52688279fd33cf6f6f7a03e3cbff1c8d5307e8ddbe1751800e342fbd842b1b5c&w=360',
      title: 'Akong Fred',
      description: 'History',
      status: { title: 'ALEVEL', icon: <TbAntennaBars4 size={20} /> },
      rating: 4.3,
      ratingCount: 78,
    },
    {
      image: 'https://img.freepik.com/free-photo/front-view-smiley-woman-home_23-2150401916.jpg?t=st=1721980365~exp=1721983965~hmac=3246f120378203a30698760147353f0763e63d3aa60418ff2927b5cd4018ee22&w=360',
      title: 'Susan Eunice',
      description: 'Economics',
      status: { title: 'ALEVEL', icon: <TbAntennaBars4 size={20} /> },
      rating: 4.7,
      ratingCount: 65,
      verifiedStatus: true,
    },
    {
      image: 'https://img.freepik.com/free-photo/medium-shot-man-doing-math-indoors_23-2150444904.jpg?t=st=1721980527~exp=1721984127~hmac=9470a09d5afc4297df48215d655af3220e3d9fd341d3bbff9908c16b4e4b395d&w=360',
      title: 'James Henry',
      description: 'Geography | Maths Statistics',
      status: { title: 'OLEVEL', icon: <TbAntennaBars3 size={20} /> },
      rating: 4.4,
      ratingCount: 72,
    },
    {
      image: 'https://img.freepik.com/free-photo/attractive-young-african-american-man-wearing-trendy-black-glasses-hat-spending-weekend-morning-home-sitting-living-room-watching-world-news-tv-having-serious-look_273609-1047.jpg?t=st=1721980637~exp=1721984237~hmac=4a722537dbb2037fb92d5d403556aa5a7cb63a671969349f6e633be8be2088fc&w=740',
      title: 'Mathew Nfor',
      description: 'History',
      status: { title: 'ALEVELS', icon: <TbAntennaBars5 size={20} /> },
      time: '6 hours',
      rating: 4.8,
      ratingCount: 90,
      verifiedStatus: true,
    },
  ],
  Technology: [
    {
      image: 'https://img.freepik.com/free-photo/front-view-man-looking-away_23-2148291498.jpg?t=st=1721981282~exp=1721984882~hmac=92e2b1f706ecc4e5340c709ed4f189adfcb0d28d131f6bfe51a557cafab8923e&w=360',
      title: 'Simeon Kongnyuy',
      description: 'HTML | CSS | Javascript',
      status: { title: 'Beginners', icon: <TbAntennaBars3 size={20} /> },
      time: '2 hours',
      rating: 4.2,
      ratingCount: 150,
    },
    {
      image: 'https://img.freepik.com/free-photo/portrait-smiling-african-american-entrepreneur-man-browsing-management-information_482257-22673.jpg?t=st=1721981233~exp=1721984833~hmac=c1673ee9b9a8918d25a487bba542e1a01f9c9491826226a26d1d66cefc750331&w=360',
      title: 'Alain Michael',
      description: 'Python | Java | C++',
      status: { title: 'Intermediate', icon: <TbAntennaBars4 size={20} /> },
      time: '5 hours',
      rating: 4.6,
      ratingCount: 140,
    },
   
  ],
};

const TutorCategories = () => {
  return (
    <div className="p-6 rounded-lg font-poppins">
      {Object.keys(TutorData).map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-xl text-[#404660] font-medium mb-8 border-b pb-2">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TutorData[category].map((Tutor, index) => (
              <Link to={`/tutors/${category.toLowerCase()}/${index}`} key={index}>
                <TutorCard
                  image={Tutor.image}
                  title={Tutor.title}
                  description={Tutor.description}
                  status={Tutor.status}
                  time={Tutor.time}
                  rating={Tutor.rating}
                  ratingCount={Tutor.ratingCount}
                  verifiedStatus={Tutor.verifiedStatus}  // Passing verifiedStatus here
                />
              </Link>
            ))}
          </div>
          <Link to={`/tutors/${category.toLowerCase()}`}>
            <button className="text-sm text-[#404660] m-auto flex font-medium mt-8 border py-1 px-3 rounded hover:translate-y-[-5px] duration-300">See more</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TutorCategories;
