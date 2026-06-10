import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useWorld } from '../../context/WorldContext';

export function PageTransition({ children }: { children: ReactNode }) {
  const { world } = useWorld();

  const getSlideDirection = () => {
    if (world === 'builder') return { x: '-100%' };
    if (world === 'observer') return { y: '100%' };
    if (world === 'narrator') return { x: '100%' };
    return { opacity: 0 };
  };

  return (
    <motion.div
      initial={getSlideDirection()}
      animate={{ x: 0, y: 0, opacity: 1 }}
      exit={getSlideDirection()}
      transition={{ type: 'spring', stiffness: 260, damping: 20, duration: 0.8 }}
      className="w-full min-h-screen"
    >
      {children}
    </motion.div>
  );
}
