'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ViewWorkButton = () => {
    return (
        <motion.button 
            initial="initial" 
            whileHover="hover" 
            animate="initial"
            className="group relative cursor-pointer flex items-center gap-3 px-5 py-3 bg-white text-orange-700 font-bold text-[17px] rounded-full border-2 hover:border-red-600 overflow-hidden shadow-lg transition-all"
        >
            {/* Background Animation Layer */}
            <motion.div 
                variants={{ 
                    initial: { y: "100%" }, 
                    hover: { y: 0 } 
                }} 
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 bg-orange-700 z-0"
            />

            {/* Text Content */}
            <motion.span 
                variants={{ 
                    initial: { color: "#c2410c" }, // text-orange-700
                    hover: { color: "#FFFFFF" } 
                }}
                className="relative z-10"
            >
                View My Work
            </motion.span>

            {/* Arrow Icon Animation */}
            <div className="relative z-10 w-5 h-5 overflow-hidden">
                <motion.div 
                    variants={{ 
                        initial: { x: 0, color: "#c2410c" }, 
                        hover: { x: 40 } 
                    }} 
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <ArrowRight size={22} />
                </motion.div>

                <motion.div 
                    variants={{ 
                        initial: { x: -40 },
                        hover: { x: 0 }
                    }} 
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center text-white"
                >
                    <ArrowRight size={22} />
                </motion.div>
            </div>
        </motion.button>
    );
};

export default ViewWorkButton;