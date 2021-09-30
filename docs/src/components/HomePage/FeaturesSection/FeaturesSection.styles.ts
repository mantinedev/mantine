import { createStyles } from '@mantine/core';

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

    '@media (max-width: 755px)': {
      height: 34,
    },
  },

  wavesBottom: {
    height: 34,
    transform: 'rotate(180deg)',
    marginBottom: -5,
    filter: 'none',
  },

  inner: {
    paddingTop: 120,
    paddingBottom: 200,
  },

  title: {
    marginBottom: theme.spacing.xl * 2,
  },
}));
