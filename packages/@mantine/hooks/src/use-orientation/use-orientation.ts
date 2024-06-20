import { useState } from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';

export function useOrientation() {
  const [orientation, setOrientation] = useState({ angle: 0, type: 'landscape-primary' });

  const handleOrientationChange = (event: Event) => {
    const target = event.currentTarget as ScreenOrientation;
    setOrientation({ angle: target?.angle || 0, type: target?.type || 'landscape-primary' });
  };

  useIsomorphicEffect(() => {
    window.screen.orientation?.addEventListener('change', handleOrientationChange);
    return () => window.screen.orientation?.removeEventListener('change', handleOrientationChange);
  }, []);

  return orientation;
}
