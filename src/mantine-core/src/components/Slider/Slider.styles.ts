import {
  createMemoStyles,
  getFontStyles,
  getSizeValue,
  MantineNumberSize,
  MantineTheme,
} from '../../theme';

interface SliderStyles {
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
  root: ({ theme, size }: SliderStyles) => ({
    ...getFontStyles(theme),
    outline: 0,
    height: getSizeValue({ sizes, size }) * 2,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  }),
});
