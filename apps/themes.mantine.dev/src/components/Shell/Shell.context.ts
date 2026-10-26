import { createContext, use } from 'react';

interface ShellContextValue {
  navbarOpened: boolean;
  toggleNavbar: () => void;
}

export const ShellContext = createContext<ShellContextValue>({
  navbarOpened: false,
  toggleNavbar: () => {},
});

export function useShell() {
  return use(ShellContext);
}
