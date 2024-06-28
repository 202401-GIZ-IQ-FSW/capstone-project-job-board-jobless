import React from 'react';

const profileSections = [
  {
    title: 'Profile Settings',
    items: ['Member since 2018'],
  },
  {
    title: 'Edit profile',
    items: ['Account details', 'Job Opportunities', 'Contact Support', 'Company News'],
  },
  {
    title: 'Community',
    items: ['Support Center', 'Upgrade to Premium'],
  },
  {
    title: 'Connect with us',
    items: ['LinkedIn', 'Facebook', 'Twitter'],
  },
];

const ProfileSettings = () => {
  return (
    <div className="container mx-auto py-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {profileSections.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
            <ul>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-gray-600 mb-1">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSettings;
