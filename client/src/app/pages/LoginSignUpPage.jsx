import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Load the Google and Facebook SDKs
    const loadGoogleSDK = () => {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/platform.js';
      script.async = true;
      document.body.appendChild(script);
    };

    const loadFacebookSDK = () => {
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js';
      script.async = true;
      script.onload = () => {
        window.FB.init({
          appId: 'YOUR_FACEBOOK_APP_ID',
          cookie: true,
          xfbml: true,
          version: 'v10.0'
        });
      };
      document.body.appendChild(script);
    };

    loadGoogleSDK();
    loadFacebookSDK();
  }, []);

  const googleSignIn = () => {
    window.gapi.load('auth2', () => {
      const auth2 = window.gapi.auth2.init({
        client_id: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com'
      });
      auth2.signIn().then(googleUser => {
        const id_token = googleUser.getAuthResponse().id_token;
        console.log(id_token);
        // Send the token to your server for verification and sign-in
      });
    });
  };

  const facebookSignIn = () => {
    window.FB.login(response => {
      if (response.authResponse) {
        window.FB.api('/me', { fields: 'name, email' }, response => {
          console.log(response);
          // Send the response to your server for verification and sign-in
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, { scope: 'public_profile,email' });
  };

  const instagramSignIn = () => {
    const client_id = 'YOUR_INSTAGRAM_CLIENT_ID';
    const redirect_uri = 'YOUR_REDIRECT_URI';
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=user_profile,user_media&response_type=code`;
    window.location.href = authUrl;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
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
            <a href="#" className="ml-4 font-semibold text-gray-800 hover:text-blue-500">Sign Up</a>
          </div>
        </div>
      </header>

      {/* Sign Up Form */}
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
            <button id="facebookBtn" onClick={facebookSignIn} className="w-1/3 p-2 text-sm text-white bg-blue-800 rounded-md hover:bg-blue-900">Facebook</button>
            <button id="instagramBtn" onClick={instagramSignIn} className="w-1/3 p-2 text-sm text-white bg-pink-500 rounded-md hover:bg-pink-600">Instagram</button>
          </div>

          <div className="mt-4 text-base text-center">
            <p>Create an Account for Exclusive Benefits!</p>
            <p>Join us to access personalized content, special offers, and more.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
