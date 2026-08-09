
import React from 'react';
import { SOCIAL_LINKS } from '../../config/acesConfig';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { InstagramIcon, LinkedinIcon } from '../ui/Icons';
import { Mail, ExternalLink } from 'lucide-react';

export const SocialsSection: React.FC = () => {
  return (
    <section className="w-full">
      {/* Section Header */}
      <SectionHeader
        title="CONNECT WITH ACES"
        subtitle="Stay connected with our community."
      />

      {/* Social Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
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
              rel={
                item.id === 'email'
                  ? undefined
                  : 'noopener noreferrer'
              }
              className="block group"
            >
              <GlassCard
                glowColor={
                  isInstagram
                    ? 'cyan'
                    : isLinkedin
                      ? 'violet'
                      : 'cyan'
                }
                className="h-full flex flex-col justify-between p-7 sm:p-8"
              >
                <div>
                  {/* Card Header & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#080d18] border border-[#00e5ff]/25 flex items-center justify-center group-hover:border-[#00e5ff]/50 transition-colors">
                      <IconComponent className="w-5 h-5 text-[#00e5ff] group-hover:scale-105 transition-transform" />
                    </div>

                    <ExternalLink className="w-4 h-4 text-[#64748b] group-hover:text-[#00e5ff] transition-colors" />
                  </div>

                  {/* Title */}
                  <div className="font-mono text-[0.7rem] text-[#00e5ff] tracking-widest uppercase mb-2 font-semibold">
                    {item.title}
                  </div>

                  {/* Handle */}
                  <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-3 group-hover:text-[#00e5ff] transition-colors">
                    {item.handle}
                  </h3>

                  {/* Description */}
                  <p className="text-[0.8rem] text-[#94a3b8] leading-[1.65] font-body">
                    {item.description}
                  </p>
                </div>

                {/* Footer Link Label */}
                <div className="mt-7 pt-4 border-t border-[#00e5ff]/10 font-mono text-[0.7rem] text-[#00e5ff] flex items-center justify-between">
                  <span>OPEN LINK</span>
                  <span>→</span>
                </div>
              </GlassCard>
            </a>
          );
        })}
      </div>
    </section>
  );
};

