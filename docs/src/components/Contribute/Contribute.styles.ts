import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

const BREAKPOINT = '@media (max-width: 1100px)';

export default createUseStyles(
  (theme) => ({
    wrapper: {
      paddingTop: 54,
      paddingLeft: theme.spacing.xl * 2,
      paddingRight: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 4,
      minHeight: 'calc(100vh - 180px)',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      position: 'relative',
      zIndex: 1,
      boxShadow: theme.shadows.sm,

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
      marginBottom: theme.spacing.md,
    },

    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing.xs,
    },

    description: {
      minHeight: 60,
    },

    cards: {
      marginTop: theme.spacing.xs,
    },

    card: {
      boxSizing: 'border-box',
      flex: `0 0 calc(50% - ${theme.spacing.md}px)`,
      borderRadius: theme.radius.sm,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      border: `1px solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]}`,
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
