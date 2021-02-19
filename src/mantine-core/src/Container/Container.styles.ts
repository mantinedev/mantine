import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, MantineNumberSize, getSizeValue } from '@mantine/theme';

const sizes = {
  xs: 570,
  sm: 770,
  md: 970,
  lg: 1170,
  xl: 1370,
};

export default createUseStyles(
  (theme: MantineTheme) => ({
    container: {
      maxWidth: ({ fluid, size }: { fluid: boolean; size: MantineNumberSize }) =>
        fluid ? '100%' : getSizeValue({ size, sizes }),
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
    },
  }),
  { theming }
);
