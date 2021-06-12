import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

const BREAKPOINT = '@media (max-width: 600px)';

export default createUseStyles(
  (theme) => ({
    wrapper: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      paddingTop: 100,
      paddingBottom: 120,

      [BREAKPOINT]: {
        paddingTop: 40,
        paddingBottom: 60,
      },
    },

    item: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      margin: theme.spacing.md / 2,
      flex: `0 0 calc(33.33333% - ${theme.spacing.md}px)`,

      '@media (max-width: 1000px)': {
        flex: `0 0 calc(50% - ${theme.spacing.md}px)`,
      },

      [BREAKPOINT]: {
        flex: `0 0 calc(100% - ${theme.spacing.md}px)`,
      },
    },

    title: {
      marginLeft: theme.spacing.md,
    },

    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing.xs,
    },

    description: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
      lineHeight: 1.5,
    },

    sectionTitle: {
      fontFamily: `Dosis, ${theme.fontFamily}`,
      fontSize: 42,
      lineHeight: 1.1,
      margin: 0,
      padding: 0,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      textAlign: 'center',
      marginBottom: theme.spacing.xl * 2,
    },
  }),
  { theming }
);
