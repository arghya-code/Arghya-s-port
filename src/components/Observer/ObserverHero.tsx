import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { PlayCircle, Camera } from 'lucide-react';
import { owner } from '../../data/portfolioData';
import { LensScene3D } from './LensScene3D';

export function ObserverHero() {
  return (
    <section id="home" className="h-screen relative flex items-center pt-20 overflow-hidden">
      
      {/* Background Simulation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(212,120,58,0.4)_0%,rgba(10,7,3,1)_60%)] mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_70%,rgba(201,162,39,0.2)_0%,transparent_50%)] mix-blend-screen" />
        <div className="absolute inset-0 bg-black/40" /> {/* Vignette overlay */}
      </div>

      {/* 3D Camera Scene */}
      <div className="absolute top-20 right-0 w-full md:w-2/3 h-full z-10 pointer-events-none opacity-60 md:opacity-100">
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 8], fov: 35 }}>
          <ambientLight intensity={0.2} />
          <spotLight position={[5, 10, 5]} angle={0.3} penumbra={1} intensity={2} color="#c9a227" castShadow />
          <Environment preset="studio" />
          <LensScene3D position={[2, 0, 0]} scale={1.2} />
        </Canvas>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="w-full md:w-[55%]">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#c9a227] font-cormorant tracking-[0.3em] uppercase text-sm mb-6"
          >
            Capturing Moments
          </motion.div>

          <h1 className="font-playfair font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 text-[#f5ede0]">
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="block"
            >
              Stories Through
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-[#f0c040] to-[#c9a227]"
            >
              My Lens.
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-lora text-[#8a7560] text-lg md:text-xl max-w-md mb-10 leading-relaxed"
          >
            Professional photography services for people, places and moments that matter. Every picture tells a story.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center gap-6 mb-12"
          >
            <a 
              href="#portfolio" 
              className="px-8 py-4 bg-[#c9a227] text-[#0a0703] font-cormorant tracking-widest text-sm uppercase hover:bg-[#f0c040] transition-colors rounded-full font-bold"
            >
              View Portfolio
            </a>
            <button className="flex items-center gap-3 text-[#f5ede0] font-cormorant tracking-widest text-sm uppercase hover:text-[#c9a227] transition-colors">
              <PlayCircle size={40} className="stroke-1" />
              Watch Showreel
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-6 text-[#8a7560]"
          >
            {['Instagram', 'Facebook', 'Twitter', '500px'].map((social, idx) => (
              <a key={idx} href="#" className="font-cormorant tracking-widest text-xs uppercase hover:text-[#c9a227] transition-colors relative group">
                {social}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c9a227] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Rotating Badge */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-32 h-32 md:w-40 md:h-40 z-20 hidden sm:flex items-center justify-center"
      >
        <div className="absolute inset-0 animate-rotate-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            <path id="curve" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
            <text className="text-[10.5px] font-cormorant uppercase tracking-[0.2em] fill-[#c9a227]">
              <textPath href="#curve" startOffset="0%">
                Award Winning &bull; Photographer &bull; Award Winning &bull; Photographer &bull; 
              </textPath>
            </text>
          </svg>
        </div>
        <Camera size={32} className="text-[#c9a227] absolute" strokeWidth={1} />
      </motion.div>
      
    </section>
  );
}
