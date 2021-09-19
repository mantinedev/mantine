import { createStyles } from '@mantine/tss';
import { getFontStyles, getSizeValue, MantineNumberSize } from '@mantine/theme';

interface SliderRootStyles {
  size: MantineNumberSize;
}

export const sizes = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
};

export default createStyles((theme, { size }: SliderRootStyles) => ({
  root: {
    ...getFontStyles(theme),
    WebkitTapHighlightColor: 'transparent',
    outline: 0,
    height: getSizeValue({ sizes, size }) * 2,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
}));
