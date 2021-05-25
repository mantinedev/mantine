import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';
import { BREAKPOINT, TABLE_OF_CONTENTS_WIDTH, CONTENT_WIDTH, TAB_HEIGHT } from '../settings';

export default createUseStyles(
  (theme) => ({
    tabs: {
      marginTop: -TAB_HEIGHT,
    },

    tabsList: {
      paddingRight: 378, // I do not know how this value is calculated
      maxWidth: CONTENT_WIDTH - 20,
      marginLeft: 'auto !important',
      marginRight: 'auto !important',
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
      }`,

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        maxWidth: '100%',
        paddingRight: 0,
      },
    },

    tab: {
      fontSize: 16,
      fontWeight: 500,
      height: TAB_HEIGHT,
      paddingLeft: theme.spacing.lg,
      paddingRight: theme.spacing.lg,
      marginBottom: -1,
      borderColor: theme.colorScheme === 'dark' ? `${theme.colors.dark[8]} !important` : undefined,

      '&:first-of-type': {
        marginLeft: theme.spacing.xl * 2,

        [`@media (max-width: ${BREAKPOINT}px)`]: {
          marginLeft: theme.spacing.xl,
        },
      },
    },

    tabContent: {
      paddingLeft: theme.spacing.xl * 2,
      paddingRight: theme.spacing.xl * 2,

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        paddingLeft: theme.spacing.xl,
        paddingRight: theme.spacing.xl,
      },
    },

    main: {
      width: `calc(100% - ${TABLE_OF_CONTENTS_WIDTH}px)`,
      maxWidth: CONTENT_WIDTH,
      margin: 'auto',

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        width: '100%',
        paddingRight: 0,
      },
    },

    tableOfContents: {
      flex: `0 0 ${TABLE_OF_CONTENTS_WIDTH}px`,
      marginTop: theme.spacing.xl,

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        display: 'none',
      },
    },
  }),
  { theming }
);
