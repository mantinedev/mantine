import { useCallback, useRef, useState } from 'react';

export interface OverflowState {
  start: boolean;
  end: boolean;
}

const NO_OVERFLOW: OverflowState = { start: false, end: false };

function measure(node: HTMLElement): OverflowState {
  const scrollLeft = Math.abs(node.scrollLeft);
  const maxScroll = node.scrollWidth - node.clientWidth;
  return {
    start: scrollLeft > 0,
    end: maxScroll > 0 && scrollLeft < maxScroll - 1,
  };
}

/**
 * Tracks whether the horizontal scroll viewport is scrolled away from its
 * start or end edge. The returned callback ref attaches a passive scroll
 * listener and a ResizeObserver on the viewport and its content and only
 * updates state when a boolean flips.
 */
export function useOverflowState(enabled: boolean) {
  const [state, setState] = useState<OverflowState>(NO_OVERFLOW);
  const cleanupRef = useRef<(() => void) | null>(null);

  const ref = useCallback(
    (node: HTMLElement | null) => {
      cleanupRef.current?.();
      cleanupRef.current = null;

      if (!node || !enabled) {
        setState((current) => (current.start || current.end ? NO_OVERFLOW : current));
        return;
      }

      const update = () => {
        const next = measure(node);
        setState((current) =>
          current.start === next.start && current.end === next.end ? current : next
        );
      };

      update();
      node.addEventListener('scroll', update, { passive: true });

      let observer: ResizeObserver | null = null;
      if (typeof ResizeObserver !== 'undefined') {
        observer = new ResizeObserver(update);
        observer.observe(node);
        if (node.firstElementChild) {
          observer.observe(node.firstElementChild);
        }
      }

      cleanupRef.current = () => {
        node.removeEventListener('scroll', update);
        observer?.disconnect();
      };
    },
    [enabled]
  );

  return { ref, state };
}
