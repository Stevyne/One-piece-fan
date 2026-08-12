import { useState, useMemo } from 'react';
import { arcs, sagas, sagaColors, Arc } from '../data/arcs';
import { Reveal } from '../components/ui/Reveal';

function SagaBadge({ saga }: { saga: Arc['saga'] }) {
  return (
    <span className="text-[10px] px-2 py-0.5 rounded-full font-bold border text-white" style={{ backgroundColor: sagaColors[saga] + '33', borderColor: sagaColors[saga] + '66', color: sagaColors[saga] }}>
      {saga}
    </span>
  );
}

function LogPose({ days }: { days?: number }) {
  if (!days || days === 0) return null;
  return (
    <span className="inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
      🧭 Log: {days}j
    </span>
  );
}

export default function TimelinePage() {
  const [selectedSaga, setSelectedSaga] = useState<string>('All');
  const [selectedArc, setSelectedArc] = useState<Arc | null>(arcs.find(a => a.highlight) || arcs[0]);
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return arcs.filter(a => {
      const matchSaga = selectedSaga === 'All' || a.saga === selectedSaga;
      const matchSearch = !search || a.title.toLowerCase().includes(search.toLowerCase()) || a.description.toLowerCase().includes(search.toLowerCase()) || a.islands.join(' ').toLowerCase().includes(search.toLowerCase());
      return matchSaga && matchSearch;
    });
  }, [selectedSaga, search]);

  // Progress logic for Log Pose visual
  const total = arcs.length;
  const currentIndex = selectedArc ? arcs.findIndex(x => x.id === selectedArc.id) : 0;
  const progress = ((currentIndex + 1) / total) * 100;

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-[#0a0a2e] via-[#0f1535] to-[#1a0a2e]">
      {/* Header Hero Log Pose */}
      <div className="relative px-4 py-10 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.15),_transparent_60%)]" />
        <div className="max-w-6xl mx-auto relative">
          <Reveal>
            <div className="flex flex-col lg:flex-row gap-6 items-start justify-between">
              <div>
                <p className="text-amber-400/70 text-xs font-bold tracking-[0.3em] uppercase mb-2">Log Pose • Chronologie</p>
                <h1 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-amber-300 via-cyan-300 to-white bg-clip-text text-transparent">
                  🧭 La Route de tous les Périls
                </h1>
                <p className="text-white/60 mt-3 max-w-2xl leading-relaxed">
                  Suis le voyage des Mugiwara depuis East Blue jusqu'à Elbaf. Chaque arc, son île, son temps de pose Log Pose, et les primes qui explosent.
                  Inspiré d'un vrai Log Pose qui se recharge en fonction du magnétisme de l'île.
                </p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  <span className="text-[11px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">📖 {arcs.length} arcs</span>
                  <span className="text-[11px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">🗺️ {sagas.length} sagas</span>
                  <span className="text-[11px] px-2 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300">Progress {Math.round(progress)}%</span>
                </div>
              </div>

              {/* Log Pose visual */}
              <div className="w-full lg:w-72 shrink-0">
                <div className="rounded-2xl bg-black/40 backdrop-blur-md border border-amber-400/20 p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-xl shadow-lg shadow-amber-400/20 animate-pulse">🧭</div>
                    <div>
                      <p className="text-amber-300 font-bold text-sm">Log Pose</p>
                      <p className="text-white/40 text-[11px]">Magnétisme des îles</p>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-400 to-cyan-400 rounded-full transition-all duration-700" style={{ width: `${progress}%` }} />
                  </div>
                  <p className="text-[11px] text-white/40 mt-2">Progression {currentIndex + 1} / {total} • {selectedArc?.title}</p>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-lg bg-white/5 p-2">
                      <div className="text-lg">🌊</div>
                      <div className="text-[10px] text-white/40 uppercase mt-1">East Blue</div>
                    </div>
                    <div className="rounded-lg bg-white/5 p-2">
                      <div className="text-lg">⚓</div>
                      <div className="text-[10px] text-white/40 uppercase mt-1">Grand Line</div>
                    </div>
                    <div className="rounded-lg bg-white/5 p-2">
                      <div className="text-lg">👑</div>
                      <div className="text-[10px] text-white/40 uppercase mt-1">New World</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        {/* Left: Timeline */}
        <div className="w-full lg:w-[360px] shrink-0">
          <div className="sticky top-[88px] space-y-4 max-h-[calc(100vh-100px)] overflow-y-auto pr-1">
            <div className="bg-black/30 backdrop-blur-md rounded-xl p-3 border border-white/10 flex flex-col gap-3">
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Rechercher arc, île..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50"
              />
              <div className="flex gap-1.5 flex-wrap">
                <button onClick={() => setSelectedSaga('All')} className={`text-[11px] px-2.5 py-1 rounded-full border font-bold transition-all cursor-pointer ${selectedSaga === 'All' ? 'bg-amber-400/20 text-amber-300 border-amber-400/30' : 'bg-white/5 text-white/40 border-transparent hover:text-white/70'}`}>Tous</button>
                {sagas.map(s => (
                  <button key={s} onClick={() => setSelectedSaga(s)} className={`text-[10px] px-2 py-1 rounded-full border font-bold transition-all cursor-pointer ${selectedSaga === s ? 'text-white border-white/20' : 'bg-white/5 text-white/30 border-transparent hover:text-white/60'}`} style={selectedSaga === s ? { backgroundColor: sagaColors[s] + '33', borderColor: sagaColors[s] } : {}}>
                    {s.split(' ')[0]}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-white/30">{filtered.length} arcs</p>
            </div>

            {/* Vertical timeline */}
            <div className="relative pl-6">
              <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-amber-400/50 via-cyan-400/30 to-white/5" />
              <div className="space-y-3">
                {filtered.map((arc) => {
                  const isSelected = selectedArc?.id === arc.id;
                  return (
                    <button
                      key={arc.id}
                      onClick={() => setSelectedArc(arc)}
                      className={`text-left w-full relative rounded-xl p-3 border transition-all duration-300 cursor-pointer group ${isSelected ? 'bg-white/10 border-amber-400/40 shadow-lg shadow-amber-400/10 scale-[1.02]' : 'bg-white/[0.03] border-white/5 hover:bg-white/5 hover:border-white/10 hover:translate-x-1'}`}
                    >
                      <div className="absolute left-[-24px] top-4 w-3 h-3 rounded-full border-2 bg-[#0a0a2e] transition-all group-hover:scale-125" style={{ borderColor: isSelected ? '#fbbf24' : arc.color, backgroundColor: isSelected ? arc.color : '#0a0a2e', boxShadow: isSelected ? `0 0 10px ${arc.color}` : 'none' }} />
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm">{arc.emoji}</span>
                            <span className="font-bold text-white text-sm truncate">{arc.title}</span>
                            {arc.highlight && <span className="text-[9px] px-1 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">★</span>}
                          </div>
                          <p className="text-[11px] text-white/40 mt-0.5 truncate">{arc.saga}</p>
                          <p className="text-[11px] text-white/60 mt-1 line-clamp-2 leading-relaxed">{arc.description}</p>
                          <div className="flex gap-1 mt-2 flex-wrap">
                            <LogPose days={arc.logPoseDays} />
                            {arc.bountyMilestone && <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">💰 {arc.bountyMilestone}</span>}
                          </div>
                        </div>
                        <span className="text-[10px] text-white/20 font-mono shrink-0">#{arc.number}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Detail */}
        <div className="flex-1 min-w-0">
          {selectedArc ? (
            <div className="space-y-5">
              <Reveal>
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] shadow-2xl">
                  <div className="h-2 w-full" style={{ background: `linear-gradient(90deg, ${selectedArc.color}, ${sagaColors[selectedArc.saga]})` }} />
                  <div className="p-6 sm:p-7 space-y-5">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-4xl">{selectedArc.emoji}</span>
                          <div>
                            <h2 className="text-2xl sm:text-3xl font-black text-white">{selectedArc.title}</h2>
                            <p className="text-sm text-white/50">{selectedArc.saga} • Arc #{selectedArc.number}</p>
                          </div>
                        </div>
                      </div>
                      <SagaBadge saga={selectedArc.saga} />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-xl bg-black/30 border border-white/10 p-3 text-center">
                        <p className="text-[10px] text-white/30 uppercase tracking-wide">Chapitres</p>
                        <p className="font-bold text-cyan-300 mt-1">{selectedArc.chapters}</p>
                      </div>
                      <div className="rounded-xl bg-black/30 border border-white/10 p-3 text-center">
                        <p className="text-[10px] text-white/30 uppercase tracking-wide">Épisodes</p>
                        <p className="font-bold text-amber-300 mt-1">{selectedArc.episodes}</p>
                      </div>
                      <div className="rounded-xl bg-black/30 border border-white/10 p-3 text-center">
                        <p className="text-[10px] text-white/30 uppercase tracking-wide">Année</p>
                        <p className="font-bold text-white mt-1">{selectedArc.year}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-amber-300 mb-2">📜 Résumé</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{selectedArc.longDescription}</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                        <h4 className="text-xs font-bold text-white/60 uppercase tracking-wide mb-2">🏝️ Îles & Lieux</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedArc.islands.map(is => (
                            <span key={is} className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">{is}</span>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                        <h4 className="text-xs font-bold text-white/60 uppercase tracking-wide mb-2">👥 Personnages clés</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedArc.keyCharacters.map(c => (
                            <span key={c} className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-200 border border-amber-500/20">{c}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <LogPose days={selectedArc.logPoseDays} />
                      {selectedArc.bountyMilestone && (
                        <span className="text-xs px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-500/30 font-bold">
                          💰 Nouvelle prime max: {selectedArc.bountyMilestone} ฿
                        </span>
                      )}
                    </div>

                    <div className="rounded-xl bg-gradient-to-r from-amber-500/10 via-transparent to-cyan-500/10 border border-white/5 p-4">
                      <p className="text-[11px] text-white/30 leading-relaxed">
                        💡 <span className="text-white/60 font-bold">Log Pose Lore:</span> En vrai, le Log Pose pointe vers le champ magnétique le plus fort. Chaque île a une durée de charge différente: 1 jour pour Whiskey Peak, 7 jours pour Little Garden, parfois des mois. Le Nouveau Monde a besoin de 3 aiguilles (Log Pose à 3 pointes).
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="rounded-xl bg-black/20 border border-white/5 p-4 flex justify-between items-center">
                  <button
                    onClick={() => {
                      const idx = arcs.findIndex(a => a.id === selectedArc.id);
                      if (idx > 0) setSelectedArc(arcs[idx - 1]);
                    }}
                    disabled={arcs.findIndex(a => a.id === selectedArc.id) === 0}
                    className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/70 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  >
                    ← Précédent
                  </button>
                  <span className="text-xs text-white/30">{arcs.findIndex(a => a.id === selectedArc.id) + 1} / {arcs.length}</span>
                  <button
                    onClick={() => {
                      const idx = arcs.findIndex(a => a.id === selectedArc.id);
                      if (idx < arcs.length - 1) setSelectedArc(arcs[idx + 1]);
                    }}
                    disabled={arcs.findIndex(a => a.id === selectedArc.id) === arcs.length - 1}
                    className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/70 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  >
                    Suivant →
                  </button>
                </div>
              </Reveal>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center min-h-[300px] text-white/30">
              <p>Sélectionne un arc</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
