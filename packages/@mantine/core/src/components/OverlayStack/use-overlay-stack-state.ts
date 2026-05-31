import { useCallback, useState } from 'react';

interface OverlayStackStateReturnType<T extends string> {
  state: Record<T, boolean>;
  open: (id: T) => void;
  close: (id: T) => void;
  toggle: (id: T) => void;
  closeAll: () => void;
  register: (id: T) => { opened: boolean; onClose: () => void; stackId: T };
}

export function useOverlayStackState<const T extends string>(
  overlays: T[]
): OverlayStackStateReturnType<T> {
  const initialState = overlays.reduce(
    (acc, overlay) => ({ ...acc, [overlay]: false }),
    {} as Record<T, boolean>
  );

  const [state, setState] = useState(initialState);

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

  const closeAll = useCallback(() => setState(initialState), []);

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
