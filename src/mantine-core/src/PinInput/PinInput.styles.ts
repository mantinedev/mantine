import { createStyles, getSize, rem } from '@mantine/styles';

const sizes = {
  xs: rem(28),
  sm: rem(32),
  md: rem(36),
  lg: rem(40),
  xl: rem(48),
};

export default createStyles((_theme, _params, { size }) => ({
  root: {},
  input: {
    width: getSize({ size, sizes }),
    height: getSize({ size, sizes }),
    textAlign: 'center',
    minHeight: 'auto',
    padding: 0,
    lineHeight: getSize({ size, sizes }),

    '&::selection': {
      background: 'transparent',
    },
  },
}));
