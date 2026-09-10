import { RefObject, useEffect, useRef } from 'react';

interface UseFocusAfterLevelChangeInput {
  rootRef: RefObject<HTMLElement | null>;
  level: string;
  disabled?: boolean;
}

interface PendingFocus {
  target: 'level' | 'grid';
  index: number;
  level: string;
}

export function useFocusAfterLevelChange({ rootRef, level, disabled }: UseFocusAfterLevelChangeInput) {
  const pending = useRef<PendingFocus | null>(null);

  useEffect(() => {
    const request = pending.current;
    pending.current = null;

    if (!request || request.level === level || !rootRef.current) {
      return;
    }

    const root = rootRef.current;
    let node: HTMLElement | null = null;

    if (request.target === 'level') {
      const controls = root.querySelectorAll<HTMLElement>('button[data-level-control]');
      node = controls[Math.min(request.index, controls.length - 1)] || null;
    }

    node = node || root.querySelector<HTMLElement>('table [tabindex="0"]');
    node?.focus({ preventScroll: true });
  });

  return () => {
    if (disabled || !rootRef.current || typeof document === 'undefined') {
      return;
    }

    const controls = Array.from(rootRef.current.querySelectorAll('[data-level-control]'));
    const index = document.activeElement ? controls.indexOf(document.activeElement) : -1;
    pending.current = {
      target: index === -1 ? 'grid' : 'level',
      index: Math.max(index, 0),
      level,
    };
  };
}
