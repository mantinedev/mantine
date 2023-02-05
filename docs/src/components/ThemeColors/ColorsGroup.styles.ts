import { createStyles, MantineTheme, rem, em } from '@mantine/core';

const BREAKPOINT = 765;

export default createStyles((theme: MantineTheme) => ({
  wrapper: {
    '& + &': {
      marginTop: theme.spacing.xl,
    },
  },

  color: {
    display: 'flex',
    flexDirection: 'column',
    width: `calc(10% - ${theme.spacing.xs})`,
    margin: `calc(${theme.spacing.xs} / 2)`,
    minWidth: rem(50),

    [`@media (max-width: ${em(BREAKPOINT)})`]: {
      width: `calc(20% - ${theme.spacing.xs})`,
    },
  },

  title: {
    textTransform: 'capitalize',
    marginBottom: theme.spacing.xs,
  },

  group: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: `calc(-1 * ${theme.spacing.xs} / 2)`,
  },

  colorName: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));
