import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Github, Linkedin, Twitter, Download, Mail, Terminal } from 'lucide-react';
import { owner } from '../../data/portfolioData';
import { Avatar3D, TechOrb3D } from './Avatar3D';

export function BuilderHero() {
  return (
    <section id="home" className="min-h-[90vh] flex flex-col md:flex-row items-center pt-24 relative">
      
      {/* Left Side Content */}
      <div className="w-full md:w-[55%] z-10 flex flex-col items-start px-4 md:px-0">
        
        {/* Social Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-4 mb-6"
        >
          {[
            { icon: Github, link: "https://github.com/arghya-code" },
            { icon: Linkedin, link: "https://www.linkedin.com/in/arghyadip-chatterjee-8858b724b/" },
            { icon: Twitter, link: owner.socials.twitter },
            { icon: Terminal, link: '#' }
          ].map((item, i) => (
            <a 
              key={i} 
              href={item.link} 
              className="w-10 h-10 rounded-full bg-[#161b27] flex items-center justify-center hover:bg-[#ff6b00]/20 hover:text-[#ff6b00] transition-colors border border-transparent hover:border-[#ff6b00]/50"
            >
              <item.icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="font-orbitron font-bold text-5xl md:text-7xl mb-6 leading-tight"
        >
          Hi, I'm <span className="text-[#ff6b00]">Arghyadip</span>
        </motion.h1>

        {/* Bio */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-syne text-[#6b7899] text-lg md:text-xl max-w-lg mb-8 leading-relaxed"
        >
          A passionate MCA student and full-stack developer dedicated to building scalable web applications and solving complex problems with modern technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <a 
            href={owner.resumeUrl} 
            download
            className="flex items-center gap-2 px-8 py-3 bg-[#ff6b00] text-black font-syne font-bold rounded-full hover:scale-105 transition-all shadow-[0_0_15px_rgba(255,107,0,0.3)] hover:shadow-[0_0_25px_rgba(255,107,0,0.6)]"
          >
            <Download size={18} /> Download CV
          </a>
          <a 
            href="#contact" 
            className="flex items-center gap-2 px-8 py-3 bg-[#0d1117] text-white border border-white font-syne font-bold rounded-full hover:bg-white hover:text-black transition-all"
          >
            <Mail size={18} /> Contact Me
          </a>
        </motion.div>

      </div>

      {/* Right Side 3D */}
      <div className="w-full md:w-[45%] h-[500px] relative mt-12 md:mt-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
          <directionalLight position={[-5, 5, 5]} intensity={0.5} color="#ff6b00" />
          <Environment preset="city" />
          
          <Avatar3D position={[0, -0.5, 0]} />
          
          <TechOrb3D position={[2, 1, 0]} color="#61dafb" speed={1.2} radius={2.5} />
          <TechOrb3D position={[-2, 0, 0]} color="#f7df1e" speed={0.8} radius={3} />
          <TechOrb3D position={[1, -1, 0]} color="#3178c6" speed={1.5} radius={2.2} />
        </Canvas>

        {/* Floating CSS Badges */}
        <motion.div 
          animate={{ y: [0, -10, 0] }} 
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-0 md:-right-10 bg-[#161b27]/80 backdrop-blur-md border border-[#ff6b00]/30 px-4 py-2 rounded-xl text-[#ff6b00] font-mono text-xs shadow-[0_0_15px_rgba(255,107,0,0.2)]"
        >
          React + Vite
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 left-10 md:left-0 bg-[#161b27]/80 backdrop-blur-md border border-[#00d4ff]/30 px-4 py-2 rounded-xl text-[#00d4ff] font-mono text-xs shadow-[0_0_15px_rgba(0,212,255,0.2)]"
        >
          Tailwind CSS
        </motion.div>
      </div>
      
    </section>
  );
}
