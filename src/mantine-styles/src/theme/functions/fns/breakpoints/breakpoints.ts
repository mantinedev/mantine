import type { MantineThemeBase, MantineNumberSize } from '../../../types';
import { size } from '../size/size';
import { rem } from '../../../utils';

function getBreakpointValue(value: string | number) {
  if (typeof value === 'number') {
    return value;
  }

  if (value.includes('rem')) {
    return Number(value.replace('rem', '')) * 16;
  }

  return Number(value);
}

export function largerThan(theme: MantineThemeBase) {
  return (breakpoint: MantineNumberSize) =>
    `@media (min-width: ${rem(
      getBreakpointValue(size({ size: breakpoint, sizes: theme.breakpoints }))
    )})`;
}

export function smallerThan(theme: MantineThemeBase) {
  return (breakpoint: MantineNumberSize) =>
    `@media (max-width: ${rem(
      getBreakpointValue(size({ size: breakpoint, sizes: theme.breakpoints })) - 1
    )})`;
}
