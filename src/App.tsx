import { useState, Suspense } from 'react';
import World3D from './components/World3D';
import AnimatedCharacter from './components/AnimatedCharacter';
import { ShipIllustrationSVG } from './components/CharacterPortraits';
import { seas, Island } from './data/seas';
import { characters, Character } from './data/characters';
import { ships, Ship } from './data/ships';

type Tab = 'world' | 'characters' | 'ships';

function HakiBadge({ type, active, advanced }: { type: string; active: boolean; advanced?: boolean }) {
  if (!active) return null;
  const colors: Record<string, string> = {
    observation: advanced ? 'bg-red-500' : 'bg-amber-500',
    armament: advanced ? 'bg-purple-600' : 'bg-slate-600',
    conqueror: advanced ? 'bg-rose-600' : 'bg-orange-600',
  };
  const labels: Record<string, string> = {
    observation: advanced ? 'Observation (Adv.)' : 'Observation',
    armament: advanced ? 'Armament (Adv.)' : 'Armament',
    conqueror: advanced ? 'Conqueror (Adv.)' : 'Conqueror',
  };
  return (
    <span className={`${colors[type]} text-white text-xs px-2 py-0.5 rounded-full font-medium`}>
      {labels[type]}
    </span>
  );
}

function DevilFruitBadge({ type }: { type: string }) {
  const colors: Record<string, string> = {
    Paramecia: 'bg-pink-500',
    Logia: 'bg-cyan-500',
    Zoan: 'bg-green-500',
  };
  const emojis: Record<string, string> = {
    Paramecia: '🔮',
    Logia: '⚡',
    Zoan: '🦁',
  };
  return (
    <span className={`${colors[type]} text-white text-xs px-2 py-0.5 rounded-full font-bold`}>
      {emojis[type]} {type}
    </span>
  );
}

