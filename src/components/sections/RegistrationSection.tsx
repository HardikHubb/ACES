import React from 'react';
import { ACES_INFO, ACES_PLACEHOLDERS } from '../../config/acesConfig';
import { PortalButton } from '../ui/PortalButton';
import { Calendar, Sparkles } from 'lucide-react';

export const RegistrationSection: React.FC = () => {
  return (
    <section id="registration" className="relative section-spacing page-container-narrow z-10 text-center">
      <div className="relative rounded-3xl p-10 sm:p-14 md:p-16 glass-panel border border-[#00e5ff]/25 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-radial from-[#00e5ff]/10 via-[#7c3aed]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Small Label */}
        <div className="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full bg-[#00e5ff]/8 border border-[#00e5ff]/20 text-[11px] font-mono text-[#00e5ff]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PORTAL // MEMBERSHIP INTAKE</span>
        </div>

        {/* Heading — 2.5-3.5rem */}
        <h2 className="text-[2.25rem] sm:text-[3rem] font-heading font-bold text-white mb-5 tracking-tight">
          <span className="text-cyan-gradient">READY TO JOIN ACES?</span>
        </h2>

        {/* Short Description */}
        <p className="text-sm sm:text-base text-[#94a3b8] max-w-xl mx-auto mb-12 font-body font-normal leading-relaxed">
          Join the community. Build something meaningful. Learn, create, compete, and grow with us.
        </p>

        {/* Registration Deadline — moderate size (2.5-4rem) */}
        <div className="mb-12 inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-4 rounded-2xl bg-[#03050a]/80 border border-[#00e5ff]/20">
          <div className="w-9 h-9 rounded-lg bg-[#00e5ff]/8 flex items-center justify-center border border-[#00e5ff]/20">
            <Calendar className="w-4 h-4 text-[#00e5ff]" />
          </div>
          <div className="text-center sm:text-left">
            <div className="font-mono text-[10px] text-[#94a3b8] tracking-widest uppercase mb-1">
              REGISTRATION CLOSES
            </div>
            <div className="font-mono text-2xl sm:text-[2.5rem] font-bold text-[#00e5ff] tracking-widest">
              {ACES_INFO.registrationDeadline}
            </div>
          </div>
        </div>

        {/* Register Button */}
        <div className="flex flex-col items-center gap-4">
          <PortalButton
            text="REGISTER NOW →"
            href={ACES_PLACEHOLDERS.REGISTRATION_LINK}
          />
          <span className="font-mono text-[10px] text-[#64748b] tracking-wider">
            DESTINATION: {ACES_PLACEHOLDERS.REGISTRATION_LINK}
          </span>
        </div>
      </div>
    </section>
  );
};
