import React from 'react';
import { ACES_INFO } from '../../config/acesConfig';
import { Cpu } from 'lucide-react';
import acesLogo from '../../assets/aces-logo.png';


export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#03050a]">
      <div className="page-container py-16 sm:py-20 flex flex-col items-center text-center gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          
              <div className="w-14 h-14 flex items-center justify-center">
    <img
      src={acesLogo}
      alt="ACES Logo"
      className="w-full h-full object-contain"
    />
  
          </div>
          <div className="text-left">
            <div className="font-heading font-semibold text-lg tracking-widest text-white">
              {ACES_INFO.shortName}
            </div>
            <div className="text-[10px] font-mono text-[#64748b]">
              {ACES_INFO.fullName}
            </div>
          </div>
        </div>

        {/* Department */}
        <div className="font-mono text-[10px] text-[#00e5ff]/60 tracking-[0.2em] uppercase">
          {ACES_INFO.department}
        </div>

        {/* Tagline */}
        <div className="font-mono text-xs tracking-[0.3em] text-[#64748b] font-medium">
          {ACES_INFO.tagline}
        </div>

        {/* Thin cyan divider */}
        <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-[#00e5ff]/40 to-transparent" />

        {/* Copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-[10px] font-mono text-[#64748b]/60 pt-1">
          <span>© {ACES_INFO.copyrightYear} {ACES_INFO.shortName}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};
