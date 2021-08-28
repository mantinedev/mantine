import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

export default createUseStyles(
  (theme) => ({
    card: {
      margin: theme.spacing.md / 2,
      width: '100%',
      maxWidth: `calc(33.333333% - ${theme.spacing.md}px)`,

      '@media (max-width: 980px)': {
        maxWidth: `calc(50% - ${theme.spacing.md}px)`,
      },

      '@media (max-width: 755px)': {
        maxWidth: `calc(100% - ${theme.spacing.md}px)`,
      },
    },

    cards: {
      display: 'flex',
      flexWrap: 'wrap',

      '@media (max-width: 755px)': {
        flexDirection: 'column',
      },
    },
  }),
  { theming }
);
