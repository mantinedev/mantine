import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  placeholder: {
    opacity: 1,
    userSelect: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  input: {
    cursor: 'pointer',
    lineHeight: 'unset',

    '&[data-read-only]': {
      cursor: 'default',
    },
  },
}));
