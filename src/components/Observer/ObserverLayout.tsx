import React from 'react';
import { PageTransition } from '../Shared/PageTransition';
import { ObserverNav } from './ObserverNav';
import { ObserverHero } from './ObserverHero';
import { ObserverGallery } from './ObserverGallery';
import { ObserverAbout } from './ObserverAbout';
import { ObserverBlog } from './ObserverBlog';
import { ObserverContact } from './ObserverContact';

export function ObserverLayout() {
  return (
    <PageTransition>
      <div className="relative min-h-screen bg-[#0a0703] font-lora selection:bg-[#c9a227]/30 selection:text-white">
        
        {/* CSS Blur Layers for Atmosphere */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#d4783a]/10 rounded-full blur-[120px]" />
          <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-[#c9a227]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[50%] bg-[#8b4513]/10 rounded-full blur-[150px]" />
        </div>

        {/* Film grain overlay */}
        <div className="fixed inset-0 z-[1] opacity-[0.08] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

        <div className="relative z-10">
          <ObserverNav />
          <ObserverHero />
          <div className="container mx-auto px-6 py-12">
            <ObserverGallery />
            <ObserverAbout />
            <ObserverBlog />
          </div>
          <ObserverContact />
        </div>
      </div>
    </PageTransition>
  );
}
