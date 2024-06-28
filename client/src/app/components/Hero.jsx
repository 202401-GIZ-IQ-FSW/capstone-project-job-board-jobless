import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white py-12 pt-40 ">
      <h1 className="text-4xl font-bold text-center mt-30 ">Discover over 5,000 job opportunities</h1>
      <p className="text-lg text-center text-gray-600 mb-6 pb-15">Connect with top companies, find skilled professionals</p>
      <div className="flex items-center space-x-2 mb-4">
        <input 
          type="text" 
          placeholder="What job are you seeking?" 
          className="px-4 py-2 border border-gray-300 rounded w-64"
        />
        <input 
          type="text" 
          placeholder="Enter Job Location" 
          className="px-4 py-2 border border-gray-300 rounded w-64"
        />
        <button className="px-4 py-2 border border-gray-300 rounded bg-gray-200 hover:bg-gray-300">Find</button>
      </div>
      <a href="/advanced-search" className="text-gray-600 underline pb-10">Advanced Job Search</a>
    </div>
  );
};

export default HeroSection;