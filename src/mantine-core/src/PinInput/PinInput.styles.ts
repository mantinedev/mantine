import { createStyles, MantineNumberSize, getSize, rem } from '@mantine/styles';

interface PinInputStyles {
  size: MantineNumberSize;
}

const sizes = {
  xs: rem(28),
  sm: rem(32),
  md: rem(36),
  lg: rem(40),
  xl: rem(48),
};

export default createStyles((_theme, { size }: PinInputStyles) => ({
  input: {
    width: getSize({ size, sizes }),
    height: getSize({ size, sizes }),
    textAlign: 'center',
    minHeight: 'auto',
    paddingRight: 0,
    paddingLeft: 0,

    '&::selection': {
      background: 'transparent',
    },
  },
}));
