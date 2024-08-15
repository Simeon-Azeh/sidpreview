import React from 'react';

const SharedPhotos = () => {
  const photos = [
    'https://img.freepik.com/free-photo/beautiful-landscape_1232-2292.jpg',
    'https://img.freepik.com/free-photo/mountains-landscape_1232-1833.jpg',
    'https://img.freepik.com/free-photo/sea-view_1232-3567.jpg',
    'https://img.freepik.com/free-photo/forest-trail_1232-2342.jpg',
    'https://img.freepik.com/free-photo/forest-trail_1232-2342.jpg'
  ];

  return (
    <div className="overflow-hidden rounded-lg">
      <h2 className="text-xl font-medium text-[#404660] mb-2">Shared Photos</h2>
      <div className="relative">
        <div className="md:grid  md:grid-cols-2  md:gap-1 mb-4 py-2 px-4 flex flex-col gap-2">
          {photos.slice(0, 3).map((photo, index) => (
            <div key={index} className="relative md:w-20 md:h-20 w-[80%] mx-auto md:flex-shrink-0">
              <img
                src={photo}
                alt={`Shared ${index}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
          {photos.length > 3 && (
            <div className="absolute bottom-2.5 right-5 md:w-20 md:h-20 w-[60%] h-48 bg-[#404660] text-white rounded-lg flex items-center justify-center text-sm">
              +{photos.length - 3} more
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SharedPhotos;
