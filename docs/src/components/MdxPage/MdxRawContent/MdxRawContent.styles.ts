import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

const BREAKPOINT = 1080;
const TABLE_OF_CONTENTS_OFFSET = 260;

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
      width: `calc(100% - ${TABLE_OF_CONTENTS_OFFSET}px)`,
      maxWidth: 820,
      marginLeft: 'auto',
      marginRight: 'auto',

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        width: '100%',
        paddingRight: 0,
      },
    },

    tableOfContents: {
      flex: `0 0 ${TABLE_OF_CONTENTS_OFFSET}px`,

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        display: 'none',
      },
    },
  }),
  { theming }
);
