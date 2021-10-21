import {
  createStyles,
  getFontStyles,
  MantineNumberSize,
  getSizeValue,
  MantineSize,
} from '@mantine/styles';

export interface NavbarWidth {
  base: number | string;
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
  height: number | string;
  padding: MantineNumberSize;
  position: NavbarPosition;
  fixed: boolean;
}

export default createStyles((theme, { width, height, padding, fixed, position }: NavbarStyles) => {
  const breakpoints =
    typeof width?.breakpoints === 'object' && width.breakpoints !== null
      ? Object.keys(width.breakpoints).reduce((acc, breakpoint) => {
          acc[
            `@media (max-width: ${getSizeValue({ size: breakpoint, sizes: theme.breakpoints })}px)`
          ] = {
            width: width.breakpoints[breakpoint],
          };

          return acc;
        }, {})
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
  };
});
