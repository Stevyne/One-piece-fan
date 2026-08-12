import { useState, useMemo } from 'react';
import { ships, Ship } from '../data/ships';
import { ShipCard } from '../components/ui/Cards';
import { ShipIllustrationSVG } from '../components/CharacterPortraits';

export default function ShipsPage() {
  const [selectedShip, setSelectedShip] = useState<Ship | null>(ships[0] || null);
  const [search, setSearch] = useState('');
  const [sizeFilter, setSizeFilter] = useState('all');

  const filtered = useMemo(() => {
    return ships.filter(s => {
      const matchSearch = !search || s.name.toLowerCase().includes(search.toLowerCase()) || s.crew.toLowerCase().includes(search.toLowerCase());
      const matchSize = sizeFilter === 'all' || s.size.toLowerCase().includes(sizeFilter.toLowerCase());
      return matchSearch && matchSize;
    });
  }, [search, sizeFilter]);

  return (
    <div className="flex h-[calc(100vh-64px)] flex-col lg:flex-row">
      <div className="w-full lg:w-80 bg-black/40 backdrop-blur-xl border-b lg:border-b-0 lg:border-r border-cyan-400/20 overflow-y-auto p-4 max-h-[40vh] lg:max-h-none shrink-0">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-cyan-400 flex items-center gap-2">🚢 Navires</h2>
            <span className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/50">{filtered.length}</span>
          </div>

          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Nom, équipage..."
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan-400/50"
          />

          <div className="flex gap-1 flex-wrap">
            {[
              { id: 'all', label: 'Tous' },
              { id: 'large', label: 'Large' },
              { id: 'massive', label: 'Massive' },
              { id: 'island', label: 'Île' },
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setSizeFilter(f.id)}
                className={`px-2 py-1 rounded-md text-xs font-medium border transition-all cursor-pointer ${sizeFilter === f.id ? 'bg-cyan-400/20 text-cyan-300 border-cyan-400/30' : 'bg-white/5 text-white/40 border-transparent hover:text-white/60'}`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="space-y-2">
            {filtered.map(ship => (
              <ShipCard
                key={ship.name}
                ship={ship}
                isSelected={selectedShip?.name === ship.name}
                onClick={() => setSelectedShip(selectedShip?.name === ship.name ? null : ship)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gradient-to-b from-[#0a0a2e]/10 to-transparent">
        {selectedShip ? (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              {selectedShip.image ? (
                <div className="relative h-72 sm:h-80">
                  <img
                    src={selectedShip.image}
                    alt={selectedShip.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ filter: 'brightness(0.55) saturate(1.2)' }}
                    onError={(e) => { (e.currentTarget.style.display = 'none'); }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, rgba(10,10,46,0.95) 0%, rgba(10,10,46,0.6) 40%, rgba(10,10,46,0.3) 60%, rgba(10,10,46,0.7) 100%), linear-gradient(135deg, ${selectedShip.color}44 0%, transparent 60%)`,
                    }}
                  />
                  <div className="absolute inset-0 scan-line-effect opacity-15" />
                  <div className="absolute bottom-0 left-0 right-0 h-12 ship-water-wave" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-end gap-4">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center text-4xl border-2 shrink-0 ship-float"
                        style={{ backgroundColor: selectedShip.color + '33', borderColor: selectedShip.color, boxShadow: `0 0 20px ${selectedShip.color}44` }}
                      >
                        {selectedShip.emoji}
                      </div>
                      <div>
                        <h1 className="text-2xl sm:text-3xl font-black text-white" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>{selectedShip.name}</h1>
                        <p className="text-cyan-400 text-base sm:text-lg">{selectedShip.crew}</p>
                        <p className="text-white/50 text-sm">{selectedShip.type}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative h-72 sm:h-80 bg-black/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShipIllustrationSVG ship={selectedShip} size={380} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a2e] via-[#0a0a2e]/30 to-[#0a0a2e]/60" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-end gap-4">
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center text-4xl border-2 shrink-0 ship-float" style={{ backgroundColor: selectedShip.color + '33', borderColor: selectedShip.color }}>
                        {selectedShip.emoji}
                      </div>
                      <div>
                        <h1 className="text-2xl sm:text-3xl font-black text-white">{selectedShip.name}</h1>
                        <p className="text-cyan-400">{selectedShip.crew}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
                <p className="text-white/40 text-xs uppercase tracking-wider">Taille</p>
                <p className="text-cyan-400 text-lg font-bold mt-1">{selectedShip.size}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
                <p className="text-white/40 text-xs uppercase tracking-wider">Figure de proue</p>
                <p className="text-white text-lg font-bold mt-1">{selectedShip.figurehead}</p>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-5 border border-white/10 space-y-2 backdrop-blur-sm">
              <h2 className="text-lg font-bold text-white/80">📝 Description</h2>
              <p className="text-white/60 text-sm leading-relaxed">{selectedShip.description}</p>
            </div>

            <div className="bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-xl p-5 border border-cyan-400/20 space-y-2 backdrop-blur-sm">
              <h2 className="text-lg font-bold text-cyan-400">✨ Particularité</h2>
              <p className="text-white/70 text-sm leading-relaxed">{selectedShip.specialFeature}</p>
            </div>

            <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
              <p className="text-white/30 text-xs">💡 Savais-tu ? Cette fiche utilise le même SVG illustratif que la version originale, avec fallback image. Les images sont lazy-loaded et ont un dégradé pour lisibilité.</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full min-h-[300px]">
            <div className="text-center">
              <div className="text-7xl mb-4 opacity-60">🚢</div>
              <p className="text-white/40 text-xl">Sélectionne un navire</p>
              <p className="text-white/20 text-sm mt-2">Du Going Merry à Pluton</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
