import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWorld, WorldType } from '../../context/WorldContext';
import { Monitor, Camera, PenTool, Home } from 'lucide-react';

const worldConfig = {
  builder: { name: 'Builder', icon: Monitor, color: '#ff6b00', flashColor: '#0d1117' },
  observer: { name: 'Observer', icon: Camera, color: '#c9a227', flashColor: '#0a0703' },
  narrator: { name: 'Narrator', icon: PenTool, color: '#c9a227', flashColor: '#0f0d00' },
};

export function WorldSwitcher() {
  const { world, setWorld } = useWorld();
  const [isFlashing, setIsFlashing] = useState(false);
  const [flashColor, setFlashColor] = useState('#000');

  // Hide the switcher if we are on the entry screen
  if (world === 'entry') return null;

  const handleSwitch = (newWorld: WorldType) => {
    if (newWorld === world) return;
    
    // Set up flash color
    if (newWorld !== 'entry') {
      setFlashColor(worldConfig[newWorld].color);
    } else {
      setFlashColor('#050505');
    }
    
    setIsFlashing(true);
    
    setTimeout(() => {
      setWorld(newWorld);
      setTimeout(() => {
        setIsFlashing(false);
      }, 300);
    }, 200);
  };

  return (
    <>
      <AnimatePresence>
        {isFlashing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[99999] pointer-events-none"
            style={{ backgroundColor: flashColor }}
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] flex flex-col items-center gap-2">
        <button 
          onClick={() => handleSwitch('entry')}
          className="text-xs font-mono tracking-widest flex items-center gap-1 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors"
          style={{ color: world === 'builder' ? '#ff6b00' : '#c9a227' }}
        >
          <Home size={12} /> HOME
        </button>
        
        <div className="flex bg-[#111] backdrop-blur-lg rounded-full border border-white/10 p-1 overflow-hidden shadow-2xl">
          {(Object.keys(worldConfig) as Array<keyof typeof worldConfig>).map((key) => {
            const config = worldConfig[key];
            const Icon = config.icon;
            const isActive = world === key;
            
            return (
              <button
                key={key}
                onClick={() => handleSwitch(key)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeWorld"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: `${config.color}20` }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon size={16} style={{ color: isActive ? config.color : 'inherit' }} />
                <span className="hidden md:inline font-mono">{config.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
