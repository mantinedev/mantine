import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

const BREAKPOINT = 765;

export default createUseStyles(
  (theme) => ({
    title: {
      fontWeight: 500,
      marginBottom: 15,
    },

    codeSections: {
      display: 'flex',
      marginTop: theme.spacing.xl * 1.5,

      [`@media (max-width: ${BREAKPOINT}px)`]: {
        flexDirection: 'column',
      },
    },

    codeSection: {
      flex: 1,

      '& + &': {
        marginLeft: theme.spacing.md,

        [`@media (max-width: ${BREAKPOINT}px)`]: {
          marginLeft: 0,
        },
      },
    },
  }),
  { theming }
);
