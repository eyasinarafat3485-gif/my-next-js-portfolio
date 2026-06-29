import { Mail } from 'lucide-react';
import React from 'react';

const FormSection = () => {
    return (
        <div className="lg:col-span-2 bg-white dark:bg-black order-2 lg:order-1 rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-8">
              <Mail className="text-red-500 w-6 h-6" />
              <h2 className="text-xl font-bold text-gray-800 dark:text-red-500">Send a Message</h2>
            </div>

            <form className="space-y-5 text-sm">
              <div>
                <label className="block text-gray-700 dark:text-orange-500 font-bold mb-2">Your Name *</label>
                <input
                  type="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-gray-50 dark:bg-slate-500/70 mb-3" />
              </div>


              <label className="block text-gray-700 dark:text-orange-500 font-bold mb-2">Email Address *</label>
              <div>
                <input type="email" name='email' placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-gray-50 mb-3 dark:bg-slate-500/70" required />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-orange-500 font-bold mb-2">Subject *</label>
                <input
                  type="text"
                  placeholder="Project Discussion"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-gray-50 mb-3 dark:bg-slate-500/70"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-orange-500 font-bold mb-2">Your Message *</label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-gray-50 resize-none mb-3 dark:bg-slate-500/70"
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
    );
};

export default FormSection;


// "use client"; 

// import { Mail } from 'lucide-react';
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const FormSection = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     // সরাসরি আপনার সঠিক আইডিগুলো এখানে বসিয়ে দেওয়া হলো
//     const serviceId = 'service_nhnactk';
//     const templateId = 'template_ini8npk';
//     const publicKey = 'EuAzSp9DXqUjcp2rY';

//     emailjs
//       .sendForm(serviceId, templateId, form.current, publicKey)
//       .then(
//         () => {
//           alert('Message sent successfully! 👍');
//           e.target.reset(); 
//         },
//         (error) => {
//           alert('Failed to send the message.');
//           console.error('EmailJS Error:', error);
//           console.log('Error Detail:', error?.text || JSON.stringify(error));
//         }
//       );
//   };

//   return (
//     <div className="lg:col-span-2 bg-white dark:bg-black order-2 lg:order-1 rounded-2xl shadow-sm border border-gray-100 p-8">
//       <div className="flex items-center gap-3 mb-8">
//         <Mail className="text-red-500 w-6 h-6" />
//         <h2 className="text-xl font-bold text-gray-800 dark:text-red-500">Send a Message</h2>
//       </div>

//       <form ref={form} onSubmit={sendEmail} className="space-y-5 text-sm">
//         <div>
//           <label className="block text-gray-700 dark:text-orange-500 font-bold mb-2">Your Name *</label>
//           <input
//             type="text"
//             name="name" 
//             placeholder="John Doe"
//             required
//             className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-gray-50 dark:bg-slate-500/70 mb-3"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 dark:text-orange-500 font-bold mb-2">Email Address *</label>
//           <input
//             type="email"
//             name="email" 
//             placeholder="john@example.com"
//             required
//             className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-gray-50 mb-3 dark:bg-slate-500/70"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 dark:text-orange-500 font-bold mb-2">Subject *</label>
//           <input
//             type="text"
//             name="subject"
//             placeholder="Project Discussion"
//             required
//             className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-gray-50 mb-3 dark:bg-slate-500/70"
//           />
//         </div>

//         <div>
//           <label className="block text-gray-700 dark:text-orange-500 font-bold mb-2">Your Message *</label>
//           <textarea
//             rows="4"
//             name="message" 
//             placeholder="Tell me about your project..."
//             required
//             className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-gray-50 resize-none mb-3 dark:bg-slate-500/70"
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-red-500 hover:bg-red-600 text-white text-xl font-bold py-3.5 rounded-full transition-colors duration-300 shadow-md cursor-pointer"
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FormSection;