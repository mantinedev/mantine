import { startTransition, useEffect, useRef, useState } from 'react';
import { useIsomorphicEffect, useWindowEvent } from '@mantine/hooks';

interface UseResizingInput {
  transitionDuration: number | undefined;
  disabled: boolean | undefined;
  resizeKey?: string;
}

export function useResizing({ transitionDuration, disabled, resizeKey }: UseResizingInput) {
  const [resizing, setResizing] = useState(true);
  const [settling, setSettling] = useState({ key: resizeKey, active: false });
  const resizingTimeout = useRef<number>(-1);
  const disabledTimeout = useRef<number>(-1);

  if (settling.key !== resizeKey) {
    setSettling({ key: resizeKey, active: true });
  }

  useEffect(() => {
    if (!settling.active) {
      return undefined;
    }

    const settlingTimeout = window.setTimeout(
      () =>
        startTransition(() => {
          setSettling((current) => ({ ...current, active: false }));
        }),
      transitionDuration || 0
    );

    return () => window.clearTimeout(settlingTimeout);
  }, [settling, transitionDuration]);

  useWindowEvent('resize', () => {
    setResizing(true);
    clearTimeout(resizingTimeout.current);
    resizingTimeout.current = window.setTimeout(
      () =>
        startTransition(() => {
          setResizing(false);
        }),
      200
    );
  });

  useIsomorphicEffect(() => {
    setResizing(true);
    clearTimeout(disabledTimeout.current);
    disabledTimeout.current = window.setTimeout(
      () =>
        startTransition(() => {
          setResizing(false);
        }),
      transitionDuration || 0
    );
  }, [disabled, transitionDuration]);

  return resizing || settling.active;
}
