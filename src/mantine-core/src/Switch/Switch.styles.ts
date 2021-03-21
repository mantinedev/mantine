import { createUseStyles } from 'react-jss';
import {
  MantineTheme,
  MantineNumberSize,
  getFontStyles,
  getThemeColor,
  getFocusStyles,
  getSizeValue,
  MantineSize,
} from '@mantine/theme';

const switchHeight = {
  xs: 14,
  sm: 18,
  md: 22,
  lg: 28,
  xl: 34,
};

const switchWidth = {
  xs: 28,
  sm: 36,
  md: 42,
  lg: 54,
  xl: 66,
};

const handleSizes = {
  xs: 10,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 26,
};

export default createUseStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },

  switch: ({
    size,
    radius,
    theme,
    reduceMotion,
    color,
  }: {
    reduceMotion: boolean;
    color: string;
    size: MantineSize;
    radius: MantineNumberSize;
    theme: MantineTheme;
  }) => {
    const handleSize = getSizeValue({ size, sizes: handleSizes });
    const borderRadius = getSizeValue({ size: radius, sizes: theme.radius });

    return {
      ...getFocusStyles(theme),
      position: 'relative',
      borderRadius,
      backgroundColor: theme.colors.gray[2],
      border: `1px solid ${theme.colors.gray[3]}`,
      height: getSizeValue({ size, sizes: switchHeight }),
      width: getSizeValue({ size, sizes: switchWidth }),
      padding: [0, 2],
      margin: 0,
      cursor: 'pointer',
      transitionProperty: 'background-color, border-color',
      transitionTimingFunction: 'cubic-bezier(.51,.3,0,1.21)',
      transitionDuration: reduceMotion ? '1ms' : '150ms',
      boxSizing: 'border-box',
      appearance: 'none',
      display: 'flex',
      alignItems: 'center',

      '&::before': {
        borderRadius,
        boxSizing: 'border-box',
        content: "''",
        display: 'block',
        backgroundColor: theme.white,
        height: handleSize,
        width: handleSize,
        border: `1px solid ${theme.colors.gray[3]}`,
        transition: reduceMotion ? 'none' : 'transform 150ms cubic-bezier(.51,.3,0,1.21)',
      },

      '&:disabled::before': {
        backgroundColor: theme.colors.gray[2],
      },

      '&:checked': {
        backgroundColor: getThemeColor({ theme, color, shade: 6 }),
        borderColor: getThemeColor({ theme, color, shade: 5 }),

        '&::before': {
          transform: `translateX(${
            getSizeValue({ size, sizes: switchWidth }) -
            getSizeValue({ size, sizes: handleSizes }) -
            6 // borderWidth: 2 + padding: 2 * 2
          }px)`,
          borderColor: getThemeColor({ theme, color, shade: 6 }),
        },
      },
    };
  },

  label: ({ theme }: { theme: MantineTheme }) => ({
    ...getFontStyles(theme),
    fontFamily: theme.fontFamily,
    marginLeft: theme.spacing.sm,
    fontSize: theme.fontSizes.sm,
  }),
});
