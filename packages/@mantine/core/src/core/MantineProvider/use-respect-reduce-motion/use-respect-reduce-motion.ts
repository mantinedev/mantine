import { useIsomorphicEffect } from '@mantine/hooks';

interface UseRespectReduceMotionOptions {
  respectReducedMotion: boolean;
  getRootElement: () => HTMLElement | undefined;
}

export function useRespectReduceMotion({
  respectReducedMotion,
  getRootElement,
}: UseRespectReduceMotionOptions) {
  useIsomorphicEffect(() => {
    if (respectReducedMotion) {
      getRootElement()?.setAttribute('data-respect-reduced-motion', 'true');
    }
  }, [respectReducedMotion]);
}
