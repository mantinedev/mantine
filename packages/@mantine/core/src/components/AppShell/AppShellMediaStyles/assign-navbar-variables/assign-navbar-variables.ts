import { getBreakpointValue, keys, MantineTheme, rem } from '../../../../core';
import type { AppShellProps } from '../../AppShell';
import { getBaseSize } from '../get-base-size/get-base-size';
import type { CSSVariables, MediaQueryVariables } from '../get-variables/get-variables';
import { isPrimitiveSize } from '../is-primitive-size/is-primitive-size';
import { isResponsiveSize } from '../is-responsive-size/is-responsive-size';

interface AssignNavbarVariablesInput {
  baseStyles: CSSVariables;
  minMediaStyles: MediaQueryVariables;
  maxMediaStyles: MediaQueryVariables;
  navbar: AppShellProps['navbar'] | undefined;
  theme: MantineTheme;
}

export function assignNavbarVariables({
  baseStyles,
  minMediaStyles,
  maxMediaStyles,
  navbar,
  theme,
}: AssignNavbarVariablesInput) {
  const navbarWidth = navbar?.width;
  const collapsedNavbarTransform = 'translateX(calc(var(--app-shell-navbar-width) * -1))';
  const collapsedNavbarTransformRtl = 'translateX(var(--app-shell-navbar-width))';

  if (navbar?.breakpoint && !navbar?.collapsed?.mobile) {
    maxMediaStyles[navbar?.breakpoint] = maxMediaStyles[navbar?.breakpoint] || {};
    maxMediaStyles[navbar?.breakpoint]['--app-shell-navbar-width'] = '100%';
    maxMediaStyles[navbar?.breakpoint]['--app-shell-navbar-offset'] = '0px';
  }

  if (isPrimitiveSize(navbarWidth)) {
    const baseSize = rem(getBaseSize(navbarWidth));
    baseStyles['--app-shell-navbar-width'] = baseSize;
    baseStyles['--app-shell-navbar-offset'] = baseSize;
  }

  if (isResponsiveSize(navbarWidth)) {
    if (typeof navbarWidth.base !== 'undefined') {
      baseStyles['--app-shell-navbar-width'] = rem(navbarWidth.base);
      baseStyles['--app-shell-navbar-offset'] = rem(navbarWidth.base);
    }

    keys(navbarWidth).forEach((key) => {
      if (key !== 'base') {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]['--app-shell-navbar-width'] = rem(navbarWidth![key]);
        minMediaStyles[key]['--app-shell-navbar-offset'] = rem(navbarWidth![key]);
      }
    });
  }

  if (navbar?.collapsed?.desktop) {
    const breakpointValue = navbar!.breakpoint;
    minMediaStyles[breakpointValue] = minMediaStyles[breakpointValue] || {};
    minMediaStyles[breakpointValue]['--app-shell-navbar-transform'] = collapsedNavbarTransform;
    minMediaStyles[breakpointValue]['--app-shell-navbar-transform-rtl'] =
      collapsedNavbarTransformRtl;
    minMediaStyles[breakpointValue]['--app-shell-navbar-offset'] = '0px !important';
  }

  if (navbar?.collapsed?.mobile) {
    const breakpointValue = getBreakpointValue(navbar!.breakpoint, theme.breakpoints) - 0.1;
    maxMediaStyles[breakpointValue] = maxMediaStyles[breakpointValue] || {};
    maxMediaStyles[breakpointValue]['--app-shell-navbar-width'] = '100%';
    maxMediaStyles[breakpointValue]['--app-shell-navbar-offset'] = '0px';
    maxMediaStyles[breakpointValue]['--app-shell-navbar-transform'] = collapsedNavbarTransform;
    maxMediaStyles[breakpointValue]['--app-shell-navbar-transform-rtl'] =
      collapsedNavbarTransformRtl;
  }
}
