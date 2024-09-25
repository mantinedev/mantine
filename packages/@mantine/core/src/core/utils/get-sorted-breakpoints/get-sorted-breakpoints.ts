import {
  BreakpointsSource,
  getBreakpointValue,
} from '../get-breakpoint-value/get-breakpoint-value';

export function getSortedBreakpoints(values: string[], breakpoints: BreakpointsSource) {
  const convertedBreakpoints = values.map((breakpoint) => ({
    value: breakpoint,
    px: getBreakpointValue(breakpoint, breakpoints),
  }));

  convertedBreakpoints.sort((a, b) => a.px - b.px);
  return convertedBreakpoints;
}
