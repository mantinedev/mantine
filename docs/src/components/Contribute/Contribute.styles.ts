import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

const BREAKPOINT = '@media (max-width: 1100px)';

export default createUseStyles(
  (theme) => ({
    wrapper: {
      paddingTop: 54,
      paddingLeft: theme.spacing.xl * 2,
      paddingRight: theme.spacing.xl * 2,

      [BREAKPOINT]: {
        paddingLeft: theme.spacing.xl,
        paddingRight: theme.spacing.xl,
      },
    },

    title: {
      fontFamily: `Dosis, ${theme.fontFamily}`,
      marginBottom: theme.spacing.md,
      fontSize: 38,
    },

    subtitle: {
      marginTop: theme.spacing.xl,
    },

    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing.xs,
    },

    description: {
      minHeight: 80,
    },

    cards: {
      marginTop: theme.spacing.xs,
    },

    card: {
      boxSizing: 'border-box',
      flex: `0 0 calc(33.333333% - ${theme.spacing.md}px)`,
      border: `1px solid ${theme.colors.gray[2]}`,
      padding: theme.spacing.md,

      [BREAKPOINT]: {
        flex: 1,
      },
    },

    control: {
      marginTop: theme.spacing.xs,
    },
  }),
  { theming }
);
