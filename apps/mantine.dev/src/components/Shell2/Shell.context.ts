import { createSafeContext } from '@mantine/core';

interface ShellContext {
  navbarOpened: boolean;
  toggleNavbar: () => void;
  closeNavbar: () => void;
}

export const [ShellProvider, useShellContext] = createSafeContext<ShellContext>(
  'ShellProvider was not found in the component tree'
);
