import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Feather, Menu, X, BookOpen, Edit3, Mail } from 'lucide-react';

export function NarratorNav() {
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
    { name: 'Portfolio', id: 'portfolio', icon: BookOpen },
    { name: 'Stories', id: 'stories', icon: Edit3 },
    { name: 'Blog', id: 'blog', icon: Mail }
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
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`sticky top-6 z-50 max-w-2xl mx-auto rounded-full transition-all duration-300 ${
          scrolled 
            ? 'bg-[#1a1800]/90 backdrop-blur-md border border-[#c9a227]/30 shadow-[0_4px_20px_rgba(201,162,39,0.1)] py-3' 
            : 'bg-[#1a1800] border border-[#c9a227]/10 py-4'
        } px-6 flex items-center justify-between font-ibm text-sm`}
      >
        <div className="flex items-center gap-2 text-[#c9a227]">
          <div className="w-8 h-8 rounded bg-[#4a4200] border border-[#c9a227] flex items-center justify-center">
            <Feather size={16} />
          </div>
          <span className="font-bold tracking-wider hidden sm:inline">ARGHYADIP</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 bg-[#0f0d00] px-6 py-2 rounded-full border border-[#c9a227]/20">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              onClick={(e) => handleNavClick(e, link.id)}
              className="flex items-center gap-2 text-[#9a8f60] hover:text-[#c9a227] transition-colors uppercase tracking-widest text-xs"
            >
              <link.icon size={14} />
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="flex items-center gap-2 text-[#c9a227] hover:text-[#f5c842] uppercase tracking-widest text-xs border-b border-transparent hover:border-[#c9a227] transition-colors"
          >
            <Mail size={14} /> Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-[#c9a227]" onClick={() => setMobileOpen(true)}>
          <Menu />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0f0d00]/98 backdrop-blur-xl flex flex-col items-center justify-center font-ibm">
          <button className="absolute top-8 right-8 text-[#c9a227]" onClick={() => setMobileOpen(false)}>
            <X size={32} />
          </button>
          <div className="flex flex-col items-center gap-8 text-xl tracking-widest uppercase">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                onClick={(e) => handleNavClick(e, link.id)}
                className="flex items-center gap-4 text-[#9a8f60] hover:text-[#c9a227] transition-colors"
              >
                <link.icon size={20} />
                <span>{link.name}</span>
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="flex items-center gap-4 text-[#c9a227] mt-4"
            >
              <Mail size={20} />
              <span>CONTACT</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
