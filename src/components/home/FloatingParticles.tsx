import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export function FloatingParticles({ count = 12 }: { count?: number }) {
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
