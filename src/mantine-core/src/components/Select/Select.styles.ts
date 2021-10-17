import { createStyles } from '@mantine/core';

export default createStyles(() => ({
  input: {
    '&:not(:disabled)': {
      cursor: 'pointer',
    },
  },
}));
