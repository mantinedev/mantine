import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, getFocusStyles } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    link: {
      ...getFocusStyles(theme),
      color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
      textDecoration: 'none',

      '&:hover': {
        textDecoration: 'underline',
      },
    },
  }),
  { theming }
);
