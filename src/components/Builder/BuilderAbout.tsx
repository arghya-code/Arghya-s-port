import React from 'react';
import { SectionReveal } from '../Shared/SectionReveal';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Code, Layout, Server, Database } from 'lucide-react';

export function BuilderAbout() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="py-10" ref={ref}>
      <SectionReveal>
        <div className="bg-[#161b27] border border-[#ff6b00]/20 rounded-3xl p-8 relative overflow-hidden group hover:border-[#ff6b00]/40 transition-colors">
          
          <div className="flex flex-col xl:flex-row gap-10 relative z-10">
            {/* Left Card Area */}
            <div className="w-full xl:w-2/5 bg-[#0d1117] rounded-2xl p-6 border border-white/5 relative overflow-hidden">
              {/* Star Background */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#ff6b00]/20 blur-xl" 
                style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
              />
              
              <div className="relative h-48 flex items-center justify-center mb-6">
                <div className="text-[#ff6b00] text-9xl opacity-20 font-bold font-orbitron">AC</div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#ff6b00] font-orbitron">
                    {inView ? <CountUp end={3} duration={2.5} /> : '0'}
                  </div>
                  <div className="text-xs text-gray-400 font-syne mt-1">Years Study</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#ff6b00] font-orbitron">
                    {inView ? <CountUp end={20} duration={2.5} suffix="+" /> : '0'}
                  </div>
                  <div className="text-xs text-gray-400 font-syne mt-1">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#ff6b00] font-orbitron">
                    {inView ? <CountUp end={10} duration={2.5} suffix="+" /> : '0'}
                  </div>
                  <div className="text-xs text-gray-400 font-syne mt-1">Tech Stack</div>
                </div>
              </div>
            </div>

            {/* Right Text Area */}
            <div className="w-full xl:w-3/5">
              <h2 className="text-3xl font-orbitron font-bold mb-4">
                About <span className="text-[#ff6b00]">Me</span>
              </h2>
              <p className="text-gray-400 font-syne leading-relaxed mb-6">
                I am a dedicated MCA student with a profound passion for software engineering. My journey began with a curiosity about how things work on the web, which evolved into a career focused on building robust, scalable, and user-friendly applications. I thrive in challenging environments and constantly seek to expand my skill set.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: Layout, title: "Frontend Dev", desc: "React, Vue, Tailwind" },
                  { icon: Server, title: "Backend Dev", desc: "Node.js, Express, Python" },
                  { icon: Database, title: "Database", desc: "MongoDB, PostgreSQL" },
                  { icon: Code, title: "Architecture", desc: "System Design, APIs" }
                ].map((item, i) => (
                  <div key={i} className="bg-[#0d1117] p-4 rounded-xl border-t-2 border-[#ff6b00]/50 hover:border-[#ff6b00] transition-colors">
                    <item.icon className="text-[#ff6b00] mb-2" size={24} />
                    <h4 className="text-white font-orbitron font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-xs font-syne">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
