import { createUseStyles } from 'react-jss';
import { MantineTheme, MantineNumberSize, getThemeColor, getSizeValue } from '@mantine/theme';

const sizes = {
  xs: 3,
  sm: 5,
  md: 8,
  lg: 12,
  xl: 16,
};

export default createUseStyles({
  progress: ({
    radius,
    size,
    theme,
  }: {
    radius: MantineNumberSize;
    size: MantineNumberSize;
    theme: MantineTheme;
  }) => ({
    height: getSizeValue({ size, sizes }),
    backgroundColor: theme.colors.gray[2],
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
  }),

  bar: ({
    theme,
    color,
    radius,
    reduceMotion,
  }: {
    theme: MantineTheme;
    color: string;
    radius: MantineNumberSize;
    reduceMotion: boolean;
  }) => ({
    height: '100%',
    backgroundColor: getThemeColor({ theme, color, shade: 6 }),
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    transition: reduceMotion ? 'none' : 'width 150ms ease',
  }),
});
