import { createSafeContext, GetStylesApi } from '../../core';
import type { AppShellFactory } from './AppShell';

export interface AppShellContext {
  getStyles: GetStylesApi<AppShellFactory>;
  withBorder: boolean | undefined;
  zIndex: string | number | undefined;
  disabled: boolean | undefined;
  offsetScrollbars: boolean | undefined;
}

export const [AppShellProvider, useAppShellContext] = createSafeContext<AppShellContext>(
  'AppShell was not found in tree'
);
