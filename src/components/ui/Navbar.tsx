import React, { useState, useEffect } from 'react';
import { ACES_INFO } from '../../config/acesConfig';
import { Menu, X, Cpu, ChevronRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'TEAM', href: '#team' },
    { label: 'EVENTS', href: '#events' },
    { label: 'REGISTRATION', href: '#registration' },
    { label: 'CONNECT', href: '#connect' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#03050a]/80 backdrop-blur-md border-b border-[#00e5ff]/20 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Department Header */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-[#00e5ff]/10 border border-[#00e5ff]/40 flex items-center justify-center group-hover:border-[#00e5ff] transition-all shadow-[0_0_15px_rgba(0,229,255,0.25)]">
            <Cpu className="w-5 h-5 text-[#00e5ff] group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <div className="font-heading font-bold text-xl tracking-wider text-white flex items-center gap-2">
              {ACES_INFO.shortName}
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00e5ff]/15 text-[#00e5ff] border border-[#00e5ff]/30">
                2026
              </span>
            </div>
            <div className="text-[10px] font-mono text-[#94a3b8] tracking-wider hidden sm:block">
              {ACES_INFO.department.toUpperCase()}
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`font-mono text-xs tracking-widest transition-all relative py-1 ${
                  isActive
                    ? 'text-[#00e5ff] font-semibold'
                    : 'text-[#94a3b8] hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Status Badge */}
        <div className="hidden lg:flex items-center gap-3 font-mono text-xs text-[#00e5ff]/80 bg-[#00e5ff]/5 px-3 py-1.5 rounded-full border border-[#00e5ff]/20">
          <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-ping" />
          <span>SYSTEM ONLINE</span>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 rounded-lg bg-[#080d18] border border-[#00e5ff]/30 text-white hover:text-[#00e5ff]"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#050914]/95 backdrop-blur-xl border-b border-[#00e5ff]/30 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between font-mono text-sm tracking-widest text-[#94a3b8] hover:text-[#00e5ff] py-2 border-b border-[#00e5ff]/10"
            >
              <span>{link.label}</span>
              <ChevronRight className="w-4 h-4 text-[#00e5ff]" />
            </a>
          ))}
          <div className="pt-2 text-center text-xs font-mono text-[#00e5ff]/70">
            DEPARTMENT OF COMPUTER ENGINEERING
          </div>
        </div>
      )}
    </nav>
  );
};
