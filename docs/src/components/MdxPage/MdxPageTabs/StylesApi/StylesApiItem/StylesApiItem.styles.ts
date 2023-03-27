import { createStyles, rem, em } from '@mantine/core';

const BREAKPOINT = 765;

export default createStyles((theme) => ({
  title: {
    fontWeight: 600,
    marginBottom: rem(15),
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  codeSections: {
    display: 'flex',
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,

    [`@media (max-width: ${em(BREAKPOINT)})`]: {
      flexDirection: 'column',
    },
  },

  codeSection: {
    flex: 1,

    '& + &': {
      marginLeft: theme.spacing.md,

      [`@media (max-width: ${em(BREAKPOINT)})`]: {
        marginLeft: 0,
      },
    },
  },

  root: {
    '& + &': {
      marginTop: `calc(${theme.spacing.xl} * 2)`,
    },
  },
}));
