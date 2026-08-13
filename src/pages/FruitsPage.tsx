import { useMemo, useState } from 'react';
import { characters } from '../data/characters';
import { fruitVisuals, getFruitVisual } from '../data/fruitVisuals';
import { Reveal } from '../components/ui/Reveal';

type FruitType = 'All' | 'Paramecia' | 'Logia' | 'Zoan';

export default function FruitsPage() {
  const [typeFilter, setTypeFilter] = useState<FruitType>('All');
  const [search, setSearch] = useState('');
  const [showAwakenedOnly, setShowAwakenedOnly] = useState(false);
  const [selectedFruit, setSelectedFruit] = useState<string | null>(null);

  const allFruits = useMemo(() => {
    const map = new Map<string, { 
      name: string; type: string; awakening?: boolean; users: string[]; description: string; emoji: string; color: string;
      image?: string; detailedDescription?: string; firstAppearance?: string; element?: string;
    }>();

    characters.forEach(c => {
      if (!c.devilFruit) return;
      const v = getFruitVisual(c.devilFruit.name);
      if (!map.has(c.devilFruit.name)) {
        map.set(c.devilFruit.name, {
          name: c.devilFruit.name,
          type: c.devilFruit.type,
          awakening: c.devilFruit.awakening,
          users: [c.name],
          description: c.devilFruit.description,
          emoji: v.emoji,
          color: v.color,
          image: v.image,
          detailedDescription: v.detailedDescription,
          firstAppearance: v.firstAppearance,
          element: v.element,
        });
      } else {
        const existing = map.get(c.devilFruit.name)!;
        if (!existing.users.includes(c.name)) existing.users.push(c.name);
        if (c.devilFruit.awakening) existing.awakening = true;
      }
    });

    Object.entries(fruitVisuals).forEach(([name, vis]) => {
      if (!map.has(name)) {
        map.set(name, {
          name,
          type: 'Paramecia',
          awakening: false,
          users: [],
          description: vis.detailedDescription || `Fruit ${vis.element}`,
          emoji: vis.emoji,
          color: vis.color,
          image: vis.image,
          detailedDescription: vis.detailedDescription,
          firstAppearance: vis.firstAppearance,
          element: vis.element,
        });
      }
    });

    return Array.from(map.values());
  }, []);

  const filtered = useMemo(() => {
    return allFruits.filter(f => {
      if (typeFilter !== 'All' && f.type !== typeFilter) return false;
      if (showAwakenedOnly && !f.awakening) return false;
      if (search && !f.name.toLowerCase().includes(search.toLowerCase()) && !f.users.join(' ').toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    }).sort((a, b) => {
      if (a.awakening && !b.awakening) return -1;
      if (!a.awakening && b.awakening) return 1;
      return a.name.localeCompare(b.name);
    });
  }, [allFruits, typeFilter, search, showAwakenedOnly]);

  const counts = {
    all: allFruits.length,
    Paramecia: allFruits.filter(f => f.type === 'Paramecia').length,
    Logia: allFruits.filter(f => f.type === 'Logia').length,
    Zoan: allFruits.filter(f => f.type === 'Zoan').length,
    awakened: allFruits.filter(f => f.awakening).length,
  };

  const selected = allFruits.find(f => f.name === selectedFruit);

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-[#0a0a2e] via-[#0f1535] to-[#1a0a2e] px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <Reveal>
          <div className="text-center">
            <p className="text-pink-400/70 text-xs font-bold tracking-[0.3em] uppercase mb-2">Encyclopédie • Images & Détails</p>
            <h1 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-pink-300 via-amber-300 to-cyan-300 bg-clip-text text-transparent">
              🍎 Fruits du Démon
            </h1>
            <p className="text-white/60 mt-3 max-w-2xl mx-auto">
              78 fruits uniques avec images, descriptions détaillées, première apparition et utilisateurs. Chaque fruit a son emoji, sa couleur et ses faiblesses.
            </p>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-pink-400 via-amber-400 to-cyan-400" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center">
              <div className="text-xl">🍎</div>
              <div className="text-xl font-black">{counts.all}</div>
              <div className="text-[11px] text-white/40 uppercase">Total</div>
            </div>
            <div className="rounded-xl bg-pink-500/10 border border-pink-500/20 p-3 text-center">
              <div className="text-xl">🔮</div>
              <div className="text-xl font-black text-pink-300">{counts.Paramecia}</div>
              <div className="text-[11px] text-pink-300/60 uppercase">Paramecia</div>
            </div>
            <div className="rounded-xl bg-cyan-500/10 border border-cyan-500/20 p-3 text-center">
              <div className="text-xl">⚡</div>
              <div className="text-xl font-black text-cyan-300">{counts.Logia}</div>
              <div className="text-[11px] text-cyan-300/60 uppercase">Logia</div>
            </div>
            <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-3 text-center">
              <div className="text-xl">🦁</div>
              <div className="text-xl font-black text-green-300">{counts.Zoan}</div>
              <div className="text-[11px] text-green-300/60 uppercase">Zoan</div>
            </div>
            <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-3 text-center">
              <div className="text-xl">✨</div>
              <div className="text-xl font-black text-amber-300">{counts.awakened}</div>
              <div className="text-[11px] text-amber-300/60 uppercase">Éveillés</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between bg-black/30 backdrop-blur-md rounded-xl p-4 border border-white/10">
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Rechercher fruit, utilisateur..."
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-pink-400/50"
            />
            <div className="flex gap-2 flex-wrap">
              {(['All', 'Paramecia', 'Logia', 'Zoan'] as FruitType[]).map(t => (
                <button
                  key={t}
                  onClick={() => setTypeFilter(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${typeFilter === t ? 'bg-pink-400/20 text-pink-300 border-pink-400/30' : 'bg-white/5 text-white/50 border-transparent hover:text-white/80'}`}
                >
                  {t === 'All' ? 'Tous' : t}
                </button>
              ))}
              <button
                onClick={() => setShowAwakenedOnly(!showAwakenedOnly)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${showAwakenedOnly ? 'bg-amber-400/20 text-amber-300 border-amber-400/30' : 'bg-white/5 text-white/50 border-transparent'}`}
              >
                ✨ Éveillés only
              </button>
            </div>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((f, i) => (
            <Reveal key={f.name} delay={i * 20}>
              <button
                onClick={() => setSelectedFruit(f.name === selectedFruit ? null : f.name)}
                className={`text-left w-full group relative rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border p-0 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 overflow-hidden ${selectedFruit === f.name ? 'border-amber-400/50 shadow-amber-400/20' : 'border-white/10 hover:border-white/20'}`}
              >
                <div className="relative h-44 overflow-hidden">
                  {f.image ? (
                    <img
                      src={f.image}
                      alt={f.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      style={{ filter: `brightness(0.7) saturate(1.2)` }}
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl" style={{ backgroundColor: f.color + '22' }}>{f.emoji}</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a2e] via-[#0a0a2e]/40 to-transparent" />
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border-2 backdrop-blur-md" style={{ backgroundColor: f.color + '44', borderColor: f.color }}>
                      {f.emoji}
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className={`text-[10px] px-2 py-1 rounded-full font-bold border backdrop-blur-md ${f.type === 'Paramecia' ? 'bg-pink-500/30 text-pink-200 border-pink-500/40' : f.type === 'Logia' ? 'bg-cyan-500/30 text-cyan-200 border-cyan-500/40' : 'bg-green-500/30 text-green-200 border-green-500/40'}`}>
                        {f.type}
                      </span>
                      {f.awakening && <span className="text-[9px] px-2 py-1 rounded-full bg-gradient-to-r from-amber-500 to-red-500 text-white font-bold animate-pulse">✨ ÉVEILLÉ</span>}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-black text-white text-[15px] leading-tight drop-shadow-lg group-hover:text-amber-200 transition-colors line-clamp-2">{f.name}</h3>
                    <p className="text-white/60 text-[10px] mt-1 flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-white/10">{f.element}</span>
                      {f.firstAppearance && <span className="text-white/40 truncate">{f.firstAppearance}</span>}
                    </p>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <p className="text-white/60 text-xs leading-relaxed line-clamp-2">{f.detailedDescription || f.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {f.users.slice(0,3).map(u => (
                      <span key={u} className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/60 border border-white/10">{u}</span>
                    ))}
                    {f.users.length > 3 && <span className="text-[10px] text-white/30">+{f.users.length - 3}</span>}
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {selected && (
          <Reveal>
            <div className="rounded-2xl bg-black/50 backdrop-blur-xl border border-amber-400/20 p-6 space-y-4">
              <div className="flex gap-4">
                <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 border-2" style={{ borderColor: selected.color }}>
                  {selected.image ? <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" onError={(e)=>{(e.target as HTMLImageElement).style.display='none'}} /> : <div className="w-full h-full flex items-center justify-center text-3xl" style={{ backgroundColor: selected.color + '22' }}>{selected.emoji}</div>}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl font-black text-white">{selected.name}</h2>
                  <p className="text-sm text-white/60 mt-1">{selected.detailedDescription}</p>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/60">Type: {selected.type}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/60">Élément: {selected.element}</span>
                    {selected.firstAppearance && <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300">{selected.firstAppearance}</span>}
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest">Utilisateurs</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {selected.users.map(u => (<span key={u} className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-200 border border-amber-500/20">{u}</span>))}
                  {selected.users.length === 0 && <span className="text-xs text-white/30">Aucun utilisateur répertorié - fruit libre</span>}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-[11px]">
                <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-2 text-center"><p className="text-red-300/60 uppercase">Faiblesse</p><p className="text-white/70 mt-1">Mer & Seastone</p></div>
                <div className="rounded-lg bg-white/5 border border-white/10 p-2 text-center"><p className="text-white/40 uppercase">Image</p><p className="text-white/60 mt-1 truncate">{selected.image || 'emoji only'}</p></div>
                <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-2 text-center"><p className="text-amber-300/60 uppercase">Statut</p><p className="text-white/70 mt-1">{selected.awakening ? 'Éveillé ✨' : 'Normal'}</p></div>
              </div>
            </div>
          </Reveal>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-16 text-white/30">
            <div className="text-6xl mb-3">🍎</div>
            <p>Aucun fruit trouvé</p>
          </div>
        )}
      </div>
    </div>
  );
}
