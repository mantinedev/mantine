import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/theme';
import { HEADER_HEIGHT } from '../Layout/Header/Header.styles';

export const TABLE_OF_CONTENTS_WIDTH = 260;

export default createUseStyles(
  (theme: MantineTheme) => ({
    wrapper: {
      backgroundColor: theme.colors.gray[0],
      boxSizing: 'border-box',
      width: TABLE_OF_CONTENTS_WIDTH,
      position: 'fixed',
      top: 0,
      right: 0,
      paddingTop: HEADER_HEIGHT + theme.spacing.md,
      paddingRight: theme.spacing.md,
      paddingLeft: theme.spacing.md,
      height: '100vh',
      borderLeft: `1px solid ${theme.colors.gray[1]}`,
    },

    link: {
      marginTop: theme.spacing.xs,
      display: 'block',
      color: theme.colors.gray[7],

      '&:hover': {
        color: theme.colors[theme.primaryColor][6],
      },
    },

    list: {
      listStyle: 'none',
      marginTop: theme.spacing.sm,
      color: theme.colors.gray[4],
      padding: 0,
    },
  }),
  { theming }
);
