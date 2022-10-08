import type { MantineThemeBase, MantineNumberSize } from '../../../types';
import { size } from '../size/size';

export function largerThan(theme: MantineThemeBase) {
  return (breakpoint: MantineNumberSize) =>
    `@media (min-width: ${size({ size: breakpoint, sizes: theme.breakpoints })}px)`;
}

export function smallerThan(theme: MantineThemeBase) {
  return (breakpoint: MantineNumberSize) =>
    `@media (max-width: ${size({ size: breakpoint, sizes: theme.breakpoints }) - 1}px)`;
}
