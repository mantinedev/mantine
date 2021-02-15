import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, getFontStyles } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    title: {
      ...getFontStyles(theme),
      fontWeight: 'bold',
      margin: 0,
    },
  }),
  { theming }
);
