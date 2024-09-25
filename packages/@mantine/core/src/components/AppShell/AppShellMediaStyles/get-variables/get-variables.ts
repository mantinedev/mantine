import { em, getSortedBreakpoints, keys, MantineTheme } from '../../../../core';
import type { AppShellProps } from '../../AppShell';
import { assignAsideVariables } from '../assign-aside-variables/assign-aside-variables';
import { assignFooterVariables } from '../assign-footer-variables/assign-footer-variables';
import { assignHeaderVariables } from '../assign-header-variables/assign-header-variables';
import { assignNavbarVariables } from '../assign-navbar-variables/assign-navbar-variables';
import { assignPaddingVariables } from '../assign-padding-variables/assign-padding-variables';

export type CSSVariables = Record<`--${string}`, string | undefined>;
export type MediaQueryVariables = Record<string, Record<`--${string}`, string | undefined>>;

interface GetVariablesInput {
  navbar: AppShellProps['navbar'] | undefined;
  header: AppShellProps['header'] | undefined;
  footer: AppShellProps['footer'] | undefined;
  aside: AppShellProps['aside'] | undefined;
  padding: AppShellProps['padding'] | undefined;
  theme: MantineTheme;
}

export function getVariables({ navbar, header, footer, aside, padding, theme }: GetVariablesInput) {
  const minMediaStyles: MediaQueryVariables = {};
  const maxMediaStyles: MediaQueryVariables = {};
  const baseStyles: CSSVariables = {};

  assignNavbarVariables({
    baseStyles,
    minMediaStyles,
    maxMediaStyles,
    navbar,
    theme,
  });

  assignAsideVariables({
    baseStyles,
    minMediaStyles,
    maxMediaStyles,
    aside,
    theme,
  });

  assignHeaderVariables({ baseStyles, minMediaStyles, header });
  assignFooterVariables({ baseStyles, minMediaStyles, footer });
  assignPaddingVariables({ baseStyles, minMediaStyles, padding });

  const minMedia = getSortedBreakpoints(keys(minMediaStyles), theme.breakpoints).map(
    (breakpoint) => ({
      query: `(min-width: ${em(breakpoint.px)})`,
      styles: minMediaStyles[breakpoint.value],
    })
  );

  const maxMedia = getSortedBreakpoints(keys(maxMediaStyles), theme.breakpoints).map(
    (breakpoint) => ({
      query: `(max-width: ${em(breakpoint.px)})`,
      styles: maxMediaStyles[breakpoint.value],
    })
  );

  const media = [...minMedia, ...maxMedia];

  return { baseStyles, media };
}
