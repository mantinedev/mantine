import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  input: {
    '&:not(:disabled)': {
      cursor: 'pointer',
    },
  },
}));
