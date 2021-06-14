import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';
import { BREAKPOINT, CONTENT_WIDTH, TABLE_OF_CONTENTS_WIDTH, TAB_HEIGHT } from '../settings';

export default createUseStyles(
  (theme) => ({
    wrapper: {
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
      maxWidth: CONTENT_WIDTH + 2,
      margin: 'auto',
      paddingRight: TABLE_OF_CONTENTS_WIDTH,
      paddingBottom: theme.spacing.xl * 1.5,

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        maxWidth: '100%',
        paddingRight: 0,
        paddingBottom: TAB_HEIGHT + theme.spacing.xl,
      },
    },

    withTabs: {
      paddingBottom: TAB_HEIGHT + theme.spacing.xl * 1.5,
    },

    title: {
      fontSize: 44,
      marginBottom: theme.spacing.xs,
      fontFamily: `Dosis, ${theme.headings.fontFamily}`,
      fontWeight: 800,

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        fontSize: 32,
        lineHeight: 1.2,
      },
    },

    description: {
      maxWidth: 450,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
      marginBottom: theme.spacing.xl,

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        fontSize: theme.fontSizes.md,
      },
    },
  }),
  { theming }
);
