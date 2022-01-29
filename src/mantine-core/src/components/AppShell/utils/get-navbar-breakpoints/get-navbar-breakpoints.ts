import React from 'react';
import { MantineTheme } from '@mantine/styles';
import { getSortedBreakpoints } from '../get-sorted-breakpoints/get-sorted-breakpoints';

export function getNavbarBreakpoints(element: React.ReactElement, theme: MantineTheme) {
  const breakpoints = element?.props?.width;
  return breakpoints != null
    ? getSortedBreakpoints<{ width: number | string; height: number | string }>(
        breakpoints as any,
        theme
      )
    : [];
}
