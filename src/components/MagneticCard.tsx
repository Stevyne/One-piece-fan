import { useRef } from 'react';

export default function MagneticCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotX = (y / rect.height) * -8;
    const rotY = (x / rect.width) * 8;
    el.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = 'rotateX(0) rotateY(0) scale(1)';
  };
  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`transition-transform duration-200 ease-out preserve-3d ${className}`}
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
    >
      {children}
    </div>
  );
}
