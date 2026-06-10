import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type WorldType = 'entry' | 'builder' | 'observer' | 'narrator';

interface WorldContextType {
  world: WorldType;
  setWorld: (world: WorldType) => void;
}

const WorldContext = createContext<WorldContextType | undefined>(undefined);

export function WorldProvider({ children }: { children: ReactNode }) {
  const [world, setWorld] = useState<WorldType>('entry');

  useEffect(() => {
    // Update the data-world attribute on the body tag for global CSS targeting
    document.body.setAttribute('data-world', world);
  }, [world]);

  return (
    <WorldContext.Provider value={{ world, setWorld }}>
      {children}
    </WorldContext.Provider>
  );
}

export function useWorld() {
  const context = useContext(WorldContext);
  if (context === undefined) {
    throw new Error('useWorld must be used within a WorldProvider');
  }
  return context;
}
