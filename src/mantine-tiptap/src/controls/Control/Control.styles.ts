import { createStyles } from '@mantine/core';

export default createStyles((theme) => {
  const colors = theme.fn.variant({ variant: 'light' });
  return {
    control: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      minWidth: 26,
      height: 26,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
      }`,
      borderRadius: theme.fn.radius(),
      cursor: 'default',

      '&[data-interactive]': {
        cursor: 'pointer',
        ...theme.fn.hover({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        }),
      },

      '&[data-active]': {
        backgroundColor: colors.background,
        color: colors.color,

        '&:hover': {
          ...theme.fn.hover({ backgroundColor: colors.hover }),
        },
      },
    },
  };
});
