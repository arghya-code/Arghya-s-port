import React from 'react';
import { SectionReveal } from '../Shared/SectionReveal';

export function NarratorSkills() {
  const skillSets = [
    {
      category: 'Editorial',
      items: ['Copywriting', 'Content Strategy', 'Editing & Proofing', 'Technical Writing', 'SEO Optimization']
    },
    {
      category: 'Technical',
      items: ['Markdown', 'HTML / CSS', 'CMS Platforms', 'Analytics', 'Git / Version Control']
    },
    {
      category: 'Creative',
      items: ['Storytelling', 'Brand Voice', 'Scriptwriting', 'Research', 'Visual Narrative']
    }
  ];

  return (
    <section id="skills" className="py-20 border-t border-[#c9a227]/20 border-dashed mt-10">
      <SectionReveal>
        
        <div className="text-center mb-16 relative">
           <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#c9a227]/20 -z-10" />
           <span className="bg-[#0f0d00] px-6 font-pixel text-[#c9a227] tracking-widest text-sm">TOOLKIT</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillSets.map((set, idx) => (
            <div key={idx} className="bg-[#1a1800]/50 border border-[#c9a227]/30 p-8 relative group hover:bg-[#1a1800] transition-colors">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#c9a227]" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#c9a227]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#c9a227]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#c9a227]" />

              <h3 className="font-playfair text-2xl text-[#f5f0d0] mb-6 italic text-center">
                {set.category}
              </h3>

              <ul className="space-y-4">
                {set.items.map((item, i) => (
                  <li key={i} className="flex items-center justify-center gap-2 group-hover:scale-105 transition-transform text-center">
                    <span className="font-ibm text-[#c9a227]/50 text-xs">[</span>
                    <span className="font-ibm text-[#9a8f60] group-hover:text-[#c9a227] transition-colors text-sm uppercase tracking-wider">{item}</span>
                    <span className="font-ibm text-[#c9a227]/50 text-xs">]</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </SectionReveal>
    </section>
  );
}
