import React from 'react';
import { ACES_INFO, ACES_PLACEHOLDERS } from '../../config/acesConfig';
import { ChevronDown, Terminal } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col items-center justify-between pt-28 pb-16 px-6 text-center z-10"
    >
      {/* Top Department Badge */}
      <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080d18]/80 border border-[#00e5ff]/20 text-[11px] font-mono text-[#00e5ff] backdrop-blur-md shadow-sm">
        <Terminal className="w-3.5 h-3.5" />
        <span>{ACES_INFO.department.toUpperCase()}</span>
      </div>

      {/* Main Hero Typography Stack — Controlled Typography Hierarchy */}
      <div className="my-auto max-w-[850px] mx-auto space-y-6 sm:space-y-7">
        {/* Logo Placeholder Marker */}
        <div className="text-[10px] font-mono text-[#94a3b8]/60 tracking-[0.2em] uppercase mb-2">
          {ACES_PLACEHOLDERS.LOGO}
        </div>

        {/* ACES Controlled Heading scale clamp(3rem, 6vw, 5.5rem) */}
        <h1 className="text-[clamp(2.8rem,6vw,5.5rem)] font-heading font-extrabold tracking-tight text-white leading-tight glow-cyan">
          <span className="bg-gradient-to-r from-white via-[#00e5ff] to-[#2563eb] bg-clip-text text-transparent">
            {ACES_INFO.shortName}
          </span>
        </h1>

        {/* Association Full Title (1rem - 1.25rem) */}
        <p className="text-base sm:text-lg md:text-xl font-body font-normal text-[#94a3b8] tracking-normal max-w-2xl mx-auto">
          {ACES_INFO.fullName}
        </p>

        {/* Tagline (0.9rem - 1.1rem) */}
        <div className="pt-3 flex items-center justify-center gap-3">
          <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#7c3aed]/50" />
          <span className="font-mono text-xs sm:text-sm md:text-base tracking-[0.22em] text-[#00e5ff] font-medium">
            {ACES_INFO.heroTagline}
          </span>
          <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#7c3aed]/50" />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="group inline-flex flex-col items-center gap-2 font-mono text-[11px] text-[#64748b] hover:text-[#00e5ff] transition-colors mt-8"
      >
        <span className="tracking-[0.2em]">SCROLL TO EXPLORE</span>
        <ChevronDown className="w-4 h-4 text-[#00e5ff] animate-bounce" />
      </a>
    </section>
  );
};
