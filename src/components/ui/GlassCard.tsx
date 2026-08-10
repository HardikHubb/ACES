
import React, { useRef, useState } from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'violet';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowColor = 'cyan',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const [transform, setTransform] = useState(
    'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)'
  );

  const [spotlightPos, setSpotlightPos] = useState({
    x: 50,
    y: 50,
    opacity: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Controlled tilt for a subtle physical response.
    const rotateY = (x - 0.5) * 7;
    const rotateX = (0.5 - y) * 7;

    setTransform(
      `perspective(1000px) rotateX(${rotateX.toFixed(
        2
      )}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-3px)`
    );

    setSpotlightPos({
      x: x * 100,
      y: y * 100,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setTransform(
      'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)'
    );

    setSpotlightPos({
      x: 50,
      y: 50,
      opacity: 0,
    });
  };

  const isViolet = glowColor === 'violet';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition:
          'transform 0.22s ease-out, border-color 0.3s ease, box-shadow 0.3s ease',
        transformStyle: 'preserve-3d',
      }}
      className={`relative rounded-2xl overflow-hidden glass-panel p-10 sm:p-12 md:p-14 border ${
        isViolet
          ? 'border-[#8064c9]/10 hover:border-[#8064c9]/30 hover:shadow-[0_12px_32px_rgba(128,100,201,0.08)]'
          : 'border-[#00d9ee]/8 hover:border-[#00d9ee]/28 hover:shadow-[0_12px_32px_rgba(0,217,238,0.08)]'
      } ${className}`}
    >
      {/* Cursor-following light — intentionally subtle */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: spotlightPos.opacity,
          background: `radial-gradient(
            320px circle at ${spotlightPos.x}% ${spotlightPos.y}%,
            ${
              isViolet
                ? 'rgba(128, 100, 201, 0.07)'
                : 'rgba(0, 217, 238, 0.07)'
            },
            transparent 70%
          )`,
        }}
      />

      <div
        className="relative z-10"
        style={{ transform: 'translateZ(10px)' }}
      >
        {children}
      </div>
    </div>
  );
};

