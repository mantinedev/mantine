import { InlineStyles, useMantineContext, useMantineTheme } from '../../../core';
import type { AppShellProps } from '../AppShell';
import type { AppShellResizeSection, AppShellResizeSizes } from '../AppShell.types';
import { getVariables } from './get-variables/get-variables';

interface AppShellMediaStylesProps {
  navbar: AppShellProps['navbar'] | undefined;
  header: AppShellProps['header'] | undefined;
  aside: AppShellProps['aside'] | undefined;
  footer: AppShellProps['footer'] | undefined;
  padding: AppShellProps['padding'] | undefined;
  mode: 'fixed' | 'static';
  selector?: string;
  resize?: { sizes: AppShellResizeSizes; enabled: Partial<Record<AppShellResizeSection, boolean>> };
}

export function AppShellMediaStyles({
  navbar,
  header,
  aside,
  footer,
  padding,
  mode,
  selector,
  resize,
}: AppShellMediaStylesProps) {
  const theme = useMantineTheme();
  const ctx = useMantineContext();
  const { media, baseStyles } = getVariables({
    navbar,
    header,
    footer,
    aside,
    padding,
    theme,
    mode,
    resize,
  });
  return (
    <InlineStyles
      media={media}
      styles={baseStyles}
      selector={selector || ctx.cssVariablesSelector}
    />
  );
}
