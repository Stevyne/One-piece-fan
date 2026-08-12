import { useMemo, useState } from 'react';
import { characters } from '../data/characters';
import { fruitVisuals, getFruitVisual } from '../data/fruitVisuals';
import { Reveal } from '../components/ui/Reveal';

type FruitType = 'All' | 'Paramecia' | 'Logia' | 'Zoan';

export default function FruitsPage() {
  const [typeFilter, setTypeFilter] = useState<FruitType>('All');
  const [search, setSearch] = useState('');
  const [showAwakenedOnly, setShowAwakenedOnly] = useState(false);

  // Build list from characters + from fruitVisuals dict
  const allFruits = useMemo(() => {
    const map = new Map<string, { name: string; type: string; awakening?: boolean; users: string[]; description: string; emoji: string; color: string }>();

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
        });
      } else {
        const existing = map.get(c.devilFruit.name)!;
        if (!existing.users.includes(c.name)) existing.users.push(c.name);
        if (c.devilFruit.awakening) existing.awakening = true;
      }
    });

    // Also add fruits from visuals that might not be in char list (future)
    Object.entries(fruitVisuals).forEach(([name, vis]) => {
      if (!map.has(name)) {
        // try to infer type from characters? fallback
        map.set(name, {
          name,
          type: 'Paramecia',
          awakening: false,
          users: [],
          description: `Fruit visuel enregistré: ${vis.element}`,
          emoji: vis.emoji,
          color: vis.color,
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
      // awakened first, then alphabetical
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

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-[#0a0a2e] via-[#0f1535] to-[#1a0a2e] px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <Reveal>
          <div className="text-center">
            <p className="text-pink-400/70 text-xs font-bold tracking-[0.3em] uppercase mb-2">Encyclopédie</p>
            <h1 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-pink-300 via-amber-300 to-cyan-300 bg-clip-text text-transparent">
              🍎 Fruits du Démon
            </h1>
            <p className="text-white/60 mt-3 max-w-2xl mx-auto">
              Les pouvoirs maudits de Grand Line. Chaque fruit est unique : celui qui le mange gagne un pouvoir au prix de ne plus jamais pouvoir nager.
            </p>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-pink-400 via-amber-400 to-cyan-400" />
          </div>
        </Reveal>

        {/* Stats */}
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

        {/* Filters */}
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

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((f, i) => (
            <Reveal key={f.name} delay={i * 40}>
              <div className="group relative rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-5 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 overflow-hidden min-h-[220px]">
                <div className="absolute -right-8 -top-8 text-8xl opacity-10 group-hover:opacity-20 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {f.emoji}
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at 50% 0%, ${f.color}18, transparent 70%)` }} />

                <div className="relative space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border-2 shrink-0" style={{ backgroundColor: f.color + '22', borderColor: f.color, boxShadow: `0 0 20px ${f.color}33` }}>
                      {f.emoji}
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${
                        f.type === 'Paramecia' ? 'bg-pink-500/20 text-pink-300 border-pink-500/30' :
                        f.type === 'Logia' ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' :
                        'bg-green-500/20 text-green-300 border-green-500/30'
                      }`}>
                        {f.type}
                      </span>
                      {f.awakening && <span className="text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-red-500 text-white font-bold animate-pulse">ÉVEILLÉ</span>}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-black text-white group-hover:text-amber-200 transition-colors line-clamp-2">{f.name}</h3>
                    <p className="text-white/50 text-xs mt-1 leading-relaxed line-clamp-3">{f.description}</p>
                  </div>

                  <div>
                    <p className="text-[11px] text-white/30 uppercase tracking-widest font-bold">Utilisateurs</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {f.users.length > 0 ? f.users.map(u => (
                        <span key={u} className="text-[11px] px-1.5 py-0.5 rounded-full bg-white/10 text-white/70 border border-white/10">{u}</span>
                      )) : <span className="text-[11px] text-white/30 italic">Aucun utilisateur répertorié</span>}
                    </div>
                  </div>

                  <div className="pt-2 flex justify-between items-center">
                    <span className="text-[10px] text-white/30">{Object.values(fruitVisuals).find(v => v.emoji === f.emoji)?.element || 'mystère'}</span>
                    <span className="text-amber-300 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">Détails →</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-white/30">
            <div className="text-6xl mb-3">🍎</div>
            <p>Aucun fruit trouvé avec ces filtres</p>
          </div>
        )}

        <Reveal>
          <div className="rounded-xl bg-gradient-to-r from-pink-500/10 via-amber-500/10 to-cyan-500/10 border border-white/10 p-5 text-sm text-white/60 leading-relaxed">
            <p className="font-bold text-white/80 mb-1">📚 Lore:</p>
            <p>Il existe plus de 100 fruits différents. Les <span className="text-pink-300 font-bold">Paramecia</span> donnent des pouvoirs sur le corps ou l'environnement, les <span className="text-cyan-300 font-bold">Logia</span> permettent de devenir un élément naturel, les <span className="text-green-300 font-bold">Zoan</span> transforment en animal et ont une forme hybride. L'éveil pousse le fruit au-delà de ses limites.</p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
