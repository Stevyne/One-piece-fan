import { useRef, useEffect, useState, useCallback } from 'react';
import { usePrefersReducedMotion, useIsMobile } from '../../hooks/usePrefersReducedMotion';
import { StatBlock } from '../ui/StatCounter';

interface Props {
  onNavigate: (tab: string) => void;
  seasCount?: number;
  charactersCount?: number;
  shipsCount?: number;
}

/**
 * Optimized Hero combining Network + MouseTrail in ONE canvas
 * - Throttled mousemove (32ms ~ 30fps for sparkles)
 * - DPR capped at 1.5 for perf
 * - Particle count 80 desktop / 35 mobile
 * - Disables trail on mobile and prefers-reduced-motion
 */
function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (reduced) return; // disable canvas completely if reduced motion

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let mouse = { x: -1000, y: -1000, active: false };
    let lastMoveTime = 0;

    // sparks for mouse trail
    type Spark = { x: number; y: number; life: number; vx: number; vy: number; r: number };
    const sparks: Spark[] = [];

    // network particles
    type P = { x: number; y: number; vx: number; vy: number; r: number; alpha: number };
    const particleCount = isMobile ? 30 : 70;
    const particles: P[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * (isMobile ? 0.4 : 0.7),
        vy: (Math.random() - 0.5) * (isMobile ? 0.4 : 0.7),
        r: 1.5 + Math.random() * (isMobile ? 1.5 : 3),
        alpha: 0.3 + Math.random() * 0.5,
      });
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.6);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      // throttle mousemove for spark creation to 50ms
      if (now - lastMoveTime < 50) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        return;
      }
      lastMoveTime = now;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;

      if (!isMobile) {
        // only 1 spark per throttled event (was uncapped before)
        sparks.push({
          x: e.clientX,
          y: e.clientY,
          life: 1,
          vx: (Math.random() - 0.5) * 1.8,
          vy: (Math.random() - 0.5) * 1.8,
          r: 1.5 + Math.random() * 2.5,
        });
        if (sparks.length > 18) sparks.shift();
      }
    };

    const onLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      // update particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 220 && dist > 0) {
            p.x += (dx / dist) * 0.5;
            p.y += (dy / dist) * 0.5;
          }
        }
      }

      // lines - only check nearby, optimization: skip if distance > 120 quickly using bounding box
      ctx.lineWidth = 0.7;
      for (let i = 0; i < particles.length; i++) {
        const pi = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const pj = particles[j];
          const dx = pi.x - pj.x;
          if (Math.abs(dx) > 130) continue;
          const dy = pi.y - pj.y;
          if (Math.abs(dy) > 130) continue;
          const dist = Math.hypot(dx, dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(pj.x, pj.y);
            ctx.strokeStyle = `rgba(230,184,77,${(1 - dist / 120) * 0.35})`;
            ctx.stroke();
          }
        }
      }

      // dots
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245,158,11,${p.alpha})`;
        ctx.fill();
        // soft glow
        if (!isMobile) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 2.2, 0, Math.PI * 2);
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2.2);
          g.addColorStop(0, `rgba(230,184,77,${p.alpha * 0.35})`);
          g.addColorStop(1, 'rgba(230,184,77,0)');
          ctx.fillStyle = g;
          ctx.fill();
        }
      }

      // sparks (trail)
      if (!isMobile) {
        for (let i = sparks.length - 1; i >= 0; i--) {
          const s = sparks[i];
          s.x += s.vx;
          s.y += s.vy;
          s.life -= 0.04;
          if (s.life <= 0) {
            sparks.splice(i, 1);
            continue;
          }
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * s.life, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(230,184,77,${s.life * 0.75})`;
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, [reduced, isMobile]);

  if (reduced) return null;

  return <canvas ref={canvasRef} className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true" />;
}

function Title3D() {
  const text = "ONE PIECE";
  return (
    <h1 className="text-6xl sm:text-8xl lg:text-[9rem] xl:text-[10rem] font-black leading-[0.82] tracking-tighter bg-gradient-to-r from-amber-300 via-red-300 to-amber-300 bg-clip-text text-transparent title-gradient glitch-text drop-shadow-2xl">
      {text.split('').map((ch, i) => (
        <span
          key={i}
          className="inline-block animate-letter-drop"
          style={{ animationDelay: `${i * 0.07}s`, textShadow: '0 0 40px rgba(230,184,77,0.5)' }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      ))}
    </h1>
  );
}

function FloatingParticles({ count = 10 }: { count?: number }) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return null;
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

function OceanWave() {
  const reduced = usePrefersReducedMotion();
  if (reduced) return null;
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none" aria-hidden="true">
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-28 sm:h-36 block">
        <defs>
          <linearGradient id="waveGradOpt" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e6b84d" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#0a0a2e" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <path fill="url(#waveGradOpt)" d="M0,160L60,170C120,180,240,200,360,190C480,180,600,140,720,130C840,120,960,140,1080,160C1200,180,1320,200,1380,210L1440,220L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        <path fill="#e6b84d" fillOpacity="0.12" d="M0,192L80,181C160,171,320,149,480,160C640,171,800,213,960,224C1120,235,1280,213,1360,202L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
      </svg>
    </div>
  );
}

