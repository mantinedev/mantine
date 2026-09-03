import { createContext, use, useMemo } from 'react';
import { DrawerStackContext, ModalStackContext, SharedOverlayStacks } from '../../OverlayStack';
import { DEFAULT_THEME } from '../default-theme';
import { mergeMantineTheme } from '../merge-mantine-theme';
import { MantineTheme, MantineThemeOverride } from '../theme.types';

export const MantineThemeContext = createContext<MantineTheme | null>(null);

export const useSafeMantineTheme = () => use(MantineThemeContext) || DEFAULT_THEME;

export function useMantineTheme() {
  const ctx = use(MantineThemeContext);
  if (!ctx) {
    throw new Error(
      '@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app'
    );
  }

  return ctx;
}

export interface MantineThemeProviderProps {
  /** Determines whether theme should be inherited from parent MantineProvider @default true */
  inherit?: boolean;

  /** Theme override object */
  theme?: MantineThemeOverride;

  /** Your application or part of the application that requires different theme */
  children?: React.ReactNode;
}

export function MantineThemeProvider({
  theme,
  children,
  inherit = true,
}: MantineThemeProviderProps) {
  const parentTheme = useSafeMantineTheme();
  const parentModalStack = use(ModalStackContext);
  const parentDrawerStack = use(DrawerStackContext);
  const mergedTheme = useMemo(
    () => mergeMantineTheme(inherit ? parentTheme : DEFAULT_THEME, theme),
    [theme, parentTheme, inherit]
  );

  const overlayStack = mergedTheme.overlayStack;
  const overlayStackOptions = typeof overlayStack === 'object' ? overlayStack : {};

  const withModalStack = !!overlayStack && !parentModalStack;
  const withDrawerStack = !!overlayStack && !parentDrawerStack;
  const shadowModalStack = !overlayStack && !!parentModalStack?.shared;
  const shadowDrawerStack = !overlayStack && !!parentDrawerStack?.shared;

  let content = children;

  if (shadowDrawerStack) {
    content = <DrawerStackContext value={null}>{content}</DrawerStackContext>;
  }

  if (shadowModalStack) {
    content = <ModalStackContext value={null}>{content}</ModalStackContext>;
  }

  if (withModalStack || withDrawerStack) {
    content = (
      <SharedOverlayStacks
        withModalStack={withModalStack}
        withDrawerStack={withDrawerStack}
        {...overlayStackOptions}
      >
        {content}
      </SharedOverlayStacks>
    );
  }

  return <MantineThemeContext value={mergedTheme}>{content}</MantineThemeContext>;
}

MantineThemeProvider.displayName = '@mantine/core/MantineThemeProvider';
