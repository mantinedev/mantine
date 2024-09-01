import { useCallback, useState } from 'react';

export function useModalsStack<const T extends string>(modals: T[]) {
  const initialState = modals.reduce(
    (acc, modal) => ({ ...acc, [modal]: false }),
    {} as Record<T, boolean>
  );

  const [state, setState] = useState(initialState);

  const open = useCallback((modal: T) => {
    setState((current) => ({ ...current, [modal]: true }));
  }, []);

  const close = useCallback(
    (modal: T) => setState((current) => ({ ...current, [modal]: false })),
    []
  );

  const toggle = useCallback(
    (modal: T) => setState((current) => ({ ...current, [modal]: !current[modal] })),
    []
  );

  const closeAll = useCallback(() => setState(initialState), []);

  const register = useCallback(
    (modal: T) => ({
      opened: state[modal],
      onClose: () => close(modal),
      stackId: modal,
    }),
    [state]
  );

  return { state, open, close, closeAll, toggle, register };
}
