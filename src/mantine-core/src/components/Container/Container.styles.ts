import { createStyles, MantineNumberSize } from '@mantine/styles';

interface ContainerStyles {
  fluid: boolean;
  size: MantineNumberSize;
  padding: MantineNumberSize;
}

export const sizes = {
  xs: 540,
  sm: 720,
  md: 960,
  lg: 1140,
  xl: 1320,
};

export default createStyles((theme, { fluid, size, padding }: ContainerStyles) => ({
  root: {
    maxWidth: fluid ? '100%' : theme.fn.size({ size, sizes }),
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: theme.fn.size({ size: padding, sizes: theme.spacing }),
    paddingRight: theme.fn.size({ size: padding, sizes: theme.spacing }),
  },
}));
