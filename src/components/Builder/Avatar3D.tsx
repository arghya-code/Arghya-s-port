import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Cylinder, GroupProps } from '@react-three/drei';
import * as THREE from 'three';

export function Avatar3D(props: GroupProps) {
  const groupRef = useRef<THREE.Group>(null);
  
  const skinColor = "#ffcd94";
  const hoodieColor = "#ff6b00";
  const pantsColor = "#1a2040";

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      // Very slow rotation
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group {...props} ref={groupRef} dispose={null}>
      {/* Head */}
      <Sphere args={[0.6, 32, 32]} position={[0, 1.8, 0]}>
        <meshStandardMaterial color={skinColor} roughness={0.4} />
      </Sphere>
      
      {/* Glasses/Visor */}
      <Box args={[0.8, 0.2, 0.3]} position={[0, 1.8, 0.5]}>
        <meshStandardMaterial color="#222" roughness={0.1} metalness={0.8} />
      </Box>

      {/* Hoodie Body */}
      <Box args={[1.2, 1.5, 0.8]} position={[0, 0.4, 0]}>
        <meshStandardMaterial color={hoodieColor} roughness={0.7} />
      </Box>

      {/* Hoodie Hood Back */}
      <Box args={[0.9, 0.8, 0.6]} position={[0, 1.5, -0.2]}>
        <meshStandardMaterial color={hoodieColor} roughness={0.7} />
      </Box>

      {/* Arms */}
      <Cylinder args={[0.2, 0.2, 1.2]} position={[-0.8, 0.5, 0]} rotation={[0, 0, 0.2]}>
        <meshStandardMaterial color={hoodieColor} roughness={0.7} />
      </Cylinder>
      <Cylinder args={[0.2, 0.2, 1.2]} position={[0.8, 0.5, 0]} rotation={[0, 0, -0.2]}>
        <meshStandardMaterial color={hoodieColor} roughness={0.7} />
      </Cylinder>

      {/* Hands */}
      <Sphere args={[0.2]} position={[-0.9, -0.2, 0]}>
        <meshStandardMaterial color={skinColor} roughness={0.4} />
      </Sphere>
      <Sphere args={[0.2]} position={[0.9, -0.2, 0]}>
        <meshStandardMaterial color={skinColor} roughness={0.4} />
      </Sphere>

      {/* Legs */}
      <Cylinder args={[0.25, 0.2, 1.2]} position={[-0.3, -1, 0]}>
        <meshStandardMaterial color={pantsColor} roughness={0.8} />
      </Cylinder>
      <Cylinder args={[0.25, 0.2, 1.2]} position={[0.3, -1, 0]}>
        <meshStandardMaterial color={pantsColor} roughness={0.8} />
      </Cylinder>

      {/* Shoes */}
      <Box args={[0.3, 0.2, 0.4]} position={[-0.3, -1.7, 0.1]}>
        <meshStandardMaterial color="#fff" roughness={0.5} />
      </Box>
      <Box args={[0.3, 0.2, 0.4]} position={[0.3, -1.7, 0.1]}>
        <meshStandardMaterial color="#fff" roughness={0.5} />
      </Box>
    </group>
  );
}

export function TechOrb3D({ position, color, speed = 1, radius = 2 }: { position: [number, number, number], color: string, speed?: number, radius?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime * speed;
      ref.current.position.x = position[0] + Math.cos(t) * radius;
      ref.current.position.z = position[2] + Math.sin(t) * radius;
      ref.current.position.y = position[1] + Math.sin(t * 2) * 0.5;
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.02;
    }
  });

  return (
    <Box ref={ref} args={[0.4, 0.4, 0.4]}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </Box>
  );
}
