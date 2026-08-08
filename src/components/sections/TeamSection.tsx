import React from 'react';
import { TEAM_MEMBERS } from '../../config/acesConfig';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { Shield, Code, Palette, Trophy, Heart, Award, Users, Megaphone, DollarSign, FileText, Compass, Eye, CheckCircle } from 'lucide-react';

const ROLE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  '01': Shield,
  '02': Users,
  '03': FileText,
  '04': DollarSign,
  '05': Megaphone,
  '06': Code,
  '07': Palette,
  '08': Compass,
  '09': Eye,
  '10': CheckCircle,
  '11': Trophy,
  '12': Heart,
  '13': Award,
};

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="relative section-spacing page-container z-10">
      <SectionHeader
        tag="// 02 — LEADERSHIP"
        title="THE TEAM"
        subtitle="The people turning ideas into action."
      />

      {/* Grid Gap 24px - 32px */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-8">
        {TEAM_MEMBERS.map((member, index) => {
          const IconComponent = ROLE_ICONS[member.number] || Shield;
          const isVioletGlow = index % 3 === 1;

          return (
            <GlassCard
              key={member.id}
              glowColor={isVioletGlow ? 'violet' : 'cyan'}
              className="flex flex-col justify-between min-h-[330px] group p-7 sm:p-8"
            >
              <div>
                {/* Header Number & Role Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#00e5ff]/80 tracking-widest px-2 py-0.5 rounded bg-[#00e5ff]/8 border border-[#00e5ff]/15">
                    {member.number}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-[#080d18] border border-white/10 flex items-center justify-center group-hover:border-[#00e5ff]/40 transition-colors">
                    <IconComponent className="w-3.5 h-3.5 text-[#00e5ff]" />
                  </div>
                </div>

                {/* Role Title */}
                <div className="font-mono text-[0.75rem] tracking-widest text-[#00e5ff] font-semibold uppercase mb-4">
                  {member.role}
                </div>

                {/* Person Name (1.2rem - 1.5rem) */}
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2 group-hover:text-[#00e5ff] transition-colors">
                  {member.name}
                </h3>

                {/* Subtitle / Tagline (0.9rem - 1rem) */}
                <div className="text-sm font-mono text-[#a855f7] font-medium mb-3">
                  {member.subtitle}
                </div>

                {/* Body Description (0.8rem - 0.95rem) with max-width 280px */}
                <p className="text-xs sm:text-sm text-[#94a3b8] font-normal leading-[1.65] max-w-[280px]">
                  {member.bio}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-8 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#64748b]">
                <span>DEPARTMENT OF COMPUTER ENGG</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]/60" />
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
};
