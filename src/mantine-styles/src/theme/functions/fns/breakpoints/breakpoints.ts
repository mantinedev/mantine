import type { MantineThemeBase, MantineNumberSize } from '../../../types';
import { rem, getSize } from '../../../utils';

export function getBreakpointValue(value: string | number) {
  if (typeof value === 'number') {
    return value;
  }

  if (typeof value === 'string' && value.includes('rem')) {
    return Number(value.replace('rem', '')) * 16;
  }

  return Number(value);
}

export function largerThan(theme: MantineThemeBase) {
  return (breakpoint: MantineNumberSize) =>
    `@media (min-width: ${rem(
      getBreakpointValue(getSize({ size: breakpoint, sizes: theme.breakpoints }))
    )})`;
}

export function smallerThan(theme: MantineThemeBase) {
  return (breakpoint: MantineNumberSize) =>
    `@media (max-width: ${rem(
      getBreakpointValue(getSize({ size: breakpoint, sizes: theme.breakpoints })) - 1
    )})`;
}
