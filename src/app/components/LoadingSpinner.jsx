"use client";

import React from "react";
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-all duration-300">
      
      {/* Outer Glowing Animated Ring */}
      <div className="relative flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          className="w-20 h-20 rounded-full border-4 border-transparent border-t-orange-500 border-r-red-500 border-b-pink-500 shadow-lg shadow-orange-500/20"
        />

        {/* Inner Counter-Rotating Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
          className="absolute w-12 h-12 rounded-full border-4 border-transparent border-b-pink-400 border-t-orange-400 border-l-red-400"
        />

        {/* Center Glowing Pulse Core */}
        <motion.div
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="absolute w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-md shadow-red-500/50"
        />
      </div>

      {/* Professional Brand Text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-6 text-center"
      >
        <p className="text-sm font-semibold tracking-widest text-slate-800 dark:text-slate-200 uppercase">
          Eyasin<span className="text-red-500">.Dev</span>
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 animate-pulse">
          Loading ...
        </p>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;