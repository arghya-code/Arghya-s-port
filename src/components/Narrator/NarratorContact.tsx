import React from 'react';
import { SectionReveal } from '../Shared/SectionReveal';
import { ContactForm } from '../Shared/ContactForm';
import { Mail, ArrowRight } from 'lucide-react';
import { owner } from '../../data/portfolioData';

export function NarratorContact() {
  return (
    <section id="contact" className="py-20">
      <SectionReveal>
        
        <div className="bg-[#1a1800] border-2 border-[#c9a227] p-2 max-w-5xl mx-auto">
          <div className="border border-[#c9a227] p-8 md:p-12 relative overflow-hidden">
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

            <div className="flex flex-col md:flex-row gap-12 relative z-10">
              
              <div className="w-full md:w-1/2">
                <div className="font-ibm text-[#c9a227] text-xs uppercase tracking-widest mb-4">
                  &gt; INITIALIZE_CONNECTION
                </div>
                <h2 className="font-playfair text-4xl md:text-5xl text-[#f5f0d0] mb-6 leading-tight">
                  Start the <span className="italic text-[#c9a227]">conversation.</span>
                </h2>
                <p className="font-lora text-[#9a8f60] mb-8 leading-relaxed">
                  Open for freelance writing, editing, content strategy, and collaborative projects. Drop a line below.
                </p>

                <div className="bg-[#0f0d00] border border-[#c9a227]/30 p-6">
                  <div className="flex items-center gap-4 text-[#c9a227] font-ibm text-sm mb-4">
                    <Mail size={18} />
                    <a href={`mailto:${owner.email}`} className="hover:text-[#f5f0d0] transition-colors">{owner.email}</a>
                  </div>
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-[#c9a227]/20">
                    {['Substack', 'Medium', 'LinkedIn'].map((link, i) => (
                      <a key={i} href="#" className="font-ibm text-xs text-[#9a8f60] uppercase tracking-widest hover:text-[#c9a227] flex items-center gap-1 group">
                        {link} <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <ContactForm />
              </div>

            </div>

            {/* Footer inside the card */}
            <div className="mt-16 pt-8 border-t border-[#c9a227]/30 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="font-ibm text-[#c9a227] font-bold text-lg tracking-widest uppercase">
                Arghyadip
              </div>
              <div className="font-ibm text-[#9a8f60] text-[10px] uppercase tracking-widest">
                &copy; {new Date().getFullYear()} All Rights Reserved
              </div>
            </div>

          </div>
        </div>

      </SectionReveal>
    </section>
  );
}
