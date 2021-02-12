import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    anchor: {
      color: theme.colors[theme.primaryColor][6],
      textDecoration: 'none',

      '&:hover': {
        textDecoration: 'underline',
      },
    },
  }),
  { theming }
);
