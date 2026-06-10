import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionReveal } from '../Shared/SectionReveal';
import { photographs } from '../../data/portfolioData';

export function ObserverGallery() {
  const [filter, setFilter] = useState('ALL');
  const categories = ['ALL', 'LANDSCAPE', 'PORTRAIT', 'WILDLIFE', 'TRAVEL', 'STREET', 'COMMERCIAL'];

  const filteredPhotos = filter === 'ALL' 
    ? photographs 
    : photographs.filter(p => p.category.toUpperCase() === filter);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <section id="portfolio" className="py-20">
      <SectionReveal>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="relative text-sm tracking-[0.2em] font-cormorant transition-colors group pb-2"
            >
              <span className={filter === cat ? 'text-[#f5ede0]' : 'text-[#8a7560] group-hover:text-[#c9a227]'}>
                {cat}
              </span>
              {filter === cat && (
                <motion.div 
                  layoutId="observerFilterUnderline"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-[#c9a227]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Masonry/Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                key={photo.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={`relative overflow-hidden cursor-crosshair group transition-transform duration-200 ease-out ${photo.span || 'col-span-1'}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Simulated Photo Gradient */}
                <div 
                  className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110" 
                  style={{ background: photo.gradient }} 
                />
                
                {/* Texture Overlay */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#0a0703]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center border border-[#c9a227]/0 group-hover:border-[#c9a227]/30">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-center translate-z-10"
                    style={{ transform: 'translateZ(30px)' }}
                  >
                    <h3 className="font-playfair text-2xl text-[#f5ede0] mb-2">{photo.title}</h3>
                    <p className="font-cormorant tracking-[0.2em] text-xs text-[#c9a227] uppercase">{photo.category}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </SectionReveal>
    </section>
  );
}
