import { useCallback, useRef, useState } from 'react';

interface OverflowState {
  start: boolean;
  end: boolean;
  horizontal: boolean;
}

const NO_OVERFLOW: OverflowState = { start: false, end: false, horizontal: false };

function measure(node: HTMLElement, withEdges: boolean): OverflowState {
  const scrollLeft = Math.abs(node.scrollLeft);
  const maxScroll = node.scrollWidth - node.clientWidth;
  return {
    start: withEdges && scrollLeft > 0,
    end: withEdges && maxScroll > 0 && scrollLeft < maxScroll - 1,
    horizontal: maxScroll > 0,
  };
}

export function useOverflowState(withEdges: boolean) {
  const [state, setState] = useState<OverflowState>(NO_OVERFLOW);
  const cleanupRef = useRef<(() => void) | null>(null);

  const ref = useCallback(
    (node: HTMLElement | null) => {
      cleanupRef.current?.();
      cleanupRef.current = null;

      if (!node) {
        setState((current) =>
          current.start || current.end || current.horizontal ? NO_OVERFLOW : current
        );
        return;
      }

      const update = () => {
        const next = measure(node, withEdges);
        setState((current) =>
          current.start === next.start &&
          current.end === next.end &&
          current.horizontal === next.horizontal
            ? current
            : next
        );
      };

      update();
      if (withEdges) {
        node.addEventListener('scroll', update, { passive: true });
      }

      let observer: ResizeObserver | null = null;
      if (typeof ResizeObserver !== 'undefined') {
        observer = new ResizeObserver(update);
        observer.observe(node);
        const content = node.firstElementChild;
        if (content) {
          observer.observe(content);
          if (content.firstElementChild) {
            observer.observe(content.firstElementChild);
          }
        }
      }

      cleanupRef.current = () => {
        node.removeEventListener('scroll', update);
        observer?.disconnect();
      };
    },
    [withEdges]
  );

  return { ref, state };
}
