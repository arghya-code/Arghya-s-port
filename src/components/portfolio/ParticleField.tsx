export function ParticleField() {
  // Subtle floating dots + grid + blobs
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
      <div className="absolute top-[10%] left-[15%] h-72 w-72 rounded-full bg-[var(--neon-blue)] opacity-20 blur-[80px] animate-blob" />
      <div className="absolute top-[40%] right-[10%] h-80 w-80 rounded-full bg-[var(--neon-purple)] opacity-20 blur-[80px] animate-blob [animation-delay:-4s]" />
      <div className="absolute bottom-[10%] left-[40%] h-72 w-72 rounded-full bg-[var(--neon-cyan)] opacity-15 blur-[80px] animate-blob [animation-delay:-8s]" />
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white/60 animate-float"
          style={{
            top: `${(i * 37) % 100}%`,
            left: `${(i * 53) % 100}%`,
            animationDelay: `${(i % 6) * 0.6}s`,
            animationDuration: `${5 + (i % 5)}s`,
            opacity: 0.3 + ((i % 5) * 0.1),
          }}
        />
      ))}
    </div>
  );
}
