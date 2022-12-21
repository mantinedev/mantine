import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  placeholder: theme.fn.placeholderStyles(),

  input: {
    cursor: 'pointer',
    lineHeight: 'unset',

    '&[data-read-only]': {
      cursor: 'default',
    },
  },
}));
