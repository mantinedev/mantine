import { createStyles, MantineNumberSize, MantineSize } from '@mantine/styles';

export interface ContainerStylesParams {
  fluid: boolean;
  size: MantineNumberSize;
  sizes: Record<MantineSize, number>;
}

export default createStyles((theme, { fluid, size, sizes }: ContainerStylesParams) => ({
  root: {
    maxWidth: fluid ? '100%' : theme.fn.size({ size, sizes }),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));
