import { keys, rem } from '../../../../core';
import type { AppShellProps } from '../../AppShell';
import { getBaseSize } from '../get-base-size/get-base-size';
import type { CSSVariables, MediaQueryVariables } from '../get-variables/get-variables';
import { isPrimitiveSize } from '../is-primitive-size/is-primitive-size';
import { isResponsiveSize } from '../is-responsive-size/is-responsive-size';

interface AssignHeaderVariablesInput {
  baseStyles: CSSVariables;
  minMediaStyles: MediaQueryVariables;
  header: AppShellProps['header'] | undefined;
}

export function assignHeaderVariables({
  baseStyles,
  minMediaStyles,
  header,
}: AssignHeaderVariablesInput) {
  const headerHeight = header?.height;
  const collapsedHeaderTransform = 'translateY(calc(var(--app-shell-header-height) * -1))';
  const shouldOffset = header?.offset ?? true;

  if (isPrimitiveSize(headerHeight)) {
    const baseSize = rem(getBaseSize(headerHeight));
    baseStyles['--app-shell-header-height'] = baseSize;
    if (shouldOffset) {
      baseStyles['--app-shell-header-offset'] = baseSize;
    }
  }

  if (isResponsiveSize(headerHeight)) {
    if (typeof headerHeight.base !== 'undefined') {
      baseStyles['--app-shell-header-height'] = rem(headerHeight.base);

      if (shouldOffset) {
        baseStyles['--app-shell-header-offset'] = rem(headerHeight.base);
      }
    }

    keys(headerHeight).forEach((key) => {
      if (key !== 'base') {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]['--app-shell-header-height'] = rem(headerHeight[key]);

        if (shouldOffset) {
          minMediaStyles[key]['--app-shell-header-offset'] = rem(headerHeight[key]);
        }
      }
    });
  }

  if (header?.collapsed) {
    baseStyles['--app-shell-header-transform'] = collapsedHeaderTransform;
    baseStyles['--app-shell-header-offset'] = '0px !important';
  }
}
