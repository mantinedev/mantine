import { createContext, useContext } from 'react';

interface AppShellContextValue {
  zIndex?: React.CSSProperties['zIndex'];
  fixed?: boolean;
}

const AppShellContext = createContext<AppShellContextValue>({});
export const AppShellProvider = AppShellContext.Provider;

export function useAppShellContext() {
  return useContext(AppShellContext);
}
