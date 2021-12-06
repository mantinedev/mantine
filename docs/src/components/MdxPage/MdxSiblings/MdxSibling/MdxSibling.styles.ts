import { createStyles } from '@mantine/core';

export default createStyles((theme, _params, getRef) => {
  const body = getRef('body');

  return {
    control: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      justifyContent: 'space-between',
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      padding: theme.spacing.md,
      borderRadius: theme.radius.md,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
      }`,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0],
      },
    },

    body: {
      ref: body,
    },

    next: {
      [`& .${body}`]: {
        marginRight: theme.spacing.md,
      },
    },
  };
});
