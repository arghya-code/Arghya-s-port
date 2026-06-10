import React from 'react';
import { SectionReveal } from '../Shared/SectionReveal';
import { blogPosts } from '../../data/portfolioData';

export function ObserverBlog() {
  return (
    <section id="blog" className="py-24 border-t border-[#c9a227]/10">
      <SectionReveal>
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Magazine Layout Left */}
          <div className="w-full lg:w-1/3">
            <h2 className="font-playfair text-5xl md:text-6xl text-[#f5ede0] leading-[1.1] mb-6">
              PHOTOGRAPHY WEBSITE <span className="text-[#c9a227] italic">DESIGN</span>
            </h2>
            <p className="text-[#8a7560] font-lora mb-8">
              Explore the latest thoughts, techniques, and stories from behind the lens.
            </p>
            
            {/* Phone Mockups (CSS) */}
            <div className="relative h-64 w-full overflow-hidden hidden md:block">
              <div className="absolute top-10 left-0 w-32 h-48 border border-[#c9a227]/30 rounded-2xl bg-[#120e08] transform -rotate-12 shadow-xl opacity-60">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#2c1810] to-black" />
              </div>
              <div className="absolute top-0 left-20 w-36 h-56 border border-[#c9a227]/50 rounded-2xl bg-[#1a1409] z-10 shadow-2xl">
                 <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#d4783a]/20 to-black p-2">
                    <div className="w-full h-1/2 bg-white/5 rounded-lg mb-2" />
                    <div className="w-full h-1/4 bg-white/5 rounded-lg" />
                 </div>
              </div>
              <div className="absolute top-16 left-44 w-32 h-48 border border-[#c9a227]/30 rounded-2xl bg-[#120e08] transform rotate-12 shadow-xl opacity-60">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#8b4513] to-black" />
              </div>
            </div>
          </div>

          {/* Right: Posts Grid */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <div key={i} className="group cursor-pointer">
                {/* Thumbnail */}
                <div className="w-full h-48 bg-gradient-to-br from-[#1a1409] to-[#0a0703] border border-[#c9a227]/10 mb-4 overflow-hidden relative">
                   <div className="absolute inset-0 bg-[#c9a227]/5 group-hover:bg-[#c9a227]/20 transition-colors duration-500" />
                   <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
                </div>
                
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[#c9a227] font-cormorant tracking-widest text-[10px] uppercase">{post.category}</span>
                  <span className="text-[#8a7560] font-cormorant text-xs">{post.date}</span>
                </div>
                
                <h3 className="font-playfair text-2xl text-[#f5ede0] mb-2 group-hover:text-[#c9a227] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-[#8a7560] font-lora text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            ))}
          </div>

        </div>
      </SectionReveal>
    </section>
  );
}
