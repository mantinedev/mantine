import { createUseStyles } from 'react-jss';
import { theming } from './MantineProvider/theme-context';
import { getFontStyles } from './utils/get-font-styles/get-font-styles';

const useStyles = createUseStyles(
  (theme) => ({
    '@global': {
      '*, *::before, *::after': {
        boxSizing: 'border-box',
      },

      body: {
        ...getFontStyles(theme),
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        lineHeight: theme.lineHeight,
      },
    },
  }),
  { theming }
);

export function GlobalStyles() {
  useStyles();
  return null;
}
