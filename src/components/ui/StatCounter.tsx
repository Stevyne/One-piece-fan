import { useCountUp } from '../../hooks/useCountUp';

interface Props {
  emoji: string;
  value: number;
  suffix?: string;
  label: string;
  start: boolean;
}

export function StatCounter({ emoji, value, suffix = '', label, start }: Props) {
  const count = useCountUp(value, start);
  return (
    <div className="group rounded-2xl bg-white/[0.06] border border-white/10 p-5 backdrop-blur-md hover:border-amber-400/40 hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-300">
      <div className="text-3xl mb-1">{emoji}</div>
      <div className="text-3xl sm:text-4xl font-black text-white tabular-nums">
        {count}
        <span className="text-amber-300">{suffix}</span>
      </div>
      <div className="text-[11px] sm:text-xs text-white/50 uppercase tracking-widest mt-0.5">{label}</div>
    </div>
  );
}

export function StatBlock({ emoji, value, label }: { emoji: string; value: number; label: string }) {
  return (
    <div className="group relative rounded-2xl bg-white/[0.06] border border-white/10 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:bg-white/[0.12] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-amber-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="text-4xl mb-1">{emoji}</div>
      <div className="text-4xl font-black text-white tabular-nums group-hover:text-amber-300 transition-colors">{value}</div>
      <div className="text-[11px] text-white/40 uppercase tracking-widest mt-1">{label}</div>
    </div>
  );
}
