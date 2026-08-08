import React from 'react';
import { ACES_INFO } from '../../config/acesConfig';
import { Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#00e5ff]/20 bg-[#03050a] z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* ACES Emblem & Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#00e5ff]/10 border border-[#00e5ff]/40 flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.25)]">
            <Cpu className="w-5 h-5 text-[#00e5ff]" />
          </div>
          <div className="text-left">
            <h3 className="font-heading font-black text-2xl tracking-wider text-white">
              {ACES_INFO.shortName}
            </h3>
            <div className="text-xs font-mono text-[#94a3b8]">
              {ACES_INFO.fullName}
            </div>
          </div>
        </div>

        {/* Department Info */}
        <div className="font-mono text-xs text-[#00e5ff] tracking-widest uppercase">
          {ACES_INFO.department}
        </div>

        {/* Tagline */}
        <div className="font-mono text-sm tracking-[0.25em] text-[#a855f7] font-bold">
          {ACES_INFO.tagline}
        </div>

        {/* Thin Animated Cyan Line */}
        <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-[#00e5ff] to-transparent my-4 shadow-[0_0_8px_#00e5ff]" />

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl text-xs font-mono text-[#64748b] gap-2 pt-2">
          <div>© {ACES_INFO.copyrightYear} {ACES_INFO.shortName}. All rights reserved.</div>
          <div className="text-[#00e5ff]/70">{ACES_INFO.technicalTeamCredit}</div>
        </div>
      </div>
    </footer>
  );
};
