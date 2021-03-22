import { createUseStyles } from 'react-jss';
import { MantineTheme, MantineNumberSize, getThemeColor, getSizeValue } from '@mantine/theme';

export const sizes = {
  xs: 3,
  sm: 5,
  md: 8,
  lg: 12,
  xl: 16,
};

interface ProgressStylesProps {
  theme: MantineTheme;
  color: string;
  radius: MantineNumberSize;
  reduceMotion: boolean;
  size: MantineNumberSize;
}

export default createUseStyles({
  progress: ({ radius, size, theme }: ProgressStylesProps) => ({
    height: getSizeValue({ size, sizes }),
    backgroundColor: theme.colors.gray[2],
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
  }),

  bar: ({ theme, color, radius, reduceMotion }: ProgressStylesProps) => ({
    height: '100%',
    backgroundColor: getThemeColor({ theme, color, shade: 6 }),
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    transition: reduceMotion ? 'none' : `width 200ms ${theme.transitionTimingFunction}`,
  }),
});
