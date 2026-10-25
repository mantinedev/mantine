import { createSafeContext, GetStylesApi } from '../../core';
import type { AppShellFactory } from './AppShell';
import type { AppShellResizeController, AppShellResizeSection } from './AppShell.types';

export interface AppShellContextValue {
  getStyles: GetStylesApi<AppShellFactory>;
  withBorder: boolean | undefined;
  zIndex: string | number | undefined;
  disabled: boolean | undefined;
  offsetScrollbars: boolean | undefined;
  mode: 'fixed' | 'static';
  resize: AppShellResizeController | undefined;
  rootRef: React.RefObject<HTMLDivElement | null>;
  resizeOffsets: Partial<Record<AppShellResizeSection, boolean>>;
}

export const [AppShellProvider, useAppShellContext] = createSafeContext<AppShellContextValue>(
  'AppShell was not found in tree'
);
