import React from 'react';
import { PageTransition } from '../Shared/PageTransition';
import { BuilderNav } from './BuilderNav';
import { BuilderHero } from './BuilderHero';
import { BuilderAbout } from './BuilderAbout';
import { BuilderSkills } from './BuilderSkills';
import { BuilderProjects } from './BuilderProjects';
import { BuilderMCA } from './BuilderMCA';
import { BuilderContact } from './BuilderContact';
import { Canvas } from '@react-three/fiber';
import { Icosahedron, Torus, Box } from '@react-three/drei';

function BackgroundShapes() {
  return (
    <>
      <ambientLight intensity={0.1} color="#00d4ff" />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#ff6b00" />
      {Array.from({ length: 15 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 40,
            (Math.random() - 0.5) * 40,
            (Math.random() - 0.5) * 20 - 10,
          ]}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
        >
          {i % 3 === 0 ? <Icosahedron args={[1, 0]} /> : i % 3 === 1 ? <Torus args={[1, 0.2, 8, 16]} /> : <Box args={[1.5, 1.5, 1.5]} />}
          <meshStandardMaterial color="#0d1117" wireframe={Math.random() > 0.5} opacity={0.3} transparent />
        </mesh>
      ))}
      <fog attach="fog" args={['#0d1117', 10, 40]} />
    </>
  );
}

export function BuilderLayout() {
  return (
    <PageTransition>
      <div className="relative min-h-screen font-syne selection:bg-[#ff6b00]/30 selection:text-white">
        
        {/* Background Canvas */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 15] }} dpr={1} gl={{ antialias: false, powerPreference: "high-performance" }}>
            <BackgroundShapes />
          </Canvas>
        </div>

        {/* CSS Blobs */}
        <div className="fixed -top-40 -right-40 w-96 h-96 bg-[#ff6b00]/20 rounded-full blur-[150px] pointer-events-none z-0" />
        <div className="fixed -bottom-40 -left-40 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-[150px] pointer-events-none z-0" />

        <div className="relative z-10 container mx-auto px-6 py-6 pb-32">
          <BuilderNav />
          <BuilderHero />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-16">
            <BuilderProjects />
            <BuilderAbout />
          </div>
          <BuilderSkills />
          <BuilderMCA />
          <BuilderContact />
        </div>
      </div>
    </PageTransition>
  );
}
