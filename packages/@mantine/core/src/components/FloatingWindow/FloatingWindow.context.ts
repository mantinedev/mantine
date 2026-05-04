import { createContext, useContext } from 'react';

interface FloatingWindowContextValue {
  zIndex: React.CSSProperties['zIndex'];
}

export const FloatingWindowContext = createContext<FloatingWindowContextValue | null>(null);

export function useFloatingWindowContext() {
  return useContext(FloatingWindowContext);
}
