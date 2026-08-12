import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { seas } from '../data/seas';
import { characters } from '../data/characters';
import { ships } from '../data/ships';
import OptimizedHero from '../components/home/OptimizedHero';
import { Reveal } from '../components/ui/Reveal';
import { FloatingParticles } from '../components/home/FloatingParticles';
import { useIntersectionOnce } from '../hooks/useIntersectionReveal';
import { useCountUp } from '../hooks/useCountUp';

function StatCounter({ emoji, value, suffix = '', label, start }: { emoji: string; value: number; suffix?: string; label: string; start: boolean }) {
  const count = useCountUp(value, start);
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center hover:bg-white/10 hover:border-white/20 transition-all">
      <div className="text-3xl">{emoji}</div>
      <div className="text-3xl font-black text-white mt-2 tabular-nums">{count}{suffix && <span className="text-amber-300">{suffix}</span>}</div>
      <div className="text-white/45 text-xs uppercase tracking-widest">{label}</div>
    </div>
  );
}

export default function HomePage() {
  const navigate = useNavigate();
  const totalIslands = seas.reduce((c, sea) => c + sea.islands.length, 0);

  const [statsStarted, setStatsStarted] = useState(false);
  const { ref: statsRef } = useIntersectionOnce(() => setStatsStarted(true), 0.4);

  const highlights = [
    {
      path: '/world',
      emoji: '🌊',
      stat: `${seas.length} Mers`,
      title: 'Mers & Îles',
      description: `${seas.length} mers mystérieuses et ${totalIslands}+ îles légendaires, de l'East Blue au Nouveau Monde impitoyable.`,
      color: 'from-cyan-400/25 to-blue-500/10',
      border: 'border-cyan-300/25',
      hoverBorder: 'hover:border-cyan-300/60',
      glow: 'group-hover:shadow-cyan-400/30',
      accent: 'text-cyan-300',
    },
    {
      path: '/characters',
      emoji: '⚔️',
      stat: `${characters.length}+ Personnages`,
      title: 'Personnages',
      description: 'Pirates légendaires, amiraux redoutables et révolutionnaires. Découvrez leurs fruits du démon et leur Haki. 22 nouveaux ajoutés v1.1',
      color: 'from-amber-400/25 to-red-500/10',
      border: 'border-amber-300/25',
      hoverBorder: 'hover:border-amber-300/60',
      glow: 'group-hover:shadow-amber-400/30',
      accent: 'text-amber-300',
    },
    {
      path: '/fruits',
      emoji: '🍎',
      stat: `${characters.filter(c => c.devilFruit).length} Fruits`,
      title: 'Fruits du Démon',
      description: 'Paramecia, Zoan, Logia et leurs éveils. Effets, utilisateurs et visuels immersifs.',
      color: 'from-pink-400/25 to-rose-500/10',
      border: 'border-pink-300/25',
      hoverBorder: 'hover:border-pink-300/60',
      glow: 'group-hover:shadow-pink-400/30',
      accent: 'text-pink-300',
    },
    {
      path: '/ships',
      emoji: '🚢',
      stat: `${ships.length} Navires`,
      title: 'Navires',
      description: 'Du Going Merry nostalgique au Moby Dick colossal, les grands navires qui ont marqué l\'histoire.',
      color: 'from-sky-400/25 to-indigo-500/10',
      border: 'border-sky-300/25',
      hoverBorder: 'hover:border-sky-300/60',
      glow: 'group-hover:shadow-sky-400/30',
      accent: 'text-sky-300',
    },
    {
      path: '/timeline',
      emoji: '🧭',
      stat: `32 Arcs`,
      title: 'Timeline Log Pose',
      description: 'Tout le voyage de Romance Dawn à Elbaf. Log Pose temps, primes milestones, sagas. NOUVEAU v1.1',
      color: 'from-amber-400/25 to-yellow-500/10',
      border: 'border-amber-300/25',
      hoverBorder: 'hover:border-amber-300/60',
      glow: 'group-hover:shadow-amber-400/30',
      accent: 'text-amber-300',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a2e] via-[#0f1535] to-[#1a0a2e]">
      {/* Hero optimisé */}
      <OptimizedHero
        onNavigate={(tab) => navigate(tab === 'home' ? '/' : `/${tab}`)}
        seasCount={seas.length}
        charactersCount={characters.length}
        shipsCount={ships.length}
      />

      {/* Explore */}
      <section id="explore" className="relative px-4 pb-16 pt-8">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-amber-400/70 text-xs font-bold tracking-[0.3em] uppercase mb-2">L'Atlas Interactif</p>
              <h2 className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Explorez l'Univers One Piece
              </h2>
              <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-amber-400 via-red-400 to-cyan-400" />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {highlights.map((card, i) => (
              <Reveal key={card.title} delay={i * 120}>
                <button
                  onClick={() => navigate(card.path)}
                  className={`group relative text-left w-full h-full rounded-2xl p-6 bg-gradient-to-br ${card.color} border ${card.border} ${card.hoverBorder} hover:-translate-y-2 hover:shadow-2xl ${card.glow} transition-all duration-300 cursor-pointer overflow-hidden`}
                >
                  <div className="absolute -right-10 -top-10 text-[7rem] opacity-10 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500">
                    {card.emoji}
                  </div>
                  <div className="relative">
                    <div className="text-4xl mb-3 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 inline-block">
                      {card.emoji}
                    </div>
                    <p className={`text-xs uppercase tracking-widest font-bold ${card.accent}`}>{card.stat}</p>
                    <h3 className="text-xl font-black text-white mt-1">{card.title}</h3>
                    <p className="text-white/65 text-sm leading-relaxed mt-2">{card.description}</p>
                    <p className={`mt-4 font-bold ${card.accent} inline-flex items-center gap-1 group-hover:gap-2 transition-all`}>
                      Explorer <span className="transition-transform group-hover:translate-x-1">→</span>
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          {/* Quote image */}
          <Reveal delay={120}>
            <div className="mt-10 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <div className="absolute inset-0">
                <div className="w-full h-full bg-gradient-to-br from-amber-900/20 via-[#0a0a2e] to-cyan-900/20 ken-burns group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a2e] via-[#0a0a2e]/55 to-[#0a0a2e]/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a2e]/70 via-transparent to-[#0a0a2e]/70" />
              <FloatingParticles count={8} />
              <div className="relative h-[300px] sm:h-[360px] flex flex-col items-center justify-center text-center px-6">
                <div className="text-6xl mb-4 skull-glow">☠️</div>
                <blockquote className="max-w-2xl text-xl sm:text-2xl font-black text-white italic leading-snug drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
                  « Ce que tu veux existe forcément quelque part sur cette Terre. »
                </blockquote>
                <p className="mt-4 text-amber-300 font-bold tracking-wide">— Gol D. Roger, le Roi des Pirates</p>
              </div>
            </div>
          </Reveal>

          {/* Stats strip */}
          <Reveal delay={120}>
            <div ref={statsRef} className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <StatCounter label="Mers" value={seas.length} emoji="🌊" start={statsStarted} />
              <StatCounter label="Îles" value={totalIslands} emoji="🏝️" start={statsStarted} />
              <StatCounter label="Personnages" value={characters.length} emoji="⚔️" start={statsStarted} />
              <StatCounter label="Navires" value={ships.length} emoji="🚢" start={statsStarted} />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 text-center text-white/30 text-xs">
              <p>Fan project non officiel • One Piece © Eiichiro Oda / Shueisha</p>
              <p className="mt-1">Optimisé pour mobile • 60fps • Respect du prefers-reduced-motion</p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
