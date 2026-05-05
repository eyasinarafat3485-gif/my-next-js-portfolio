import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

const LetsWork = () => {
  return (
    <div id='contact' className="w-[92%] bg-gradient-to-br from-pink-100 via-slate-100 mx-auto my-10 rounded-3xl bg-gray-50 p-6  ">
      <div className="max-auto max-w-6xl ">
        {/* Header Section */}
        <div className="mb-10">
          <p className="text-red-500 font-semibold uppercase tracking-wide text-sm">Get In Touch</p>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            Let,s Work <span className="text-red-500">Together</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Have a MERN, Wordpress or web development project in mind? Feel free to reach out
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Side: Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-8">
              <Mail className="text-red-500 w-6 h-6" />
              <h2 className="text-xl font-bold text-gray-800">Send a Message</h2>
            </div>

            <form className="space-y-5 text-sm">
              <div>
                <label className="block text-gray-700 font-bold mb-2">Your Name *</label>
                <input
                  type="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-gray-50 mb-3" />
              </div>


              <label className="block text-gray-700 font-bold mb-2">Email Address *</label>
              <div>
                <input type="email" name='email' placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-gray-50 mb-3" required />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Subject *</label>
                <input
                  type="text"
                  placeholder="Project Discussion"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-gray-50 mb-3"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Your Message *</label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-gray-50 resize-none mb-3"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white text-xl font-bold py-3.5 rounded-full transition-colors duration-300 shadow-md cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Info Cards */}
          <div className="flex flex-col gap-6">

            {/* Phone Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-[1.5px] border-gray-100 hover:border-red-500 transition-colors duration-500 flex flex-col items-center text-center">
              <div className="bg-red-50 p-3 rounded-full mb-4">
                <Phone className="text-red-500 w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                +880 1304 513475 <br />
                +880 1960 421858 <br />
                <span className="text-xs">Available 8AM - 9PM</span>
              </p>
            </div>

            {/* Email Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-[1.5px] border-gray-100 hover:border-red-500 transition-colors duration-500 flex flex-col items-center text-center">
              <div className="bg-red-50 p-3 rounded-full mb-4">
                <Mail className="text-red-500 w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                eyasinwebdev@gmail.com <br />
                <span className="text-xs">Reply within 24 hours</span>
              </p>
            </div>

            {/* Location Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-[1.5px] border-gray-100 hover:border-red-500 transition-colors duration-500 flex flex-col items-center text-center">
              <div className="bg-red-50 p-3 rounded-full mb-4">
                <MapPin className="text-red-500 w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Mymenshing, Bangladesh <br />
                <span className="text-xs font-medium">Remote Work Available</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsWork;