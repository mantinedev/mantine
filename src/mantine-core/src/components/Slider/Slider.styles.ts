import {
  createMemoStyles,
  getFontStyles,
  getSizeValue,
  getThemeColor,
  MantineNumberSize,
  MantineTheme,
} from '../../theme';

interface SliderStyles {
  theme: MantineTheme;
  color: string;
  radius: MantineNumberSize;
  size: MantineNumberSize;
}

export const sizes = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
};

export default createMemoStyles({
  root: ({ theme, size }: SliderStyles) => ({
    ...getFontStyles(theme),
    outline: 0,
    height: getSizeValue({ sizes, size }) * 2,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  }),

  track: ({ theme, radius, size }: SliderStyles) => ({
    position: 'relative',
    height: getSizeValue({ sizes, size }),
    width: '100%',
    backgroundColor: theme.colors.gray[2],
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
  }),

  bar: ({ theme, color, radius }: SliderStyles) => ({
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: getThemeColor({ theme, color, shade: 6 }),
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
  }),
});
