import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

const BREAKPOINT = 1080;

export default createUseStyles(
  (theme) => ({
    headerWrapper: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
      paddingLeft: theme.spacing.xl * 2,
      paddingRight: theme.spacing.xl * 2,

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        paddingLeft: theme.spacing.xl,
        paddingRight: theme.spacing.xl,
      },
    },

    header: {
      paddingTop: 50,
      maxWidth: 822,
      margin: 'auto',
      paddingRight: 260,
      paddingBottom: 46 + theme.spacing.xl * 1.5,

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        maxWidth: '100%',
        paddingRight: 0,
        paddingBottom: 46 + theme.spacing.xl,
      },
    },

    title: {
      fontWeight: 800,
      fontSize: 44,
      marginBottom: theme.spacing.xs,
    },

    description: {
      maxWidth: 450,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
      marginBottom: theme.spacing.xl,
    },
  }),
  { theming }
);
