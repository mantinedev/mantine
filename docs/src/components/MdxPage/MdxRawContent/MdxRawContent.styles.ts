import { createStyles } from '@mantine/core';
import { BREAKPOINT, TABLE_OF_CONTENTS_WIDTH, CONTENT_WIDTH } from '../settings';

export default createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    zIndex: 1,
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing.xl * 2,
    paddingRight: theme.spacing.xl * 2,

    [`@media (max-width: ${BREAKPOINT}px)`]: {
      paddingLeft: theme.spacing.xl,
      paddingRight: theme.spacing.xl,
    },
  },

  container: {
    marginTop: theme.spacing.xl,
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

    [`@media (max-width: ${BREAKPOINT}px)`]: {
      display: 'none',
    },
  },
}));
