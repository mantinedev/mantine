import { createUseStyles } from 'react-jss';
import {
  theming,
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

export default createUseStyles(
  (theme: MantineTheme) => ({
    wrapper: {
      display: 'flex',
      alignItems: 'center',
    },

    switch: ({ size, radius }: { size: MantineSize; radius: MantineNumberSize }) => {
      const handleSize = getSizeValue({ size, sizes: handleSizes });
      const borderRadius = getSizeValue({ size: radius, sizes: theme.radius });

      return {
        ...getFocusStyles(theme),
        borderRadius,
        backgroundColor: theme.colors.gray[2],
        border: `1px solid ${theme.colors.gray[3]}`,
        height: getSizeValue({ size, sizes: switchHeight }),
        width: getSizeValue({ size, sizes: switchWidth }),
        padding: [0, 2],
        cursor: 'pointer',
        transitionProperty: 'background-color, border-color',
        transitionTimingFunction: 'ease',
        transitionDuration: ({ reduceMotion }: { reduceMotion: boolean }) =>
          reduceMotion ? '1ms' : '150ms',
        outline: 0,
        boxSizing: 'border-box',
        appearance: 'none',

        '&::before': {
          borderRadius,
          boxSizing: 'border-box',
          content: "''",
          display: 'block',
          backgroundColor: theme.white,
          height: handleSize,
          width: handleSize,
          border: `1px solid ${theme.colors.gray[3]}`,
          transition: ({ reduceMotion }: { reduceMotion: boolean }) =>
            reduceMotion ? 'none' : 'transform 150ms ease',
        },

        '&:disabled::before': {
          backgroundColor: theme.colors.gray[2],
        },
      };
    },

    checked: ({ color }: { color: string }) => ({
      backgroundColor: getThemeColor({ theme, color, shade: 6 }),
      borderColor: getThemeColor({ theme, color, shade: 5 }),

      '&::before': {
        transform: ({ size }) =>
          `translateX(${
            getSizeValue({ size, sizes: switchWidth }) -
            getSizeValue({ size, sizes: handleSizes }) -
            6 // borderWidth: 2 + padding: 2 * 2
          }px)`,
        borderColor: getThemeColor({ theme, color, shade: 6 }),
      },
    }),

    label: {
      ...getFontStyles(theme),
      fontFamily: theme.fontFamily,
      marginLeft: theme.spacing.sm,
      fontSize: theme.fontSizes.sm,
    },
  }),
  { theming }
);
