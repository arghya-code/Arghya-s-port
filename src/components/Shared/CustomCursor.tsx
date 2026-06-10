import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useWorld } from '../../context/WorldContext';

export function CustomCursor() {
  const { world } = useWorld();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverType, setHoverType] = useState<string | null>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
        setHoverType('clickable');
      } else if (target.tagName === 'IMG' || target.closest('img')) {
        setIsHovering(true);
        setHoverType('image');
      } else if (['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN'].includes(target.tagName)) {
        setIsHovering(true);
        setHoverType('text');
      } else {
        setIsHovering(false);
        setHoverType(null);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Disable on mobile/touch devices
  if (typeof window !== 'undefined' && window.innerWidth <= 768) return null;
  if (world === 'entry') return null; // No custom cursor on entry

  const variants = {
    builder: {
      dot: { backgroundColor: '#00d4ff', height: 8, width: 8 },
      ring: { borderColor: '#ff6b00', height: isHovering ? 48 : 32, width: isHovering ? 48 : 32, backgroundColor: isHovering ? 'rgba(255,107,0,0.5)' : 'transparent', borderRadius: hoverType === 'text' ? '0%' : '50%' },
    },
    observer: {
      dot: { backgroundColor: '#f5ede0', height: 6, width: 6 },
      ring: { borderColor: '#c9a227', height: isHovering ? 40 : 30, width: isHovering ? 40 : 30, borderRadius: hoverType === 'image' ? '10%' : '50%' },
    },
    narrator: {
      dot: { backgroundColor: '#c9a227', height: 8, width: 8 },
      ring: { borderColor: '#4a4200', height: isHovering ? 36 : 28, width: isHovering ? 36 : 28, borderRadius: hoverType === 'clickable' ? '0%' : '50%' },
    }
  };

  const currentVariant = variants[world as keyof typeof variants];

  if (!currentVariant) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100000] translate-x-[-50%] translate-y-[-50%] rounded-full mix-blend-difference"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          ...currentVariant.dot
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0 }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] translate-x-[-50%] translate-y-[-50%] border-2"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          ...currentVariant.ring
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </>
  );
}
