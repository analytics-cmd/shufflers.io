import React from 'react';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'blue' | 'purple' | 'green';
  className?: string;
  fullWidth?: boolean;
}

export const NeonButton: React.FC<NeonButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'blue', 
  className = '',
  fullWidth = false
}) => {
  const baseStyles = "relative px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300 border backdrop-blur-sm group overflow-hidden";
  
  const variants = {
    blue: "border-neon-blue text-neon-blue hover:bg-neon-blue/10 shadow-[0_0_10px_rgba(0,243,255,0.2)] hover:shadow-[0_0_20px_rgba(0,243,255,0.5)]",
    purple: "border-neon-purple text-neon-purple hover:bg-neon-purple/10 shadow-[0_0_10px_rgba(188,19,254,0.2)] hover:shadow-[0_0_20px_rgba(188,19,254,0.5)]",
    green: "border-neon-green text-neon-green hover:bg-neon-green/10 shadow-[0_0_10px_rgba(10,255,10,0.2)] hover:shadow-[0_0_20px_rgba(10,255,10,0.5)]",
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500" />
    </button>
  );
};