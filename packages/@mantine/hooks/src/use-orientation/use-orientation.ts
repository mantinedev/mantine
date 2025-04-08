import { useState } from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';

interface UseOrientationOptions {
  /** Default angle value, used until the real can be retrieved
   * (during server side rendering and before js executes on the page)
   * If not provided, the default value is `0`
   * */
  defaultAngle?: number;

  /** Default angle value, used until the real can be retrieved
   * (during server side rendering and before js executes on the page)
   * If not provided, the default value is `'landscape-primary'`
   * */
  defaultType?: OrientationType;

  /** If true, the initial value will be resolved in useEffect (ssr safe)
   *  If false, the initial value will be resolved in useLayoutEffect (ssr unsafe)
   *  True by default.
   */
  getInitialValueInEffect?: boolean;
}

interface UseOrientationReturnType {
  angle: number;
  type: OrientationType;
}

function getInitialValue(
  initialValue: UseOrientationReturnType,
  getInitialValueInEffect: boolean
): UseOrientationReturnType {
  if (getInitialValueInEffect) {
    return initialValue;
  }

  if (typeof window !== 'undefined' && 'screen' in window) {
    return {
      angle: window.screen.orientation?.angle ?? initialValue.angle,
      type: window.screen.orientation?.type ?? initialValue.type,
    };
  }

  return initialValue;
}

export function useOrientation({
  defaultAngle = 0,
  defaultType = 'landscape-primary',
  getInitialValueInEffect = true,
}: UseOrientationOptions = {}): UseOrientationReturnType {
  const [orientation, setOrientation] = useState<UseOrientationReturnType>(
    getInitialValue(
      {
        angle: defaultAngle,
        type: defaultType,
      },
      getInitialValueInEffect
    )
  );

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
