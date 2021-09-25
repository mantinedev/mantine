import { createStyles, MantineTheme } from '@mantine/core';

const BREAKPOINT = 765;

export default createStyles((theme: MantineTheme) => ({
  wrapper: {
    '& + &': {
      marginTop: theme.spacing.xl * 2,
    },
  },

  color: {
    display: 'flex',
    flexDirection: 'column',
    width: `calc(10% - ${theme.spacing.xs}px)`,
    margin: theme.spacing.xs / 2,
    minWidth: 50,

    [`@media (max-width: ${BREAKPOINT}px)`]: {
      width: `calc(20% - ${theme.spacing.xs}px)`,
    },
  },

  title: {
    textTransform: 'capitalize',
    marginBottom: theme.spacing.xs,
  },

  group: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: -theme.spacing.xs / 2,
  },
}));
