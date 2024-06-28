import React from "react";


const Navbar = () => {

return (
<nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
    <div className="flex items-center">
      <span role="img" aria-label="briefcase" className="text-xl"></span>
      <a href="/" className="ml-2 text-xl font-bold text-black">JobConnect</a>
    </div>
    <div className="flex space-x-8">
      <a href="/" className="text-black font-medium hover:font-bold">Home</a>
      <a href="/browse" className="text-black font-medium hover:font-bold">Browse</a>
      <a href="/post-job" className="text-black font-medium hover:font-bold">Post Job</a>
      <a href="/search" className="text-black font-medium hover:font-bold">Search</a>
    </div>
    <div>
      <a href="/signin" className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white mr-8 transition-colors duration-300">Sign In</a>
    </div>
  </nav>);
};


export default Navbar;