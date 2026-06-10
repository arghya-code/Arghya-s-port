import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder, GroupProps } from '@react-three/drei';
import * as THREE from 'three';

export function RetroScene3D(props: GroupProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  // Create 3 rows of keys
  const keys = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 10 - row; col++) {
      const x = (col - (4.5 - row * 0.5)) * 0.15;
      const z = row * 0.15;
      keys.push(
        <Cylinder 
          key={`${row}-${col}`} 
          args={[0.05, 0.05, 0.05, 16]} 
          position={[x, 0.25, z - 0.2]} 
          rotation={[0.1, 0, 0]}
        >
          <meshStandardMaterial color="#f5f0d0" roughness={0.8} />
        </Cylinder>
      );
    }
  }

  return (
    <group {...props} ref={groupRef}>
      {/* Typewriter Base */}
      <Box args={[2, 0.4, 1.5]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#c9a227" roughness={0.6} metalness={0.7} />
      </Box>
      
      {/* Typewriter Top Slant */}
      <Box args={[1.8, 0.3, 0.8]} position={[0, 0.3, -0.3]} rotation={[-0.2, 0, 0]}>
        <meshStandardMaterial color="#8a7520" roughness={0.7} metalness={0.5} />
      </Box>

      {/* Carriage */}
      <Cylinder args={[0.15, 0.15, 2.2]} position={[0, 0.5, -0.6]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#222" roughness={0.4} metalness={0.8} />
      </Cylinder>

      {/* Paper */}
      <Box args={[1.5, 1, 0.02]} position={[0, 0.8, -0.5]} rotation={[-0.1, 0, 0]}>
        <meshStandardMaterial color="#f5f0d0" roughness={1} />
      </Box>

      {/* Keys Container */}
      <group position={[0, 0, 0.2]}>
        {keys}
      </group>
    </group>
  );
}
