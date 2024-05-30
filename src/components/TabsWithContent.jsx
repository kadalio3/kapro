import React, { useState } from 'react';

const TabsWithContent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Kategori 1', 'Kategori 2', 'Kategori 3'];

  return (
    <div className="tabs">
      <div className="tab-list flex space-x-4 mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div key={index} className={`tab-panel ${activeTab === index ? 'block' : 'hidden'}`}>
            <div className="card">
              <img src={`https://via.placeholder.com/200x300?text=Novel+${index + 1}`} alt={`Novel ${index + 1}`} />
              <h3 className="text-lg font-semibold mt-2">Novel Title {index + 1}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsWithContent;
