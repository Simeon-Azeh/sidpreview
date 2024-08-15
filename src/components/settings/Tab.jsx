// src/components/Tab.jsx
import React, { useState } from 'react';

function Tab({ tabs, children }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex">
      <div className="flex flex-col border-r pr-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`p-4 text-left ${
              index === activeTab ? 'text-[#9835ff] border-b-2 border-[#9835ff] border-solid' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-4 flex-1">
        {children.map((child, index) => (
          <div key={index} className={index === activeTab ? 'block' : 'hidden'}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tab;
