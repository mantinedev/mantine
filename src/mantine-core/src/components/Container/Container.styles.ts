import { createStyles, MantineNumberSize, MantineSize } from '@mantine/styles';

export interface ContainerStylesParams {
  fluid: boolean;
  size: MantineNumberSize;
  padding: MantineNumberSize;
  sizes: Record<MantineSize, number>;
}

export default createStyles((theme, { fluid, size, padding, sizes }: ContainerStylesParams) => ({
  root: {
    maxWidth: fluid ? '100%' : theme.fn.size({ size, sizes }),
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: theme.fn.size({ size: padding, sizes: theme.spacing }),
    paddingRight: theme.fn.size({ size: padding, sizes: theme.spacing }),
  },
}));
