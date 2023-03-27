import { createContext, useContext } from 'react';

interface AppShellContextValue {
  zIndex: React.CSSProperties['zIndex'];
  fixed: boolean;
  layout: 'default' | 'alt';
}

const AppShellContext = createContext<AppShellContextValue>({
  zIndex: 1000,
  fixed: false,
  layout: 'default',
});

export const AppShellProvider = AppShellContext.Provider;

export function useAppShellContext() {
  return useContext(AppShellContext);
}
