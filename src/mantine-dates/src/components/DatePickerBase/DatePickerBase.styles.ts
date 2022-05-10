import { createStyles } from '@mantine/core';

export default createStyles((theme, _params, getRef) => ({
  wrapper: {
    ...theme.fn.fontStyles(),
    position: 'relative',
    cursor: 'pointer',
  },

  input: {
    cursor: 'pointer',
    whiteSpace: 'nowrap',

    [`&:not(.${getRef('freeInput')})::selection`]: {
      backgroundColor: 'transparent',
    },
  },

  freeInput: {
    ref: getRef('freeInput'),
    cursor: 'text',
  },
}));
