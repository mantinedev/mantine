import {
  createStyles,
  getFontStyles,
  MantineNumberSize,
  getSizeValue,
  MantineSize,
} from '@mantine/styles';
import { getSortedBreakpoints } from '../get-sorted-breakpoints';

interface NavbarSizeBase {
  width?: number | string;
  height?: number | string;
}

export interface NavbarSize extends NavbarSizeBase {
  breakpoints?: Partial<Record<MantineSize | (string & {}), NavbarSizeBase>>;
}

export interface NavbarPosition {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

interface NavbarStyles {
  size: NavbarSize;
  padding: MantineNumberSize;
  position: NavbarPosition;
  fixed: boolean;
}

export default createStyles((theme, { size, padding, fixed, position }: NavbarStyles) => {
  const breakpoints =
    typeof size?.breakpoints === 'object' && size.breakpoints !== null
      ? getSortedBreakpoints(size.breakpoints, theme).reduce(
          (acc, [breakpoint, breakpointSize]) => {
            acc[`@media (max-width: ${breakpoint}px)`] = {
              width: breakpointSize.width,
              minWidth: breakpointSize.width,
              height: breakpointSize.height,
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
      width: size.width,
      height: size.height,
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
  };
});
