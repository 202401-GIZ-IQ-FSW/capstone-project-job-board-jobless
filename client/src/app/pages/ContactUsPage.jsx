import React from 'react';

const ContactUsPage = () => {
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
            <a href="LoginSignUpPage.jsx" className="ml-4 font-semibold text-gray-800 hover:text-blue-500">Sign Up</a>
          </div>
        </div>
      </header>

      <main className="py-12 pt-20">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
          <p className="mb-8 text-lg">Get in touch with us. We're here to assist you in finding the perfect job opportunities.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full p-6 bg-white rounded-md shadow-md md:w-5/12">
              <form id="contactForm">
                <label htmlFor="name" className="block mb-2 font-semibold text-left">Your Full Name</label>
                <input type="text" id="name" name="name" placeholder="Full name" required className="w-full p-3 mb-4 border border-gray-300 rounded-md" />

                <label htmlFor="email" className="block mb-2 font-semibold text-left">Your Email Address</label>
                <input type="email" id="email" name="email" placeholder="yourname@example.com" required className="w-full p-3 mb-4 border border-gray-300 rounded-md" />

                <label htmlFor="subject" className="block mb-2 font-semibold text-left">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Enter a Subject" required className="w-full p-3 mb-4 border border-gray-300 rounded-md" />

                <label htmlFor="message" className="block mb-2 font-semibold text-left">Your Message</label>
                <textarea id="message" name="message" placeholder="Write your message here" rows="5" required className="w-full p-3 mb-4 border border-gray-300 rounded-md"></textarea>

                <button type="submit" className="w-full p-3 text-white bg-blue-500 rounded-md hover:bg-blue-600">Send Message</button>
              </form>
            </div>
            <div className="w-full p-6 bg-white rounded-md shadow-md md:w-5/12">
              <h2 className="mb-4 text-xl font-bold">Call Us</h2>
              <div className="flex items-center mb-4">
                <img src="https://img.icons8.com/color/452/apple-phone.png" className="w-12 h-12 mr-4" alt="Phone" />
                <div>
                  <p><a href="tel:+9640000000000" className="text-blue-500">+964 000 000 0000</a></p>
                  <p><a href="tel:+9640000000000" className="text-blue-500">+964 000 000 0000</a></p>
                </div>
              </div>
              <h2 className="mb-4 text-xl font-bold">Email Us</h2>
              <div className="flex items-center mb-4">
                <img src="https://img.icons8.com/color/344/gmail-new.png" className="w-12 h-12 mr-4" alt="Email" />
                <div>
                  <p><a href="mailto:########@gmail.com" className="text-blue-500">########@gmail.com</a></p>
                  <p><a href="mailto:########@gmail.com" className="text-blue-500">########@gmail.com</a></p>
                </div>
              </div>
              <h2 className="mb-4 text-xl font-bold">Visit Us</h2>
              <p>Erbil, Iraq</p>
              <div className="mt-4">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d107230.40190006781!2d44.00403909287867!3d36.199961404524885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2siq!4v1718571923530!5m2!1sar!2siq" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-md"></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-4 bg-white border-t border-gray-300">
        <div className="container mx-auto text-center">
          <ul className="flex justify-center space-x-6">
            <li><a href="#" className="text-gray-800 hover:text-blue-500">About Us</a></li>
            <li><a href="#" className="text-gray-800 hover:text-blue-500">Contact Us</a></li>
            <li><a href="#" className="text-gray-800 hover:text-blue-500">Terms of Service</a></li>
            <li><a href="#" className="text-gray-800 hover:text-blue-500">Privacy Policy</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default ContactUsPage;
