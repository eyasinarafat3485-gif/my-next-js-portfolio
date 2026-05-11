'use client';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const DownloadButton = () => {
    const handleDownloadCv = () => {
        const cvUrl = "/Full Stack Dev .pdf";

        const link = document.createElement("a");
        link.href = cvUrl;

        link.setAttribute("download", "Eyasin_Arafat_CV.pdf");

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <motion.button onClick={() => handleDownloadCv()} initial="initial" whileHover="hover" animate="initial"
            className="group relative cursor-pointer flex items-center gap-3 px-5.5 py-3 bg-[#EF4444] text-white font-bold text-[17px]  rounded-full border-2 border-[#EF4444] overflow-hidden transition-colors duration-300 shadow-lg" >

            <motion.div variants={{ initial: { x: "-100%" }, hover: { x: 0 } }} transition={{ duration: 0.4, ease: "easeInOut" }}className="absolute inset-0 bg-white z-0"/>

            <div className="relative z-10 w-5 h-5 overflow-hidden">
                <motion.div variants={{ initial: { y: 0 }, hover: { y: 30 } }} transition={{ duration: 0.3 }}className="absolute inset-0 flex items-center justify-center" >
                    <Download size={20} />
                </motion.div>

                <motion.div variants={{ initial: { y: -30 },hover: { y: 0 }}} transition={{ duration: 0.3 }}className="absolute inset-0 flex items-center justify-center text-[#EF4444]">
                    <Download size={20} />
                </motion.div>
            </div>

            <motion.span variants={{ initial: { color: "#FFFFFF" }, hover: { color: "#EF4444" } }}className="relative z-10" >
                Download CV
            </motion.span>
        </motion.button>
    );
};

export default DownloadButton;