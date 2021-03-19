import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    wrapper: {
      width: 250,
      marginRight: theme.spacing.md,
    },
  }),
  { theming }
);
