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

interface SwitchStylesProps {
  reduceMotion: boolean;
  color: string;
  size: MantineSize;
  radius: MantineNumberSize;
  theme: MantineTheme;
}

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

export const sizes = Object.keys(switchHeight).reduce((acc, size) => {
  acc[size] = { width: switchWidth[size], height: switchHeight[size] };
  return acc;
}, {} as Record<MantineSize, { width: number; height: number }>);

export default createUseStyles(
  {
    wrapper: {
      display: 'flex',
      alignItems: 'center',
    },

    switch: ({ size, radius, theme, reduceMotion, color }: SwitchStylesProps) => {
      const handleSize = getSizeValue({ size, sizes: handleSizes });
      const borderRadius = getSizeValue({ size: radius, sizes: theme.radius });

      return {
        ...getFocusStyles(theme),
        WebkitTapHighlightColor: 'transparent',
        position: 'relative',
        borderRadius,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2],
        border: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3]
        }`,
        height: getSizeValue({ size, sizes: switchHeight }),
        width: getSizeValue({ size, sizes: switchWidth }),
        minWidth: getSizeValue({ size, sizes: switchWidth }),
        padding: [0, 2],
        margin: 0,
        transitionProperty: 'background-color, border-color',
        transitionTimingFunction: theme.transitionTimingFunction,
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
          border: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3]
          }`,
          transition: reduceMotion ? 'none' : `transform 150ms ${theme.transitionTimingFunction}`,
        },

        '&:checked': {
          backgroundColor: getThemeColor({ theme, color, shade: 6 }),
          borderColor: getThemeColor({ theme, color, shade: 6 }),

          '&::before': {
            transform: `translateX(${
              getSizeValue({ size, sizes: switchWidth }) -
              getSizeValue({ size, sizes: handleSizes }) -
              6 // borderWidth: 2 + padding: 2 * 2
            }px)`,
            borderColor: getThemeColor({ theme, color, shade: 6 }),
          },
        },

        '&:disabled': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
          borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
          cursor: 'not-allowed',

          '&::before': {
            borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[0],
          },
        },
      };
    },

    label: ({ theme, size }: SwitchStylesProps) => ({
      ...getFontStyles(theme),
      WebkitTapHighlightColor: 'transparent',
      fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
      fontFamily: theme.fontFamily,
      paddingLeft: theme.spacing.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    }),
  },
  { link: true }
);
