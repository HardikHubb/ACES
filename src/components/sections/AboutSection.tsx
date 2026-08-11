import React from 'react';
import { ABOUT_ACES_TEXT } from '../../config/acesConfig';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';

export const AboutSection: React.FC = () => {
  const renderHighlightedParagraph = () => {
    let text = ABOUT_ACES_TEXT.paragraph;
    const highlights = ABOUT_ACES_TEXT.highlightPhrases;

    const parts = text.split(/(Code|Connect |Create|ub|By the Students|For the Students|experiment|grow together)/g);

    return parts.map((part, i) => {
      const isMatch = highlights.includes(part);
      if (!isMatch) return part;

      const isViolet = i % 2 === 0;
      return (
        <span
          key={i}
          className={`font-semibold px-1 rounded bg-opacity-15 ${
            isViolet
              ? 'text-[#a855f7] bg-[#7c3aed]/15 border-b border-[#7c3aed]/60'
              : 'text-[#00e5ff] bg-[#00e5ff]/10 border-b border-[#00e5ff]/60'
          }`}
        >
          {part}
        </span>
      );
    });
  };

  return (
    <section id="about" className="relative section-spacing page-container z-10">
      <SectionHeader
        tag="// 01 — IDENTITY"
        title="ABOUT ACES"
      />


{/* Centered Content Layout */}
<div className="flex flex-col items-center gap-24">
  <div className="w-full max-w-[640px] space-y-8">
    {/* Paragraph */}
 <GlassCard
  glowColor="cyan"
  className="!px-8 !py-8 sm:!px-10 sm:!py-10 md:!px-12 md:!py-10 "
>
      <div className="text-base sm:text-lg text-[#94a3b8] leading-[1.85] font-body font-normal whitespace-pre-line justify-center text-center">
        {renderHighlightedParagraph()}
      </div>
    </GlassCard>

    
  </div>
</div>


    </section>
  );
};
