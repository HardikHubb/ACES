import React from 'react';
import { SOCIAL_LINKS } from '../../config/acesConfig';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { InstagramIcon, LinkedinIcon } from '../ui/Icons';
import { Mail, ExternalLink } from 'lucide-react';

export const SocialsSection: React.FC = () => {
  return (
    <section id="connect" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <SectionHeader
        tag="// 04 — NETWORK"
        title="CONNECT WITH ACES"
        subtitle="Reach out, join the conversation, or partner with our engineering community."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              className="block group"
            >
              <GlassCard
                glowColor={isInstagram ? 'cyan' : isLinkedin ? 'violet' : 'cyan'}
                className="h-full flex flex-col justify-between p-8"
              >
                <div>
                  {/* Card Header & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#080d18] border border-[#00e5ff]/30 flex items-center justify-center group-hover:border-[#00e5ff] transition-colors shadow-[0_0_15px_rgba(0,229,255,0.15)]">
                      <IconComponent className="w-6 h-6 text-[#00e5ff] group-hover:scale-110 transition-transform" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-[#64748b] group-hover:text-[#00e5ff] transition-colors" />
                  </div>

                  {/* Title & Handle */}
                  <div className="font-mono text-xs text-[#00e5ff] tracking-widest uppercase mb-1 font-bold">
                    {item.title}
                  </div>
                  <h3 className="text-xl font-heading font-extrabold text-white mb-3 group-hover:text-[#00e5ff] transition-colors">
                    {item.handle}
                  </h3>

                  <p className="text-xs text-[#94a3b8] leading-relaxed font-body">
                    {item.description}
                  </p>
                </div>

                {/* Footer Link Label */}
                <div className="mt-8 pt-4 border-t border-[#00e5ff]/10 font-mono text-xs text-[#00e5ff] flex items-center justify-between">
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
