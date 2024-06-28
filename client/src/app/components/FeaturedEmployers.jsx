import React from 'react';

const employers = [
  { title: 'Top Jobs', description: 'Exciting opportunities', buttonLabel: 'Search', emoji: '⭐' },
  { title: 'Tech Careers', description: 'In-demand positions', buttonLabel: 'Apply', emoji: '🔍' },
  { title: 'Digital Innovations', description: 'Cutting-edge roles', buttonLabel: 'Discover', emoji: '💼' },
  { title: 'Global', description: 'International job openings', buttonLabel: 'Join', emoji: '🌐' },
];

const FeaturedEmployers = () => {
  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-bold text-center mb-6">Featured Employers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {employers.map((employer, index) => (
          <div 
            key={index} 
            className="p-4 bg-gray-100 rounded-lg flex flex-col items-center text-center border border-transparent hover:border-black hover:bg-gray-200 transition"
          >
            <div className="mb-2 text-3xl">
              {employer.emoji}
            </div>
            <h3 className="text-lg font-semibold mb-1">{employer.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{employer.description}</p>
            <button className="mt-auto px-3 py-1 border border-black text-black text-sm rounded hover:bg-black hover:text-white transition">
              {employer.buttonLabel}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedEmployers;
