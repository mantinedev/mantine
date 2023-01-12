import { createStyles, rem } from '@mantine/core';

const BREAKPOINT = 765;

export default createStyles((theme) => ({
  title: {
    fontWeight: 500,
    marginBottom: rem(15),
  },

  codeSections: {
    display: 'flex',
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,

    [`@media (max-width: ${rem(BREAKPOINT)})`]: {
      flexDirection: 'column',
    },
  },

  codeSection: {
    flex: 1,

    '& + &': {
      marginLeft: theme.spacing.md,

      [`@media (max-width: ${rem(BREAKPOINT)})`]: {
        marginLeft: 0,
      },
    },
  },
}));
