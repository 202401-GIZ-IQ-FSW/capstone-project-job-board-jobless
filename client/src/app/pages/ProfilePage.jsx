import React, { useState } from 'react';

const ProfilePage = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleEditProfile = () => {
        alert("Edit Profile button clicked");
    };

    const handleRemoveJob = (jobTitle) => {
        alert(`Remove button clicked for ${jobTitle}`);
    };

    const handleSearch = () => {
        alert(`Search for jobs: ${searchQuery}`);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <header className="fixed top-0 z-50 w-full bg-white shadow-lg">
                <div className="container flex flex-col items-center justify-between px-4 py-3 mx-auto md:flex-row">
                    <div className="text-xl font-bold">
                        <a href="#" className="text-gray-800">thejobs</a>
                    </div>
                    <nav className="mt-2 md:mt-0">
                        <ul className="flex flex-col space-y-2 text-sm md:flex-row md:space-y-0 md:space-x-2">
                            <li><a href="#" className="text-gray-800 hover:text-blue-500">Home</a></li>
                            <li><a href="#" className="text-gray-800 hover:text-blue-500">Jobs</a></li>
                            <li><a href="#" className="text-gray-800 hover:text-blue-500">Explore</a></li>
                            <li><a href="#" className="text-gray-800 hover:text-blue-500">Company</a></li>
                            <li><a href="#" className="text-gray-800 hover:text-blue-500">Contact Us</a></li>
                        </ul>
                    </nav>
                    <div className="flex flex-col mt-2 space-y-2 md:flex-row md:mt-0 md:space-y-0 md:space-x-4">
                        <input
                            type="text"
                            placeholder="Search for jobs"
                            className="w-full p-2 text-sm border rounded md:w-64"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="p-2 text-sm text-white bg-blue-500 rounded" onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container px-4 py-20 pt-24 mx-auto">
                <div className="w-full max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-lg">
                    <div className="flex flex-col mb-8 space-y-4 md:flex-row md:space-y-0 md:space-x-6">
                        <img src="path/to/profile-image.jpg" alt="Profile" className="self-center w-24 h-24 rounded-full md:self-auto" />
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-bold">John Doe</h2>
                            <p className="text-gray-600">Front-end Developer</p>
                            <p className="text-gray-600">New York, USA</p>
                            <button className="p-2 mt-2 text-sm text-white bg-blue-500 rounded" onClick={handleEditProfile}>
                                Edit Profile
                            </button>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold">Application History</h3>
                        <div className="mt-4 space-y-4">
                            <div className="flex flex-col justify-between md:flex-row">
                                <div className="flex-1">
                                    <h4 className="font-semibold">Front-end Developer</h4>
                                    <p className="text-gray-600">Company: ABC Inc.</p>
                                    <p className="text-gray-600">Applied on: 01/10/2022</p>
                                </div>
                                <div className="flex-1 text-center md:text-right">
                                    <p className="text-gray-600">Status: Under Review</p>
                                    <p className="text-gray-600">Interviews: 2</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between md:flex-row">
                                <div className="flex-1">
                                    <h4 className="font-semibold">UX Designer</h4>
                                    <p className="text-gray-600">Company: XYZ Corp.</p>
                                    <p className="text-gray-600">Applied on: 12/20/2021</p>
                                </div>
                                <div className="flex-1 text-center md:text-right">
                                    <p className="text-gray-600">Status: Rejected</p>
                                    <p className="text-gray-600">Interviews: 0</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold">Saved Jobs</h3>
                        <div className="mt-4 space-y-4">
                            <div className="flex flex-col items-center justify-between md:flex-row">
                                <div className="flex-1">
                                    <h4 className="font-semibold">Back-end Developer</h4>
                                    <p className="text-gray-600">Company: RST Solutions</p>
                                    <p className="text-gray-600">Location: San Francisco, USA</p>
                                </div>
                                <button className="p-2 mt-2 text-sm text-white bg-red-500 rounded md:mt-0" onClick={() => handleRemoveJob("Back-end Developer")}>
                                    Remove
                                </button>
                            </div>
                            <div className="flex flex-col items-center justify-between md:flex-row">
                                <div className="flex-1">
                                    <h4 className="font-semibold">Marketing Manager</h4>
                                    <p className="text-gray-600">Company: MarketingPro</p>
                                    <p className="text-gray-600">Location: London, UK</p>
                                </div>
                                <button className="p-2 mt-2 text-sm text-white bg-red-500 rounded md:mt-0" onClick={() => handleRemoveJob("Marketing Manager")}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-4 text-center bg-white">
                <div className="text-sm text-gray-600">
                    <a href="#" className="hover:underline">About Us</a> |
                    <a href="#" className="hover:underline">Contact Us</a> |
                    <a href="#" className="hover:underline">Terms of Service</a> |
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </div>
                <div className="flex justify-center mt-2 space-x-4">
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                        <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 24 24">
                            <path d="M24 4.557a9.835 9.835 0 01-2.828.775 4.932 4.932 0 002.165-2.723 9.864 9.864 0 01-3.127 1.195 4.917 4.917 0 00-8.389 4.482A13.944 13.944 0 011.671 3.149 4.908 4.908 0 003.127 9.86 4.902 4.902 0 01.965 9.041v.062a4.917 4.917 0 003.946 4.827 4.897 4.897 0 01-2.212.084 4.919 4.919 0 004.604 3.417A9.862 9.862 0 010 21.542a13.933 13.933 0 007.548 2.212c9.142 0 14.307-7.721 14.307-14.418 0-.219-.005-.437-.014-.654A10.23 10.23 0 0024 4.557z" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                        <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 24 24">
                            <path d="M22.725 0H1.275C.57 0 0 .57 0 1.275v21.449C0 23.43.57 24 1.275 24h11.544v-9.326H9.845v-3.632h2.974V8.533c0-2.953 1.8-4.562 4.429-4.562 1.259 0 2.343.093 2.658.136v3.083h-1.825c-1.432 0-1.708.679-1.708 1.677v2.195h3.412l-.445 3.632h-2.967V24h5.821c.704 0 1.275-.57 1.275-1.275V1.275C24 .57 23.43 0 22.725 0z" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                        <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 24 24">
                            <path d="M12 2.163c-5.46 0-9.86 4.4-9.86 9.84 0 4.323 2.792 7.976 6.604 9.292.483.09.66-.208.66-.467 0-.232-.009-.848-.014-1.664-2.689.584-3.256-1.292-3.256-1.292-.44-1.118-1.074-1.417-1.074-1.417-.878-.6.067-.588.067-.588.97.067 1.479.997 1.479.997.863 1.481 2.266 1.054 2.819.807.09-.625.337-1.054.613-1.295-2.145-.244-4.402-1.073-4.402-4.77 0-1.054.375-1.918.993-2.593-.099-.245-.43-1.224.094-2.55 0 0 .812-.26 2.66.993.772-.214 1.602-.32 2.427-.324.825.004 1.656.11 2.428.324 1.848-1.253 2.66-.993 2.66-.993.525 1.326.193 2.305.094 2.55.62.675.993 1.54.993 2.593 0 3.707-2.261 4.524-4.416 4.763.348.297.657.888.657 1.79 0 1.293-.012 2.335-.012 2.65 0 .261.176.56.664.465 3.81-1.317 6.598-4.969 6.598-9.291 0-5.44-4.4-9.84-9.86-9.84z" />
                        </svg>
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default ProfilePage;
