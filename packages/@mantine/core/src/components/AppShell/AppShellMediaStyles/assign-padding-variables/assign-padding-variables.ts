import { keys } from '../../../../core';
import type { AppShellProps } from '../../AppShell';
import { getBaseSize } from '../get-base-size/get-base-size';
import { getPaddingValue } from '../get-padding-value/get-padding-value';
import type { CSSVariables, MediaQueryVariables } from '../get-variables/get-variables';
import { isPrimitiveSize } from '../is-primitive-size/is-primitive-size';
import { isResponsiveSize } from '../is-responsive-size/is-responsive-size';

interface AssignPaddingVariablesInput {
  baseStyles: CSSVariables;
  minMediaStyles: MediaQueryVariables;
  padding: AppShellProps['padding'] | undefined;
}

export function assignPaddingVariables({
  padding,
  baseStyles,
  minMediaStyles,
}: AssignPaddingVariablesInput) {
  if (isPrimitiveSize(padding)) {
    baseStyles['--app-shell-padding'] = getPaddingValue(getBaseSize(padding));
  }

  if (isResponsiveSize(padding)) {
    if (padding.base) {
      baseStyles['--app-shell-padding'] = getPaddingValue(padding.base);
    }

    keys(padding).forEach((key) => {
      if (key !== 'base') {
        minMediaStyles[key] = minMediaStyles[key] || {};
        minMediaStyles[key]['--app-shell-padding'] = getPaddingValue(padding![key]);
      }
    });
  }
}
