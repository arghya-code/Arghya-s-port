import React, { useRef } from 'react';
import { SectionReveal } from '../Shared/SectionReveal';
import { writingWork } from '../../data/portfolioData';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export function NarratorPortfolio() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-20">
      <SectionReveal>
        <div className="bg-[#1a1800]/50 border border-[#c9a227]/20 rounded-3xl p-8 mb-12">
          
          {/* Section Header */}
          <div className="bg-[#0f0d00] border border-[#c9a227]/30 rounded-xl px-6 py-4 inline-flex flex-col mb-8 relative group cursor-default">
            <span className="font-ibm text-[#9a8f60] text-xs mb-1 group-hover:text-[#c9a227] transition-colors">From My Desk:</span>
            <h2 className="font-pixel text-[#c9a227] text-sm sm:text-base tracking-widest">CONTENT PORTFOLIO</h2>
            {/* Pixel decoration */}
            <div className="absolute -right-2 -top-2 w-4 h-4 bg-[#c9a227] opacity-0 group-hover:opacity-100 transition-opacity" style={{ clipPath: 'polygon(0 40%, 40% 40%, 40% 0, 60% 0, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 60%, 0 60%)' }} />
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Experience List */}
            <div className="w-full md:w-2/3">
              <ul className="space-y-4">
                {writingWork.map((work, i) => (
                  <li key={i} className="flex items-center justify-between border-b border-[#c9a227]/10 pb-4 group hover:border-[#c9a227]/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-[#c9a227] opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all" />
                      <div>
                        <div className="font-ibm text-[#f5f0d0] text-sm sm:text-base">{work.title}</div>
                        <div className="font-lora text-[#9a8f60] text-xs sm:text-sm italic">at {work.platform}</div>
                      </div>
                    </div>
                    <div className="font-ibm text-[#c9a227] text-[10px] uppercase tracking-wider bg-[#0f0d00] px-3 py-1 rounded">
                      {work.period}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Featured Logo */}
            <div className="w-full md:w-1/3 flex flex-col">
              <div className="bg-[#0f0d00] border border-[#c9a227]/20 rounded-xl p-6 h-full flex flex-col items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#c9a227]/5 group-hover:bg-[#c9a227]/10 transition-colors" />
                <span className="font-ibm text-[#9a8f60] text-xs uppercase tracking-widest mb-4">Featured Here</span>
                <div className="w-24 h-24 border border-dashed border-[#c9a227]/50 rounded-full flex items-center justify-center bg-[#1a1800]">
                   <Star className="text-[#c9a227] opacity-50" size={32} />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex justify-between items-end mb-6 px-4">
            <h3 className="font-ibm text-[#c9a227] tracking-widest uppercase text-sm">Selected Works</h3>
            <div className="flex gap-2">
              <button onClick={() => scroll('left')} className="w-8 h-8 rounded-full border border-[#c9a227] flex items-center justify-center text-[#c9a227] hover:bg-[#c9a227] hover:text-[#0f0d00] transition-colors">
                <ChevronLeft size={16} />
              </button>
              <button onClick={() => scroll('right')} className="w-8 h-8 rounded-full border border-[#c9a227] flex items-center justify-center text-[#c9a227] hover:bg-[#c9a227] hover:text-[#0f0d00] transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="snap-center shrink-0 w-72 sm:w-80 group cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-[#1a1800] to-[#0f0d00] border border-[#c9a227]/20 rounded-xl mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#c9a227]/5 group-hover:bg-[#c9a227]/10 transition-colors" />
                  <div className="absolute top-4 left-4 bg-[#0f0d00] border border-[#c9a227]/30 text-[#c9a227] font-ibm text-[10px] px-2 py-1 rounded">
                    Article {item}
                  </div>
                </div>
                <h4 className="font-lora text-lg text-[#f5f0d0] mb-2 group-hover:text-[#c9a227] transition-colors">
                  The Art of Digital Storytelling
                </h4>
                <div className="font-ibm text-[10px] text-[#9a8f60] uppercase tracking-widest">
                  Published &middot; Oct 2024
                </div>
              </div>
            ))}
          </div>
        </div>

      </SectionReveal>
    </section>
  );
}
