import React from 'react';
import { PageTransition } from '../Shared/PageTransition';
import { NarratorNav } from './NarratorNav';
import { NarratorHero } from './NarratorHero';
import { NarratorPortfolio } from './NarratorPortfolio';
import { NarratorStories } from './NarratorStories';
import { NarratorSkills } from './NarratorSkills';
import { NarratorContact } from './NarratorContact';

export function NarratorLayout() {
  return (
    <PageTransition>
      <div className="relative min-h-screen bg-[#0f0d00] font-lora selection:bg-[#4a4200] selection:text-white pb-32">
        
        {/* Background Decorative Gears (CSS) */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.03]">
           <div className="absolute top-[-100px] left-[-100px] w-96 h-96 border-[40px] border-[#c9a227] border-dashed rounded-full animate-[spin_60s_linear_infinite]" />
           <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] border-[50px] border-[#c9a227] border-dashed rounded-full animate-[spin_80s_linear_infinite_reverse]" />
        </div>

        {/* Scanlines */}
        <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.04]" 
             style={{ backgroundImage: 'linear-gradient(transparent 50%, rgba(0,0,0,0.8) 50%)', backgroundSize: '100% 4px' }} 
        />

        <div className="relative z-10 container mx-auto px-6 pt-6">
          <NarratorNav />
          <NarratorHero />
          <NarratorPortfolio />
          <NarratorStories />
          <NarratorSkills />
          <NarratorContact />
        </div>
      </div>
    </PageTransition>
  );
}
