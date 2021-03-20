import { createUseStyles } from 'react-jss';
import { MantineTheme, MantineNumberSize, getSizeValue } from '@mantine/theme';

interface ContainerStylesProps {
  fluid: boolean;
  size: MantineNumberSize;
  theme: MantineTheme;
}

const sizes = {
  xs: 570,
  sm: 770,
  md: 970,
  lg: 1170,
  xl: 1370,
};

export default createUseStyles({
  container: ({ fluid, size, theme }: ContainerStylesProps) => ({
    maxWidth: fluid ? '100%' : getSizeValue({ size, sizes }),
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  }),
});
