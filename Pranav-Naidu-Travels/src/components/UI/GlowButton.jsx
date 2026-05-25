import React from 'react';

export default function GlowButton({ children, onClick, className = '', variant = 'gold', size = 'md', type = 'button' }) {
  const variants = {
    gold: 'bg-gradient-to-r from-gold-dark via-gold to-gold-light text-obsidian hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]',
    outline: 'border-2 border-gold text-gold hover:bg-gold/10 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]',
    blue: 'bg-gradient-to-r from-blue-600 via-accent-blue to-blue-400 text-white hover:shadow-[0_0_30px_rgba(30,144,255,0.5)]',
    ghost: 'text-white hover:text-gold hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-8 py-3.5 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        font-outfit font-semibold rounded-xl
        transition-all duration-300 transform hover:scale-105 active:scale-95
        relative overflow-hidden shimmer
        ${className}
      `}
    >
      {children}
    </button>
  );
}
