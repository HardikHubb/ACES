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
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)');
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Controlled 8deg tilt max for minimal & elegant response
    const rotateY = (x - 0.5) * 8;
    const rotateX = (0.5 - y) * 8;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`);
    setSpotlightPos({ x: x * 100, y: y * 100, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)');
    setSpotlightPos({ x: 50, y: 50, opacity: 0 });
  };

  const isViolet = glowColor === 'violet';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: 'transform 0.22s ease-out, border-color 0.3s ease, box-shadow 0.3s ease',
        transformStyle: 'preserve-3d',
      }}
      className={`relative rounded-2xl overflow-hidden glass-panel p-6 sm:p-7 md:p-8 border ${
        isViolet
          ? 'border-[#7c3aed]/15 hover:border-[#7c3aed]/45 hover:shadow-[0_12px_32px_rgba(124,58,237,0.15)]'
          : 'border-[#00e5ff]/12 hover:border-[#00e5ff]/45 hover:shadow-[0_12px_32px_rgba(0,229,255,0.15)]'
      } ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: spotlightPos.opacity,
          background: `radial-gradient(350px circle at ${spotlightPos.x}% ${spotlightPos.y}%, ${
            isViolet ? 'rgba(124, 58, 237, 0.12)' : 'rgba(0, 229, 255, 0.12)'
          }, transparent 70%)`,
        }}
      />

      <div className="relative z-10" style={{ transform: 'translateZ(10px)' }}>
        {children}
      </div>
    </div>
  );
};
