import { createStyles, rem, getSize } from '@mantine/styles';

interface SliderRootStyles {
  disabled: boolean;
}

export const sizes = {
  xs: rem(4),
  sm: rem(6),
  md: rem(8),
  lg: rem(10),
  xl: rem(12),
};

export default createStyles((theme, { disabled }: SliderRootStyles, { size }) => ({
  root: {
    ...theme.fn.fontStyles(),
    WebkitTapHighlightColor: 'transparent',
    outline: 0,
    height: `calc(${getSize({ sizes, size })} * 2)`,
    display: 'flex',
    alignItems: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    touchAction: 'none',
  },
}));
