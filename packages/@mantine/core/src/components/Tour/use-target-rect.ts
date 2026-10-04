import { useCallback, useEffect, useState } from 'react';
import { useIsomorphicEffect } from '@mantine/hooks';

export type TourTarget = string | React.RefObject<HTMLElement | null> | undefined;

export interface TargetRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

export function resolveTarget(target: TourTarget): HTMLElement | null {
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

export function useTargetRect(element: HTMLElement | null) {
  const [rect, setRect] = useState<TargetRect | null>(null);

  const updateRect = useCallback(() => {
    if (!element) {
      return;
    }

    const r = element.getBoundingClientRect();
    setRect((previous) =>
      previous &&
      previous.top === r.top &&
      previous.left === r.left &&
      previous.width === r.width &&
      previous.height === r.height
        ? previous
        : { top: r.top, left: r.left, width: r.width, height: r.height }
    );
  }, [element]);

  useEffect(() => {
    if (!element) {
      setRect(null);
      return;
    }

    updateRect();
  }, [element, updateRect]);

  return { rect, updateRect };
}
