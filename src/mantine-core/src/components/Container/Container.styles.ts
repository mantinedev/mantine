import { createStyles, MantineNumberSize, getSizeValue } from '@mantine/styles';

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
    maxWidth: fluid ? '100%' : getSizeValue({ size, sizes }),
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: getSizeValue({ size: padding, sizes: theme.spacing }),
    paddingRight: getSizeValue({ size: padding, sizes: theme.spacing }),
  },
}));
