import React from 'react';
import ContentLoader from 'react-content-loader';

const AmazonLoader = props => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-10 space-y-8 md:flex-row md:py-20 md:space-y-0 md:space-x-10">
      {/* Image Placeholder */}
      <div className="flex-shrink-0">
        <ContentLoader
          viewBox="0 0 250 300"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
          {...props}
        >
          <rect x="0" y="0" rx="10" ry="10" width="250" height="300" />
        </ContentLoader>
      </div>

      {/* Text Content */}
      <div className="flex flex-col w-full max-w-md space-y-2">
        <ContentLoader
          viewBox="0 0 450 350"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
          {...props}
        >
          {/* Title */}
          <rect x="0" y="0" rx="4" ry="4" width="220" height="25" />
          <rect x="0" y="40" rx="3" ry="3" width="190" height="10" />
          {/* Description lines */}
          <rect x="0" y="80" rx="3" ry="3" width="190" height="10" />
          <rect x="0" y="100" rx="4" ry="4" width="450" height="25" />
          <rect x="0" y="140" rx="3" ry="3" width="190" height="10" />
          <rect x="0" y="160" rx="4" ry="4" width="450" height="25" />
          <rect x="0" y="200" rx="3" ry="3" width="190" height="10" />
          <rect x="0" y="220" rx="4" ry="4" width="450" height="25" />
          <rect x="0" y="280" rx="4" ry="4" width="450" height="40" />
        </ContentLoader>
        <ContentLoader
          viewBox="0 0 300 160"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
          {...props}
        >
          {/* Buttons */}
          <rect x="0" y="5" rx="4" ry="4" width="140" height="30" />
          <rect x="160" y="5" rx="4" ry="4" width="140" height="30" />
          {/* Description line */}
          <rect x="0" y="60" rx="3" ry="3" width="300" height="10" />
        </ContentLoader>
      </div>
    </div>
  );
};

export default AmazonLoader;