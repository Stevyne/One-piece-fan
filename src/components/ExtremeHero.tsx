import { useRef, useEffect, useState, useCallback } from 'react';

interface ExtremeHeroProps {
  onNavigate: (tab: string) => void;
}

/* ===== Mouse-trail dots (temporary golden sparks) ===== */
function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    let id = 0;
    const sparks: { x: number; y: number; life: number; vx: number; vy: number; r: number }[] = [];
    const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e: MouseEvent) => {
      sparks.push({
        x: e.clientX, y: e.clientY,
        life: 1, vx: (Math.random() - 0.5) * 2, vy: (Math.random() - 0.5) * 2,
        r: 2 + Math.random() * 3,
      });
    };
    window.addEventListener('mousemove', onMove);

    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx; s.y += s.vy; s.life -= 0.05;
        if (s.life <= 0) { sparks.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * s.life, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(230,184,77,${s.life * 0.8})`;
        ctx.fill();
      }
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }} aria-hidden="true" />;
}

/* ===== Canvas Network (from previous) ===== */
function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let id = 0;
    let mouse = { x: -1000, y: -1000 };
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);
    const handleMouse = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    window.addEventListener('mousemove', handleMouse);

    interface P { x: number; y: number; vx: number; vy: number; r: number; alpha: number; }
    const particles: P[] = [];
    for (let i = 0; i < 80; i++) particles.push({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, vx: (Math.random() - 0.5) * 0.7, vy: (Math.random() - 0.5) * 0.7, r: 2 + Math.random() * 3, alpha: 0.3 + Math.random() * 0.5 });

    const draw = () => {
      const w = window.innerWidth, h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = mouse.x - p.x, dy = mouse.y - p.y, dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 250 && dist > 0) { p.x += (dx / dist) * 0.6; p.y += (dy / dist) * 0.6; }
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y, dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(230,184,77,${(1 - dist / 130) * 0.4})`; ctx.lineWidth = 0.7; ctx.stroke();
          }
        }
      }
      for (const p of particles) {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(245,158,11,${p.alpha})`; ctx.fill();
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2.5);
        g.addColorStop(0, `rgba(230,184,77,${p.alpha * 0.4})`); g.addColorStop(1, 'rgba(230,184,77,0)');
        ctx.fillStyle = g; ctx.fill();
      }
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', resize); window.removeEventListener('mousemove', handleMouse); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }} aria-hidden="true" />;
}

/* ===== Magnetic Stats (hover glow) ===== */
function StatBlock({ emoji, value, label }: { emoji: string; value: number; label: string }) {
  return (
    <div className="group relative rounded-2xl bg-white/[0.06] border border-white/10 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:bg-white/[0.12] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-amber-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="text-4xl mb-1">{emoji}</div>
      <div className="text-4xl font-black text-white tabular-nums group-hover:text-amber-300 transition-colors">{value}</div>
      <div className="text-[11px] text-white/40 uppercase tracking-widest mt-1">{label}</div>
    </div>
  );
}

/* ===== 3D Letter Title ===== */
function Title3D({ text }: { text: string }) {
  return (
    <h1 className="text-7xl sm:text-9xl lg:text-[12rem] font-black leading-[0.82] tracking-tighter bg-gradient-to-r from-amber-300 via-red-300 to-amber-300 bg-clip-text text-transparent title-gradient glitch-text drop-shadow-2xl" style={{ textShadow: '0 20px 60px rgba(230,184,77,0.4)' }}>
      {text.split('').map((ch, i) => (
        <span key={i} className="inline-block animate-letter-drop" style={{ animationDelay: `${i * 0.07}s`, textShadow: '0 0 40px rgba(230,184,77,0.5)' }}>
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      ))}
    </h1>
  );
}

/* ===== SVG Ocean Wave at bottom ===== */
function OceanWave() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none" aria-hidden="true">
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-32 sm:h-44 block">
        <defs>
          <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e6b84d" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0a0a2e" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <path fill="url(#waveGrad)" d="M0,160L60,170C120,180,240,200,360,190C480,180,600,140,720,130C840,120,960,140,1080,160C1200,180,1320,200,1380,210L1440,220L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        <path fill="#e6b84d" fillOpacity="0.15" d="M0,192L80,181C160,171,320,149,480,160C640,171,800,213,960,224C1120,235,1280,213,1360,202L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
      </svg>
    </div>
  );
}

export default function ExtremeHero({ onNavigate }: ExtremeHeroProps) {
  const [hoveredStat, setHoveredStat] = useState(false);

  return (
    <section
      className="relative min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-16 overflow-hidden bg-gradient-to-b from-[#040420] via-[#0c0c2e] to-[#0a0a2e] select-none"
      onMouseEnter={() => setHoveredStat(true)}
      onMouseLeave={() => setHoveredStat(false)}
    >
      {/* Layer 0: Canvas networks */}
      <NetworkCanvas />
      <MouseTrail />

      {/* Layer 1: Background blobs */}
      <div className="absolute -top-28 -left-28 w-[28rem] h-[28rem] bg-amber-400/12 rounded-full blur-3xl drift-blob" />
      <div className="absolute -bottom-24 -right-20 w-[32rem] h-[32rem] bg-cyan-400/10 rounded-full blur-3xl drift-blob" style={{ animationDelay: '5s' }} />
      <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-red-400/10 rounded-full blur-3xl drift-blob" style={{ animationDelay: '9s' }} />

      {/* Layer 2: Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-10 w-full pt-6 pb-16">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/50 border border-amber-400/30 text-amber-200 text-xs font-bold tracking-[0.35em] uppercase overflow-hidden relative shadow-lg shadow-amber-400/10">
          <span className="relative z-10">☠️ One Piece — World Atlas</span>
          <span className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent shimmer-sweep" />
        </div>

        {/* 3D Title */}
        <Title3D text="ONE PIECE" />

        {/* Subtitle */}
        <p className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-[0.2em] text-cyan-200 subtitle-shimmer drop-shadow-lg">
          ⚓ WORLD ATLAS ⚓
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-white/70 text-base sm:text-xl leading-relaxed font-light">
          Explorez l'univers complet de One Piece : mers, îles mystérieuses, personnages légendaires
          et navires épiques. Partez à l'aventure avec le Roi des Pirates !
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          <StatBlock emoji="🌊" value={4} label="Mers" />
          <StatBlock emoji="⚔️" value={60} label="Personnages" />
          <StatBlock emoji="🚢" value={12} label="Navires" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { label: '🌊 Explorer les Mers', tab: 'world', color: 'cyan' },
            { label: '⚔️ Personnages', tab: 'characters', color: 'amber' },
            { label: '🚢 Navires', tab: 'ships', color: 'white' },
          ].map((btn) => (
            <button
              key={btn.tab}
              onClick={() => onNavigate(btn.tab)}
              className={`group relative px-7 py-3.5 rounded-xl text-sm sm:text-base font-black btn-glow-pulse transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-2xl overflow-hidden border ${
                btn.color === 'cyan'
                  ? 'bg-cyan-400/15 border-cyan-300/40 text-cyan-100 hover:border-cyan-300/80 hover:shadow-cyan-400/30'
                  : btn.color === 'amber'
                    ? 'bg-amber-400/15 border-amber-300/40 text-amber-100 hover:border-amber-300/80 hover:shadow-amber-400/30'
                    : 'bg-white/8 border-white/20 text-white hover:border-white/40 hover:shadow-white/15'
              }`}
            >
              <span className="relative z-10">{btn.label}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-700 skew-x-[-20deg]" />
            </button>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="max-w-2xl mx-auto text-white/60 italic border-l-4 border-amber-400/50 pl-5 text-left text-xl">
          « Ce que tu veux existe forcément quelque part sur cette Terre. »
        </blockquote>
        <p className="text-amber-300/90 text-sm font-bold tracking-widest">— Gol D. Roger, le Roi des Pirates</p>
      </div>

      {/* Bottom wave */}
      <OceanWave />

      {/* Scroll indicator (small, bottom-center above wave) */}
      <a href="#explore" className="absolute bottom-24 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors flex flex-col items-center gap-1 text-xs tracking-[0.25em] uppercase">
        <span>Défiler</span>
        <span className="scroll-bob text-xl">↓</span>
      </a>
    </section>
  );
}
