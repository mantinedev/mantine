import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';
import {
  BREAKPOINT,
  TABLE_OF_CONTENTS_WIDTH,
  CONTENT_WIDTH,
  TAB_HEIGHT,
  TAB_HEIGHT_MOBILE,
} from '../settings';

export default createUseStyles(
  (theme) => ({
    tabs: {
      boxSizing: 'border-box',
    },

    tabsWrapper: {
      background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
      borderBottomColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2],
      paddingLeft: theme.spacing.xl * 2,

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        paddingLeft: theme.spacing.xl,
      },

      [`@media (min-width: ${1380}px)`]: {
        paddingLeft: 0,
      },
    },

    tabsList: {
      maxWidth: 1082,
      marginLeft: 'auto',
      marginRight: 'auto',
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

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        paddingLeft: theme.spacing.lg,
        paddingRight: theme.spacing.lg,
        fontSize: theme.fontSizes.sm,
        height: TAB_HEIGHT_MOBILE,
      },

      // '&:first-of-type': {
      //   marginLeft: theme.spacing.xl * 2,

      //   [`@media (max-width: ${BREAKPOINT}px)`]: {
      //     marginLeft: theme.spacing.xl,
      //   },
      // },
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
      marginLeft: 'auto',
      marginRight: 'auto',

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
