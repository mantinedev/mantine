import {
  createMemoStyles,
  getFontStyles,
  getSizeValue,
  MantineNumberSize,
  MantineTheme,
} from '../../../theme';

interface SliderRootStyles {
  theme: MantineTheme;
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
  root: ({ theme, size }: SliderRootStyles) => ({
    ...getFontStyles(theme),
    WebkitTapHighlightColor: 'transparent',
    outline: 0,
    height: getSizeValue({ sizes, size }) * 2,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  }),
});
