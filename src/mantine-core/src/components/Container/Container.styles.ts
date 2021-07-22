import { createMemoStyles, MantineTheme, MantineNumberSize, getSizeValue } from '../../theme';

interface ContainerStyles {
  fluid: boolean;
  size: MantineNumberSize;
  theme: MantineTheme;
  padding: MantineNumberSize;
}

export const sizes = {
  xs: 570,
  sm: 770,
  md: 970,
  lg: 1170,
  xl: 1370,
};

export default createMemoStyles({
  container: ({ fluid, size, padding, theme }: ContainerStyles) => ({
    maxWidth: fluid ? '100%' : getSizeValue({ size, sizes }),
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: getSizeValue({ size: padding, sizes: theme.spacing }),
    paddingRight: getSizeValue({ size: padding, sizes: theme.spacing }),
  }),
});
