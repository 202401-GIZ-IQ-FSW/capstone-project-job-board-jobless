import React from 'react';

const LoginSignUpPage = () => {
  const googleSignIn = () => {
    // Placeholder for Google sign-in functionality
    console.log('Google sign-in clicked');
  };

  const loginWithFacebook = () => {
    // Placeholder for Facebook sign-in functionality
    console.log('Facebook sign-in clicked');
  };

  const loginWithTwitter = () => {
    // Placeholder for Twitter sign-in functionality
    console.log('Twitter sign-in clicked');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="fixed top-0 z-50 w-full bg-white shadow-lg">
        <div className="container flex items-center justify-between px-4 py-3 mx-auto">
          <div className="text-2xl font-bold">
            <a href="#" className="text-gray-800">thejobs</a>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-800 hover:text-blue-500">Home</a></li>
              <li><a href="#" className="text-gray-800 hover:text-blue-500">Jobs</a></li>
              <li><a href="#" className="text-gray-800 hover:text-blue-500">Explore</a></li>
              <li><a href="#" className="text-gray-800 hover:text-blue-500">Company</a></li>
              <li><a href="#" className="text-gray-800 hover:text-blue-500">Contact Us</a></li>
            </ul>
          </nav>
          <div>
            <a href="LoginSignUpPage.html" className="ml-4 font-semibold text-gray-800 hover:text-blue-500">Sign Up</a>
          </div>
        </div>
      </header>

      <div className="flex items-center justify-center min-h-screen pt-20">
        <div className="w-full max-w-sm p-6 mt-10 bg-white rounded-lg shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-center">Sign Up</h2>
          <form action="/submit_signup" method="post">
            <label htmlFor="name" className="block mb-1 text-base font-medium text-left">Full Name *</label>
            <input type="text" id="name" name="fullname" required className="w-full p-2 mb-3 text-base border border-gray-300 rounded-md" />

            <label htmlFor="email" className="block mb-1 text-base font-medium text-left">Email Address *</label>
            <input type="email" id="email" name="email" required className="w-full p-2 mb-3 text-base border border-gray-300 rounded-md" />

            <label htmlFor="password" className="block mb-1 text-base font-medium text-left">Password *</label>
            <input type="password" id="password" name="password" required className="w-full p-2 mb-3 text-base border border-gray-300 rounded-md" />

            <label htmlFor="confirm-password" className="block mb-1 text-base font-medium text-left">Confirm Password *</label>
            <input type="password" id="confirm-password" name="confirm-password" required className="w-full p-2 mb-3 text-base border border-gray-300 rounded-md" />

            <input type="submit" value="Sign Up" className="w-full p-3 text-base text-white bg-green-500 rounded-md cursor-pointer hover:bg-green-600" />
          </form>

          <p className="mt-4 text-sm text-center">
            By signing up, you agree to our <a href="#" className="text-blue-500 hover:underline">Terms</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
          </p>
          <p className="my-4 text-base text-center">OR Login With</p>
          <div className="flex justify-between mb-4 space-x-2">
            <button id="googleBtn" onClick={googleSignIn} className="w-1/3 p-2 text-sm text-white bg-red-600 rounded-md hover:bg-red-700">Google</button>
            <button id="facebookBtn" onClick={loginWithFacebook} className="w-1/3 p-2 text-sm text-white bg-blue-800 rounded-md hover:bg-blue-900">Facebook</button>
            <button id="twitterBtn" onClick={loginWithTwitter} className="w-1/3 p-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600">Twitter</button>
          </div>

          <div className="mt-4 text-base text-center">
            <p>Create an Account for Exclusive Benefits!</p>
            <p>Join us to access personalized content, special offers, and more.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUpPage;
