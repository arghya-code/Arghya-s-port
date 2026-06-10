import React from 'react';
import { motion } from 'framer-motion';

export function NarratorPanel({ isHovered, onHover, onLeave, onClick }: any) {
  return (
    <motion.div
      className="relative h-full flex flex-col justify-center items-center overflow-hidden cursor-pointer group"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      animate={{ flex: isHovered ? 2 : 0.75 }}
      transition={{ type: "spring", stiffness: 180, damping: 28 }}
      style={{
        background: 'linear-gradient(to bottom, #1a1500, #0f0d00)',
      }}
    >
      {/* Retro Scanlines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(transparent 50%, rgba(0,0,0,0.5) 50%)',
          backgroundSize: '100% 4px'
        }}
      />

      {/* Border Glow */}
      <div className={`absolute inset-0 border-2 transition-colors duration-500 pointer-events-none ${isHovered ? 'border-[#c9a227]/50 shadow-[inset_0_0_50px_rgba(201,162,39,0.2)]' : 'border-transparent'}`} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center p-8">
        
        {/* Loading Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2 mb-6 font-ibm text-xs text-[#c9a227]"
        >
          <span>LOADING...</span>
          <div className="w-24 h-2 bg-[#2a2500] border border-[#c9a227]/30 overflow-hidden">
            <motion.div 
              className="h-full bg-[#c9a227]"
              initial={{ width: '0%' }}
              animate={{ width: isHovered ? '100%' : '30%' }}
              transition={{ duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#c9a227] font-ibm text-sm mb-4"
        >
          [ CONTENT CREATOR ]
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-1 mb-3 text-[#f5f0d0]"
        >
          <span className="font-playfair text-3xl italic">THE</span>
          <span className="font-pixel text-xl tracking-widest mt-2">NARRATOR</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-[#9a8f60] font-rajdhani text-lg mb-8"
        >
          Writer &middot; Blogger &middot; Storyteller
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {['✍️ Stories', '📝 Blog', '🎨 Essays'].map((tag, i) => (
            <span key={i} className="px-4 py-1.5 rounded-full bg-[#c9a227]/10 border border-[#c9a227]/30 text-[#c9a227] text-xs font-ibm uppercase">
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="px-8 py-3 bg-[#1a1800] border border-[#c9a227] text-[#c9a227] font-ibm text-sm hover:bg-[#c9a227] hover:text-[#0f0d00] hover:scale-105 transition-all duration-300"
        >
          ENTER WORLD &rarr;
        </motion.button>
      </div>
    </motion.div>
  );
}
