import type { MantineBreakpoint } from '../../MantineProvider';
import { px } from '../units-converters';

export type BreakpointsSource = Record<MantineBreakpoint, number | string>;

export function getBreakpointValue(breakpoint: number | string, breakpoints: BreakpointsSource) {
  if (breakpoint in breakpoints) {
    return px(breakpoints[breakpoint as MantineBreakpoint]) as number;
  }

  return px(breakpoint) as number;
}
