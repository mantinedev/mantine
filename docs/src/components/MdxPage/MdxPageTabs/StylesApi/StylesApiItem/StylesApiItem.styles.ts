import { createStyles } from '@mantine/core';

const BREAKPOINT = 765;

export default createStyles((theme) => ({
  title: {
    fontWeight: 600,
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
}));
