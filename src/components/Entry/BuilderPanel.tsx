import React from 'react';
import { motion } from 'framer-motion';

export function BuilderPanel({ isHovered, onHover, onLeave, onClick }: any) {
  return (
    <motion.div
      className="relative h-full flex flex-col justify-center items-center overflow-hidden cursor-pointer group border-r border-transparent"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      animate={{ flex: isHovered ? 2 : 0.75 }}
      transition={{ type: "spring", stiffness: 180, damping: 28 }}
      style={{
        background: 'linear-gradient(to bottom, #0f1221, #1a2040)',
      }}
    >
      {/* Background Glows */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#ff6b00] rounded-full blur-[150px] opacity-40 mix-blend-screen pointer-events-none transition-opacity duration-500 group-hover:opacity-70" />
      
      {/* Border Glow */}
      <div className={`absolute inset-0 border-2 transition-colors duration-500 pointer-events-none ${isHovered ? 'border-[#ff6b00]/50 shadow-[inset_0_0_50px_rgba(255,107,0,0.2)]' : 'border-transparent'}`} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center p-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#ff6b00] font-mono text-sm tracking-widest mb-4"
        >
          &lt; BUILDER /&gt;
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-3"
        >
          THE BUILDER
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 font-syne mb-8"
        >
          MCA Student &middot; Developer &middot; Problem Solver
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {['💻 Projects', '⚙️ Tech Stack', '📄 Resume'].map((tag, i) => (
            <span key={i} className="px-4 py-1.5 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/30 text-[#ff6b00] text-xs font-mono">
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="px-8 py-3 bg-[#0d1117] border border-[#ff6b00] text-[#ff6b00] font-mono rounded-full hover:bg-[#ff6b00] hover:text-black hover:scale-105 transition-all duration-300"
        >
          ENTER WORLD &rarr;
        </motion.button>
      </div>

      {/* Hover Extras */}
      <div className={`absolute top-0 right-0 p-8 text-[#00ff00] font-mono text-xs opacity-0 transition-opacity duration-700 ${isHovered ? 'opacity-20' : ''}`}>
        {Array.from({length: 10}).map((_, i) => (
          <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
            {Math.random().toString(36).substring(2, 10)}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
