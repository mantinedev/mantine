import { useEffect, useState } from 'react';

export interface TargetRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

export function useTargetRect(target: string | React.RefObject<HTMLElement | null> | undefined) {
  const [rect, setRect] = useState<TargetRect | null>(null);
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!target) {
      setRect(null);
      setElement(null);
      return;
    }

    const resolve = () =>
      typeof target === 'string'
        ? document.querySelector<HTMLElement>(target)
        : target?.current || null;

    const el = resolve();
    setElement(el);

    if (!el && typeof target === 'string') {
      const mutationObserver = new MutationObserver(() => {
        const found = resolve();
        if (found) {
          mutationObserver.disconnect();
          setElement(found);
        }
      });

      mutationObserver.observe(document.body, { childList: true, subtree: true });

      return () => {
        mutationObserver.disconnect();
      };
    }

    if (!el) {
      setRect(null);
      return;
    }

    const updateRect = () => {
      const r = el.getBoundingClientRect();
      setRect({ top: r.top, left: r.left, width: r.width, height: r.height });
    };

    updateRect();

    const observer = new ResizeObserver(updateRect);
    observer.observe(el);
    window.addEventListener('scroll', updateRect, true);
    window.addEventListener('resize', updateRect);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateRect, true);
      window.removeEventListener('resize', updateRect);
    };
  }, [target, element]);

  return { rect, element };
}
