import { createStyles, rem, em } from '@mantine/styles';
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
  layout: 'default' | 'alt';
}

export default createStyles(
  (theme, { height, fixed, position, zIndex, borderPosition, layout }: VerticalSectionStyles) => {
    const breakpoints =
      typeof height === 'object' && height !== null
        ? getSortedBreakpoints(height, theme).reduce((acc, [breakpoint, breakpointSize]) => {
            acc[`@media (min-width: ${em(breakpoint)})`] = {
              height: rem(breakpointSize),
              minHeight: rem(breakpointSize),
            };

            return acc;
          }, {})
        : null;
    return {
      root: {
        ...theme.fn.fontStyles(),
        ...position,
        zIndex,
        left: layout === 'alt' ? 'var(--mantine-navbar-width, 0)' : 0,
        right: layout === 'alt' ? 'var(--mantine-aside-width, 0)' : 0,
        height: typeof height === 'object' ? rem(height?.base) || '100%' : rem(height),
        maxHeight: typeof height === 'object' ? rem(height?.base) || '100%' : rem(height),
        position: fixed ? 'fixed' : 'static',
        boxSizing: 'border-box',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        ...breakpoints,
        borderBottom:
          borderPosition === 'bottom'
            ? `${rem(1)} solid ${
                theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
              }`
            : undefined,
        borderTop:
          borderPosition === 'top'
            ? `${rem(1)} solid ${
                theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
              }`
            : undefined,
      },
    };
  }
);
