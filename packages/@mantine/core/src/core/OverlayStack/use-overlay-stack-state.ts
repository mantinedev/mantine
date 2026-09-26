import { useCallback, useState } from 'react';

export interface OverlayStackStateReturnType<T extends string> {
  state: Record<T, boolean>;
  open: (id: T) => void;
  close: (id: T) => void;
  toggle: (id: T) => void;
  closeAll: () => void;
  register: (id: T) => { opened: boolean; onClose: () => void; stackId: T };
}

function getClosedState<T extends string>(overlays: T[]) {
  return overlays.reduce(
    (acc, overlay) => ({ ...acc, [overlay]: false }),
    {} as Record<T, boolean>
  );
}

export function useOverlayStackState<const T extends string>(
  overlays: T[]
): OverlayStackStateReturnType<T> {
  const [state, setState] = useState(() => getClosedState(overlays));

  const open = useCallback((overlay: T) => {
    setState((current) => ({ ...current, [overlay]: true }));
  }, []);

  const close = useCallback(
    (overlay: T) => setState((current) => ({ ...current, [overlay]: false })),
    []
  );

  const toggle = useCallback(
    (overlay: T) => setState((current) => ({ ...current, [overlay]: !current[overlay] })),
    []
  );

  const closeAll = useCallback(
    () => setState((current) => getClosedState(Object.keys(current) as T[])),
    []
  );

  const register = useCallback(
    (overlay: T) => ({
      opened: state[overlay],
      onClose: () => close(overlay),
      stackId: overlay,
    }),
    [state]
  );

  return { state, open, close, closeAll, toggle, register };
}
