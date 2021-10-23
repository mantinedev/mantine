import {
  createStyles,
  getFontStyles,
  MantineNumberSize,
  getSizeValue,
  MantineSize,
} from '@mantine/styles';
import { getSortedBreakpoints } from '../get-sorted-breakpoints';

export interface NavbarWidth {
  base: string | number;
  breakpoints?: Partial<Record<MantineSize | (string & {}), string | number>>;
}

export interface NavbarPosition {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

interface NavbarStyles {
  width: NavbarWidth;
  height: string | number;
  padding: MantineNumberSize;
  position: NavbarPosition;
  hiddenBreakpoint: MantineNumberSize;
  fixed: boolean;
}

export default createStyles(
  (theme, { height, width, padding, fixed, position, hiddenBreakpoint }: NavbarStyles) => {
    const breakpoints =
      typeof width?.breakpoints === 'object' && width.breakpoints !== null
        ? getSortedBreakpoints(width.breakpoints, theme).reduce(
            (acc, [breakpoint, breakpointSize]) => {
              acc[`@media (max-width: ${breakpoint}px)`] = {
                width: breakpointSize,
                minWidth: breakpointSize,
              };

              return acc;
            },
            {}
          )
        : null;

    return {
      root: {
        ...getFontStyles(theme),
        ...position,
        width: width.base,
        height,
        position: fixed ? 'fixed' : 'static',
        boxSizing: 'border-box',
        padding: getSizeValue({ size: padding, sizes: theme.spacing }),
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        borderRight: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
        }`,
        ...breakpoints,
      },

      hidden: {
        [`@media (max-width: ${getSizeValue({
          size: hiddenBreakpoint,
          sizes: theme.breakpoints,
        })}px)`]: {
          display: 'none',
        },
      },
    };
  }
);
