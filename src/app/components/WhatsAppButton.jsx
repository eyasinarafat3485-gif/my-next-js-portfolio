"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppButton() {
    const phoneNumber = "8801960421858";
    const defaultMessage = encodeURIComponent("Hello Eyasin, I would like to inquire about your services.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

    const handleWhatsAppClick = () => {
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <button
            onClick={handleWhatsAppClick}
            type="button"
            aria-label="Contact Eyasin on WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-3.5 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/30 transition-all duration-300 group cursor-pointer border-0 outline-none"
        >
            <FaWhatsapp className="w-7 h-7 text-white" />

            {/* Hover Tooltip */}
            <span className="absolute right-full mr-3 px-3 py-1.5 rounded-md bg-red-500 border border-red-800 text-slate-200 text-xs font-semibold tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
                Eyasin-Web Dev
            </span>
        </button>
    );
}