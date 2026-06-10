import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionReveal } from '../Shared/SectionReveal';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { skills } from '../../data/portfolioData';
import { useInView } from 'react-intersection-observer';

function SkillBarChart({ categorySkills, inView }: { categorySkills: typeof skills, inView: boolean }) {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 5, 10], fov: 40 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ff6b00" />
      <group position={[-((categorySkills.length - 1) * 1.5) / 2, -2, 0]}>
        {categorySkills.map((skill, i) => (
          <Box key={skill.name} args={[1, 1, 1]} position={[i * 1.5, 0, 0]}>
            <meshStandardMaterial color={skill.color} roughness={0.3} metalness={0.8} />
          </Box>
        ))}
        {/* We would normally animate the scale/y here, but simple boxes for now */}
      </group>
    </Canvas>
  );
}

export function BuilderSkills() {
  const [activeTab, setActiveTab] = useState('Frontend');
  const categories = ['Frontend', 'Backend', 'Tools'];
  
  const filteredSkills = skills.filter(s => s.category === activeTab);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: canvasRef, inView: canvasInView } = useInView({ triggerOnce: false, threshold: 0 });

  return (
    <section id="skills" className="py-20" ref={ref}>
      <SectionReveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-orbitron font-bold mb-4">
            My <span className="text-[#ff6b00]">Skills</span>
          </h2>
          
          <div className="flex justify-center gap-4 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full font-mono text-sm transition-all ${
                  activeTab === cat 
                    ? 'bg-[#ff6b00] text-black font-bold' 
                    : 'bg-[#161b27] text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Bar Chart Visualizer */}
        <div ref={canvasRef} className="h-40 w-full mb-8 relative hidden md:block opacity-60">
           {canvasInView && <SkillBarChart categorySkills={filteredSkills} inView={inView} />}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#161b27] p-6 rounded-2xl border border-white/5 hover:border-[#ff6b00]/50 hover:shadow-[0_0_20px_rgba(255,107,0,0.1)] transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0d1117] flex items-center justify-center border border-white/10 group-hover:border-[#ff6b00]/30 transition-colors">
                    {/* Placeholder for SVG icon, using first letter */}
                    <span className="font-orbitron font-bold text-xl" style={{ color: skill.color }}>{skill.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-orbitron font-bold text-white text-sm">{skill.name}</h4>
                    <span className="text-xs text-gray-400 font-syne">Proficiency</span>
                  </div>
                </div>
                
                <div className="w-full bg-[#0d1117] h-2 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    animate={{ width: inView ? `${skill.level}%` : 0 }}
                    transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </SectionReveal>
    </section>
  );
}
