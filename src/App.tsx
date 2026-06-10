import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { WorldProvider, useWorld, WorldType } from './context/WorldContext';

import { EntryScreen } from './components/Entry/EntryScreen';
import { BuilderLayout } from './components/Builder/BuilderLayout';
import { ObserverLayout } from './components/Observer/ObserverLayout';
import { NarratorLayout } from './components/Narrator/NarratorLayout';
import { WorldSwitcher } from './components/Shared/WorldSwitcher';
import { CustomCursor } from './components/Shared/CustomCursor';

function WorldRouter() {
  const { world, setWorld } = useWorld();
  const navigate = useNavigate();
  const location = useLocation();

  // Sync route to world state on mount/popstate
  useEffect(() => {
    const path = location.pathname.replace('/', '');
    if (['builder', 'observer', 'narrator'].includes(path)) {
      setWorld(path as WorldType);
    } else {
      setWorld('entry');
    }
  }, [location.pathname, setWorld]);

  // Sync world state to route (e.g. when setWorld is called)
  useEffect(() => {
    const path = world === 'entry' ? '/' : `/${world}`;
    if (location.pathname !== path) {
      navigate(path);
    }
  }, [world, navigate, location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<EntryScreen />} />
      <Route path="/builder" element={<BuilderLayout />} />
      <Route path="/observer" element={<ObserverLayout />} />
      <Route path="/narrator" element={<NarratorLayout />} />
    </Routes>
  );
}

function App() {
  return (
    <WorldProvider>
      <HashRouter>
        <CustomCursor />
        <WorldRouter />
        <WorldSwitcher />
      </HashRouter>
    </WorldProvider>
  );
}

export default App;
