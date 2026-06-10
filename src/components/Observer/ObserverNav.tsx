import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Camera, Menu, X, Home, User, Image as ImageIcon, BookOpen, Mail } from 'lucide-react';

export function ObserverNav() {
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
    { name: 'HOME', id: 'home', icon: Home },
    { name: 'ABOUT', id: 'about', icon: User },
    { name: 'PORTFOLIO', id: 'portfolio', icon: ImageIcon },
    { name: 'BLOG', id: 'blog', icon: BookOpen },
    { name: 'CONTACT', id: 'contact', icon: Mail }
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-[#0a0703]/85 backdrop-blur-md py-4 shadow-lg border-b border-[#c9a227]/20' 
            : 'bg-transparent py-6'
        } px-6 md:px-12 flex items-center justify-between`}
      >
        <div className="flex items-center gap-3 text-[#f5ede0]">
          <Camera size={24} className="text-[#c9a227]" />
          <span className="font-playfair italic text-xl tracking-wider">Arghyadip</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              onClick={(e) => handleNavClick(e, link.id)}
              className="relative flex items-center gap-2 text-[#8a7560] hover:text-[#f5ede0] font-cormorant tracking-widest text-sm transition-colors group"
            >
              <link.icon size={16} className="opacity-70 group-hover:opacity-100 transition-opacity" />
              <span>{link.name}</span>
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#c9a227] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-2 rounded-full border border-[#c9a227] text-[#c9a227] font-cormorant text-sm tracking-widest hover:bg-[#c9a227] hover:text-[#0a0703] transition-all duration-300">
            LET'S WORK TOGETHER
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-[#f5ede0]" onClick={() => setMobileOpen(true)}>
          <Menu />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0a0703]/95 backdrop-blur-xl flex flex-col items-center justify-center">
          <button className="absolute top-8 right-8 text-[#f5ede0]" onClick={() => setMobileOpen(false)}>
            <X size={32} />
          </button>
          <div className="flex flex-col items-center gap-8 text-2xl font-cormorant tracking-widest text-[#f5ede0]">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                onClick={(e) => handleNavClick(e, link.id)}
                className="flex items-center gap-4 hover:text-[#c9a227] transition-colors"
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
