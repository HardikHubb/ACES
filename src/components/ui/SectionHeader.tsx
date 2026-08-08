import React from 'react';

interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  title,
  subtitle,
  alignment = 'center',
}) => {
  const isLeft = alignment === 'left';

  return (
    <div className={`mb-16 md:mb-20 ${isLeft ? 'text-left' : 'text-center'}`}>
      {/* Category Tag */}
      <div className={`inline-flex items-center gap-2 mb-4 ${isLeft ? 'justify-start' : 'justify-center'}`}>
        <span className="badge-tag">{tag}</span>
      </div>

      {/* Main Title - Understated & Premium Typography */}
      <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-heading font-extrabold tracking-tight text-white mb-6">
        <span className="text-cyan-gradient">{title}</span>
      </h2>

      {/* Optional Subtitle with Generous Bottom Breathing Room */}
      {subtitle && (
        <p className="text-[#94a3b8] text-sm sm:text-base md:text-lg max-w-xl mx-auto font-body font-normal leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Subtle Cyan Line Decorator */}
      <div className={`flex items-center gap-2 mt-6 ${isLeft ? 'justify-start' : 'justify-center'}`}>
        <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#00e5ff]/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]" />
        <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-[#00e5ff]/50" />
      </div>
    </div>
  );
};
