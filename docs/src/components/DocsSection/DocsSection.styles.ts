import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    wrapper: {
      marginBottom: theme.spacing.xl * 1.5,
      marginTop: theme.spacing.xl * 1.5,
    },
  }),
  { theming }
);
