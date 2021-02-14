import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, MantineNumberSize } from '@mantine/theme';

export type ThemeIconVariant = 'filled' | 'light';

const SIZES = {
  xs: 16,
  sm: 20,
  md: 26,
  lg: 32,
  xl: 40,
};

export default createUseStyles(
  (theme: MantineTheme) => ({
    themeIcon: ({
      color,
      size,
      radius,
      variant,
    }: {
      color: string;
      size: MantineNumberSize;
      radius: MantineNumberSize;
      variant: ThemeIconVariant;
    }) => {
      const iconSize = typeof size === 'number' ? size : SIZES[size];
      const iconColor = color || theme.primaryColor;

      return {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        backgroundColor:
          variant === 'filled' ? theme.colors[iconColor][6] : theme.colors[iconColor][1],
        color: variant === 'filled' ? theme.white : theme.colors[iconColor][6],
        width: iconSize,
        height: iconSize,
        borderRadius: typeof radius === 'number' ? radius : theme.radius[radius],
      };
    },
  }),
  { theming }
);
