import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919876543210?text=Hi%20Pranav%20Naidu%20Travels!%20I%20would%20like%20to%20book%20a%20trip."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 3, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 pulse-gold group"
      style={{ animationName: 'none', boxShadow: '0 0 0 0 rgba(37,211,102,0.4)' }}
    >
      <FaWhatsapp className="text-white text-2xl" />
      <div className="absolute right-full mr-3 px-3 py-1.5 bg-white text-gray-800 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg pointer-events-none">
        Chat with us!
      </div>
      <style>{`
        .group { animation: whatsapp-pulse 2s infinite; }
        @keyframes whatsapp-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.4); }
          50% { box-shadow: 0 0 0 15px rgba(37,211,102,0); }
        }
      `}</style>
    </motion.a>
  );
}
