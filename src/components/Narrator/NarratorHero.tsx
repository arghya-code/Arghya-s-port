import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { PenTool, BookOpen, Share2, User } from 'lucide-react';
import { RetroScene3D } from './RetroScene3D';

export function NarratorHero() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => (p < 100 ? p + 2 : 100));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="pt-20 pb-12">
      
      {/* 3D Scene Background wrapper (on the right) */}
      <div className="absolute top-32 right-0 w-full md:w-1/2 h-[400px] z-10 pointer-events-none opacity-50 md:opacity-100">
        <Canvas camera={{ position: [0, 2, 5], fov: 40 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[5, 10, 5]} angle={0.3} penumbra={1} intensity={2} color="#c9a227" />
          <Environment preset="warehouse" />
          <RetroScene3D position={[0, -0.5, 0]} scale={1.2} />
        </Canvas>
      </div>

      <div className="relative z-20 max-w-4xl mx-auto">
        
        {/* Main Hero Card */}
        <div className="bg-[#1a1800]/80 backdrop-blur-sm border border-[#c9a227]/30 rounded-[2rem] p-6 md:p-10 relative overflow-hidden shadow-[0_10px_40px_rgba(201,162,39,0.05)]">
          
          {/* Corner Brackets */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#c9a227] rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#c9a227] rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#c9a227] rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#c9a227] rounded-br-lg" />

          {/* Profile Area Row */}
          <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
            
            {/* Loading Bar */}
            <div className="bg-[#0f0d00] border border-[#c9a227]/30 rounded-full px-4 py-2 flex items-center gap-3">
              <span className="font-pixel text-[8px] text-[#c9a227]">LOADING</span>
              <div className="w-24 h-2 bg-[#1a1800] rounded-full overflow-hidden">
                <div className="h-full bg-[#c9a227]" style={{ width: `${progress}%` }} />
              </div>
              <span className="font-pixel text-[8px] text-[#c9a227]">{progress}%</span>
            </div>

            {/* Avatar Circle */}
            <div className="w-16 h-16 rounded-full bg-[#2a2500] border border-[#c9a227] flex items-center justify-center text-[#c9a227]">
              <User size={24} />
            </div>

            {/* Greeting */}
            <div className="bg-[#0f0d00] border border-[#c9a227]/30 rounded-full px-6 py-2 font-ibm text-sm text-[#c9a227]">
              Hello there! <span className="opacity-50">→ Nice to meet you</span>
            </div>
          </div>

          {/* Large Title */}
          <div className="mb-10 text-center relative">
            <h1 className="flex justify-center items-center leading-none">
              <span className="font-cormorant text-7xl md:text-[8rem] font-light text-[#f5f0d0] tracking-tighter">ARGA</span>
              <span className="font-ibm text-5xl md:text-7xl font-bold text-[#c9a227] -ml-4 md:-ml-8 mix-blend-screen opacity-90">DIPA</span>
            </h1>
            <div className="mt-4 font-ibm text-xs text-[#9a8f60] tracking-[0.3em] uppercase">
              Content &middot; Stories &middot; 2025 &rarr;
            </div>
          </div>

          {/* Bottom Area */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="bg-[#0f0d00] border border-[#c9a227]/20 rounded-xl p-4 max-w-sm">
              <p className="font-lora text-[#9a8f60] text-sm leading-relaxed">
                Crafting digital narratives and exploring the intersection of technology, culture, and storytelling.
              </p>
            </div>

            <div className="bg-[#c9a227] text-[#0f0d00] font-ibm font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer shadow-[0_0_20px_rgba(201,162,39,0.3)]">
              <span>Arghyadip Chatterjee</span>
              <span className="w-1 h-1 bg-[#0f0d00] rounded-full" />
              <span>Content Creator</span>
            </div>
          </div>

        </div>

        {/* Action Buttons Row */}
        <div className="flex justify-center gap-6 mt-8">
          {[
            { icon: PenTool, label: 'Write' },
            { icon: BookOpen, label: 'Read' },
            { icon: Share2, label: 'Share' }
          ].map((action, i) => (
            <motion.button 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-[#1a1800] border border-[#c9a227]/30 rounded-2xl w-20 h-20 flex flex-col items-center justify-center gap-2 text-[#c9a227] hover:border-[#c9a227] hover:shadow-[0_0_15px_rgba(201,162,39,0.2)] transition-colors group"
            >
              <action.icon size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-ibm text-[10px] uppercase tracking-widest">{action.label}</span>
            </motion.button>
          ))}
        </div>

      </div>
    </section>
  );
}
