import React from 'react';
import { SOCIAL_LINKS } from '../../config/acesConfig';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { InstagramIcon, LinkedinIcon } from '../ui/Icons';
import { Mail, ExternalLink } from 'lucide-react';

export const SocialsSection: React.FC = () => {
  return (
    <section id="connect" className="relative section-spacing page-container z-10">
      <SectionHeader
        tag="// 04 — NETWORK"
        title="CONNECT WITH ACES"
      />

     <div className="w-full flex justify-center">
  <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
    {SOCIAL_LINKS.map((item) => {
      const isInstagram = item.id === 'instagram';
      const isLinkedin = item.id === 'linkedin';

      const IconComponent = isInstagram
        ? InstagramIcon
        : isLinkedin
        ? LinkedinIcon
        : Mail;

      return (
        <a
          key={item.id}
          href={item.url}
          target={item.id === 'email' ? '_self' : '_blank'}
          rel={item.id === 'email' ? undefined : 'noopener noreferrer'}
          className="block group w-full"
        >
<GlassCard
  glowColor={isInstagram ? 'cyan' : isLinkedin ? 'violet' : 'cyan'}
  className="h-full w-full flex flex-col !px-8 !py-8 sm:!px-10 sm:!py-10 md:!px-12 md:!py-10"
>
  {/* Main Card Content */}
  <div className="flex flex-col gap-5">

    {/* Icon row */}
    <div className="flex items-start justify-between">
      <div className="w-10 h-10 rounded-xl bg-[#080d18] border border-white/8 flex items-center justify-center group-hover:border-[#00e5ff]/40 transition-colors">
        <IconComponent className="w-4.5 h-4.5 text-[#00e5ff]" />
      </div>

      <ExternalLink className="w-3.5 h-3.5 text-[#64748b]/60 group-hover:text-[#00e5ff] transition-colors mt-1" />
    </div>

    {/* Text Content */}
    <div className="flex flex-col gap-3">

      {/* Label */}
      <div className="font-mono text-[0.68rem] text-[#00e5ff] tracking-[0.15em] uppercase font-medium">
        {item.title}
      </div>

      {/* Handle */}
      <h3 className="text-base font-heading font-semibold text-white group-hover:text-[#00e5ff] transition-colors leading-[1.4]">
        {item.handle}
      </h3>

      {/* Description */}
      <p className="text-xs text-[#64748b] leading-[1.8] font-body">
        {item.description}
      </p>

    </div>
  </div>

  {/* Footer Link */}
  <div className="mt-auto pt-6 mt-10 border-t border-white/5 font-mono text-[0.65rem] text-[#00e5ff]/60 flex items-center justify-between">
    <span>OPEN LINK</span>
    <span>→</span>
  </div>
</GlassCard>
        </a>
      );
    })}
  </div>
</div>
</section>
)};
