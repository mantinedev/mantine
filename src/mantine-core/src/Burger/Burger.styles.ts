import { createUseStyles } from 'react-jss';
import {
  theming,
  MantineTheme,
  MantineNumberSize,
  getThemeColor,
  getSizeValue,
  getFocusStyles,
} from '@mantine/theme';

const sizes = {
  xs: 12,
  sm: 18,
  md: 24,
  lg: 33,
  xl: 42,
};

export default createUseStyles(
  (theme: MantineTheme) => ({
    wrapper: ({ size }: { size: MantineNumberSize }) => ({
      ...getFocusStyles(theme),
      borderRadius: theme.radius.sm,
      width: getSizeValue({ size, sizes }) + theme.spacing.xs,
      height: getSizeValue({ size, sizes }) + theme.spacing.xs,
      padding: theme.spacing.xs / 2,
      backgroundColor: 'transparent',
      border: 0,
      outline: 0,
      cursor: 'pointer',
    }),

    opened: {},

    burger: ({ size }: { size: MantineNumberSize }) => {
      const sizeValue = getSizeValue({ size, sizes });

      return {
        position: 'relative',
        userSelect: 'none',
        boxSizing: 'border-box',

        '&, &:before, &:after': {
          display: 'block',
          width: sizeValue,
          height: Math.ceil(sizeValue / 12),
          backgroundColor: ({ color }: { color: string }) =>
            getThemeColor({ theme, color, shade: 7 }),
          outline: '1px solid transparent',
          transitionProperty: 'background-color, transform',
          transitionDuration: ({ reduceMotion }: { reduceMotion: boolean }) =>
            reduceMotion ? '1ms' : '300ms',
        },

        '&:before, &:after': {
          position: 'absolute',
          content: '""',
          left: 0,
        },

        '&:before': {
          top: (sizeValue / 3) * -1,
        },

        '&:after': {
          top: sizeValue / 3,
        },

        '&$opened': {
          backgroundColor: 'transparent !important',
          '&:before': {
            transform: `translateY(${sizeValue / 3}px) rotate(45deg)`,
          },

          '&:after': {
            transform: `translateY(-${sizeValue / 3}px) rotate(-45deg)`,
          },
        },
      };
    },
  }),
  { theming }
);
