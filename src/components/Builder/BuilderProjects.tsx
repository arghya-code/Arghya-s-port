import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionReveal } from '../Shared/SectionReveal';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../../data/portfolioData';

export function BuilderProjects() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web', 'Mobile', 'AI/ML', 'Open Source'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-10">
      <SectionReveal>
        <div className="mb-10">
          <h2 className="text-3xl font-orbitron font-bold mb-2">
            My <span className="text-[#ff6b00]">Projects</span>
          </h2>
          <p className="text-gray-400 font-syne">A showcase of my recent work</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-mono transition-colors ${
                filter === cat 
                  ? 'bg-[#ff6b00] text-black font-bold' 
                  : 'bg-[#161b27] text-gray-400 border border-white/10 hover:border-[#ff6b00]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-[#161b27] rounded-2xl overflow-hidden border-t-2 border-[#ff6b00]/20 group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-[#0d1117]/80 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm">
                    <a href={project.live} className="px-6 py-2 bg-[#ff6b00] text-black font-orbitron font-bold rounded-full hover:scale-105 transition-transform">
                      View Project
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-orbitron font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 font-syne text-sm mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-1 bg-[#0d1117] rounded text-xs text-[#ff6b00] font-mono border border-[#ff6b00]/20">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                    <a href={project.github} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors font-syne">
                      <Github size={16} /> Code
                    </a>
                    <a href={project.live} className="flex items-center gap-2 text-sm text-[#ff6b00] hover:text-[#ff9500] transition-colors font-syne ml-auto">
                      <ExternalLink size={16} /> Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </SectionReveal>
    </section>
  );
}
