import React from 'react';
import { motion } from 'framer-motion';

export function ObserverPanel({ isHovered, onHover, onLeave, onClick }: any) {
  return (
    <motion.div
      className="relative h-full flex flex-col justify-center items-center overflow-hidden cursor-pointer group border-r border-transparent"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      animate={{ flex: isHovered ? 2 : 0.75 }}
      transition={{ type: "spring", stiffness: 180, damping: 28 }}
      style={{
        background: '#0a0703',
      }}
    >
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.15)_0%,rgba(10,7,3,1)_70%)] pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-60" />
      
      {/* Film grain overlay */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      {/* Border Glow */}
      <div className={`absolute inset-0 border-2 transition-colors duration-500 pointer-events-none ${isHovered ? 'border-[#c9a227]/50 shadow-[inset_0_0_50px_rgba(201,162,39,0.2)]' : 'border-transparent'}`} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center p-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#c9a227] font-cormorant italic text-sm tracking-[0.3em] uppercase mb-4"
        >
          [ CAPTURING MOMENTS ]
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-playfair text-4xl md:text-5xl font-bold text-[#f5ede0] mb-3"
        >
          THE OBSERVER
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-[#8a7560] font-lora mb-8"
        >
          Photographer &middot; Visual Storyteller
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {['📷 Gallery', '🌄 Stories', '🎬 Showreel'].map((tag, i) => (
            <span key={i} className="px-4 py-1.5 rounded-full bg-[#c9a227]/10 border border-[#c9a227]/30 text-[#d4783a] text-xs font-cormorant tracking-wider uppercase">
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="px-8 py-3 bg-[#120e08] border border-[#d4783a] text-[#d4783a] font-cormorant uppercase tracking-widest rounded-full hover:bg-[#c9a227] hover:border-[#c9a227] hover:text-[#0a0703] hover:scale-105 transition-all duration-300"
        >
          ENTER WORLD &rarr;
        </motion.button>
      </div>
    </motion.div>
  );
}