export default function OptimizedHero({ onNavigate, seasCount = 4, charactersCount = 60, shipsCount = 12 }: Props) {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-16 overflow-hidden bg-gradient-to-b from-[#040420] via-[#0c0c2e] to-[#0a0a2e] select-none">
      <HeroCanvas />
      <FloatingParticles count={12} />

      <div className="absolute -top-28 -left-28 w-[28rem] h-[28rem] bg-amber-400/[0.12] rounded-full blur-3xl drift-blob" aria-hidden />
      <div className="absolute -bottom-24 -right-20 w-[32rem] h-[32rem] bg-cyan-400/[0.10] rounded-full blur-3xl drift-blob" style={{ animationDelay: '5s' }} aria-hidden />
      <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-red-400/[0.08] rounded-full blur-3xl drift-blob" style={{ animationDelay: '9s' }} aria-hidden />

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8 w-full pt-6 pb-24">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/50 border border-amber-400/30 text-amber-200 text-xs font-bold tracking-[0.35em] uppercase overflow-hidden relative shadow-lg shadow-amber-400/10">
          <span className="relative z-10">☠️ One Piece — World Atlas — Optimized</span>
          <span className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent shimmer-sweep" />
        </div>

        <Title3D />

        <p className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-[0.2em] text-cyan-200 subtitle-shimmer drop-shadow-lg">
          ⚓ WORLD ATLAS ⚓
        </p>

        <p className="max-w-2xl mx-auto text-white/70 text-base sm:text-xl leading-relaxed font-light">
          Explorez l'univers complet de One Piece : mers, îles mystérieuses, personnages légendaires et navires épiques. Version optimisée 60fps sur mobile.
        </p>

        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          <StatBlock emoji="🌊" value={seasCount} label="Mers" />
          <StatBlock emoji="⚔️" value={charactersCount} label="Personnages" />
          <StatBlock emoji="🚢" value={shipsCount} label="Navires" />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            { label: '🌊 Explorer les Mers', tab: 'world', color: 'cyan' },
            { label: '⚔️ Personnages', tab: 'characters', color: 'amber' },
            { label: '🍎 Fruits du Démon', tab: 'fruits', color: 'pink' },
            { label: '🚢 Navires', tab: 'ships', color: 'white' },
          ].map((btn) => (
            <button
              key={btn.tab}
              onClick={() => onNavigate(btn.tab)}
              className={`group relative px-6 py-3 rounded-xl text-sm sm:text-base font-black btn-glow-pulse transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-2xl overflow-hidden border ${
                btn.color === 'cyan'
                  ? 'bg-cyan-400/15 border-cyan-300/40 text-cyan-100 hover:border-cyan-300/80 hover:shadow-cyan-400/30'
                  : btn.color === 'amber'
                  ? 'bg-amber-400/15 border-amber-300/40 text-amber-100 hover:border-amber-300/80 hover:shadow-amber-400/30'
                  : btn.color === 'pink'
                  ? 'bg-pink-400/15 border-pink-300/40 text-pink-100 hover:border-pink-300/80 hover:shadow-pink-400/30'
                  : 'bg-white/8 border-white/20 text-white hover:border-white/40 hover:shadow-white/15'
              }`}
            >
              <span className="relative z-10">{btn.label}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-700 skew-x-[-20deg]" />
            </button>
          ))}
        </div>

        <blockquote className="max-w-2xl mx-auto text-white/60 italic border-l-4 border-amber-400/50 pl-5 text-left text-lg sm:text-xl">
          « Ce que tu veux existe forcément quelque part sur cette Terre. »
        </blockquote>
        <p className="text-amber-300/90 text-sm font-bold tracking-widest">— Gol D. Roger, le Roi des Pirates</p>
      </div>

      <OceanWave />

      <a href="#explore" className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors flex flex-col items-center gap-1 text-xs tracking-[0.25em] uppercase z-10">
        <span>Défiler</span>
        <span className="scroll-bob text-xl">↓</span>
      </a>
    </section>
  );
}
