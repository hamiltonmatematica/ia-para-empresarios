import React from 'react';

export const CircleDecor: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`absolute rounded-full bg-brand-orange ${className}`} />
);

export const SemiCircleDecor: React.FC<{ className?: string; rotation?: string }> = ({ className = '', rotation = '0deg' }) => (
  <div 
    className={`absolute bg-brand-orange rounded-full ${className}`} 
    style={{ 
      clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
      transform: `rotate(${rotation})`
    }} 
  />
);

export const GridDecor: React.FC<{ className?: string }> = ({ className = '' }) => (
    <div className={`absolute opacity-10 ${className}`} 
         style={{
             backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
             backgroundSize: '20px 20px'
         }}>
    </div>
);
