import { createStyles } from '@mantine/core';

const BREAKPOINT = '@media (max-width: 960px)';

export default createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  waves: {
    fill: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    width: '150%',
    height: 56,
    transform: 'scaleX(-1)',
    filter: 'drop-shadow(10px 5px 5px rgba(0, 0, 0, 0.05))',

    [BREAKPOINT]: {
      height: 18,
    },
  },

  wavesBottom: {
    height: 38,
    transform: 'rotate(180deg)',
    marginBottom: -10,
    filter: 'none',
    fill: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  inner: {
    paddingTop: 120,
    paddingBottom: 200,

    [BREAKPOINT]: {
      paddingTop: 60,
      paddingBottom: 80,
    },
  },

  title: {
    marginBottom: theme.spacing.xl * 2,
  },
}));
