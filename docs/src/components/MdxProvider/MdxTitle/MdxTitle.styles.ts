import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, getFocusStyles } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    link: {
      ...getFocusStyles(theme),
      textDecoration: 'none',
      color: 'inherit',
    },
  }),
  { theming }
);
