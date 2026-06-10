import React from 'react';
import { SectionReveal } from '../Shared/SectionReveal';
import { ContactForm } from '../Shared/ContactForm';
import { Canvas } from '@react-three/fiber';
import { Avatar3D } from './Avatar3D';
import { Environment } from '@react-three/drei';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { owner } from '../../data/portfolioData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function BuilderContact() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section id="contact" className="py-20" ref={ref}>
      <SectionReveal>
        <div className="bg-[#161b27] border border-white/5 rounded-3xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left: 3D Avatar & Info */}
            <div className="w-full lg:w-2/5 flex flex-col items-center justify-center relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.15)_0%,transparent_70%)]" />
              
              <div className="h-64 w-full relative z-10">
                {inView && (
                  <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 40 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} intensity={1} />
                    <Environment preset="city" />
                    <Avatar3D position={[0, -1, 0]} scale={0.8} />
                  </Canvas>
                )}
                
                {/* Floating message bubbles */}
                <motion.div 
                  animate={{ y: [-5, -20], opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  className="absolute top-10 right-1/4 bg-[#ff6b00] text-black px-3 py-1 rounded-xl rounded-bl-none font-bold text-xs font-mono"
                >
                  Hello!
                </motion.div>
                <motion.div 
                  animate={{ y: [-5, -20], opacity: [0, 1, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 1 }}
                  className="absolute top-20 left-1/4 bg-[#00d4ff] text-black px-3 py-1 rounded-xl rounded-br-none font-bold text-xs font-mono"
                >
                  Let's Chat
                </motion.div>
              </div>

              <div className="mt-8 text-center">
                <h3 className="font-orbitron font-bold text-2xl text-white mb-2">Reach Out</h3>
                <p className="text-gray-400 font-syne mb-6">Always open for new opportunities and collaborations.</p>
                <div className="flex gap-4 justify-center">
                  {[
                    { icon: Github, link: owner.socials.github },
                    { icon: Linkedin, link: owner.socials.linkedin },
                    { icon: Twitter, link: owner.socials.twitter }
                  ].map((item, i) => (
                    <a key={i} href={item.link} className="w-10 h-10 rounded-full bg-[#0d1117] flex items-center justify-center text-gray-400 hover:text-[#ff6b00] transition-colors border border-white/5 hover:border-[#ff6b00]/30">
                      <item.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="w-full lg:w-3/5">
              <h2 className="text-3xl font-orbitron font-bold mb-2">
                Get In <span className="text-[#ff6b00]">Touch</span>
              </h2>
              <p className="text-gray-400 font-syne mb-8">Let's discuss your project</p>
              
              <ContactForm />
            </div>

          </div>
        </div>
      </SectionReveal>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-orbitron font-bold text-xl text-white">
          Portfolio<span className="text-[#ff6b00]">.</span>
        </div>
        <div className="text-gray-500 font-syne text-sm text-center">
          Full Stack Thinker & UI/UX Designer
        </div>
        <div className="text-gray-500 font-syne text-sm flex items-center gap-1">
          &copy; 2025 Made with <Heart size={14} className="text-[#ff6b00]" /> by me
        </div>
      </footer>
    </section>
  );
}
