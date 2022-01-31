import type { AppShellStylesNames, NavbarStylesNames } from '@mantine/core';

export const AppShell: Record<AppShellStylesNames, string> = {
  root: 'Root element, wraps Navbar, Header and content',
  body: 'AppShell body, contains Navbar and main element',
  main: 'AppShell main element, contains content',
};

export const Navbar: Record<NavbarStylesNames, string> = {
  root: 'Root element',
  hidden: 'Hidden root element modifier',
};
