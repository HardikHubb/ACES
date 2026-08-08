import React from 'react';
import confetti from 'canvas-confetti';
import { ArrowRight, Sparkles } from 'lucide-react';

interface PortalButtonProps {
  text: string;
  href: string;
  className?: string;
  isExternal?: boolean;
}

export const PortalButton: React.FC<PortalButtonProps> = ({
  text,
  href,
  className = '',
  isExternal = true,
}) => {
  const handleClick = () => {
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#00e5ff', '#2563eb', '#7c3aed', '#ffffff'],
    });
  };

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onClick={handleClick}
      className={`group relative inline-flex items-center justify-center w-[190px] sm:w-[210px] h-[52px] rounded-xl font-mono text-xs sm:text-sm font-semibold tracking-wider text-white overflow-hidden transition-all duration-300 transform hover:-translate-y-0.5 ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(5, 9, 20, 0.95) 0%, rgba(8, 13, 24, 0.98) 100%)',
        border: '1px solid rgba(0, 229, 255, 0.35)',
        boxShadow: '0 0 20px rgba(0, 229, 255, 0.15)',
      }}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#00e5ff]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      
      <span className="relative z-10 flex items-center gap-2.5">
        <Sparkles className="w-4 h-4 text-[#00e5ff] group-hover:rotate-12 transition-transform" />
        <span>{text}</span>
        <ArrowRight className="w-4 h-4 text-[#00e5ff] group-hover:translate-x-1 transition-transform" />
      </span>
    </a>
  );
};