function CharacterCard({ character, isSelected, onClick }: { character: Character; isSelected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`text-left w-full p-3 rounded-xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
        isSelected
          ? 'border-amber-400 bg-amber-400/10 shadow-lg shadow-amber-400/20 scale-[1.02]'
          : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
      }`}
    >
      {/* Mini animated background glow */}
      {isSelected && (
        <div
          className="absolute inset-0 animate-pulse opacity-30"
          style={{ background: `radial-gradient(circle at 30% 50%, ${character.color}, transparent 70%)` }}
        />
      )}
      <div className="relative flex items-start gap-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0 overflow-hidden ${isSelected ? 'character-breathe' : ''}`}
          style={{
            backgroundColor: character.color + '33',
            border: `2px solid ${character.color}`,
            boxShadow: isSelected ? `0 0 12px ${character.color}66` : 'none',
          }}
        >
          {character.image ? (
            <img src={character.image} alt={character.name} className="w-full h-full object-cover object-top" />
          ) : (
            <span>{character.name.split(' ').pop()?.[0]}</span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-white text-sm truncate">{character.name}</h3>
          <p className="text-amber-400 text-xs italic truncate">{character.epithet}</p>
          <div className="flex gap-1 mt-1 flex-wrap">
            {character.devilFruit && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-pink-500/20 text-pink-400 border border-pink-500/30">
                🍎 {character.devilFruit.type}
              </span>
            )}
            {character.haki.conqueror && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">
                👑 Haki
              </span>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}

function ShipCard({ ship, isSelected, onClick }: { ship: Ship; isSelected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`text-left w-full p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
        isSelected
          ? 'border-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/20 scale-[1.02]'
          : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
      }`}
    >
      <div className="flex items-center gap-3">
        {ship.image ? (
          <div
            className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0"
            style={{ border: `2px solid ${ship.color}` }}
          >
            <img src={ship.image} alt={ship.name} className="w-full h-full object-cover" />
          </div>
        ) : (
          <span className="text-2xl">{ship.emoji}</span>
        )}
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-white text-sm truncate">{ship.name}</h3>
          <p className="text-cyan-400 text-xs truncate">{ship.crew}</p>
          <p className="text-white/50 text-xs">{ship.type}</p>
        </div>
      </div>
    </button>
  );
}

function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-[#0a0a2e] to-[#1a0a2e]">
      <div className="text-center">
        <div className="text-6xl mb-4 animate-bounce">☠️</div>
        <p className="text-amber-400 text-xl font-bold">Loading the Grand Line...</p>
        <div className="mt-4 w-48 h-2 bg-white/10 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-amber-400 rounded-full animate-pulse" style={{ width: '60%' }} />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('world');
  const [selectedSea, setSelectedSea] = useState<string | null>(null);
  const [selectedIsland, setSelectedIsland] = useState<Island | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [selectedShip, setSelectedShip] = useState<Ship | null>(null);
  const [charFilter, setCharFilter] = useState<string>('all');
  const [charSearch, setCharSearch] = useState<string>('');

  const selectedSeaData = seas.find(s => s.id === selectedSea);

  const filteredCharacters = characters.filter(c => {
    const matchesSearch = charSearch === '' ||
      c.name.toLowerCase().includes(charSearch.toLowerCase()) ||
      c.epithet.toLowerCase().includes(charSearch.toLowerCase()) ||
      (c.devilFruit?.name.toLowerCase().includes(charSearch.toLowerCase()) ?? false);
    const matchesFilter = charFilter === 'all' ||
      (charFilter === 'devilFruit' && c.devilFruit) ||
      (charFilter === 'hakiConqueror' && c.haki.conqueror) ||
      (charFilter === 'strawhat' && c.crew.includes('Straw Hat'));
    return matchesSearch && matchesFilter;
  });

  const tabs: { id: Tab; label: string; emoji: string }[] = [
    { id: 'world', label: 'Mers & Iles', emoji: '🌊' },
    { id: 'characters', label: 'Personnages', emoji: '⚔️' },
    { id: 'ships', label: 'Bateaux', emoji: '🚢' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a2e] via-[#0f1535] to-[#1a0a2e] text-white overflow-hidden">
      {/* Header */}
      <header className="relative z-50 bg-black/40 backdrop-blur-xl border-b border-amber-400/20">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">☠️</span>
              <div>
                <h1 className="text-xl font-black bg-gradient-to-r from-amber-400 via-red-400 to-amber-400 bg-clip-text text-transparent">
                  ONE PIECE UNIVERSE
                </h1>
                <p className="text-[10px] text-white/40 tracking-widest uppercase">Grand Line Explorer 3D</p>
              </div>
            </div>
            <nav className="flex gap-1">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-amber-400/20 text-amber-400 border border-amber-400/30'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="mr-1">{tab.emoji}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="h-[calc(100vh-64px)]">
        {/* World Tab */}
        {activeTab === 'world' && (
          <div className="flex h-full">
            {/* 3D World */}
            <div className="flex-1 relative">
              <Suspense fallback={<LoadingFallback />}>
                <World3D
                  selectedSea={selectedSea}
                  onSelectSea={setSelectedSea}
                  selectedIsland={selectedIsland}
                  onSelectIsland={setSelectedIsland}
                />
              </Suspense>
              {/* Overlay info */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md rounded-xl p-3 border border-amber-400/20 max-w-xs">
                <h2 className="text-amber-400 font-bold text-sm mb-1">🌊 One Piece World Map</h2>
                <p className="text-white/60 text-xs">Click on seas or islands to explore. Drag to rotate, scroll to zoom.</p>
              </div>
            </div>

            {/* Side Panel */}
            <div className="w-96 bg-black/40 backdrop-blur-xl border-l border-amber-400/20 overflow-y-auto p-4">
              {selectedIsland ? (
                <div className="space-y-4">
                  <button
                    onClick={() => setSelectedIsland(null)}
                    className="text-white/40 hover:text-white text-sm flex items-center gap-1 cursor-pointer"
                  >
                    ← Back to seas
                  </button>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="text-xl font-bold text-amber-400">{selectedIsland.name}</h3>
                    <p className="text-white/70 text-sm mt-2">{selectedIsland.description}</p>
                  </div>
                </div>
              ) : selectedSeaData ? (
                <div className="space-y-4">
                  <button
                    onClick={() => setSelectedSea(null)}
                    className="text-white/40 hover:text-white text-sm flex items-center gap-1 cursor-pointer"
                  >
                    ← Back to all seas
                  </button>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div
                      className="w-full h-2 rounded-full mb-3"
                      style={{ backgroundColor: selectedSeaData.color }}
                    />
                    <h3 className="text-xl font-bold" style={{ color: selectedSeaData.color }}>
                      {selectedSeaData.name}
                    </h3>
                    <p className="text-white/70 text-sm mt-2">{selectedSeaData.description}</p>
                  </div>
                  <h4 className="text-white/40 text-xs uppercase tracking-wider font-bold">Islands</h4>
                  <div className="space-y-2">
                    {selectedSeaData.islands.map(island => (
                      <button
                        key={island.name}
                        onClick={() => setSelectedIsland(island)}
                        className="w-full text-left bg-white/5 hover:bg-white/10 rounded-lg p-3 border border-white/5 hover:border-white/20 transition-all cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: island.color, boxShadow: `0 0 8px ${island.color}` }}
                          />
                          <span className="text-white text-sm font-medium">{island.name}</span>
                        </div>
                        <p className="text-white/40 text-xs mt-1 line-clamp-2">{island.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <h2 className="text-lg font-bold text-amber-400">The World Seas</h2>
                  <p className="text-white/50 text-xs">Select a sea on the 3D map or from the list below</p>
                  {seas.map(sea => (
                    <button
                      key={sea.id}
                      onClick={() => setSelectedSea(sea.id)}
                      className="w-full text-left bg-white/5 hover:bg-white/10 rounded-xl p-3 border border-white/5 hover:border-white/20 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: sea.color + '33', border: `2px solid ${sea.color}` }}
                        >
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: sea.color }} />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-white">{sea.name}</h3>
                          <p className="text-white/40 text-xs">{sea.islands.length} islands</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Characters Tab */}
        {activeTab === 'characters' && (
          <div className="flex h-full">
            {/* Character List */}
            <div className="w-80 bg-black/40 backdrop-blur-xl border-r border-amber-400/20 overflow-y-auto p-4">
              <div className="space-y-3">
                <h2 className="text-lg font-bold text-amber-400 flex items-center gap-2">
                  ⚔️ Characters
                </h2>

                {/* Search */}
                <input
                  type="text"
                  value={charSearch}
                  onChange={e => setCharSearch(e.target.value)}
                  placeholder="Search name, epithet, fruit..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50"
                />

                {/* Filters */}
                <div className="flex gap-1 flex-wrap">
                  {[
                    { id: 'all', label: 'All' },
                    { id: 'devilFruit', label: '🍎 Devil Fruit' },
                    { id: 'hakiConqueror', label: '👑 Conqueror' },
                    { id: 'strawhat', label: '🏴‍☠️ Straw Hats' },
                  ].map(filter => (
                    <button
                      key={filter.id}
                      onClick={() => setCharFilter(filter.id)}
                      className={`px-2 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                        charFilter === filter.id
                          ? 'bg-amber-400/20 text-amber-400'
                          : 'bg-white/5 text-white/40 hover:text-white/60'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>

                <p className="text-white/30 text-xs">{filteredCharacters.length} characters</p>

                {/* Character List */}
                <div className="space-y-2">
                  {filteredCharacters.map(char => (
                    <CharacterCard
                      key={char.name}
                      character={char}
                      isSelected={selectedCharacter?.name === char.name}
                      onClick={() => setSelectedCharacter(selectedCharacter?.name === char.name ? null : char)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Character Detail */}
            <div className="flex-1 overflow-y-auto p-6">
              {selectedCharacter ? (
                <div className="max-w-2xl mx-auto space-y-6">
                  {/* Animated Character Hero */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/10">
                    <AnimatedCharacter character={selectedCharacter} />
                  </div>

                  {/* Devil Fruit */}
                  {selectedCharacter.devilFruit && (
                    <div className="bg-white/5 rounded-xl p-5 border border-white/10 space-y-3">
                      <h2 className="text-lg font-bold text-pink-400 flex items-center gap-2">
                        🍎 Devil Fruit
                      </h2>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-bold text-lg">{selectedCharacter.devilFruit.name}</span>
                        <DevilFruitBadge type={selectedCharacter.devilFruit.type} />
                        {selectedCharacter.devilFruit.awakening && (
                          <span className="bg-gradient-to-r from-amber-500 to-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold animate-pulse">
                            AWAKENED
                          </span>
                        )}
                      </div>
                      <p className="text-white/60 text-sm">{selectedCharacter.devilFruit.description}</p>
                    </div>
                  )}

                  {/* Haki */}
                  <div className="bg-white/5 rounded-xl p-5 border border-white/10 space-y-3">
                    <h2 className="text-lg font-bold text-amber-400 flex items-center gap-2">
                      👁️ Haki
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      <HakiBadge type="observation" active={!!selectedCharacter.haki.observation} advanced={selectedCharacter.haki.observationAdvanced} />
                      <HakiBadge type="armament" active={!!selectedCharacter.haki.armament} advanced={selectedCharacter.haki.armamentAdvanced} />
                      <HakiBadge type="conqueror" active={!!selectedCharacter.haki.conqueror} advanced={selectedCharacter.haki.conquerorAdvanced} />
                    </div>
                    {!selectedCharacter.haki.observation && !selectedCharacter.haki.armament && !selectedCharacter.haki.conqueror && (
                      <p className="text-white/30 text-sm italic">No Haki mastered</p>
                    )}
                    <div className="grid grid-cols-3 gap-3 mt-3">
                      {[
                        { name: 'Observation', icon: '👁️', active: selectedCharacter.haki.observation, advanced: selectedCharacter.haki.observationAdvanced, color: '#F59E0B' },
                        { name: 'Armament', icon: '🛡️', active: selectedCharacter.haki.armament, advanced: selectedCharacter.haki.armamentAdvanced, color: '#6366F1' },
                        { name: 'Conqueror', icon: '👑', active: selectedCharacter.haki.conqueror, advanced: selectedCharacter.haki.conquerorAdvanced, color: '#EF4444' },
                      ].map(h => (
                        <div
                          key={h.name}
                          className={`rounded-lg p-3 text-center border ${
                            h.active ? (h.advanced ? 'border-amber-400/50 bg-amber-400/10' : 'border-white/20 bg-white/5') : 'border-white/5 bg-white/[0.02] opacity-40'
                          }`}
                        >
                          <div className="text-2xl">{h.icon}</div>
                          <div className="text-xs font-bold mt-1" style={{ color: h.active ? h.color : '#666' }}>
                            {h.name}
                          </div>
                          {h.advanced && (
                            <div className="text-[10px] text-amber-400 font-bold mt-0.5">ADVANCED</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Story / Biography */}
                  <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                    <h2 className="text-lg font-bold text-amber-400 mb-3 flex items-center gap-2">
                      📖 Story & Biography
                    </h2>
                    <p className="text-white/70 text-sm leading-relaxed">{selectedCharacter.story}</p>
                  </div>

                  {/* Quick Info */}
                  <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                    <h2 className="text-lg font-bold text-white/80 mb-2">📝 Quick Info</h2>
                    <p className="text-white/60 text-sm leading-relaxed">{selectedCharacter.description}</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="text-8xl mb-4">⚔️</div>
                    <p className="text-white/40 text-xl">Select a character to view details</p>
                    <p className="text-white/20 text-sm mt-2">Browse the list or use search & filters</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Ships Tab */}
        {activeTab === 'ships' && (
          <div className="flex h-full">
            {/* Ship List */}
            <div className="w-80 bg-black/40 backdrop-blur-xl border-r border-cyan-400/20 overflow-y-auto p-4">
              <div className="space-y-3">
                <h2 className="text-lg font-bold text-cyan-400 flex items-center gap-2">
                  🚢 Ships Encyclopedia
                </h2>
                <p className="text-white/30 text-xs">{ships.length} vessels catalogued</p>
                <div className="space-y-2">
                  {ships.map(ship => (
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

            {/* Ship Detail */}
            <div className="flex-1 overflow-y-auto p-6">
              {selectedShip ? (
                <div className="max-w-2xl mx-auto space-y-6">
                  {/* Hero with ship image */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/10">
                    {selectedShip.image ? (
                      <div className="relative h-72 sm:h-80">
                        {/* Ship image as full background */}
                        <img
                          src={selectedShip.image}
                          alt={selectedShip.name}
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{ filter: 'brightness(0.55) saturate(1.2)' }}
                        />
                        {/* Gradient overlay */}
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `
                              linear-gradient(to top, rgba(10,10,46,0.95) 0%, rgba(10,10,46,0.6) 40%, rgba(10,10,46,0.3) 60%, rgba(10,10,46,0.7) 100%),
                              linear-gradient(135deg, ${selectedShip.color}44 0%, transparent 60%)
                            `,
                          }}
                        />
                        {/* Scan lines */}
                        <div className="absolute inset-0 scan-line-effect opacity-15" />
                        {/* Water wave animation at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-12 ship-water-wave" />
                        {/* Content overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="flex items-end gap-4">
                            <div
                              className="w-16 h-16 rounded-xl flex items-center justify-center text-4xl border-2 flex-shrink-0 ship-float"
                              style={{
                                backgroundColor: selectedShip.color + '33',
                                borderColor: selectedShip.color,
                                boxShadow: `0 0 20px ${selectedShip.color}44`,
                              }}
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
                      <div className="relative h-72 sm:h-80">
                        {/* SVG Ship Illustration as background */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <ShipIllustrationSVG ship={selectedShip} size={400} />
                        </div>
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(to top, rgba(10,10,46,0.95) 0%, rgba(10,10,46,0.5) 40%, rgba(10,10,46,0.2) 60%, rgba(10,10,46,0.7) 100%)`,
                          }}
                        />
                        <div className="absolute scan-line-effect opacity-10 inset-0" />
                        <div className="absolute bottom-0 left-0 right-0 h-12 ship-water-wave" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="flex items-end gap-4">
                            <div
                              className="w-16 h-16 rounded-xl flex items-center justify-center text-4xl border-2 flex-shrink-0 ship-float"
                              style={{
                                backgroundColor: selectedShip.color + '33',
                                borderColor: selectedShip.color,
                                boxShadow: `0 0 20px ${selectedShip.color}44`,
                              }}
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
                    )}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <p className="text-white/40 text-xs uppercase tracking-wider">Size</p>
                      <p className="text-cyan-400 text-lg font-bold mt-1">{selectedShip.size}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <p className="text-white/40 text-xs uppercase tracking-wider">Figurehead</p>
                      <p className="text-white text-lg font-bold mt-1">{selectedShip.figurehead}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="bg-white/5 rounded-xl p-5 border border-white/10 space-y-2">
                    <h2 className="text-lg font-bold text-white/80">📝 Description</h2>
                    <p className="text-white/60 text-sm leading-relaxed">{selectedShip.description}</p>
                  </div>

                  {/* Special Feature */}
                  <div className="bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-xl p-5 border border-cyan-400/20 space-y-2">
                    <h2 className="text-lg font-bold text-cyan-400">✨ Special Feature</h2>
                    <p className="text-white/70 text-sm">{selectedShip.specialFeature}</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🚢</div>
                    <p className="text-white/40 text-xl">Select a ship to view details</p>
                    <p className="text-white/20 text-sm mt-2">From the Going Merry to Pluton</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
