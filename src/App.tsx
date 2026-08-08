import { useState, useEffect, useRef } from 'react';
import { SceneContainer } from './components/canvas/SceneContainer';
import { Navbar } from './components/ui/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { TeamSection } from './components/sections/TeamSection';
import { EventsSection } from './components/sections/EventsSection';
import { RegistrationSection } from './components/sections/RegistrationSection';
import { SocialsSection } from './components/sections/SocialsSection';
import { Footer } from './components/sections/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobile, setIsMobile] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mousePos.current = {
          x: (e.touches[0].clientX / window.innerWidth) * 2 - 1,
          y: -(e.touches[0].clientY / window.innerHeight) * 2 + 1,
        };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#03050a] text-[#f8fafc] selection:bg-[#00e5ff]/30 selection:text-[#00e5ff]">
      <SceneContainer
        activeSection={activeSection}
        mousePos={mousePos}
        isMobile={isMobile}
      />

      <Navbar activeSection={activeSection} />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <EventsSection />
        <RegistrationSection />
        <SocialsSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
