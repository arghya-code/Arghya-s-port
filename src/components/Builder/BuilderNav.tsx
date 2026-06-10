import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Menu, X, Home, User, Briefcase, Code, Mail } from 'lucide-react';
import { owner } from '../../data/portfolioData';

export function BuilderNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'About', id: 'about', icon: User },
    { name: 'Projects', id: 'projects', icon: Briefcase },
    { name: 'Skills', id: 'skills', icon: Code },
    { name: 'Contact', id: 'contact', icon: Mail }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl rounded-full transition-all duration-300 ${
          scrolled 
            ? 'bg-[#161b27]/90 backdrop-blur-xl border border-[#ff6b00]/50 shadow-[0_4px_30px_rgba(255,107,0,0.15)] py-3' 
            : 'bg-[#161b27]/60 backdrop-blur-md border border-[#ff6b00]/20 py-4'
        } px-6 flex items-center justify-between`}
      >
        <div className="font-orbitron font-bold text-xl text-white">
          Portfolio<span className="text-[#ff6b00]">.</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              onClick={(e) => handleNavClick(e, link.id)}
              className="group flex items-center gap-2 text-[#6b7899] hover:text-white font-syne text-sm transition-colors"
            >
              <link.icon size={16} className="group-hover:text-[#ff6b00] transition-colors" />
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/arghya-code" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#0d1117] border border-[#2a3040] flex items-center justify-center text-white hover:text-[#ff6b00] hover:border-[#ff6b00] transition-colors">
            <Github size={18} />
          </a>
          <button className="px-6 py-2 rounded-full bg-[#ff6b00] text-black font-syne font-bold hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,107,0,0.4)] hover:shadow-[0_0_25px_rgba(255,107,0,0.6)]">
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileOpen(true)}>
          <Menu />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0d1117]/95 backdrop-blur-lg flex flex-col items-center justify-center">
          <button className="absolute top-8 right-8 text-white" onClick={() => setMobileOpen(false)}>
            <X size={32} />
          </button>
          <div className="flex flex-col items-center gap-8 text-2xl font-orbitron">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                onClick={(e) => handleNavClick(e, link.id)}
                className="flex items-center gap-4 text-white hover:text-[#ff6b00] transition-colors"
              >
                <link.icon size={24} />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
