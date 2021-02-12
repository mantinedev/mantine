import { useEffect, useState } from 'react';

export function useReducedMotion() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);
  const handler = (event: MediaQueryListEvent) => setShouldReduceMotion(event.matches);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldReduceMotion(media.matches || false);
    media.addEventListener('change', handler);

    return () => {
      media.removeEventListener('change', handler);
    };
  }, []);

  return shouldReduceMotion;
}
