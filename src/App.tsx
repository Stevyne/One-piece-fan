import { useState, useEffect, useRef, Suspense } from 'react';
import type { ReactNode } from 'react';
import World3D from './components/World3D';
import AnimatedCharacter from './components/AnimatedCharacter';
import { ShipIllustrationSVG } from './components/CharacterPortraits';
import { seas, Island } from './data/seas';
import { characters, Character } from './data/characters';
import { ships, Ship } from './data/ships';
import ExtremeHero from './components/ExtremeHero';

type Tab = 'home' | 'world' | 'characters' | 'ships';

/* ========== Homepage animation primitives ========== */

/** Reveal children with a fade + slide-up once they scroll into view. */
function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/** Count up to `end` once `start` becomes true. */
function useCountUp(end: number, start: boolean, duration = 1600) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    let startTime = 0;
    const tick = (t: number) => {
      if (!startTime) startTime = t;
      const progress = Math.min((t - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, start, duration]);
  return count;
}

function StatCounter({
  emoji,
  value,
  suffix = '',
  label,
  start,
}: {
  emoji: string;
  value: number;
  suffix?: string;
  label: string;
  start: boolean;
}) {
  const count = useCountUp(value, start);
  return (
    <div className="group rounded-2xl bg-white/8 border border-white/10 p-5 backdrop-blur-md hover:border-amber-400/40 hover:bg-white/12 hover:-translate-y-1 transition-all duration-300">
      <div className="text-3xl mb-1">{emoji}</div>
      <div className="text-3xl sm:text-4xl font-black text-white tabular-nums">
        {count}
        <span className="text-amber-300">{suffix}</span>
      </div>
      <div className="text-[11px] sm:text-xs text-white/50 uppercase tracking-widest mt-0.5">{label}</div>
    </div>
  );
}

/** Decorative rising particles for the hero background. */
function FloatingParticles({ count = 14 }: { count?: number }) {
  const particles = Array.from({ length: count }, (_, i) => i);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {particles.map(i => (
        <span
          key={i}
          className="rise-particle absolute rounded-full"
          style={{
            left: `${(i * 7.3 + 5) % 100}%`,
            bottom: `${-10 + (i % 4) * 6}%`,
            width: `${4 + (i % 3) * 3}px`,
            height: `${4 + (i % 3) * 3}px`,
            background: i % 2 === 0 ? 'rgba(245,158,11,0.5)' : 'rgba(34,211,238,0.5)',
            boxShadow: i % 2 === 0 ? '0 0 8px rgba(245,158,11,0.6)' : '0 0 8px rgba(34,211,238,0.6)',
            ['--dur' as string]: `${5 + (i % 5)}s`,
            ['--delay' as string]: `${(i % 7) * 0.6}s`,
            ['--drift' as string]: `${i % 2 === 0 ? '20px' : '-20px'}`,
          }}
        />
      ))}
    </div>
  );
}

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
          className={`w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0 overflow-hidden ${isSelected ? 'character-breathe' : ''}`}
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
            className="w-10 h-10 rounded-lg overflow-hidden shrink-0"
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


