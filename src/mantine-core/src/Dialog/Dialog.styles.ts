import { createStyles, rem, getSize } from '@mantine/styles';

const sizes = {
  xs: rem(160),
  sm: rem(200),
  md: rem(340),
  lg: rem(400),
  xl: rem(500),
};

export default createStyles((theme, _params, { size }) => ({
  root: {
    ...theme.fn.fontStyles(),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    position: 'relative',
    width: getSize({ size, sizes }),
    maxWidth: `calc(100vw - ${theme.spacing.xl} * 2)`,
    minHeight: rem(50),
  },

  closeButton: {
    position: 'absolute',
    top: `calc(${theme.spacing.md} / 2)`,
    right: `calc(${theme.spacing.md} / 2)`,
  },
}));
