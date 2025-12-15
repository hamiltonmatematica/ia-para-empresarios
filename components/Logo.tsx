import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'light', className = '' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-black';
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
        {/* Placeholder for the real logo image. 
            Replace 'src' with the actual path to your logo file (e.g., /logo.png) 
        */}
        <img 
            src="/logo.png" 
            alt="Hamilton Vinícius Logo" 
            className="h-10 w-auto object-contain hidden md:block"
            onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                e.currentTarget.nextElementSibling?.classList.add('flex');
            }}
        />
        
        {/* Fallback Text Logo if image fails or for mobile consistency if preferred */}
        <div className={`flex-col leading-none tracking-tight font-display font-bold ${textColor} hidden`}>
            <span className="text-[0.6em] opacity-60 uppercase mb-1 tracking-widest">Prof.</span>
            <span className="text-2xl md:text-3xl">hamilton</span>
            <span className="text-2xl md:text-3xl">vinícius</span>
        </div>
    </div>
  );
};

export default Logo;