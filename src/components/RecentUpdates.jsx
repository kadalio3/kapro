import React from 'react';

const RecentUpdates = () => {
  const updates = [
    { title: 'Novel 1', chapter: 'Chapter 10', author: 'Author 1', updated: '1 jam yang lalu' },
    { title: 'Novel 2', chapter: 'Chapter 5', author: 'Author 2', updated: '1 hari yang lalu' },
    { title: 'Novel 3', chapter: 'Chapter 20', author: 'Author 3', updated: '3 hari yang lalu' },
  ];

  return (
    <div className="recent-updates">
      {updates.map((update, index) => (
        <div key={index} className="update-item flex items-center mb-4">
          <div className="avatar w-16 h-16 bg-gray-300 mr-4"></div>
          <div className="info">
            <h4 className="text-lg font-semibold">{update.title}</h4>
            <p className="text-gray-600">{update.chapter} by {update.author}</p>
            <p className="text-gray-500">{update.updated}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentUpdates;
