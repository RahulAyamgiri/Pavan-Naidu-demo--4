import React from 'react';

export default function GlassCard({ children, className = '', hover = true, glow = false, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`
        glass rounded-2xl p-6 transition-all duration-300
        ${hover ? 'glass-hover cursor-pointer' : ''}
        ${glow ? 'glow-gold-hover' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
