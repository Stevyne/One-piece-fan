import { useState, Suspense, lazy } from 'react';
import { seas, Island } from '../data/seas';

// Lazy load the heavy 3D component
const World3D = lazy(() => import('../components/World3D'));

function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-[#0a0a2e] to-[#1a0a2e]">
      <div className="text-center">
        <div className="text-6xl mb-4 animate-bounce">🌊</div>
        <p className="text-cyan-400 text-xl font-bold">Chargement de Grand Line...</p>
        <div className="mt-4 w-48 h-2 bg-white/10 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-cyan-400 rounded-full animate-pulse w-3/5" />
        </div>
        <p className="text-white/30 text-xs mt-2">Three.js • Optimisé</p>
      </div>
    </div>
  );
}

export default function WorldPage() {
  const [selectedSea, setSelectedSea] = useState<string | null>(null);
  const [selectedIsland, setSelectedIsland] = useState<Island | null>(null);

  const selectedSeaData = seas.find(s => s.id === selectedSea);

  return (
    <div className="flex h-[calc(100vh-64px)] flex-col lg:flex-row">
      {/* 3D World */}
      <div className="flex-1 relative min-h-[50vh] lg:min-h-0">
        <Suspense fallback={<LoadingFallback />}>
          <World3D
            selectedSea={selectedSea}
            onSelectSea={setSelectedSea}
            selectedIsland={selectedIsland}
            onSelectIsland={setSelectedIsland}
          />
        </Suspense>
        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md rounded-xl p-3 border border-amber-400/20 max-w-xs">
          <h2 className="text-amber-400 font-bold text-sm mb-1">🌊 One Piece World Map</h2>
          <p className="text-white/60 text-xs">Clique sur les mers ou îles. Glisse pour tourner, scroll pour zoomer.</p>
          <p className="text-white/30 text-[10px] mt-2">Astuce: double-clique pour recentrer</p>
        </div>
        {selectedSeaData && (
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/10">
            <p className="text-xs text-white/60">Mer sélectionnée: <span className="font-bold" style={{ color: selectedSeaData.color }}>{selectedSeaData.name}</span></p>
          </div>
        )}
      </div>

      {/* Side Panel */}
      <div className="w-full lg:w-96 bg-black/40 backdrop-blur-xl border-t lg:border-t-0 lg:border-l border-amber-400/20 overflow-y-auto p-4 max-h-[50vh] lg:max-h-none">
        {selectedIsland ? (
          <div className="space-y-4">
            <button onClick={() => setSelectedIsland(null)} className="text-white/40 hover:text-white text-sm flex items-center gap-1 cursor-pointer">
              ← Retour aux mers
            </button>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <h3 className="text-xl font-bold text-amber-400">{selectedIsland.name}</h3>
              <p className="text-white/70 text-sm mt-2 leading-relaxed">{selectedIsland.description}</p>
              <div className="mt-3 flex gap-2">
                <span className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/60 border border-white/10">Taille: {selectedIsland.size}</span>
                <span className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/60 border border-white/10">X:{selectedIsland.x.toFixed(1)}</span>
              </div>
            </div>
          </div>
        ) : selectedSeaData ? (
          <div className="space-y-4">
            <button onClick={() => setSelectedSea(null)} className="text-white/40 hover:text-white text-sm flex items-center gap-1 cursor-pointer">
              ← Retour à toutes les mers
            </button>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="w-full h-1.5 rounded-full mb-3" style={{ backgroundColor: selectedSeaData.color }} />
              <h3 className="text-xl font-bold" style={{ color: selectedSeaData.color }}>{selectedSeaData.name}</h3>
              <p className="text-white/70 text-sm mt-2 leading-relaxed">{selectedSeaData.description}</p>
              <p className="text-white/30 text-xs mt-3">{selectedSeaData.islands.length} îles répertoriées</p>
            </div>
            <h4 className="text-white/40 text-xs uppercase tracking-wider font-bold">Îles de cette mer</h4>
            <div className="space-y-2">
              {selectedSeaData.islands.map(island => (
                <button
                  key={island.name}
                  onClick={() => setSelectedIsland(island)}
                  className="w-full text-left bg-white/5 hover:bg-white/10 rounded-lg p-3 border border-white/5 hover:border-white/20 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full group-hover:scale-125 transition-transform" style={{ backgroundColor: island.color, boxShadow: `0 0 8px ${island.color}` }} />
                    <span className="text-white text-sm font-medium">{island.name}</span>
                  </div>
                  <p className="text-white/40 text-xs mt-1 line-clamp-2">{island.description}</p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-amber-400">Les mers du monde</h2>
            <p className="text-white/50 text-xs">Sélectionne une mer sur la carte 3D ou dans la liste</p>
            {seas.map(sea => (
              <button
                key={sea.id}
                onClick={() => setSelectedSea(sea.id)}
                className="w-full text-left bg-white/5 hover:bg-white/10 rounded-xl p-3 border border-white/5 hover:border-white/20 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: sea.color + '33', border: `2px solid ${sea.color}` }}>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: sea.color }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-white truncate">{sea.name}</h3>
                    <p className="text-white/40 text-xs">{sea.islands.length} îles • {sea.description.slice(0, 40)}...</p>
                  </div>
                </div>
              </button>
            ))}
            <div className="pt-4 border-t border-white/5 text-[11px] text-white/30 leading-relaxed">
              <p><strong className="text-white/50">Grand Line:</strong> Route la plus dangereuse, bordée de Calm Belts.</p>
              <p className="mt-2"><strong className="text-white/50">Red Line:</strong> Continent qui encercle le monde, abrite Mary Geoise.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
