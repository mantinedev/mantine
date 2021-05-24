import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

const BREAKPOINT = 1080;

export default createUseStyles(
  (theme) => ({
    wrapper: {},

    tabs: {
      marginTop: -46,
    },

    importCode: {
      maxWidth: 496,
    },

    tabsList: {
      paddingRight: 378,
      maxWidth: 800,
      marginLeft: 'auto !important',
      marginRight: 'auto !important',
      borderBottom: `1px solid ${theme.colors.gray[2]}`,

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        maxWidth: '100%',
        paddingRight: 0,
      },
    },

    main: {
      width: 'calc(100% - 260px)',
      maxWidth: 820,
      margin: 'auto',

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        width: '100%',
        paddingRight: 0,
      },
    },

    rawContentWrapper: {
      display: 'flex',
      position: 'relative',
      justifyContent: 'space-between',
      paddingLeft: theme.spacing.xl * 2,
      paddingRight: theme.spacing.xl * 2,
    },

    rawContent: {
      width: `calc(100% - ${260}px)`,
      maxWidth: 820,
      margin: 'auto',

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        width: '100%',
        paddingRight: 0,
      },
    },

    tableOfContents: {
      flex: '0 0 260px',

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        display: 'none',
      },
    },

    tab: {
      fontSize: 16,
      fontWeight: 500,
      height: 46,
      paddingLeft: theme.spacing.lg,
      paddingRight: theme.spacing.lg,
      marginBottom: -1,
      '&:first-of-type': {
        marginLeft: theme.spacing.xl * 2,

        [`@media (max-width: ${BREAKPOINT}px)`]: {
          marginLeft: theme.spacing.xl,
        },
      },
    },

    tabContent: {
      marginTop: theme.spacing.xl,
      paddingLeft: theme.spacing.xl * 2,
      paddingRight: theme.spacing.xl * 2,

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        paddingLeft: theme.spacing.xl,
        paddingRight: theme.spacing.xl,
      },
    },

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
  }),
  { theming }
);
