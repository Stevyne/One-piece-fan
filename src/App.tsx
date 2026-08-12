import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './layouts/Header';

const HomePage = lazy(() => import('./pages/HomePage'));
const WorldPage = lazy(() => import('./pages/WorldPage'));
const CharactersPage = lazy(() => import('./pages/CharactersPage'));
const ShipsPage = lazy(() => import('./pages/ShipsPage'));
const FruitsPage = lazy(() => import('./pages/FruitsPage'));
const TimelinePage = lazy(() => import('./pages/TimelinePage'));

function PageLoader() {
  return (
    <div className="w-full h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-b from-[#0a0a2e] to-[#1a0a2e]">
      <div className="text-center"><div className="text-6xl mb-4 animate-bounce">☠️</div><p className="text-amber-400 text-lg font-bold animate-pulse">Chargement de Grand Line...</p></div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-[#0a0a2e] via-[#0f1535] to-[#1a0a2e] text-white overflow-x-hidden">
        <Header />
        <main className="min-h-[calc(100vh-64px)]">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/world" element={<WorldPage />} />
              <Route path="/characters" element={<CharactersPage />} />
              <Route path="/fruits" element={<FruitsPage />} />
              <Route path="/ships" element={<ShipsPage />} />
              <Route path="/timeline" element={<TimelinePage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}