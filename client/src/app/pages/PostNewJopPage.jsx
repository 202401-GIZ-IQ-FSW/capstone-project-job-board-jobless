import React, { useState } from 'react';

const JobPostingForm = () => {
    const [formData, setFormData] = useState({
        jobTitle: '',
        jobDescription: '',
        jobType: '',
        jobCategory: '',
        companyName: '',
        companyWebsite: '',
        companyDescription: '',
        linkedinProfile: '',
        twitterProfile: '',
        educationLevel: '',
        experienceYears: '',
        certifications: '',
        skills: '',
        jobLocation: '',
        applicationMethod: '',
        applicationDeadline: ''
    });

    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const saveAsDraft = () => {
        localStorage.setItem('jobDraft', JSON.stringify(formData));
        alert('Draft saved!');
    };

    const previewJobListing = () => {
        setIsPreviewOpen(true);
    };

    const closePreview = () => {
        setIsPreviewOpen(false);
    };

    const submitForm = (e) => {
        e.preventDefault();
        alert('Form submitted for review!');
        // Add form submission logic here
    };

    return (
        <div className="bg-gray-100">
            <header className="fixed top-0 z-50 w-full bg-white shadow-lg">
                <div className="container flex items-center justify-between px-4 py-3 mx-auto">
                    <div className="text-xl font-bold">
                        <a href="#" className="text-gray-800">thejobs</a>
                    </div>
                    <nav>
                        <ul className="flex space-x-2 text-sm">
                            <li><a href="#" className="text-gray-800 hover:text-blue-500">Home</a></li>
                            <li><a href="#" className="text-gray-800 hover:text-blue-500">Jobs</a></li>
                            <li><a href="#" className="text-gray-800 hover:text-blue-500">Explore</a></li>
                            <li><a href="#" className="text-gray-800 hover:text-blue-500">Company</a></li>
                            <li><a href="#" className="text-gray-800 hover:text-blue-500">Contact Us</a></li>
                        </ul>
                    </nav>
                    <div>
                        <a href="LoginSignUpPage.html" className="ml-2 text-sm font-semibold text-gray-800 hover:text-blue-500">Sign Up</a>
                    </div>
                </div>
            </header>

            <main className="container px-4 py-20 mx-auto">
                <h1 className="mb-4 text-xl font-bold">Post a Job</h1>
                <form onSubmit={submitForm}>
                    {/* Job Details */}
                    <div className="mb-4">
                        <h2 className="mb-2 text-lg font-semibold">Job Details</h2>
                        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                            <input id="jobTitle" type="text" placeholder="Job Title" className="w-full p-2 text-sm border rounded" value={formData.jobTitle} onChange={handleChange} />
                            <input id="jobDescription" type="text" placeholder="Job Description" className="w-full p-2 text-sm border rounded" value={formData.jobDescription} onChange={handleChange} />
                            <select id="jobType" className="w-full p-2 text-sm border rounded" value={formData.jobType} onChange={handleChange}>
                                <option value="">Job Type</option>
                                <option value="full_time">Full Time</option>
                                <option value="part_time">Part Time</option>
                                <option value="contract">Contract</option>
                                <option value="freelance">Freelance</option>
                                <option value="internship">Internship</option>
                                <option value="temporary">Temporary</option>
                                <option value="remote">Remote</option>
                                <option value="volunteer">Volunteer</option>
                            </select>
                            <input id="jobCategory" type="text" placeholder="Job Category" className="w-full p-2 text-sm border rounded" value={formData.jobCategory} onChange={handleChange} />
                        </div>
                    </div>

                    {/* Company Information */}
                    <div className="mb-4">
                        <h2 className="mb-2 text-lg font-semibold">Company Information</h2>
                        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                            <input id="companyName" type="text" placeholder="Company Name" className="w-full p-2 text-sm border rounded" value={formData.companyName} onChange={handleChange} />
                            <input id="companyWebsite" type="text" placeholder="Company Website" className="w-full p-2 text-sm border rounded" value={formData.companyWebsite} onChange={handleChange} />
                            <input id="companyDescription" type="text" placeholder="Company Description" className="w-full p-2 text-sm border rounded" value={formData.companyDescription} onChange={handleChange} />
                            <input id="linkedinProfile" type="text" placeholder="LinkedIn Profile" className="w-full p-2 text-sm border rounded" value={formData.linkedinProfile} onChange={handleChange} />
                            <input id="twitterProfile" type="text" placeholder="Twitter Profile" className="w-full p-2 text-sm border rounded" value={formData.twitterProfile} onChange={handleChange} />
                        </div>
                    </div>

                    {/* Job Requirements */}
                    <div className="mb-4">
                        <h2 className="mb-2 text-lg font-semibold">Job Requirements</h2>
                        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                            <input id="educationLevel" type="text" placeholder="Minimum Education Level" className="w-full p-2 text-sm border rounded" value={formData.educationLevel} onChange={handleChange} />
                            <input id="experienceYears" type="text" placeholder="Years of Experience" className="w-full p-2 text-sm border rounded" value={formData.experienceYears} onChange={handleChange} />
                            <input id="certifications" type="text" placeholder="Required Certifications" className="w-full p-2 text-sm border rounded" value={formData.certifications} onChange={handleChange} />
                            <input id="skills" type="text" placeholder="Required Skills" className="w-full p-2 text-sm border rounded" value={formData.skills} onChange={handleChange} />
                        </div>
                    </div>

                    {/* Location & Application */}
                    <div className="mb-4">
                        <h2 className="mb-2 text-lg font-semibold">Location & Application</h2>
                        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                            <input id="jobLocation" type="text" placeholder="Job Location" className="w-full p-2 text-sm border rounded" value={formData.jobLocation} onChange={handleChange} />
                            <select id="applicationMethod" className="w-full p-2 text-sm border rounded" value={formData.applicationMethod} onChange={handleChange}>
                                <option value="">Application Method</option>
                                <option value="email">Email</option>
                                <option value="phone">Phone</option>
                            </select>
                            <input id="applicationDeadline" type="text" placeholder="Application Deadline" className="w-full p-2 text-sm border rounded" value={formData.applicationDeadline} onChange={handleChange} />
                        </div>
                    </div>

                    {/* Submission Options */}
                    <div className="flex flex-col gap-2 md:flex-row md:justify-between">
                        <button type="button" onClick={saveAsDraft} className="w-full px-3 py-2 text-sm text-white bg-gray-500 rounded md:w-auto">Save as Draft</button>
                        <button type="button" onClick={previewJobListing} className="w-full px-3 py-2 text-sm text-white bg-gray-500 rounded md:w-auto">Preview Job Listing</button>
                        <button type="submit" className="w-full px-3 py-2 text-sm text-white bg-blue-500 rounded md:w-auto">Submit for Review</button>
                    </div>
                </form>
            </main>

            <footer className="mb-10 text-center">
                <p className="text-sm text-gray-600">© 2024 thejobs</p>
                <p className="text-sm text-gray-600">All Rights Reserved</p>
                <div className="flex justify-center space-x-2 text-sm">
                  {/*  <a href="#" className="text-gray-600 hover:text-gray-800">
                        <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 24 24"><path d="M22.725 0H1.275C.57 0 0 .57 0 1.275v21.449C0 23.43.57 24 1.275 24h11.544v-9.326H9.845v-3.632h2.974V8.533c0-2.953 1.8-4.562 4.429-4.562 1.259 0 2.343.093 2.658.136v3.083h-1.825c-1.432 0-1.708.679-1.708 1.677v2.195h3.412l-.445 3.632h-2.967V24h5.821c.704 0 1.275-.57 1.275-1.275V1.275C24 .57 23.43 0 22.725 0z"/></svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                        <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 24 24"><path d="M12 2.163c-5.46 0-9.86 4.4-9.86 9.84 0 4.323 2.792 7.976 6.604 9.292.483.09.66-.208.66-.467 0-.232-.009-.848-.014-1.664-2.689.584-3.256-1.292-3.256-1.292-.44-1.118-1.074-1.417-1.074-1.417-.878-.6.067-.588.067-.588.97.067 1.479.997 1.479.997.863 1.48 2.264 1.052 2.816.804.088-.625.338-1.052.616-1.294-2.147-.243-4.404-1.074-4.404-4.781 0-1.057.375-1.918.989-2.594-.1-.243-.429-1.222.094-2.547 0 0 .811-.26 2.654.99.769-.214 1.59-.321 2.408-.325.818.004 1.639.111 2.408.325 1.842-1.25 2.652-.99 2.652-.99.525 1.325.195 2.304.097 2.547.617.676.988 1.537.988 2.594 0 3.718-2.261 4.534-4.413 4.772.347.301.659.894.659 1.803 0 1.302-.012 2.351-.012 2.674 0 .261.175.561.665.466C19.068 20.001 22 16.325 22 11.999 22 6.563 17.54 2.163 12 2.163z"/></svg>
                    </a>*/}
                </div>
            </footer>

            {/* Preview Modal */}
            {isPreviewOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="w-11/12 p-5 bg-white rounded-lg shadow-lg md:w-1/2">
                        <h2 className="mb-4 text-xl font-bold">Job Listing Preview</h2>
                        <div id="previewContent">
                            {Object.keys(formData).map((key) => (
                                <p key={key}><strong>{key}:</strong> {formData[key]}</p>
                            ))}
                        </div>
                        <button onClick={closePreview} className="px-4 py-2 mt-4 text-white bg-gray-500 rounded">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobPostingForm;
