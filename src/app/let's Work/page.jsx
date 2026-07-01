import React from 'react';
import InfoCard from '../components/InfoCard';
import FormSection from '../components/FromSection';

const LetsWork = () => {
  return (
    <div id='contact' className="w-[92%] bg-gradient-to-br from-pink-100 via-slate-100 dark:from-black dark:via-slate-800 mx-auto my-10 rounded-3xl p-6  ">
      <div className="max-auto max-w-6xl ">
        {/* Header Section */}
        <div className="mb-10">
          <p className="text-black dark:text-orange-500 font-semibold uppercase tracking-wide text-sm">Get In Touch</p>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white light:text-black mt-2 ">
            Let,s Work <span className="text-red-500">Together</span>
          </h1>
          <p className="text-gray-500 dark:text-white/65 light:text-black mt-4 text-lg">
            Have a MERN, Wordpress or web development project in mind? Feel free to reach out
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Side: Contact Form */}
          <FormSection />

          {/* Right Side: Info Cards */}
          <InfoCard />

        </div>
      </div>
    </div>
  );
};

export default LetsWork;