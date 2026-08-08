import React from 'react';
import { ABOUT_ACES_TEXT, ACES_INFO } from '../../config/acesConfig';
import { SectionHeader } from '../ui/SectionHeader';
import { GlassCard } from '../ui/GlassCard';
import { Network, Code, Lightbulb, Users, Cpu } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const renderHighlightedParagraph = () => {
    let text = ABOUT_ACES_TEXT.paragraph;
    const highlights = ABOUT_ACES_TEXT.highlightPhrases;

    const parts = text.split(/(curious minds|bold ideas|technology|let’s build it|connect|create|experiment|grow together)/g);

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
        subtitle={ACES_INFO.fullName}
      />

      {/* Two-Column Desktop Layout with 80px - 120px Gap */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left Side: 3D Node Network Container */}
        <div className="lg:col-span-5 h-[340px] lg:h-[420px] relative rounded-2xl overflow-hidden glass-panel border border-[#00e5ff]/15 flex items-center justify-center p-8 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00e5ff]/5 via-transparent to-[#7c3aed]/5 pointer-events-none" />
          
          <div className="space-y-4 max-w-xs">
            <div className="w-14 h-14 mx-auto rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center shadow-sm">
              <Network className="w-7 h-7 text-[#00e5ff]" />
            </div>
            <div className="font-mono text-[11px] text-[#00e5ff] tracking-widest uppercase">
              3D DIGITAL LAB NODES
            </div>
            <p className="text-xs text-[#94a3b8] leading-relaxed font-body">
              Move cursor over background to interact with digital nodes: Ideas • Code • People • Innovation • Collaboration
            </p>
          </div>
        </div>

        {/* Right Side: Paragraph Constrained to 550px - 650px Width with High Line Height */}
        <div className="lg:col-span-7 space-y-8 max-w-[640px] mx-auto lg:mx-0">
          <GlassCard glowColor="cyan" className="p-8 sm:p-9">
            <div className="text-base sm:text-lg text-[#94a3b8] leading-[1.85] font-body font-normal">
              {renderHighlightedParagraph()}
            </div>
          </GlassCard>

          {/* Core Values Feature Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            {[
              { icon: Lightbulb, label: 'Curious Minds', color: 'text-[#00e5ff]' },
              { icon: Code, label: 'Let’s Build It', color: 'text-[#a855f7]' },
              { icon: Users, label: 'Collaborate', color: 'text-[#2563eb]' },
              { icon: Cpu, label: 'Experiment', color: 'text-[#00e5ff]' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#080d18]/50 border border-white/5 flex flex-col items-center justify-center text-center gap-2 hover:border-[#00e5ff]/30 transition-colors"
              >
                <item.icon className={`w-5 h-5 ${item.color}`} />
                <span className="font-mono text-[11px] font-medium text-[#f8fafc]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
