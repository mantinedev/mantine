import { useEffect, useEffectEvent, useRef } from 'react';

const EDGE_THRESHOLD = 50;
const MAX_SCROLL_SPEED = 8;

interface UseAutoScrollOnDragOptions {
  viewportRef: React.RefObject<HTMLDivElement | null>;
  enabled: boolean;
}

export function useAutoScrollOnDrag({ viewportRef, enabled }: UseAutoScrollOnDragOptions) {
  const rafId = useRef<number | null>(null);
  const scrollDirection = useRef<number>(0);

  const stopScroll = useEffectEvent(() => {
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
    scrollDirection.current = 0;
  });

  const startScroll = useEffectEvent(() => {
    if (rafId.current !== null) {
      return;
    }

    const tick = () => {
      const viewport = viewportRef.current;
      if (!viewport || scrollDirection.current === 0) {
        rafId.current = null;
        return;
      }

      viewport.scrollTop += scrollDirection.current;
      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
  });

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const viewport = viewportRef.current;
    if (!viewport) {
      return undefined;
    }

    const handleDragOver = (event: DragEvent) => {
      const rect = viewport.getBoundingClientRect();
      const distanceFromTop = event.clientY - rect.top;
      const distanceFromBottom = rect.bottom - event.clientY;

      if (distanceFromTop < EDGE_THRESHOLD) {
        const proximity = 1 - distanceFromTop / EDGE_THRESHOLD;
        scrollDirection.current = -Math.ceil(proximity * MAX_SCROLL_SPEED);
        startScroll();
      } else if (distanceFromBottom < EDGE_THRESHOLD) {
        const proximity = 1 - distanceFromBottom / EDGE_THRESHOLD;
        scrollDirection.current = Math.ceil(proximity * MAX_SCROLL_SPEED);
        startScroll();
      } else {
        stopScroll();
      }
    };

    const handleDragEnd = () => {
      stopScroll();
    };

    viewport.addEventListener('dragover', handleDragOver);
    viewport.addEventListener('dragleave', handleDragEnd);
    viewport.addEventListener('dragend', handleDragEnd);
    viewport.addEventListener('drop', handleDragEnd);

    return () => {
      stopScroll();
      viewport.removeEventListener('dragover', handleDragOver);
      viewport.removeEventListener('dragleave', handleDragEnd);
      viewport.removeEventListener('dragend', handleDragEnd);
      viewport.removeEventListener('drop', handleDragEnd);
    };
  }, [enabled, viewportRef]);
}
