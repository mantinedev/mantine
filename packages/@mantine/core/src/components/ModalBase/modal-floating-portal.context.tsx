import { createContext, use, useMemo } from 'react';

export interface ModalFloatingPortalValue {
  /** Element inside the dialog that floating listboxes portal into. */
  target: HTMLElement | null;
}

const ModalFloatingPortalContext = createContext<ModalFloatingPortalValue | null>(null);

export function ModalFloatingPortalProvider({
  target,
  children,
}: {
  target: HTMLElement | null;
  children: React.ReactNode;
}) {
  const value = useMemo(() => ({ target }), [target]);

  return (
    <ModalFloatingPortalContext.Provider value={value}>
      {children}
    </ModalFloatingPortalContext.Provider>
  );
}

/** `null` when the component is not rendered inside a modal or drawer dialog. */
export function useModalFloatingPortal() {
  return use(ModalFloatingPortalContext);
}
