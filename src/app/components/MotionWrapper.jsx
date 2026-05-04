'use client';
import { motion } from 'framer-motion';

const BackgroundMotion = ({ children }) => {
  return (
    <div className="relative overflow-hidden w-full min-h-screen">
      
      {/* 1. Base Layer: Solid Background (সবকিছুর নিচে থাকবে) */}
      {/* আমরা হালকা ব্যাকগ্রাউন্ড ব্যবহার করব যাতে লাল গ্লোটি ভালোমতো ফুটে ওঠে */}
      <div className="absolute inset-0 -z-30 bg-[#faf9fa]" />

      {/* 2. Motion Layer: The BRIGHT and LARGE Red Glow (সেন্টারে থাকবে 🔥) */}
 <motion.div
  className="absolute -z-20 pointer-events-none"
  style={{
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "min(120vw, 1000px)", 
    height: "min(120vw, 1000px)",
    /* ২য় ইমেজের মতো সফট রেড-পিঙ্ক কালার টোন (Color Fix) */
    background: "radial-gradient(circle, rgba(255, 120, 130, 0.6) 0%, rgba(255, 160, 170, 0.2) 40%, transparent 70%)",
    filter: "blur(90px)",
    borderRadius: "50%",
  }}
  animate={{
    scale: [1, 1.15, 1],
    opacity: [0.6, 0.9, 0.6], 
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

      {/* 3. Optional Overlay: To add more depth */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          // এটি সম্পূর্ণ অংশে একটি খুব হালকা লাল আভা দিবে
          background: "linear-gradient(to right, transparent, rgba(255, 0, 0, 0.05) 50%, transparent)",
        }}
      />

      {/* 4. Content Layer */}
      <div className="relative z-10 w-full min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default BackgroundMotion;