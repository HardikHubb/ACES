import React from 'react';
import { EVENTS } from '../../config/acesConfig';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { Code, Flame, } from 'lucide-react';

export const EventsSection: React.FC = () => {
  return (
    <section id="events" className="relative section-spacing page-container z-10">
      <SectionHeader
        tag="// 03 — EXPERIENCES"
        title="EVENTS"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {EVENTS.map((event) => {
          const isFeatured = event.isFeatured;

          return (
<GlassCard
  key={event.id}
  glowColor={isFeatured ? 'cyan' : 'violet'}
  className={`flex flex-col ${
    isFeatured
      ? 'md:col-span-2 lg:col-span-2 border-[#00e5ff]/30 bg-[#080d18]/60'
      : ''
  } !px-8 !py-8 sm:!px-10 sm:!py-10 md:!px-12 md:!py-10`}
>
  {/* Event Header */}
  <div className="flex flex-col gap-5">
    <div className="mb-5">
      <span className="inline-block font-mono text-xs text-[#00e5ff] tracking-widest px-3 py-1.5 rounded-md bg-[#00e5ff]/10 border border-[#00e5ff]/20">
        {event.number}
      </span>
    </div>

    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white leading-tight mb-3">
      {event.title}
    </h3>

    <div className="font-mono text-xs sm:text-sm text-[#00e5ff] font-medium leading-relaxed mb-4">
      {event.tagline}
    </div>

    <p className="text-xs sm:text-sm text-[#94a3b8] leading-[1.75] max-w-xl">
      {event.description}
    </p>
  </div>

  {/* Sub Events */}
  {event.subEvents && (
    <div className="mt-8 pt-7 border-t border-white/10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {event.subEvents.map((sub, idx) => (
          <div
            key={idx}
            className="
              rounded-2xl
              bg-[#03050a]/80
              border border-white/10
              px-6 py-6
              sm:px-7 sm:py-7
              min-h-[150px]
              flex flex-col
              justify-start
              transition-all duration-300
              hover:border-[#00e5ff]/30
            "
          >
            {/* Sub-event heading */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-shrink-0">
                {sub.title === 'BOX CRICKET' ? (
                  <Flame className="w-5 h-5 text-[#7c3aed]" />
                ) : (
                  <Code className="w-5 h-5 text-[#00e5ff]" />
                )}
              </div>

              <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#00e5ff] mt-5">
                {sub.title}
              </span>
            </div>

            {/* Sub-event description */}
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-[1.8]">
              {sub.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )}
</GlassCard>
          );
        })}
      </div>
    </section>
  );
};
