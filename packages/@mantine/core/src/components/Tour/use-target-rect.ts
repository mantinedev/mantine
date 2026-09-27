import { useEffect, useState } from 'react';
import { useIsomorphicEffect } from '@mantine/hooks';

export type TourTarget = string | React.RefObject<HTMLElement | null> | undefined;

export interface TargetRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

function resolveTarget(target: TourTarget): HTMLElement | null {
  if (!target) {
    return null;
  }

  return typeof target === 'string'
    ? document.querySelector<HTMLElement>(target)
    : target.current || null;
}

export function useTargetElement(target: TourTarget) {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useIsomorphicEffect(() => {
    const el = resolveTarget(target);
    setElement(el);

    if (el || typeof target !== 'string') {
      return undefined;
    }

    const mutationObserver = new MutationObserver(() => {
      const found = resolveTarget(target);
      if (found) {
        mutationObserver.disconnect();
        setElement(found);
      }
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
    };
  }, [target]);

  return element;
}

export function useTargetRect(target: TourTarget) {
  const element = useTargetElement(target);
  const [rect, setRect] = useState<TargetRect | null>(null);

  useEffect(() => {
    if (!element) {
      setRect(null);
      return undefined;
    }

    const updateRect = () => {
      const r = element.getBoundingClientRect();
      setRect({ top: r.top, left: r.left, width: r.width, height: r.height });
    };

    updateRect();

    const observer = new ResizeObserver(updateRect);
    observer.observe(element);
    window.addEventListener('scroll', updateRect, true);
    window.addEventListener('resize', updateRect);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateRect, true);
      window.removeEventListener('resize', updateRect);
    };
  }, [element]);

  return { rect, element };
}
