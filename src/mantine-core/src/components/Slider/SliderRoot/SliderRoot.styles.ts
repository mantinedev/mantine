import { createStyles, getSizeValue, MantineNumberSize } from '@mantine/styles';

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
    ...theme.fn.fontStyles(),
    WebkitTapHighlightColor: 'transparent',
    outline: 0,
    height: getSizeValue({ sizes, size }) * 2,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
}));
