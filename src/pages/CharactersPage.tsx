import { useState, useMemo } from 'react';
import { characters, Character } from '../data/characters';
import { groupCharactersByCrew, crews } from '../data/crews';
import AnimatedCharacter from '../components/AnimatedCharacter';
import { CharacterCard } from '../components/ui/Cards';
import { HakiBadge, DevilFruitBadge } from '../components/ui/Badges';

export default function CharactersPage() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(characters[0] || null);
  const [charFilter, setCharFilter] = useState<string>('all');
  const [charSearch, setCharSearch] = useState<string>('');
  const [sortByBounty, setSortByBounty] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [groupMode, setGroupMode] = useState<'list' | 'crew' | 'category'>('crew');
  const [expandedCrews, setExpandedCrews] = useState<Set<string>>(() => new Set(crews.slice(0, 4).map(c => c.id)));
  const [favorites, setFavorites] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem('op_fav_chars') || '[]'); } catch { return []; }
  });

  const toggleFav = (name: string) => {
    const newFavs = favorites.includes(name) ? favorites.filter(f => f !== name) : [...favorites, name];
    setFavorites(newFavs);
    localStorage.setItem('op_fav_chars', JSON.stringify(newFavs));
  };

  const parseBounty = (bounty?: string) => {
    if (!bounty) return 0;
    return parseInt(bounty.replace(/,/g, ''), 10) || 0;
  };

  const filteredCharacters = useMemo(() => {
    let list = characters.filter(c => {
      if (showFavorites && !favorites.includes(c.name)) return false;
      const matchesSearch = charSearch === '' ||
        c.name.toLowerCase().includes(charSearch.toLowerCase()) ||
        c.epithet.toLowerCase().includes(charSearch.toLowerCase()) ||
        (c.devilFruit?.name.toLowerCase().includes(charSearch.toLowerCase()) ?? false) ||
        c.crew.toLowerCase().includes(charSearch.toLowerCase());
      const matchesFilter = charFilter === 'all' ||
        (charFilter === 'devilFruit' && c.devilFruit) ||
        (charFilter === 'hakiConqueror' && c.haki.conqueror) ||
        (charFilter === 'strawhat' && c.crew.includes('Straw Hat')) ||
        (charFilter === 'yonko' && parseBounty(c.bounty) >= 1000000000) ||
        (charFilter === 'awakening' && c.devilFruit?.awakening) ||
        (charFilter === 'marines' && c.crew.toLowerCase().includes('marines')) ||
        (charFilter === 'revolutionary' && c.crew.toLowerCase().includes('revolutionary')) ||
        (charFilter === 'wano' && (c.crew.toLowerCase().includes('wano') || c.crew.toLowerCase().includes('kozuki') || c.crew.toLowerCase().includes('scabbard')));
      return matchesSearch && matchesFilter;
    });
    if (sortByBounty) {
      list = [...list].sort((a, b) => parseBounty(b.bounty) - parseBounty(a.bounty));
    }
    return list;
  }, [charSearch, charFilter, sortByBounty, showFavorites, favorites]);

  const grouped = useMemo(() => {
    return groupCharactersByCrew(filteredCharacters);
  }, [filteredCharacters]);

  const toggleCrew = (id: string) => {
    const next = new Set(expandedCrews);
    if (next.has(id)) next.delete(id); else next.add(id);
    setExpandedCrews(next);
  };

  return (
    <div className="flex h-[calc(100vh-64px)] flex-col lg:flex-row">
      {/* List */}
      <div className="w-full lg:w-[360px] bg-black/40 backdrop-blur-xl border-b lg:border-b-0 lg:border-r border-amber-400/20 overflow-y-auto p-4 max-h-[55vh] lg:max-h-none shrink-0">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-amber-400 flex items-center gap-2">⚔️ Personnages</h2>
            <span className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/50">{filteredCharacters.length} / {characters.length}</span>
          </div>

          <input
            type="text"
            value={charSearch}
            onChange={e => setCharSearch(e.target.value)}
            placeholder="Nom, surnom, fruit, équipage..."
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50"
          />

          <div className="flex gap-1 flex-wrap">
            {[
              { id: 'all', label: 'Tous' },
              { id: 'devilFruit', label: '🍎 Fruit' },
              { id: 'hakiConqueror', label: '👑 Conq.' },
              { id: 'strawhat', label: '🏴‍☠️ Mugiwara' },
              { id: 'yonko', label: '💰 1B+' },
              { id: 'marines', label: '⚓ Marine' },
              { id: 'revolutionary', label: '🔥 Revol' },
              { id: 'wano', label: '🌸 Wano' },
            ].map(filter => (
              <button
                key={filter.id}
                onClick={() => setCharFilter(filter.id)}
                className={`px-2 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer ${charFilter === filter.id ? 'bg-amber-400/20 text-amber-400 border border-amber-400/30' : 'bg-white/5 text-white/40 hover:text-white/70 border border-transparent'}`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setSortByBounty(!sortByBounty)}
              className={`text-[11px] px-2 py-1 rounded-md border transition-all cursor-pointer ${sortByBounty ? 'bg-white/10 border-white/20 text-white' : 'bg-transparent border-white/10 text-white/40 hover:text-white/60'}`}
            >
              💰 Prime {sortByBounty ? '↓' : ''}
            </button>
            <button
              onClick={() => setShowFavorites(!showFavorites)}
              className={`text-[11px] px-2 py-1 rounded-md border transition-all cursor-pointer ${showFavorites ? 'bg-amber-400/20 border-amber-400/30 text-amber-300' : 'bg-transparent border-white/10 text-white/40'}`}
            >
              ⭐ Fav {favorites.length > 0 ? `(${favorites.length})` : ''}
            </button>
            <div className="flex rounded-md overflow-hidden border border-white/10">
              <button onClick={() => setGroupMode('list')} className={`text-[11px] px-2 py-1 cursor-pointer ${groupMode === 'list' ? 'bg-white/15 text-white' : 'bg-white/5 text-white/40'}`}>Liste</button>
              <button onClick={() => setGroupMode('crew')} className={`text-[11px] px-2 py-1 cursor-pointer ${groupMode === 'crew' ? 'bg-amber-400/20 text-amber-300' : 'bg-white/5 text-white/40'}`}>Equipages</button>
            </div>
          </div>

          {/* Grouped view */}
          {groupMode === 'crew' ? (
            <div className="space-y-2">
              {grouped.map(({ crew, characters: chars }) => (
                <div key={crew.id} className="rounded-xl border bg-white/[0.03] border-white/10 overflow-hidden">
                  <button
                    onClick={() => toggleCrew(crew.id)}
                    className="w-full flex items-center justify-between p-2.5 hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-lg" style={{ filter: `drop-shadow(0 0 6px ${crew.color}66)` }}>{crew.emoji}</span>
                      <div className="text-left min-w-0">
                        <p className="text-xs font-bold text-white truncate" title={crew.name}>{crew.name}</p>
                        <p className="text-[10px] text-white/40 truncate">{crew.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/10 text-white/50">{chars.length}</span>
                      <span className={`text-[10px] transition-transform ${expandedCrews.has(crew.id) ? 'rotate-90' : ''}`}>▶</span>
                    </div>
                  </button>
                  {expandedCrews.has(crew.id) && (
                    <div className="p-2 space-y-1.5 bg-black/20 max-h-[40vh] overflow-y-auto">
                      {chars.map(char => (
                        <CharacterCard
                          key={char.name}
                          character={char}
                          isSelected={selectedCharacter?.name === char.name}
                          onClick={() => setSelectedCharacter(selectedCharacter?.name === char.name ? null : char)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {grouped.length === 0 && <p className="text-white/30 text-xs text-center py-8">Aucun équipage avec ces filtres</p>}
            </div>
          ) : (
            <div className="space-y-2">
              {filteredCharacters.map(char => (
                <CharacterCard
                  key={char.name}
                  character={char}
                  isSelected={selectedCharacter?.name === char.name}
                  onClick={() => setSelectedCharacter(selectedCharacter?.name === char.name ? null : char)}
                />
              ))}
              {filteredCharacters.length === 0 && <p className="text-white/30 text-xs text-center py-8">Aucun personnage trouvé</p>}
            </div>
          )}
        </div>
      </div>

      {/* Detail */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gradient-to-b from-[#0a0a2e]/20 to-transparent">
        {selectedCharacter ? (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <button
                onClick={() => toggleFav(selectedCharacter.name)}
                className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-amber-400/20 hover:border-amber-400/30 transition-all cursor-pointer"
              >
                <span className={favorites.includes(selectedCharacter.name) ? 'text-amber-400' : 'text-white/40'}>⭐</span>
              </button>
              <AnimatedCharacter character={selectedCharacter} />
            </div>

            {selectedCharacter.devilFruit && (
              <div className="bg-white/5 rounded-xl p-5 border border-white/10 space-y-3 backdrop-blur-sm">
                <h2 className="text-lg font-bold text-pink-400 flex items-center gap-2">🍎 Fruit du Démon</h2>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-white font-bold text-lg">{selectedCharacter.devilFruit.name}</span>
                  <DevilFruitBadge type={selectedCharacter.devilFruit.type} />
                  {selectedCharacter.devilFruit.awakening && <span className="bg-gradient-to-r from-amber-500 to-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold animate-pulse">ÉVEILLÉ</span>}
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{selectedCharacter.devilFruit.description}</p>
              </div>
            )}

            <div className="bg-white/5 rounded-xl p-5 border border-white/10 space-y-3 backdrop-blur-sm">
              <h2 className="text-lg font-bold text-amber-400 flex items-center gap-2">👁️ Haki</h2>
              <div className="flex flex-wrap gap-2">
                <HakiBadge type="observation" active={!!selectedCharacter.haki.observation} advanced={selectedCharacter.haki.observationAdvanced} />
                <HakiBadge type="armament" active={!!selectedCharacter.haki.armament} advanced={selectedCharacter.haki.armamentAdvanced} />
                <HakiBadge type="conqueror" active={!!selectedCharacter.haki.conqueror} advanced={selectedCharacter.haki.conquerorAdvanced} />
              </div>
              <div className="grid grid-cols-3 gap-3 mt-3">
                {[
                  { name: 'Observation', icon: '👁️', active: selectedCharacter.haki.observation, adv: selectedCharacter.haki.observationAdvanced, color: '#F59E0B' },
                  { name: 'Armement', icon: '🛡️', active: selectedCharacter.haki.armament, adv: selectedCharacter.haki.armamentAdvanced, color: '#6366F1' },
                  { name: 'Empereurs', icon: '👑', active: selectedCharacter.haki.conqueror, adv: selectedCharacter.haki.conquerorAdvanced, color: '#EF4444' },
                ].map(h => (
                  <div key={h.name} className={`rounded-lg p-3 text-center border ${h.active ? (h.adv ? 'border-amber-400/50 bg-amber-400/10' : 'border-white/20 bg-white/5') : 'border-white/5 bg-white/[0.02] opacity-40'}`}>
                    <div className="text-2xl">{h.icon}</div>
                    <div className="text-xs font-bold mt-1" style={{ color: h.active ? h.color : '#666' }}>{h.name}</div>
                    {h.adv && <div className="text-[10px] text-amber-400 font-bold mt-0.5 animate-pulse">AVANCÉ</div>}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-5 border border-white/10 backdrop-blur-sm">
              <h2 className="text-lg font-bold text-amber-400 mb-3">📖 Histoire</h2>
              <p className="text-white/70 text-sm leading-relaxed">{selectedCharacter.story}</p>
            </div>

            <div className="bg-white/5 rounded-xl p-5 border border-white/10 backdrop-blur-sm">
              <h2 className="text-lg font-bold text-white/80 mb-2">📝 Résumé</h2>
              <p className="text-white/60 text-sm leading-relaxed">{selectedCharacter.description}</p>
              <div className="mt-3 flex gap-2 flex-wrap">
                <span className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/50 border border-white/10">{selectedCharacter.crew}</span>
                <span className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/50 border border-white/10">{selectedCharacter.role}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full min-h-[300px]">
            <div className="text-center">
              <div className="text-7xl mb-4 opacity-60">⚔️</div>
              <p className="text-white/40 text-xl">Sélectionne un personnage</p>
              <p className="text-white/20 text-sm mt-2">Mode équipage activé : {grouped.length} équipages • {filteredCharacters.length} persos</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
