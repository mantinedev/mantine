import { createSafeContext, GetStylesApi } from '../../core';
import type { AppShellFactory } from './AppShell';

export interface AppShellContextValue {
  getStyles: GetStylesApi<AppShellFactory>;
  withBorder: boolean | undefined;
  zIndex: string | number | undefined;
  disabled: boolean | undefined;
  offsetScrollbars: boolean | undefined;
  mode: 'fixed' | 'static';
}

export const [AppShellProvider, useAppShellContext] = createSafeContext<AppShellContextValue>(
  'AppShell was not found in tree'
);
