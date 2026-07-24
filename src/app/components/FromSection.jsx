
"use client";

import { Mail, CheckCircle2, Loader2 } from 'lucide-react';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormSection = () => {
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mbdnzpyg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        e.target.reset(); 
        toast.success("Thank you! Your message has been sent successfully.", {
          position: "top-right",
          autoClose: 4000,
        });
      } else {
        toast.error("Oops! Something went wrong. Please try again.", {
          position: "top-right",
        });
      }
    } catch (err) {
      toast.error("Network error! Please check your connection.", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:col-span-2 bg-white dark:bg-black order-2 lg:order-1 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 p-8 relative">
      <ToastContainer />
      
      <div className="flex items-center gap-3 mb-8">
        <Mail className="text-red-500 w-6 h-6" />
        <h2 className="text-xl font-bold text-gray-800 dark:text-red-500">Send a Message</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 text-sm">
        <div>
          <label className="block text-gray-700 dark:text-orange-500 font-bold mb-2">Your Name *</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-gray-50 dark:bg-slate-500/70 mb-3" 
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-orange-500 font-bold mb-2">Email Address *</label>
          <input 
            type="email" 
            name="email" 
            placeholder="john@example.com"
            required 
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-gray-50 mb-3 dark:bg-slate-500/70" 
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-orange-500 font-bold mb-2">Subject *</label>
          <input
            type="text"
            name="subject"
            placeholder="Project Discussion"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-gray-50 mb-3 dark:bg-slate-500/70"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-orange-500 font-bold mb-2">Your Message *</label>
          <textarea
            name="message"
            rows="4"
            placeholder="Tell me about your project..."
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-gray-50 resize-none mb-3 dark:bg-slate-500/70"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white text-xl font-bold py-3.5 rounded-full transition-colors duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" /> Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default FormSection;