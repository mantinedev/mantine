import { createStyles } from '@mantine/styles';
import { getSortedBreakpoints } from '../HorizontalSection/get-sorted-breakpoints/get-sorted-breakpoints';

export type VerticalSectionHeight = number | string | Partial<Record<string, string | number>>;

export interface VerticalSectionPosition {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

interface VerticalSectionStyles {
  height: VerticalSectionHeight;
  fixed: boolean;
  position: VerticalSectionPosition;
  zIndex: React.CSSProperties['zIndex'];
  borderPosition: 'top' | 'bottom' | 'none';
}

export default createStyles(
  (theme, { height, fixed, position, zIndex, borderPosition }: VerticalSectionStyles) => {
    const breakpoints =
      typeof height === 'object' && height !== null
        ? getSortedBreakpoints(height, theme).reduce((acc, [breakpoint, breakpointSize]) => {
            acc[`@media (min-width: ${breakpoint}px)`] = {
              height: breakpointSize,
              minHeight: breakpointSize,
            };

            return acc;
          }, {})
        : null;
    return {
      root: {
        ...theme.fn.fontStyles(),
        ...position,
        zIndex,
        height: typeof height === 'object' ? height?.base || '100%' : height,
        maxHeight: typeof height === 'object' ? height?.base || '100%' : height,
        position: fixed ? 'fixed' : 'static',
        boxSizing: 'border-box',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        ...breakpoints,
        borderBottom:
          borderPosition === 'bottom'
            ? `1px solid ${
                theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
              }`
            : undefined,
        borderTop:
          borderPosition === 'top'
            ? `1px solid ${
                theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
              }`
            : undefined,
      },
    };
  }
);
