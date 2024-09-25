import { getBreakpointValue, keys, MantineTheme, rem } from '../../../../core';
import type { AppShellProps } from '../../AppShell';
import { getBaseSize } from '../get-base-size/get-base-size';
import type { CSSVariables, MediaQueryVariables } from '../get-variables/get-variables';
import { isPrimitiveSize } from '../is-primitive-size/is-primitive-size';
import { isResponsiveSize } from '../is-responsive-size/is-responsive-size';

interface AssignAsideVariablesInput {
  baseStyles: CSSVariables;
  minMediaStyles: MediaQueryVariables;
  maxMediaStyles: MediaQueryVariables;
  aside: AppShellProps['aside'] | undefined;
  theme: MantineTheme;
}

export function assignAsideVariables({
  baseStyles,
  minMediaStyles,
  maxMediaStyles,
  aside,
  theme,
}: AssignAsideVariablesInput) {
  const asideWidth = aside?.width;
  const collapsedAsideTransform = 'translateX(var(--app-shell-aside-width))';
  const collapsedAsideTransformRtl = 'translateX(calc(var(--app-shell-aside-width) * -1))';

  if (aside?.breakpoint && !aside?.collapsed?.mobile) {
    maxMediaStyles[aside?.breakpoint] = maxMediaStyles[aside?.breakpoint] || {};
    maxMediaStyles[aside?.breakpoint]['--app-shell-aside-width'] = '100%';
    maxMediaStyles[aside?.breakpoint]['--app-shell-aside-offset'] = '0px';
  }

  if (isPrimitiveSize(asideWidth)) {
    const baseSize = rem(getBaseSize(asideWidth));
    baseStyles['--app-shell-aside-width'] = baseSize;
    baseStyles['--app-shell-aside-offset'] = baseSize;
  }

  if (isResponsiveSize(asideWidth)) {
    if (typeof asideWidth.base !== 'undefined') {
      baseStyles['--app-shell-aside-width'] = rem(asideWidth.base);
      baseStyles['--app-shell-aside-offset'] = rem(asideWidth.base);
    }

    keys(asideWidth).forEach((key) => {
      if (key !== 'base') {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]['--app-shell-aside-width'] = rem(asideWidth![key]);
        minMediaStyles[key]['--app-shell-aside-offset'] = rem(asideWidth![key]);
      }
    });
  }

  if (aside?.collapsed?.desktop) {
    const breakpointValue = aside!.breakpoint;
    minMediaStyles[breakpointValue] = minMediaStyles[breakpointValue] || {};
    minMediaStyles[breakpointValue]['--app-shell-aside-transform'] = collapsedAsideTransform;
    minMediaStyles[breakpointValue]['--app-shell-aside-transform-rtl'] = collapsedAsideTransformRtl;
    minMediaStyles[breakpointValue]['--app-shell-aside-offset'] = '0px !important';
  }

  if (aside?.collapsed?.mobile) {
    const breakpointValue = getBreakpointValue(aside!.breakpoint, theme.breakpoints) - 0.1;
    maxMediaStyles[breakpointValue] = maxMediaStyles[breakpointValue] || {};
    maxMediaStyles[breakpointValue]['--app-shell-aside-width'] = '100%';
    maxMediaStyles[breakpointValue]['--app-shell-aside-offset'] = '0px';
    maxMediaStyles[breakpointValue]['--app-shell-aside-transform'] = collapsedAsideTransform;
    maxMediaStyles[breakpointValue]['--app-shell-aside-transform-rtl'] = collapsedAsideTransformRtl;
  }
}
