export function HakiBadge({ type, active, advanced }: { type: string; active: boolean; advanced?: boolean }) {
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

export function DevilFruitBadge({ type }: { type: string }) {
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

export function BountyBadge({ bounty }: { bounty?: string }) {
  if (!bounty) return null;
  return (
    <div className="inline-block bg-black/60 rounded-xl px-5 py-2 border border-amber-400/30 backdrop-blur-sm">
      <p className="text-white/40 text-[10px] uppercase tracking-wider font-bold">Prime</p>
      <p className="text-amber-400 text-xl font-black font-mono">{bounty} ฿</p>
    </div>
  );
}
