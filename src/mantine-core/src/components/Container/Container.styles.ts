import { createStyles } from '@mantine/tss';
import { MantineNumberSize, getSizeValue } from '../../theme';

interface ContainerStyles {
  fluid: boolean;
  size: MantineNumberSize;
  padding: MantineNumberSize;
}

export const sizes = {
  xs: 570,
  sm: 770,
  md: 970,
  lg: 1170,
  xl: 1370,
};

export default createStyles((theme, { fluid, size, padding }: ContainerStyles) => ({
  container: {
    maxWidth: fluid ? '100%' : getSizeValue({ size, sizes }),
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: getSizeValue({ size: padding, sizes: theme.spacing }),
    paddingRight: getSizeValue({ size: padding, sizes: theme.spacing }),
  },
}));
