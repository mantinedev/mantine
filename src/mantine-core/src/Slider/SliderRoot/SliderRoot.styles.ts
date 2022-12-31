import { createStyles } from '@mantine/styles';

interface SliderRootStyles {
  disabled: boolean;
}

export const sizes = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
};

export default createStyles((theme, { disabled }: SliderRootStyles, { size }) => ({
  root: {
    ...theme.fn.fontStyles(),
    WebkitTapHighlightColor: 'transparent',
    outline: 0,
    height: theme.fn.size({ sizes, size }) * 2,
    display: 'flex',
    alignItems: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    touchAction: 'none',
  },
}));
