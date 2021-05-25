import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';
import { BREAKPOINT, TABLE_OF_CONTENTS_WIDTH, CONTENT_WIDTH } from '../settings';

export default createUseStyles(
  (theme) => ({
    wrapper: {
      display: 'flex',
      position: 'relative',
      justifyContent: 'space-between',
      paddingLeft: theme.spacing.xl * 2,
      paddingRight: theme.spacing.xl * 2,
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
  }),
  { theming }
);
