import React from 'react';
import { SectionReveal } from '../Shared/SectionReveal';

export function NarratorStories() {
  return (
    <section id="stories" className="py-20">
      <SectionReveal>
        
        <div className="flex flex-col md:flex-row items-start gap-8">
          
          <div className="w-full md:w-1/3 pt-8">
            <h2 className="font-playfair text-4xl text-[#f5f0d0] mb-4">
              Featured <span className="italic text-[#c9a227]">Story</span>
            </h2>
            <p className="font-lora text-[#9a8f60] mb-8">
              A personal reflection on the changing landscape of digital communication.
            </p>
            <button className="text-[#c9a227] border-b border-[#c9a227] pb-1 font-ibm text-xs uppercase tracking-widest hover:text-[#f5f0d0] transition-colors">
              Read Full Essay
            </button>
          </div>

          <div className="w-full md:w-2/3">
            {/* Manuscript Paper effect */}
            <div className="bg-[#f5f0d0] p-8 md:p-12 rounded-sm shadow-[10px_10px_0_rgba(201,162,39,0.2)] relative transform rotate-1 hover:rotate-0 transition-transform duration-500 text-[#2a2500]">
              
              {/* Paper texture noise */}
              <div className="absolute inset-0 opacity-10 mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

              {/* Tape corner */}
              <div className="absolute -top-3 -left-3 w-16 h-6 bg-[#d4c9a3]/80 transform -rotate-45 shadow-sm opacity-70" />

              <div className="font-ibm tracking-tight text-sm md:text-base leading-relaxed space-y-6 relative z-10">
                <div className="text-center font-bold uppercase tracking-widest mb-10 pb-4 border-b border-[#c9a227]/30">
                  The Echoes of the Internet
                </div>
                
                <p>
                  I remember the sound it used to make. That screeching, digital handshake that signaled a connection to something larger than the room I was sitting in. It was a doorway.
                </p>
                <p>
                  Now, the connection is silent. It's pervasive. It's the air we breathe. We don't log on anymore; we exist within it. But in removing the friction, have we also lost the intention?
                </p>
                <p>
                  When every thought is published instantly, the concept of a "draft" begins to vanish from our collective consciousness. We are writing our histories in real-time, in permanent ink, on a canvas we don't own.
                </p>
                
                <div className="flex justify-end pt-8">
                  <div className="w-12 h-1 bg-[#c9a227]/50" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </SectionReveal>
    </section>
  );
}
