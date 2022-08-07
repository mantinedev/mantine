import { createStyles } from '@mantine/styles';

export default createStyles(() => ({
  input: {
    '&:not(:disabled)': {
      cursor: 'pointer',

      '&::selection': {
        backgroundColor: 'transparent',
      },
    },
  },
}));
