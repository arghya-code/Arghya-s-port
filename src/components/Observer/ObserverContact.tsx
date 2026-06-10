import React from 'react';
import { SectionReveal } from '../Shared/SectionReveal';
import { ContactForm } from '../Shared/ContactForm';
import { owner } from '../../data/portfolioData';

export function ObserverContact() {
  return (
    <section id="contact" className="py-24 bg-[#0a0703]">
      <SectionReveal>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl text-[#f5ede0] uppercase tracking-wide">
              Let's Tell A Story <span className="italic text-[#c9a227] lowercase font-playfair">together</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-16 max-w-5xl mx-auto">
            
            {/* Left: Letter style */}
            <div className="w-full md:w-1/2 bg-[#120e08] p-8 md:p-12 border border-[#c9a227]/20 relative">
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#c9a227] -translate-x-2 -translate-y-2" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#c9a227] translate-x-2 translate-y-2" />
              
              <div className="font-lora text-[#f5ede0] text-lg leading-relaxed space-y-6">
                <p>Dear Visitor,</p>
                <p>
                  If you've made it this far, perhaps something caught your eye. I'm always looking for new stories to tell and new moments to freeze in time. 
                </p>
                <p>
                  Whether it's a portrait session, a commercial project, or simply a coffee to discuss the art of photography, my inbox is open.
                </p>
                <p>Warmly,</p>
                
                {/* Signature */}
                <div className="font-playfair italic text-3xl text-[#c9a227] pt-4">
                  Arghyadip
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-[#c9a227]/10 flex flex-col gap-2 font-cormorant tracking-widest text-[#8a7560] uppercase text-xs">
                <a href={`mailto:${owner.email}`} className="hover:text-[#c9a227] transition-colors">{owner.email}</a>
                <div>{owner.location}</div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="w-full md:w-1/2 flex items-center">
              <div className="w-full">
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
