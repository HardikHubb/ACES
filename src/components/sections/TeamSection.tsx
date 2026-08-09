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
  className="flex flex-col min-h-[280px] group !px-8 !py-8 sm:!px-10 sm:!py-10 md:!px-12 md:!py-10"
>
  <div className="flex flex-col gap-5">

    {/* Header Number & Role Icon */}
    <div>
      {member.number}
    </div>

    {/* Role Title */}
    <div className="font-mono text-[0.75rem] tracking-widest text-[#00e5ff] font-semibold uppercase">
      {member.role}
    </div>

    {/* Person Name */}
    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-[#00e5ff] transition-colors">
      {member.name}
    </h3>

    {/* Subtitle / Tagline */}
    <div className="text-sm font-mono text-[#a855f7] font-medium">
      {member.subtitle}
    </div>

    {/* Body Description */}
    <p className="text-xs sm:text-sm text-[#94a3b8] font-normal leading-[1.65] max-w-[280px]">
      {member.bio}
    </p>

  </div>
</GlassCard>
          );
        })}
      </div>
    </section>
  );
};
