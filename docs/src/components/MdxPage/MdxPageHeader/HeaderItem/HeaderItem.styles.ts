import { createStyles, rem, em } from '@mantine/core';

export default createStyles((theme) => ({
  item: {
    display: 'flex',
    alignItems: 'center',
    minHeight: rem(20),
    overflowX: 'auto',

    '& + &': {
      marginTop: theme.spacing.xs,
    },
  },

  label: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    width: rem(100),
    height: rem(20),
    lineHeight: rem(20),

    [`@media (max-width: ${em(500)})`]: {
      display: 'none',
    },
  },
}));
