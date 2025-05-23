import type { MantineBreakpoint } from '../../core';

// Shared props of for Navbar, Aside, Header and Footer components
export interface AppShellCompoundProps {
  /** If set, component haves a border, overrides `withBorder` prop on `AppShell` component */
  withBorder?: boolean;

  /** Sets `z-index`. Inherited from the `AppShell` by default. */
  zIndex?: React.CSSProperties['zIndex'];
}

export type AppShellSize = number | (string & {});

export interface AppShellResponsiveSize {
  base?: AppShellSize;
  xs?: AppShellSize;
  sm?: AppShellSize;
  md?: AppShellSize;
  lg?: AppShellSize;
  xl?: AppShellSize;
  [key: string]: AppShellSize | undefined;
}

export interface AppShellNavbarConfiguration {
  width: AppShellSize | AppShellResponsiveSize;
  breakpoint: MantineBreakpoint | (string & {}) | number;
  collapsed?: { desktop?: boolean; mobile?: boolean };
}

export interface AppShellAsideConfiguration {
  width: AppShellSize | AppShellResponsiveSize;
  breakpoint: MantineBreakpoint | (string & {}) | number;
  collapsed?: { desktop?: boolean; mobile?: boolean };
}

export interface AppShellHeaderConfiguration {
  height: AppShellSize | AppShellResponsiveSize;
  collapsed?: boolean;
  offset?: boolean;
}

export interface AppShellFooterConfiguration {
  height: AppShellSize | AppShellResponsiveSize;
  collapsed?: boolean;
  offset?: boolean;
}
