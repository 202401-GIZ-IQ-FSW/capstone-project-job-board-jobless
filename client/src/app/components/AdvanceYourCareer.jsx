// Install Tailwind CSS following the official guide: https://tailwindcss.com/docs/guides/create-react-app

import React from 'react';

const AdvanceYourCareer = () => {
  return (
    <div className="flex flex-col items-center p-8 mt-32 mb-32">
      <h1 className="text-2xl font-bold mb-8">Advance Your Career</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <div className="text-4xl mb-4">
            <i className="fas fa-briefcase"></i>
          </div>
          <h2 className="text-xl font-semibold mb-2">Explore New Horizons in Employment</h2>
          <p>Insights for growth</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <div className="text-4xl mb-4">
            <i className="fas fa-user-plus"></i>
          </div>
          <h2 className="text-xl font-semibold mb-2">Enhancing Team Productivity</h2>
          <p>Strategies for success</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <div className="text-4xl mb-4">
            <i className="fas fa-smile"></i>
          </div>
          <h2 className="text-xl font-semibold mb-2">Navigating the Tech Job Market</h2>
          <p>Expert advice for success</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <div className="text-4xl mb-4">
            <i className="fas fa-pen"></i>
          </div>
          <h2 className="text-xl font-semibold mb-2">Crafting a Winning Resume</h2>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <div className="text-4xl mb-4">
            <i className="fas fa-money-bill-wave"></i>
          </div>
          <h2 className="text-xl font-semibold mb-2">Salary Comparison</h2>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <div className="text-4xl mb-4">
            <i className="fas fa-calculator"></i>
          </div>
          <h2 className="text-xl font-semibold mb-2">Income Tax Estimator</h2>
        </div>
      </div>
    </div>
  );
}

export default AdvanceYourCareer;
