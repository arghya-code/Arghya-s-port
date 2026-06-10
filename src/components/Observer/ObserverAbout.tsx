import React from 'react';
import { SectionReveal } from '../Shared/SectionReveal';

export function ObserverAbout() {
  return (
    <section id="about" className="py-24">
      <SectionReveal>
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Left: Profile Photo */}
          <div className="w-full md:w-5/12 flex flex-col items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 border border-[#c9a227]/30">
              <div className="absolute inset-0 rounded-full border border-[#c9a227]/10 scale-105" />
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.2)_0%,transparent_70%)] animate-pulse" />
              
              <div className="w-full h-full rounded-full overflow-hidden relative">
                {/* Simulated Photo Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2c1810] via-[#8b4513] to-[#d4783a]" />
                <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
              </div>
            </div>
            
            <div className="mt-8 text-[#c9a227] font-playfair italic text-3xl opacity-80">
              Arghyadip Chatterjee
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="w-full md:w-7/12">
            <div className="text-[#c9a227] font-cormorant tracking-[0.3em] text-xs uppercase mb-4">About Me</div>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#f5ede0] mb-8">
              Finding the extraordinary in the ordinary.
            </h2>
            
            <div className="space-y-6 text-[#8a7560] font-lora leading-relaxed text-lg mb-10">
              <p>
                Photography is more than just a click of a button; it's the art of seeing. I specialize in capturing the raw, unfiltered essence of human emotion and the quiet majesty of nature.
              </p>
              <p>
                With over a decade of experience looking through the lens, my work focuses on light, shadow, and the stories that exist in the spaces between them.
              </p>
            </div>

            <blockquote className="relative p-6 border-l-2 border-[#c9a227] bg-[#120e08]/50 italic font-cormorant text-xl text-[#f5ede0] mb-10">
              <span className="absolute -top-4 -left-3 text-4xl text-[#c9a227]/30 font-playfair">"</span>
              We are making photographs to understand what our lives mean to us.
            </blockquote>

            <div className="flex gap-12 mb-10">
              {[
                { label: 'Photographs', value: '10K+' },
                { label: 'Countries', value: '15' },
                { label: 'Years', value: '8' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="font-playfair text-3xl text-[#c9a227] mb-1">{stat.value}</div>
                  <div className="font-cormorant tracking-widest text-xs uppercase text-[#8a7560]">{stat.label}</div>
                </div>
              ))}
            </div>

            <button className="px-8 py-3 border border-[#c9a227] text-[#c9a227] font-cormorant tracking-widest text-sm uppercase hover:bg-[#c9a227] hover:text-[#0a0703] transition-all duration-300">
              Read More
            </button>
          </div>

        </div>
      </SectionReveal>
    </section>
  );
}
