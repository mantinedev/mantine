import { keys, rem } from '../../../../core';
import type { AppShellProps } from '../../AppShell';
import { getBaseSize } from '../get-base-size/get-base-size';
import type { CSSVariables, MediaQueryVariables } from '../get-variables/get-variables';
import { isPrimitiveSize } from '../is-primitive-size/is-primitive-size';
import { isResponsiveSize } from '../is-responsive-size/is-responsive-size';

interface AssignFooterVariablesInput {
  baseStyles: CSSVariables;
  minMediaStyles: MediaQueryVariables;
  footer: AppShellProps['footer'] | undefined;
  mode: 'fixed' | 'static';
}

export function assignFooterVariables({
  baseStyles,
  minMediaStyles,
  footer,
  mode,
}: AssignFooterVariablesInput) {
  const footerHeight = footer?.height;
  const collapsedFooterTransform = 'translateY(var(--app-shell-footer-height))';
  const shouldOffset = mode === 'static' ? true : (footer?.offset ?? true);

  if (mode === 'static' && footer) {
    baseStyles['--app-shell-footer-position'] = 'sticky';
    baseStyles['--app-shell-footer-grid-column'] = '1 / -1';
    baseStyles['--app-shell-footer-grid-row'] = '3';
  }

  if (isPrimitiveSize(footerHeight)) {
    const baseSize = rem(getBaseSize(footerHeight));
    baseStyles['--app-shell-footer-height'] = baseSize;
    if (shouldOffset) {
      baseStyles['--app-shell-footer-offset'] = baseSize;
    }
  }

  if (isResponsiveSize(footerHeight)) {
    if (typeof footerHeight.base !== 'undefined') {
      baseStyles['--app-shell-footer-height'] = rem(footerHeight.base);

      if (shouldOffset) {
        baseStyles['--app-shell-footer-offset'] = rem(footerHeight.base);
      }
    }

    keys(footerHeight).forEach((key) => {
      if (key !== 'base') {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]['--app-shell-footer-height'] = rem(footerHeight[key]);

        if (shouldOffset) {
          minMediaStyles[key]['--app-shell-footer-offset'] = rem(footerHeight[key]);
        }
      }
    });
  }

  if (footer?.collapsed) {
    baseStyles['--app-shell-footer-transform'] = collapsedFooterTransform;
    if (mode === 'fixed') {
      baseStyles['--app-shell-footer-offset'] = '0px !important';
    }
  }
}
