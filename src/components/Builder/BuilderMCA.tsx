import React from 'react';
import { SectionReveal } from '../Shared/SectionReveal';
import { mcaJourney } from '../../data/portfolioData';
import { GraduationCap } from 'lucide-react';

export function BuilderMCA() {
  return (
    <section id="journey" className="py-20 relative">
      <SectionReveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-orbitron font-bold mb-4">
            My <span className="text-[#ff6b00]">MCA Journey</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-[#161b27] rounded-full">
            <div className="absolute top-0 bottom-0 w-full bg-gradient-to-b from-[#ff6b00] via-[#ff6b00] to-transparent shadow-[0_0_15px_#ff6b00]" />
          </div>

          <div className="space-y-16">
            {mcaJourney.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex items-center justify-between w-full ${isEven ? 'flex-row-reverse' : ''}`}>
                  
                  {/* Empty space for the other side */}
                  <div className="w-5/12" />

                  {/* Center Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-[#0d1117] border-4 border-[#ff6b00] rounded-full z-10 flex items-center justify-center shadow-[0_0_20px_rgba(255,107,0,0.5)]">
                    <GraduationCap size={16} className="text-[#ff6b00]" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-5/12 flex ${isEven ? 'justify-start' : 'justify-end'}`}>
                    <div className="bg-[#161b27] p-6 rounded-2xl border border-white/5 hover:border-[#ff6b00]/30 transition-colors shadow-xl text-left w-full max-w-sm">
                      <div className="text-[#ff6b00] font-mono text-sm mb-2">{step.period}</div>
                      <h3 className="text-xl font-orbitron font-bold text-white mb-4">{step.title}</h3>
                      <ul className="space-y-2">
                        {step.highlights.map((h, i) => (
                          <li key={i} className="text-gray-400 font-syne text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
