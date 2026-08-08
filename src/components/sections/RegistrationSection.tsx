import React from 'react';
import { ACES_INFO, ACES_PLACEHOLDERS } from '../../config/acesConfig';
import { PortalButton } from '../ui/PortalButton';
import { Calendar, Sparkles } from 'lucide-react';

export const RegistrationSection: React.FC = () => {
  return (
    <section id="registration" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10 text-center">
      <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 glass-panel border-2 border-[#00e5ff]/40 overflow-hidden box-glow-cyan">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-radial from-[#00e5ff]/20 via-[#7c3aed]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-xs font-mono text-[#00e5ff]">
          <Sparkles className="w-4 h-4" />
          <span>PORTAL // MEMBERSHIP INTAKE</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-white mb-4 tracking-tight">
          <span className="text-cyan-gradient">READY TO JOIN ACES?</span>
        </h2>

        <p className="text-base sm:text-xl text-[#94a3b8] max-w-2xl mx-auto mb-10 font-body leading-relaxed">
          Join the community. Build something meaningful. Learn, create, compete, and grow with us.
        </p>

        <div className="mb-10 inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-4 rounded-2xl bg-[#03050a]/90 border border-[#00e5ff]/30 shadow-inner">
          <div className="w-10 h-10 rounded-xl bg-[#00e5ff]/10 flex items-center justify-center border border-[#00e5ff]/30">
            <Calendar className="w-5 h-5 text-[#00e5ff]" />
          </div>
          <div className="text-center sm:text-left">
            <div className="font-mono text-xs text-[#94a3b8] tracking-widest uppercase">
              REGISTRATION CLOSES
            </div>
            <div className="font-mono text-2xl sm:text-3xl font-extrabold text-[#00e5ff] tracking-widest glow-cyan">
              {ACES_INFO.registrationDeadline}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <PortalButton
            text="REGISTER NOW →"
            href={ACES_PLACEHOLDERS.REGISTRATION_LINK}
          />
          <span className="font-mono text-xs text-[#64748b] tracking-wider">
            DESTINATION: {ACES_PLACEHOLDERS.REGISTRATION_LINK}
          </span>
        </div>
      </div>
    </section>
  );
};
