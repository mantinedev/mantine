import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

const BREAKPOINT = 1080;

export default createUseStyles(
  (theme) => ({
    headerWrapper: {
      backgroundColor: theme.colors.gray[0],
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
      color: theme.colors.gray[6],
    },

    item: {
      marginTop: theme.spacing.xl,
      display: 'flex',
      alignItems: 'center',
    },

    label: {
      color: theme.colors.gray[6],
      width: 100,
      lineHeight: 1,
      marginBottom: 2,
    },

    code: {
      marginBottom: 0,
    },

    copy: {
      marginLeft: theme.spacing.xl,
    },
  }),
  { theming }
);
