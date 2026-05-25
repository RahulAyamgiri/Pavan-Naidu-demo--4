import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ title, subtitle, light = false, align = 'center' }) {
  const alignment = {
    center: 'text-center items-center',
    left: 'text-left items-start',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col ${alignment[align]} mb-16`}
    >
      {subtitle && (
        <span className="text-gold text-sm font-semibold tracking-[3px] uppercase mb-4 font-inter">
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-outfit font-bold mb-4 ${light ? 'text-white' : 'gradient-text-gold'}`}>
        {title}
      </h2>
      <div className="gold-divider mt-2" />
    </motion.div>
  );
}
