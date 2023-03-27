import { createStyles, rem, em } from '@mantine/core';
import {
  BREAKPOINT,
  TABLE_OF_CONTENTS_WIDTH,
  CONTENT_WIDTH,
  TAB_HEIGHT,
  TAB_HEIGHT_MOBILE,
} from '../settings';

export default createStyles((theme) => ({
  tabsWrapper: {
    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,
    paddingLeft: `calc(${theme.spacing.xl} * 2)`,

    [`@media (max-width: ${em(BREAKPOINT)})`]: {
      paddingLeft: theme.spacing.xl,
    },

    [`@media (min-width: ${em(1380)})`]: {
      paddingLeft: 0,
    },
  },

  tabsList: {
    maxWidth: rem(1082),
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottom: 0,

    [`@media (max-width: ${em(BREAKPOINT)})`]: {
      maxWidth: '100%',
      paddingRight: 0,
    },
  },

  tab: {
    fontSize: rem(16),
    fontWeight: 500,
    height: rem(TAB_HEIGHT),
    paddingLeft: theme.spacing.lg,
    paddingRight: theme.spacing.lg,
    marginBottom: rem(-1),
    borderColor: theme.colorScheme === 'dark' ? `${theme.colors.dark[8]} !important` : undefined,
    backgroundColor: 'transparent',

    [`@media (max-width: ${em(BREAKPOINT)})`]: {
      paddingLeft: theme.spacing.lg,
      paddingRight: theme.spacing.lg,
      fontSize: theme.fontSizes.sm,
      height: rem(TAB_HEIGHT_MOBILE),
    },

    '&[data-active]': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  tabContent: {
    paddingLeft: `calc(${theme.spacing.xl} * 2)`,
    paddingRight: `calc(${theme.spacing.xl} * 2)`,
    paddingTop: theme.spacing.xs,

    [`@media (max-width: ${em(BREAKPOINT)})`]: {
      paddingLeft: theme.spacing.xl,
      paddingRight: theme.spacing.xl,
    },
  },

  main: {
    width: `calc(100% - ${rem(TABLE_OF_CONTENTS_WIDTH)})`,
    maxWidth: rem(CONTENT_WIDTH),
    marginLeft: 'auto',
    marginRight: 'auto',

    [`@media (max-width: ${em(BREAKPOINT)})`]: {
      width: '100%',
      paddingRight: 0,
    },
  },

  tableOfContents: {
    flex: `0 0 ${rem(TABLE_OF_CONTENTS_WIDTH)}`,
    marginTop: theme.spacing.xl,

    [`@media (max-width: ${em(BREAKPOINT)})`]: {
      display: 'none',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));
