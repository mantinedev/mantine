import { createStyles, MantineSize } from '@mantine/styles';

export interface ContainerStylesParams {
  fluid: boolean;
  sizes: Record<MantineSize, number | string>;
}

export default createStyles((theme, { fluid, sizes }: ContainerStylesParams, { size }) => ({
  root: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    maxWidth: fluid ? '100%' : theme.fn.size({ size, sizes }),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));
