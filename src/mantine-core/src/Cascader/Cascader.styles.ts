import { createStyles } from '@mantine/styles';

export const useStyles = createStyles(() => ({
  input: {
    '&:not(:disabled)': {
      cursor: 'pointer',
    },
  },
}));
