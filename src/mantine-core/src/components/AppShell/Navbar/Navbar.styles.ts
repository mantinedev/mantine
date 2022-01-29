import { createStyles, MantineNumberSize } from '@mantine/styles';
import { getSortedBreakpoints } from '../utils';

export type NavbarWidth = Partial<Record<string, string | number>>;

export interface NavbarPosition {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

interface NavbarStyles {
  width: Partial<Record<string, string | number>>;
  height: string | number;
  padding: MantineNumberSize;
  position: NavbarPosition;
  hiddenBreakpoint: MantineNumberSize;
  fixed: boolean;
  zIndex: number;
}

export default createStyles(
  (theme, { height, width, padding, fixed, position, hiddenBreakpoint, zIndex }: NavbarStyles) => {
    const breakpoints =
      typeof width === 'object' && width !== null
        ? getSortedBreakpoints(width, theme).reduce((acc, [breakpoint, breakpointSize]) => {
            acc[`@media (min-width: ${breakpoint + 1}px)`] = {
              width: breakpointSize,
              minWidth: breakpointSize,
            };

            return acc;
          }, {})
        : null;

    return {
      root: {
        ...theme.fn.fontStyles(),
        ...position,
        zIndex,
        height,
        width: width?.base || '100%',
        position: fixed ? 'fixed' : 'static',
        boxSizing: 'border-box',
        padding: theme.fn.size({ size: padding, sizes: theme.spacing }),
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        borderRight: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
        }`,
        ...breakpoints,
      },

      hidden: {
        [`@media (max-width: ${theme.fn.size({
          size: hiddenBreakpoint,
          sizes: theme.breakpoints,
        })}px)`]: {
          display: 'none',
        },
      },
    };
  }
);
