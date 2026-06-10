import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder, Sphere, GroupProps } from '@react-three/drei';
import * as THREE from 'three';

export function LensScene3D(props: GroupProps) {
  const groupRef = useRef<THREE.Group>(null);
  const cardsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
    if (cardsRef.current) {
      cardsRef.current.rotation.y = state.clock.elapsedTime * -0.2;
    }
  });

  return (
    <group {...props}>
      <group ref={groupRef}>
        {/* Camera Body */}
        <Box args={[2, 1.2, 0.8]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#222222" roughness={0.3} metalness={0.9} />
        </Box>
        
        {/* Camera Grip */}
        <Box args={[0.5, 1.2, 1]} position={[0.75, 0, 0.1]}>
          <meshStandardMaterial color="#111111" roughness={0.9} />
        </Box>

        {/* Viewfinder */}
        <Box args={[0.6, 0.3, 0.4]} position={[0, 0.7, 0.1]}>
          <meshStandardMaterial color="#1a1a1a" roughness={0.5} />
        </Box>
        
        {/* Top Dials */}
        <Cylinder args={[0.2, 0.2, 0.1]} position={[0.6, 0.65, 0]} rotation={[0, 0, 0]}>
          <meshStandardMaterial color="#444" roughness={0.4} metalness={0.8} />
        </Cylinder>
        <Cylinder args={[0.15, 0.15, 0.1]} position={[-0.6, 0.65, 0]}>
          <meshStandardMaterial color="#444" roughness={0.4} metalness={0.8} />
        </Cylinder>

        {/* Lens Barrel */}
        <Cylinder args={[0.6, 0.6, 1.2]} position={[0, 0, 0.8]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#111111" roughness={0.2} metalness={0.8} />
        </Cylinder>
        
        {/* Lens Rings */}
        <Cylinder args={[0.62, 0.62, 0.2]} position={[0, 0, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#2a2a2a" roughness={0.6} />
        </Cylinder>
        <Cylinder args={[0.61, 0.61, 0.1]} position={[0, 0, 1.2]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#c9a227" roughness={0.2} metalness={0.8} />
        </Cylinder>

        {/* Glass Element */}
        <Sphere args={[0.55, 32, 32]} position={[0, 0, 1.2]} rotation={[Math.PI / 2, 0, 0]}>
          <meshPhysicalMaterial 
            color="#88ccff" 
            transmission={0.9} 
            opacity={1} 
            metalness={0.1} 
            roughness={0} 
            ior={1.5} 
            thickness={0.5} 
          />
        </Sphere>
      </group>

      {/* Orbiting Photo Cards */}
      <group ref={cardsRef}>
        {[0, 1, 2, 3, 4].map((i) => (
          <group key={i} rotation={[0, (i * Math.PI * 2) / 5, 0]}>
            <Box args={[1.5, 1, 0.05]} position={[3.5, Math.sin(i) * 1.5, 0]} rotation={[0, Math.PI / 2, 0]}>
              <meshStandardMaterial 
                color={i % 2 === 0 ? "#c9a227" : "#d4783a"} 
                emissive={i % 2 === 0 ? "#c9a227" : "#d4783a"}
                emissiveIntensity={0.2}
                transparent 
                opacity={0.8} 
              />
            </Box>
          </group>
        ))}
      </group>
    </group>
  );
}
