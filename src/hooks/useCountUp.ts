import { useState, useEffect } from 'react';

export function useCountUp(end: number, start: boolean, duration = 1600) {
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