function HomePage({ onNavigate }: { onNavigate: (tab: Tab) => void }) {
  const totalIslands = seas.reduce((count, sea) => count + sea.islands.length, 0);
  const heroStatRef = useRef<HTMLDivElement>(null);
  const [statsStart, setStatsStart] = useState(false);

  useEffect(() => {
    const el = heroStatRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      tab: 'world' as Tab,
      emoji: '🌊',
      stat: `${seas.length} Mers`,
      title: 'Mers & Îles',
      description: `${seas.length} mers mystérieuses et des dizaines d'îles légendaires, de l'East Blue au Nouveau Monde impitoyable.`,
      color: 'from-cyan-400/25 to-blue-500/10',
      border: 'border-cyan-300/25',
      hoverBorder: 'hover:border-cyan-300/60',
      glow: 'group-hover:shadow-cyan-400/30',
      accent: 'text-cyan-300',
    },
    {
      tab: 'characters' as Tab,
      emoji: '⚔️',
      stat: `${characters.length}+ Personnages`,
      title: 'Personnages',
      description: "Pirates légendaires, amiraux redoutables et révolutionnaires. Découvrez leurs fruits du démon, leur haki et leurs techniques.",
      color: 'from-amber-400/25 to-red-500/10',
      border: 'border-amber-300/25',
      hoverBorder: 'hover:border-amber-300/60',
      glow: 'group-hover:shadow-amber-400/30',
      accent: 'text-amber-300',
    },
    {
      tab: 'ships' as Tab,
      emoji: '🚢',
      stat: `${ships.length} Navires`,
      title: 'Navires',
      description: "Du Going Merry nostalgique au Moby Dick colossal, les grands navires qui ont marqué l'histoire des pirates.",
      color: 'from-sky-400/25 to-indigo-500/10',
      border: 'border-sky-300/25',
      hoverBorder: 'hover:border-sky-300/60',
      glow: 'group-hover:shadow-sky-400/30',
      accent: 'text-sky-300',
    },
  ];

  return (
    <><div className="h-full overflow-y-auto relative scroll-smooth">
      {/* ===================== HERO ===================== */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-16 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.22),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.22),transparent_40%)]" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#0a0a2e] via-[#0a0a2e]/60 to-transparent" />
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl drift-blob" />
        <div className="absolute -bottom-20 -right-16 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl drift-blob" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-red-500/8 rounded-full blur-3xl drift-blob" style={{ animationDelay: '7s' }} />
        <FloatingParticles count={16} />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-7">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-amber-400/25 text-amber-300 text-xs font-bold tracking-[0.3em] uppercase overflow-hidden relative">
              <span className="relative z-10">☠️ One Piece — World Atlas</span>
              <span className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent shimmer-sweep" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <div className="text-7xl sm:text-8xl mb-3 drop-shadow-[0_0_25px_rgba(245,158,11,0.45)]">☠️</div>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-none bg-linear-to-r from-amber-300 via-red-400 to-amber-300 bg-clip-text text-transparent">
                ONE PIECE
              </h1>
              <p className="mt-3 text-xl sm:text-3xl font-black tracking-[0.28em] text-cyan-200 subtitle-shimmer"></p>
              <div className="text-7xl sm:text-8xl mb-3 leading-none">
                <span className="skull-glow inline-block">
                  <span className="hero-float inline-block">☠️</span>
                </span>
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none bg-gradient-to-r from-amber-300 via-red-400 to-amber-300 bg-clip-text text-transparent title-gradient">
                ONE PIECE
              </h1>
              <p className="mt-4 text-xl sm:text-3xl font-black tracking-[0.28em] text-cyan-200">
                ⚓ WORLD ATLAS ⚓
              </p>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <p className="max-w-2xl mx-auto text-white/75 text-base sm:text-lg leading-relaxed">
              Explorez l'univers complet de One Piece : mers, îles mystérieuses, personnages légendaires
              et navires épiques. Partez à l'aventure avec le Roi des Pirates !
            </p>
          </Reveal>

          {/* Stats */}
          <Reveal delay={360}>
            <div ref={heroStatRef} className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto">
              <StatCounter emoji="🌊" value={seas.length} label="Mers" start={statsStart} />
              <StatCounter emoji="⚔️" value={characters.length} suffix="+" label="Personnages" start={statsStart} />
              <StatCounter emoji="🚢" value={ships.length} label="Navires" start={statsStart} />
            </div>
          </Reveal>

          <Reveal delay={480}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => onNavigate('world')}
                className="group relative px-6 py-3 rounded-xl bg-cyan-400/15 hover:bg-cyan-400/25 border border-cyan-300/40 text-cyan-100 font-black transition-all duration-300 cursor-pointer hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-400/30 overflow-hidden"
              >
                <span className="relative z-10">🌊 Explorer les Mers</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-700 skew-x-[-20deg]" />
              </button>
              <button
                onClick={() => onNavigate('characters')}
                className="group relative px-6 py-3 rounded-xl bg-amber-400/15 hover:bg-amber-400/25 border border-amber-300/40 text-amber-100 font-black transition-all duration-300 cursor-pointer hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-400/30 overflow-hidden"
              >
                <span className="relative z-10">⚔️ Voir les Personnages</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-700 skew-x-[-20deg]" />
              </button>
              <button
                onClick={() => onNavigate('ships')}
                className="group relative px-6 py-3 rounded-xl bg-white/8 hover:bg-white/15 border border-white/20 text-white font-black transition-all duration-300 cursor-pointer hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10 overflow-hidden"
              >
                <span className="relative z-10">🚢 Les Navires</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-700 skew-x-[-20deg]" />
              </button>
            </div>
          </Reveal>

          <Reveal delay={600}>
            <blockquote className="max-w-2xl mx-auto text-white/65 italic border-l-4 border-amber-400/50 pl-4 text-left">
              « Je ne veux pas conquérir le monde. Je veux juste trouver le One Piece et devenir le Roi des Pirates ! »
            </blockquote>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-linear-to-br from-amber-400/30 to-cyan-400/20 rounded-4xl blur-2xl" />
              <div className="relative rounded-4xl overflow-hidden border border-white/15 bg-black/30 shadow-2xl">
                <img src="/images/luffy.jpg" alt="Monkey D. Luffy" className="h-[560px] w-full object-cover object-top opacity-80" />
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a2e] via-transparent to-black/20" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-amber-300 text-sm font-bold uppercase tracking-[0.25em]">Personnage vedette</p>
                  <h2 className="text-3xl font-black">Monkey D. Luffy</h2>
                  <p className="text-white/60 text-sm mt-1">Gear 5 • Fruit Nika • Haki des Rois avancé</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Scroll indicator */}
        <a
          href="#explore"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 text-xs uppercase tracking-[0.25em] flex flex-col items-center gap-2 transition-colors"
        >
          <span>Défiler</span>
          <span className="scroll-bob text-lg leading-none">↓</span>
        </a>
      </section>

    </div>
    <div className="h-full overflow-y-auto relative">
        <ExtremeHero onNavigate={(tab: string) => onNavigate(tab as Tab)} />


        {/* ===================== EXPLORE CARDS ===================== */}
        <section id="explore" className="relative px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="text-center mb-10">
                <p className="text-amber-400/70 text-xs font-bold tracking-[0.3em] uppercase mb-2">L'Atlas</p>
                <h2 className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  Explorez l'Univers One Piece
                </h2>
                <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-amber-400 via-red-400 to-cyan-400" />
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-5">
              {highlights.map((card, i) => (
                <Reveal key={card.title} delay={i * 140}>
                  <button
                    onClick={() => onNavigate(card.tab)}
                    className={`group relative text-left w-full h-full rounded-2xl p-7 bg-gradient-to-br ${card.color} border ${card.border} ${card.hoverBorder} hover:-translate-y-2 hover:shadow-2xl ${card.glow} transition-all duration-300 cursor-pointer overflow-hidden`}
                  >
                    <div className="absolute -right-10 -top-10 text-[10rem] opacity-10 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500">
                      {card.emoji}
                    </div>
                    <div className="relative">
                      <div className="text-5xl mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 inline-block">
                        {card.emoji}
                      </div>
                      <p className={`text-xs uppercase tracking-widest font-bold ${card.accent}`}>{card.stat}</p>
                      <h3 className="text-2xl font-black text-white mt-1">{card.title}</h3>
                      <p className="text-white/65 text-sm leading-relaxed mt-3">{card.description}</p>
                      <p className={`mt-5 font-bold ${card.accent} inline-flex items-center gap-1 group-hover:gap-2 transition-all`}>
                        Explorer <span className="transition-transform group-hover:translate-x-1">→</span>
                      </p>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>

            {/* Feature image + Roger quote */}
            <Reveal delay={120}>
              <div className="mt-10 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <div className="absolute inset-0">
                  <img
                    src="/images/op-hero.jpg"
                    alt="L'océan de One Piece"
                    className="w-full h-[340px] sm:h-[420px] object-cover ken-burns group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a2e] via-[#0a0a2e]/55 to-[#0a0a2e]/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a2e]/70 via-transparent to-[#0a0a2e]/70" />
                <FloatingParticles count={8} />
                <div className="relative h-[340px] sm:h-[420px] flex flex-col items-center justify-center text-center px-6">
                  <div className="text-6xl mb-4 skull-glow">☠️</div>
                  <blockquote className="max-w-2xl text-xl sm:text-3xl font-black text-white italic leading-snug drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
                    « Ce que tu veux existe forcément quelque part sur cette Terre. »
                  </blockquote>
                  <p className="mt-4 text-amber-300 font-bold tracking-wide">— Gol D. Roger, le Roi des Pirates</p>
                </div>
              </div>
            </Reveal>

            {/* Footer stats strip */}
            <Reveal delay={120}>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: 'Mers', value: seas.length, icon: '🌊' },
                  { label: 'Îles', value: totalIslands, icon: '🏝️' },
                  { label: 'Personnages', value: characters.length, icon: '⚔️' },
                  { label: 'Navires', value: ships.length, icon: '🚢' },
                ].map(item => (
                  <div key={item.label} className="rounded-xl bg-white/5 border border-white/10 p-4 text-center hover:bg-white/10 hover:border-white/20 transition-all">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="text-3xl font-black text-white mt-2 tabular-nums">{item.value}</div>
                    <div className="text-white/45 text-xs uppercase tracking-widest">{item.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </div></>
  );
}

function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-linear-to-b from-[#0a0a2e] to-[#1a0a2e]">
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
  const [activeTab, setActiveTab] = useState<Tab>('home');
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
    { id: 'home', label: 'Accueil', emoji: '☠️' },
    { id: 'world', label: 'Mers & Îles', emoji: '🌊' },
    { id: 'characters', label: 'Personnages', emoji: '⚔️' },
    { id: 'ships', label: 'Bateaux', emoji: '🚢' },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-[#0a0a2e] via-[#0f1535] to-[#1a0a2e] text-white overflow-hidden">
      {/* Header */}
      <header className="relative z-50 bg-black/40 backdrop-blur-xl border-b border-amber-400/20">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">☠️</span>
              <div>
                <h1 className="text-xl font-black bg-linear-to-r from-amber-400 via-red-400 to-amber-400 bg-clip-text text-transparent">
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
        {activeTab === 'home' && <HomePage onNavigate={setActiveTab} />}

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
                          <span className="bg-linear-to-r from-amber-500 to-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold animate-pulse">
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
                            h.active ? (h.advanced ? 'border-amber-400/50 bg-amber-400/10' : 'border-white/20 bg-white/5') : 'border-white/5 bg-white/2 opacity-40'
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
                              className="w-16 h-16 rounded-xl flex items-center justify-center text-4xl border-2 shrink-0 ship-float"
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
                              className="w-16 h-16 rounded-xl flex items-center justify-center text-4xl border-2 shrink-0 ship-float"
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
                  <div className="bg-linear-to-r from-cyan-400/10 to-blue-400/10 rounded-xl p-5 border border-cyan-400/20 space-y-2">
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
