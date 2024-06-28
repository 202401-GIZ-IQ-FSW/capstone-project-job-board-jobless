import React from 'react';

const jobCategories = [
  { title: 'Finance', count: '1,720 job listings', emoji: '💰' },
  { title: 'Marketing', count: '1,720 job listings', emoji: '📢' },
  { title: 'IT Services', count: '1,720 job listings', emoji: '💻' },
  { title: 'Science', count: '1,720 job listings', emoji: '🔬' },
  { title: 'Tech', count: '1,720 job listings', emoji: '🔧' },
  { title: 'Hospitality', count: '1,720 job listings', emoji: '🍴' },
  { title: 'Sales', count: '1,720 job listings', emoji: '📈' },
  { title: '+10K Job', count: 'Apply Now!', emoji: '💼' },
];

const JobCategories = () => {
  return (
    <div className="container mx-auto py-6 my-20">
      <h2 className="text-2xl font-bold text-center mb-6">Popular Job Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {jobCategories.map((category, index) => (
          <div 
            key={index} 
            className="p-4 bg-gray-100 rounded-lg flex flex-col items-center text-center border border-transparent hover:border-black hover:bg-gray-200 transition"
          >
            <div className="mb-2 text-3xl">
              {category.emoji}
            </div>
            <h3 className="text-lg font-semibold mb-1">{category.title}</h3>
            <p className="text-gray-600 text-sm">{category.count}</p>
            {category.title === '+10K Job' && (
              <button className="mt-2 px-3 py-1 bg-black text-white text-sm rounded">Explore</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategories;

