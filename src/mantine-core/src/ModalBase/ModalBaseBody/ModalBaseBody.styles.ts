import { createStyles, MantineNumberSize } from '@mantine/styles';

interface ModalBaseBodyStylesParams {
  padding: MantineNumberSize;
}

export default createStyles((theme, { padding }: ModalBaseBodyStylesParams) => ({
  body: {
    padding: theme.fn.size({ size: padding, sizes: theme.spacing }),
  },
}));
