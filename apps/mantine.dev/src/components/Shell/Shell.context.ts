import { createSafeContext } from '@mantine/core';

export interface ShellContextValue {
  navbarOpened: boolean;
  toggleNavbar: () => void;
  closeNavbar: () => void;
}

export const [ShellProvider, useShellContext] = createSafeContext<ShellContextValue>(
  'ShellProvider was not found in the component tree'
);
