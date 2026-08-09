import React, { useState, useEffect } from 'react';
import { ACES_INFO } from '../../config/acesConfig';
import { Menu, X, Cpu, ChevronRight } from 'lucide-react';
import acesLogo from '../../assets/aces-logo.png';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'TEAM', href: '#team' },
    { label: 'EVENTS', href: '#events' },
    { label: 'REGISTER', href: '#registration' },
    { label: 'CONNECT', href: '#connect' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
  ? 'bg-[#03050a]/95 backdrop-blur-xl border-b border-white/10 py-4'
  : 'bg-[#03050a]/85 backdrop-blur-xl border-b border-white/5 py-5'
          
      }`}
    >
      <div className="page-container flex items-center justify-between">
        {/* Brand */}
        {/* Brand */}
<a href="#hero" className="flex items-center gap-3 group">
  <div className="w-14 h-14 flex items-center justify-center">
    <img
      src={acesLogo}
      alt="ACES Logo"
      className="w-full h-full object-contain"
    />
  </div>

  <div>
    <div className="font-heading font-semibold text-xl tracking-widest text-white">
      {ACES_INFO.shortName}
    </div>

    <div className="text-[12px] font-mono text-[#64748b] tracking-wider hidden sm:block">
      DEPT. OF COMPUTER ENGINEERING
    </div>
  </div>
</a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`font-mono text-sm tracking-[0.15em] transition-all relative py-1 ${
                  isActive
                    ? 'text-[#00e5ff]'
                    : 'text-[#64748b] hover:text-[#94a3b8]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-[1px] bg-[#00e5ff]/70" />
                )}
              </a>
            );
          })}
        </div>

      

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation"
          className="md:hidden p-1.5 rounded-lg bg-[#080d18] border border-white/8 text-[#94a3b8] hover:text-[#00e5ff] transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#050914]/96 backdrop-blur-xl border-b border-white/5 page-container py-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between font-mono text-xs tracking-widest text-[#64748b] hover:text-[#00e5ff] py-3 border-b border-white/5 transition-colors"
            >
              <span>{link.label}</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#00e5ff]/60" />
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
