import React from 'react';
import { EVENTS } from '../../config/acesConfig';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { Sparkles, Code, Flame, Zap } from 'lucide-react';

export const EventsSection: React.FC = () => {
  return (
    <section id="events" className="relative section-spacing page-container z-10">
      <SectionHeader
        tag="// 03 — EXPERIENCES"
        title="EVENTS"
        subtitle="Experiences that bring ACES to life."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {EVENTS.map((event) => {
          const isFeatured = event.isFeatured;

          return (
            <GlassCard
              key={event.id}
              glowColor={isFeatured ? 'cyan' : 'violet'}
              className={`flex flex-col justify-between p-8 sm:p-9 ${
                isFeatured ? 'md:col-span-2 lg:col-span-2 border-[#00e5ff]/30 bg-[#080d18]/60' : ''
              }`}
            >
              <div>
                {/* Event Header & Number */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs text-[#00e5ff] tracking-widest px-2.5 py-1 rounded bg-[#00e5ff]/10 border border-[#00e5ff]/20">
                    {event.number}
                  </span>
                  {isFeatured && (
                    <span className="badge-tag bg-[#7c3aed]/15 text-[#a855f7] border-[#7c3aed]/30">
                      <Zap className="w-3.5 h-3.5 text-[#00e5ff]" />
                      DEPARTMENT SHOWDOWN
                    </span>
                  )}
                </div>

                {/* Event Title */}
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2 group-hover:text-[#00e5ff] transition-colors">
                  {event.title}
                </h3>

                {/* Event Tagline */}
                <div className="font-mono text-xs sm:text-sm text-[#00e5ff] mb-4 font-medium">
                  {event.tagline}
                </div>

                {/* Event Description */}
                <p className="text-xs sm:text-sm text-[#94a3b8] font-normal leading-[1.7] mb-6 max-w-xl">
                  {event.description}
                </p>

                {/* Techtonic Sub-events breakdown with spacious layout */}
                {event.subEvents && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6 pt-6 border-t border-white/10">
                    {event.subEvents.map((sub, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-[#03050a]/70 border border-white/5 hover:border-[#00e5ff]/30 transition-colors space-y-2"
                      >
                        <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#00e5ff]">
                          {sub.title === 'BOX CRICKET' ? (
                            <Flame className="w-4 h-4 text-[#7c3aed]" />
                          ) : (
                            <Code className="w-4 h-4 text-[#00e5ff]" />
                          )}
                          <span>{sub.title}</span>
                        </div>
                        <p className="text-xs text-[#94a3b8] font-normal leading-relaxed">
                          {sub.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer Indicator */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#64748b]">
                <span className="flex items-center gap-1.5 text-[#00e5ff]/70">
                  <Sparkles className="w-3.5 h-3.5" />
                  DEPARTMENT OF COMPUTER ENGINEERING
                </span>
                <span className="text-[#a855f7]">ACES_2026</span>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
};
