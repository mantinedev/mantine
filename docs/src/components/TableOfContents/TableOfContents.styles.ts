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

    items: {
      borderLeft: `1px solid ${theme.colors.gray[3]}`,
    },

    link: {
      display: 'block',
      color: theme.colors.gray[7],
      borderLeft: '1px solid transparent',
      padding: [8, theme.spacing.md],
      marginLeft: -1,
    },

    linkActive: {
      borderLeftColor: theme.colors.blue[5],
      backgroundColor: theme.colors.blue[0],
      color: theme.colors.blue[8],
    },

    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },

    title: {
      marginLeft: theme.spacing.md,
    },
  }),
  { theming }
);
