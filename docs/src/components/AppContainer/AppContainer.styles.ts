import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, getFontStyles } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    '@global': {
      body: {
        ...getFontStyles(theme),
      },
    },
  }),
  { theming }
);
