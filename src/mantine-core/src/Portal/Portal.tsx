import React, { useRef, useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  /** Portal children, for example, modal or popover */
  children: React.ReactNode;

  /** Root element z-index property */
  zIndex?: number;

  /** Element where portal should be rendered, by default new div element is created and appended to document.body */
  target?: HTMLDivElement;

  /** Root element className */
  className?: string;
}

export function Portal({ children, zIndex = 1, target, className }: PortalProps) {
  const [mounted, setMounted] = useState(false);
  const elementRef = useRef<HTMLDivElement>();

  useLayoutEffect(() => {
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
