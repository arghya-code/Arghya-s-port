import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

function TitleText() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
        <Center>
          <Text3D
            font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"
            size={0.8}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            ARGHYADIP
            <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
          </Text3D>
        </Center>
        <Center position={[0, -1.2, 0]}>
          <Text3D
            font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
            size={0.6}
            height={0.1}
            curveSegments={12}
          >
            CHATTERJEE
            <meshStandardMaterial color="#cccccc" metalness={0.5} roughness={0.5} />
          </Text3D>
        </Center>
      </Float>
    </group>
  );
}

export function EntryScene3D() {
  return (
    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 z-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ff6b00" />
        <Environment preset="city" />
        <TitleText />
      </Canvas>
      <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-center text-white/70 tracking-[0.3em] text-sm uppercase font-light animate-pulse">
        Choose Your World
      </div>
    </div>
  );
}
