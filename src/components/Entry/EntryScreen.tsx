import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWorld, WorldType } from '../../context/WorldContext';
import { BuilderPanel } from './BuilderPanel';
import { ObserverPanel } from './ObserverPanel';
import { NarratorPanel } from './NarratorPanel';
import { EntryScene3D } from './EntryScene3D';
import { Zap, Camera } from 'lucide-react';

export function EntryScreen() {
  const { setWorld } = useWorld();
  const [hoveredPanel, setHoveredPanel] = useState<WorldType | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clickedWorld, setClickedWorld] = useState<WorldType | null>(null);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handlePanelClick = (world: WorldType) => {
    setClickedWorld(world);
    setTimeout(() => {
      setWorld(world);
    }, 700);
  };

  const getFlexValue = (panel: WorldType) => {
    if (clickedWorld) {
      return clickedWorld === panel ? 100 : 0;
    }
    if (!hoveredPanel) return 33.33;
    return hoveredPanel === panel ? 50 : 25;
  };

  if (!isLoaded) {
    return <div className="w-screen h-screen bg-[#050505]" />;
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#050505] flex flex-col md:flex-row">
      {/* 3D Title */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.5 }}
      >
        {!clickedWorld && <EntryScene3D />}
      </motion.div>

      {/* Panels */}
      <AnimatePresence>
        <motion.div 
          className="h-full hidden md:block" 
          animate={{ width: `${getFlexValue('builder')}%`, opacity: clickedWorld && clickedWorld !== 'builder' ? 0 : 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <BuilderPanel 
            isHovered={hoveredPanel === 'builder'} 
            onHover={() => !clickedWorld && setHoveredPanel('builder')} 
            onLeave={() => !clickedWorld && setHoveredPanel(null)} 
            onClick={() => handlePanelClick('builder')} 
          />
        </motion.div>

        {/* Divider 1 */}
        {!clickedWorld && (
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden md:flex absolute left-1/3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ff6b00] to-[#00d4ff] z-20 items-center justify-center shadow-[0_0_10px_#ff6b00] origin-top"
            style={{ left: `${getFlexValue('builder')}%`, transition: 'left 0.5s ease-in-out' }}
          >
            <div className="p-1 rounded-full bg-black border border-[#ff6b00] text-[#ff6b00]">
              <Zap size={14} />
            </div>
          </motion.div>
        )}

        <motion.div 
          className="h-full hidden md:block" 
          animate={{ width: `${getFlexValue('observer')}%`, opacity: clickedWorld && clickedWorld !== 'observer' ? 0 : 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <ObserverPanel 
            isHovered={hoveredPanel === 'observer'} 
            onHover={() => !clickedWorld && setHoveredPanel('observer')} 
            onLeave={() => !clickedWorld && setHoveredPanel(null)} 
            onClick={() => handlePanelClick('observer')} 
          />
        </motion.div>

        {/* Divider 2 */}
        {!clickedWorld && (
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="hidden md:flex absolute right-1/3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#c9a227] to-[#d4783a] z-20 items-center justify-center shadow-[0_0_10px_#c9a227] origin-top"
            style={{ left: `${getFlexValue('builder') + getFlexValue('observer')}%`, transition: 'left 0.5s ease-in-out' }}
          >
            <div className="p-1 rounded-full bg-black border border-[#c9a227] text-[#c9a227]">
              <Camera size={14} />
            </div>
          </motion.div>
        )}

        <motion.div 
          className="h-full hidden md:block" 
          animate={{ width: `${getFlexValue('narrator')}%`, opacity: clickedWorld && clickedWorld !== 'narrator' ? 0 : 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <NarratorPanel 
            isHovered={hoveredPanel === 'narrator'} 
            onHover={() => !clickedWorld && setHoveredPanel('narrator')} 
            onLeave={() => !clickedWorld && setHoveredPanel(null)} 
            onClick={() => handlePanelClick('narrator')} 
          />
        </motion.div>
        
        {/* Mobile Layout (stacked vertically) */}
        <div className="md:hidden flex flex-col h-full w-full">
            <div className="h-1/3 w-full" onClick={() => handlePanelClick('builder')}>
                 <BuilderPanel isHovered={true} />
            </div>
            <div className="h-[2px] w-full bg-gradient-to-r from-[#ff6b00] to-[#00d4ff]" />
            <div className="h-1/3 w-full" onClick={() => handlePanelClick('observer')}>
                 <ObserverPanel isHovered={true} />
            </div>
            <div className="h-[2px] w-full bg-gradient-to-r from-[#c9a227] to-[#d4783a]" />
            <div className="h-1/3 w-full" onClick={() => handlePanelClick('narrator')}>
                 <NarratorPanel isHovered={true} />
            </div>
        </div>

      </AnimatePresence>
    </div>
  );
}
