import { useEffect } from 'react';
import { Embla } from './types';

export function useAnimationOffsetEffect(
  embla: Embla | null | undefined,
  transitionDuration: number
) {
  useEffect(() => {
    if (embla) {
      window.setTimeout(() => {
        embla.reInit();
      }, transitionDuration);
    }
  }, [embla, transitionDuration]);
}
