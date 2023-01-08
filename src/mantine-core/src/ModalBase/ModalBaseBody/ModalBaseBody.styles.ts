import { createStyles, MantineNumberSize, rem } from '@mantine/styles';

interface ModalBaseBodyStylesParams {
  padding: MantineNumberSize;
}

export default createStyles((theme, { padding }: ModalBaseBodyStylesParams) => ({
  body: {
    padding: rem(theme.fn.size({ size: padding, sizes: theme.spacing })),

    '&:not(:only-child)': {
      paddingTop: 0,
    },
  },
}));
