import { createContext, useContext } from 'react';

interface FloatingPortalContextValue {
  /** Target element for floating elements like Popover, Tooltip, etc. */
  portalTarget: HTMLElement | null;
}

const FloatingPortalContext = createContext<FloatingPortalContextValue | null>(null);

export interface FloatingPortalProviderProps {
  children: React.ReactNode;
  /** Target element for floating elements rendered inside this provider */
  portalTarget: HTMLElement | null;
}

export function FloatingPortalProvider({ children, portalTarget }: FloatingPortalProviderProps) {
  return (
    <FloatingPortalContext.Provider value={{ portalTarget }}>
      {children}
    </FloatingPortalContext.Provider>
  );
}

/**
 * Returns the floating portal target if available.
 * Used by Popover and other floating components to render inside Modal
 * when the Modal provides a portal target, preserving aria-modal accessibility.
 */
export function useFloatingPortalTarget(): HTMLElement | null {
  const ctx = useContext(FloatingPortalContext);
  return ctx?.portalTarget ?? null;
}

FloatingPortalProvider.displayName = '@mantine/core/FloatingPortalProvider';
