import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  item: {
    display: 'flex',
    alignItems: 'center',
    minHeight: 20,
    overflowX: 'auto',

    '& + &': {
      marginTop: theme.spacing.xs,
    },
  },

  label: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    width: 100,
    height: 20,
    lineHeight: '20px',

    '@media (max-width: 500px)': {
      display: 'none',
    },
  },
}));
