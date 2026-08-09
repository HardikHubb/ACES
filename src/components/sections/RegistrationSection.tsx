import React from 'react';
import { ACES_INFO } from '../../config/acesConfig';
import { PortalButton } from '../ui/PortalButton';
import { Calendar, Sparkles } from 'lucide-react';

export const RegistrationSection: React.FC = () => {
  return (
    <section id="registration" className="relative section-spacing-lg z-10">
      <div className="page-container-narrow">
        {/* Holographic Portal Frame */}
        <div className="relative rounded-3xl px-8 py-14 sm:px-14 sm:py-20 md:px-20 md:py-24 glass-panel border border-white/8 text-center overflow-hidden !px-8 !py-8 sm:!px-10 sm:!py-10 md:!px-12 md:!py-10">
          {/* Ambient glow — subtle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[480px] h-[480px] rounded-full bg-[#00e5ff]/6 blur-[100px]" />
          </div>

          {/* Small Label */}
          <div className="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full bg-[#00e5ff]/6 border border-[#00e5ff]/15 text-[10px] font-mono text-[#00e5ff]">
            <Sparkles className="w-3 h-3" />
            <span>PORTAL // MEMBERSHIP INTAKE</span>
          </div>

          {/* Heading */}
          <h2 className="text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] font-heading font-bold text-white mb-6 tracking-tight leading-tight">
            <span className="text-cyan-gradient">READY TO JOIN ACES?</span>
          </h2>

          {/* Registration Closing Date */}
          <div className="mb-12 inline-flex flex-col sm:flex-row items-center gap-4 px-7 py-5 rounded-2xl bg-[#03050a]/70 border border-white/8 !px-8 !py-8 sm:!px-10 sm:!py-10 md:!px-12 md:!py-10">
            <div className="w-9 h-9 rounded-lg bg-[#00e5ff]/8 flex items-center justify-center border border-[#00e5ff]/20">
              <Calendar className="w-4 h-4 text-[#00e5ff]" />
            </div>
            <div className="text-center sm:text-left">
              <div className="font-mono text-[10px] text-[#64748b] tracking-[0.15em] uppercase mb-1.5 ">
                REGISTRATION CLOSES
              </div>
              <div className="font-mono text-2xl sm:text-[2.5rem] font-bold text-[#00e5ff] tracking-widest">
                {ACES_INFO.registrationDeadline}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-3 pt-8">
            <PortalButton
              text="REGISTER NOW"
              href='https://docs.google.com/forms/d/e/1FAIpQLSf1SKO8cTnSBCwFl3FsuSIiPJBMPuk6GAaZlydnOFkSjUcPTQ/viewform?usp=header'
            />

          </div>
        </div>
      </div>
    </section>
  );
};
