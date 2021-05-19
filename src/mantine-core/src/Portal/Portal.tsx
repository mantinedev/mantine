import React, { useRef, useState, useLayoutEffect, useEffect, ReactPortal } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  /** Portal children, for example, modal or popover */
  children: React.ReactNode;

  /** Root element z-index property */
  zIndex?: number;

  /** Element where portal should be rendered, by default new div element is created and appended to document.body */
  target?: HTMLDivElement;

  /** Root element className */
  className?: string;
}

// useLayoutEffect is required for Portal to appear after hydration
// useLayoutEffect will show warning if used during ssr, e.g. with Next.js
// useIsomorphicEffect removes it by replacing useLayoutEffect with useEffect during ssr
const useIsomorphicEffect = typeof document !== 'undefined' ? useLayoutEffect : useEffect;

export function Portal({ children, zIndex = 1, target, className }: PortalProps): ReactPortal {
  const [mounted, setMounted] = useState(false);
  const elementRef = useRef<HTMLDivElement>();

  useIsomorphicEffect(() => {
    setMounted(true);
    elementRef.current = target || document.createElement('div');
    if (!target) {
      document.body.appendChild(elementRef.current);
    }
    return () => {
      !target && document.body.removeChild(elementRef.current);
    };
  }, [target]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <div className={className} style={{ position: 'relative', zIndex }} data-mantine-portal>
      {children}
    </div>,
    elementRef.current
  );
}

Portal.displayName = '@mantine/core/Portal';
